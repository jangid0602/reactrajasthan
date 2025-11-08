"use client";
import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import GoogleSignInButton, { getUser } from "./GoogleSigninButton";
import { codeupAlert } from "./Alert";
import { useAuth } from "./AuthContext";

type CommunityFormProps = {
    showModal: Function;
    meetupName: string;
};

type CommunityFormData = {
    name: string;
    email: string;
    community: string;
    phone: string;
    position: string;
    logo: string;
    website?: string;
    social?: string;
    yourHelp?: string;
    heardFrom?: string;
};

const CommunityForm: React.FC<CommunityFormProps> = ({ showModal, meetupName }) => {
    const { user, setUser } = useAuth();
    const [requireUser, setRequireUser] = useState<boolean>(true);

    const [formData, setFormData] = useState<CommunityFormData>({
        name: "",
        email: "",
        community: "",
        phone: "",
        position: "",
        logo: "",
        website: "",
        social: "",
        yourHelp: "",
        heardFrom: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prev) => ({ ...prev, logo: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };

    const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validatePhone = (phone: string) => /^[0-9]{10}$/.test(phone);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const { name, community, email, phone, position, logo } = formData;

        if (!validateEmail(email)) {
            codeupAlert("Invalid email format");
            return;
        }

        if (!validatePhone(phone)) {
            codeupAlert("Phone number must be 10 digits");
            return;
        }

        if (!name || !community || !email || !phone || !position) {
            codeupAlert("Please fill all required fields");
            return;
        }

        try {
            codeupAlert();
            console.log(formData);

            const response = await axios.post(
                "https://codeup.in/dev/submit/community_partner",
                formData, // send as JSON
                { headers: { "Content-Type": "application/json", "meetup-name": meetupName } }
            );

            localStorage.setItem("community_registration", "true");
            window.dispatchEvent(new Event("registrationChange"));
            showModal(false);
            codeupAlert(response.data.message);
        } catch (error: any) {
            codeupAlert(error.response?.data?.error || "Failed to register. Try again later.");
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
                            <div>
                                <div className="font-semibold">{user.name}</div>
                                <div className="text-sm text-gray-600">{user.email}</div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center">
                            <p className="text-lg mb-2 font-medium">Sign in is required</p>
                            <GoogleSignInButton onSignIn={setUser} customButton={GoogleButton} />
                        </div>
                    )}
                    {/* <button type="button" onClick={() => setRequireUser(false)} className="mt-5 mx-auto block text-pink-400 font-medium hover:underline">
                        Unable to Signin?
                    </button> */}
                </div>
            )}

            {[
                { name: "name", label: "Your Name" },
                { name: "email", label: "Email" },
                { name: "community", label: "Community Name" },
                { name: "phone", label: "Phone Number (WhatsApp)" },
                { name: "position", label: "Your Position in the Community" },
            ].map(({ name, label }) => (
                <div key={name} className="mb-4">
                    <label className="block font-medium mb-1">
                        {label}
                        <span className="text-red-500">*</span>
                    </label>
                    <input type="text" name={name} value={formData[name as keyof CommunityFormData] as string} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" required />
                </div>
            ))}

            {/* <div className="mb-4">
                <label className="block font-medium mb-1">
                    Community Logo <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-4">
                    <input
                        type="file"
                        name="logo"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="block w-full text-sm text-gray-700 
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-pink-50 file:text-pink-700
                        hover:file:bg-pink-100"
                        required
                    />
                </div>
                {formData.logo && <img src={formData.logo} alt="Community Logo Preview" className="mt-2 max-h-32 rounded" />}
            </div> */}

            <div className="mb-4">
                <label className="block font-medium mb-1">Your Community Website</label>
                <input type="url" name="website" value={formData.website || ""} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
            </div>

            <div className="mb-4">
                <label className="block font-medium mb-1">Social Media Links</label>
                <input type="text" name="social" value={formData.social || ""} onChange={handleChange} placeholder="Twitter, Instagram, LinkedIn, etc." className="w-full border border-gray-300 rounded px-3 py-2" />
            </div>

            <div className="mb-4">
                <label className="block font-medium mb-1">How will your community help React Rajasthan?</label>
                <textarea name="yourHelp" value={formData.yourHelp || ""} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" rows={3} />
            </div>

            <div className="mb-4">
                <label className="block font-medium mb-1">Where did you hear about React Rajasthan?</label>
                <input type="text" name="heardFrom" value={formData.heardFrom || ""} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
            </div>

            <button type="submit" className={`${user || !requireUser ? "bg-pink-400 hover:bg-pink-700" : "bg-gray-400"} text-white px-5 py-2 rounded-md font-medium block mx-auto`} disabled={!user && requireUser}>
                Submit
            </button>
        </form>
    );
};

export default CommunityForm;
