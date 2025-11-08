"use client";
import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import GoogleSignInButton, { getUser } from "./GoogleSigninButton";
import { codeupAlert } from "./Alert";
import { useAuth } from "./AuthContext";
import { VenueDetails } from "@/types";

type FormProps = {
    showModal: Function;
    defaultRole?: "Attendee" | "Volunteer" | "Speaker";
    venueDetails: VenueDetails | undefined;
    meetupName: string;
};

type Role = "Attendee" | "Volunteer" | "Speaker";
type TshirtSize = "S" | "M" | "L" | "XL" | "XXL";

type FormData = {
    name: string;
    email: string;
    mobile: string;
    linkedin: string;
    status: "Student" | "Professional";
    jobTitle?: string;
    company?: string;
    experienceYears?: string;
    gender: "M" | "F" | "O";
    role: Role;
    talktitle?: string;
    talkdescription?: string;
    tshirtSize: TshirtSize;
};

const Form: React.FC<FormProps> = ({ showModal, defaultRole = "Attendee", venueDetails, meetupName }) => {
    const { user, setUser } = useAuth();
    const [requireUser, setRequireUser] = useState<boolean>(true);
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        mobile: "",
        linkedin: "",
        status: "Professional",
        gender: "M",
        role: defaultRole,
        talktitle: "",
        talkdescription: "",
        tshirtSize: "M",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validateContact = (mobile: string) => /^[0-9]{10}$/.test(mobile);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!validateEmail(formData.email)) {
            codeupAlert("Invalid email format");
            return;
        }

        if (!validateContact(formData.mobile)) {
            codeupAlert("Mobile number must be 10 digits");
            return;
        }

        const registrationKey = venueDetails?.date ? `registration_${new Date(venueDetails?.date).toLocaleDateString()}` : undefined;
        if (!registrationKey) return;

        try {
            codeupAlert();
            const payload = {
                ...formData,
                tshirtSize: `${formData.gender}-${formData.tshirtSize}`, // Combine gender and size
            };
            const response = await axios.post("https://codeup.in/dev/participant/apply", payload, { headers: { "meetup-name": meetupName } });
            localStorage.setItem(registrationKey, "true");
            window.dispatchEvent(new Event("registrationChange"));

            showModal(false);
            codeupAlert(response.data.message);
        } catch (error: any) {
            const message = error.response?.data?.error;
            console.error(message);
            showModal(false);
            if (message.startsWith("ER_DUP_ENTRY")) {
                codeupAlert(`You are already registered for the event.`);
                return;
            }
            codeupAlert("Failed to register. Try again later.");
        }
    };

    useEffect(() => {
        const handleStorageChange = () => {
            const updatedUser = getUser()?.user || null;
            setUser(updatedUser);
        };

        window.addEventListener("userUpdate", handleStorageChange);
        return () => window.removeEventListener("userUpdate", handleStorageChange);
    }, []);

    useEffect(() => {
        if (user) {
            setFormData((prev) => ({
                ...prev,
                name: user.name,
                email: user.email,
            }));
        }
    }, [user]);

    const GoogleButton = (
        <button type="button" className="flex items-center justify-center px-10 py-2 border border-gray-400 rounded text-black font-bold text-base leading-6 bg-white hover:bg-gray-200 transition-colors duration-150 mx-auto">
            <svg viewBox="-3 0 262 262" preserveAspectRatio="xMidYMid" fill="#000000" width={20} height={20} className="mr-2">
                <g id="SVGRepo_iconCarrier">
                    <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path>
                    <path
                        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                        fill="#34A853"
                    ></path>
                    <path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path>
                    <path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path>
                </g>
            </svg>
            Google
        </button>
    );

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 bg-white rounded">
            {requireUser && (
                <div className="mb-4 p-4 border rounded">
                    {user ? (
                        <div className="flex items-center gap-3">
                            <img src={user.picture} alt={user.name} className="w-16 h-16 rounded-full" />
                            <div className="truncate">
                                <div className="truncate font-semibold">{user.name}</div>
                                <div className="truncate text-sm text-gray-600">{user.email}</div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center">
                            <p className="text-lg mb-2 font-medium">Sign in is required</p>
                            <GoogleSignInButton onSignIn={setUser} customButton={GoogleButton} />
                        </div>
                    )}
                    {/* <button onClick={() => setRequireUser(false)} className="mt-5 mx-auto block text-pink-400 font-medium hover:underline">
                        Unable to Signin?
                    </button> */}
                </div>
            )}

            {!requireUser &&
                [
                    { name: "name", label: "Name" },
                    { name: "email", label: "Email" },
                ].map(({ name, label }) => (
                    <div key={name} className="mb-4">
                        <label className="block font-medium mb-1">
                            {label}
                            <span className="text-red-500">*</span>
                        </label>
                        <input name={name} value={formData[name as keyof FormData] as string} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" required />
                    </div>
                ))}

            {[
                { name: "mobile", label: "Mobile No." },
                { name: "linkedin", label: "LinkedIn" },
            ].map(({ name, label }) => (
                <div key={name} className="mb-4">
                    <label className="block font-medium mb-1">
                        {label}
                        <span className="text-red-500">*</span>
                    </label>
                    <input name={name} value={formData[name as keyof FormData] as string} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" required />
                </div>
            ))}

            <div className="mb-4">
                <label className="block font-medium mb-1">
                    Are you a student or professional?<span className="text-red-500">*</span>
                </label>
                <select name="status" value={formData.status} onChange={handleChange} className="w-full border px-3 py-2 rounded">
                    <option>Student</option>
                    <option>Professional</option>
                </select>
            </div>

            {formData.status === "Professional" && (
                <>
                    {[
                        { name: "jobTitle", label: "Job Title" },
                        { name: "company", label: "Company" },
                        { name: "experienceYears", label: "Years of Experience" },
                    ].map(({ name, label }) => (
                        <div key={name} className="mb-4">
                            <label className="block font-medium mb-1">
                                {label}
                                <span className="text-red-500">*</span>
                            </label>
                            <input name={name} value={formData[name as keyof FormData] as string} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" required />
                        </div>
                    ))}
                </>
            )}

            <div className="mb-4">
                <label className="block font-medium mb-1">
                    Role<span className="text-red-500">*</span>
                </label>
                <select name="role" value={formData.role} onChange={handleChange} className="w-full border px-3 py-2 rounded">
                    {["Attendee", "Volunteer", "Speaker"].map((role) => (
                        <option key={role}>{role}</option>
                    ))}
                </select>
            </div>

            {formData.role === "Speaker" && (
                <>
                    {[
                        { name: "talktitle", label: "Title for the talk", required: true },
                        { name: "talkdescription", label: "Description for the talk", required: true },
                        { name: "prevtalks", label: "Links of previous talks", required: false },
                    ].map(({ name, label, required }) => (
                        <div key={name} className="mb-4">
                            <label className="block font-medium mb-1">
                                {label}
                                {required && <span className="text-red-500">*</span>}
                            </label>
                            {name !== "talktitle" ? (
                                <textarea name={name} value={formData[name as keyof FormData] as string} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" rows={3} required={required} />
                            ) : (
                                <input name={name} value={formData[name as keyof FormData] as string} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" required={required} />
                            )}
                        </div>
                    ))}
                </>
            )}

            <div className="mb-4">
                <label className="block font-medium mb-1">
                    Gender<span className="text-red-500">*</span>
                </label>
                <select name="gender" value={formData.gender} onChange={handleChange} className="w-full border px-3 py-2 rounded" required>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Other</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block font-medium mb-1">
                    T-shirt Size<span className="text-red-500">*</span>
                    <span className="text-xs"> (Swags for early birds)</span>
                </label>
                <select name="tshirtSize" value={formData.tshirtSize} onChange={handleChange} className="w-full border px-3 py-2 rounded">
                    {["S", "M", "L", "XL", "XXL"].map((size) => (
                        <option key={size}>{size}</option>
                    ))}
                </select>
            </div>

            <button type="submit" className={`${user || !requireUser ? "bg-pink-400 hover:bg-pink-700" : "bg-gray-400"} text-white px-5 py-2 rounded-md font-medium block mx-auto`} disabled={!user && requireUser}>
                Apply
            </button>
        </form>
    );
};

export default Form;
