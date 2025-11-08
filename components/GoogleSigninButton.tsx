"use client";
import { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { AuthData, GoogleUser } from "@/types";


export const signOut = () => {
  localStorage.removeItem("googleUser");
  localStorage.removeItem("authToken");
  window.location.reload(); // Optionally, use setUser(null) if you want to avoid full reload
};

export const getUser = (): AuthData | null => {
  const user = localStorage.getItem("googleUser");
  const token = localStorage.getItem("authToken");

  if (user && token) {
    try {
      return { user: JSON.parse(user), token };
    } catch (error) {
      console.error("Error parsing user data:", error);
    }
  }

  return null;
};

interface GoogleSignInButtonProps {
  onSignIn?: (user: GoogleUser) => void;
  afterSignin?: () => void;
  customButton?: React.ReactNode;
}

const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = ({
  onSignIn,
  afterSignin,
  customButton,
}) => {
  const { user, setUser } = useAuth();
  const [googleClient, setGoogleClient] = useState<google.accounts.oauth2.CodeClient | null>(null);

  const handleCodeResponse = async (response: google.accounts.oauth2.CodeResponse) => {
    try {
      const res = await fetch("https://codeup.in/dev/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: response.code }),
      });

      if (!res.ok) throw new Error("Backend authentication failed");

      const data: AuthData = await res.json();
      localStorage.setItem("googleUser", JSON.stringify(data.user));
      localStorage.setItem("authToken", data.token);
      setUser(data.user);

      onSignIn?.(data.user);
      afterSignin?.();
    } catch (error) {
      console.error("Error authenticating with backend:", error);
    }
  };

  useEffect(() => {
    if (user) return;

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      const client = google.accounts.oauth2.initCodeClient({
        client_id: "66449176523-brfmp9k38luah1vp9r6fns50831l2ke9.apps.googleusercontent.com",
        scope: "email profile openid",
        ux_mode: "popup",
        callback: handleCodeResponse,
      });
      setGoogleClient(client);
    };

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [user]);

  if (user) return null;

  const handleSignInClick = () => {
    if (googleClient) {
      googleClient.requestCode();
    } else {
      console.error("Google client not initialized yet.");
    }
  };

  return customButton ? (
    <span style={{ all: "unset" }} onClick={handleSignInClick}>
      {customButton}
    </span>
  ) : (
    <button
      className="bg-pink-400 text-white hover:bg-pink-700 px-4 py-2 rounded-md text-center font-medium w-full"
      type="button"
      onClick={handleSignInClick}
    >
      Sign in
    </button>
  );
};

export default GoogleSignInButton;
