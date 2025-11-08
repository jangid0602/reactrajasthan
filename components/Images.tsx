"use client";
import React, { useState, useEffect, useRef } from "react";
import Section from "./Section";
import * as faceapi from "face-api.js";

const exampleImages = ["/images/example1.jpg", "/images/example2.jpg", "/images/example3.jpg"];

const Images: React.FC = () => {
    const [images, setImages] = useState<string[]>(exampleImages);
    const [modalOpen, setModalOpen] = useState(false);

    // Face API states
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [stage, setStage] = useState<"init" | "camera" | "captured" | "searching" | "results">("init");
    const [status, setStatus] = useState({ title: "", message: "", type: "ready" });
    const [modelsLoaded, setModelsLoaded] = useState(false);
    const [serverImages, setServerImages] = useState<string[]>([]);
    const [matches, setMatches] = useState<any[]>([]);

    // Load models and server images on modal open
    useEffect(() => {
        if (!modalOpen) return;
        const loadAll = async () => {
            setStatus({ type: "loading", title: "Loading models...", message: "Please wait" });
            await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
            await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
            await faceapi.nets.faceRecognitionNet.loadFromUri("/models");
            setModelsLoaded(true);
            setStatus({ type: "ready", title: "Models loaded", message: "Click Start Camera" });

            try {
                const res = await fetch("http://localhost:5000/list-images");
                const list: string[] = await res.json();
                setServerImages(list.map((f) => `http://localhost:5000/uploads/${f}`));
            } catch {
                setStatus({ type: "error", title: "Failed to load images", message: "Check server at localhost:5000" });
            }
        };
        loadAll();
        // reset stage when opening
        setStage("init");
    }, [modalOpen]);

    const handleAddImages = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const urls = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
            setImages((prev) => [...prev, ...urls]);
        }
    };

    const startCamera = async () => {
        if (!modelsLoaded) return;
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) videoRef.current.srcObject = stream;
            setStage("camera");
            setStatus({ type: "ready", title: "Camera Active", message: "Capture your photo" });
        } catch {
            setStatus({ type: "error", title: "Camera denied", message: "Allow camera access in browser settings" });
        }
    };

    const capturePhoto = () => {
        if (!videoRef.current || !canvasRef.current) return;
        const video = videoRef.current;
        const canvas = canvasRef.current;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext("2d");
        if (ctx) ctx.drawImage(video, 0, 0);
        // stop camera
        const tracks = (video.srcObject as MediaStream).getTracks();
        tracks.forEach((t) => t.stop());
        setStage("captured");
        setStatus({ type: "ready", title: "Photo captured", message: "Search or Retake" });
    };

    const retake = () => {
        setStage("init");
        setStatus({ type: "ready", title: "Ready", message: "Click Start Camera" });
    };

    const searchFaces = async () => {
        if (stage !== "captured" || !canvasRef.current) return;
        setStage("searching");
        setStatus({ type: "loading", title: "Searching...", message: "Comparing faces" });

        const detection = await faceapi.detectSingleFace(canvasRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptor();
        if (!detection) {
            setStatus({ type: "error", title: "No face detected", message: "Please retake" });
            setStage("captured");
            return;
        }

        const labeled = new faceapi.LabeledFaceDescriptors("input", [detection.descriptor]);
        const matcher = new faceapi.FaceMatcher(labeled, 0.6);
        const results: any[] = [];

        for (const url of serverImages) {
            const img = await faceapi.fetchImage(url);
            const desc = await faceapi.detectSingleFace(img, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptor();
            if (desc) {
                const best = matcher.findBestMatch(desc.descriptor);
                if (best.distance <= 0.6) results.push({ url, distance: best.distance });
            }
        }

        setMatches(results);
        setStage("results");
        setStatus({ type: "ready", title: `Found ${results.length}`, message: "Scroll down for results" });
    };

    return (
        <>
            <Section id="images" title="Event Images" subtitle="Add and view event images">
                <div className="grid grid-cols-3 gap-4">
                    {images.map((src, idx) => (
                        <img key={idx} src={src} alt={`Img ${idx}`} className="rounded-lg object-cover h-32 w-full shadow" />
                    ))}
                </div>
                <div className="mt-6 flex space-x-4">
                    <label className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded cursor-pointer">
                        Add to Images
                        <input type="file" multiple accept="image/*" className="hidden" onChange={handleAddImages} />
                    </label>
                    <button onClick={() => setModalOpen(true)} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                        Find Your Images
                    </button>
                </div>
            </Section>

            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl overflow-auto">
                        {/* <!-- Header --> */}
                        <div class="text-center mb-12">
                            <h1 class="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">Face Finder</h1>
                            <p class="text-xl text-gray-600">Take a photo and find matching faces in the database</p>
                        </div>

                        {/* <!-- Status Banner --> */}
                        <div id="statusBanner" class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r-lg">
                            <div class="flex items-center">
                                <div class="loading-spinner mr-3"></div>
                                <div>
                                    <p class="text-blue-700 font-medium">Initializing face detection models...</p>
                                    <p class="text-blue-600 text-sm">This may take a moment on first load</p>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Main Content --> */}
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* <!-- Camera Section --> */}
                            <div class="bg-white rounded-3xl shadow-xl p-8">
                                <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Capture Your Photo</h2>

                                <div class="space-y-6">
                                    {/* <!-- Camera Controls --> */}
                                    <div class="text-center">
                                        <button id="startCamera" class="camera-button text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-3">
                                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                                                ></path>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                            Start Camera
                                        </button>
                                    </div>

                                    {/* <!-- Video Preview --> */}
                                    <div id="cameraContainer" class="hidden">
                                        <div class="video-container">
                                            <video id="video" autoplay muted playsinline class="w-full h-auto"></video>
                                        </div>
                                        <div class="text-center mt-4">
                                            <button id="capturePhoto" class="capture-button text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-3">
                                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                                                </svg>
                                                Capture Photo
                                            </button>
                                        </div>
                                    </div>

                                    {/* <!-- Captured Image --> */}
                                    <div id="capturedContainer" class="hidden">
                                        <div class="video-container">
                                            <canvas id="capturedImage" class="w-full h-auto"></canvas>
                                        </div>
                                        <div class="text-center mt-4 space-x-4">
                                            <button id="retakePhoto" class="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-full font-semibold">
                                                Retake Photo
                                            </button>
                                            <button id="searchFaces" class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold">
                                                Search Database
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Results Section --> */}
                            <div class="bg-white rounded-3xl shadow-xl p-8">
                                <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Search Results</h2>

                                <div id="searchStatus" class="text-center text-gray-500 mb-6">
                                    <svg class="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                    <p>Take a photo to start searching</p>
                                </div>

                                <div id="searchProgress" class="hidden mb-6">
                                    <div class="bg-gray-200 rounded-full h-2 mb-2">
                                        <div id="progressBar" class="progress-bar w-0 h-2 rounded-full"></div>
                                    </div>
                                    <p class="text-center text-sm text-gray-600">
                                        <span id="progressText">Initializing search...</span>
                                    </p>
                                </div>

                                <div id="searchResults" class="hidden">
                                    <div class="flex items-center justify-between mb-6">
                                        <h3 class="text-lg font-semibold text-gray-700">Found Matches</h3>
                                        <div class="flex items-center gap-4">
                                            <span id="matchCount" class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                                0
                                            </span>
                                            <div class="text-xs text-gray-500">
                                                <div class="flex items-center gap-2">
                                                    <div class="w-3 h-3 rounded-full high-confidence"></div>
                                                    <span>High (85%+)</span>
                                                </div>
                                                <div class="flex items-center gap-2">
                                                    <div class="w-3 h-3 rounded-full medium-confidence"></div>
                                                    <span>Medium (70-84%)</span>
                                                </div>
                                                <div class="flex items-center gap-2">
                                                    <div class="w-3 h-3 rounded-full low-confidence"></div>
                                                    <span>Low (55-69%)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="matchesGrid" class="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-96 overflow-y-auto">
                                        {/* <!-- Matches will be populated here --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Images;
