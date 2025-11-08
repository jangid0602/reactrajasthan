import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.reactrajasthan.com"),
  title: "React Rajasthan",
  description: "Join the biggest React community event in Rajasthan.",
  openGraph: { title: "React Rajasthan", description: "Join the biggest React community event in Rajasthan.", url: "https://www.reactrajasthan.com", siteName: "React Rajasthan", locale: "en_IN", type: "website" },
  twitter: { card: "summary_large_image", site: "@react_rajasthan" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
