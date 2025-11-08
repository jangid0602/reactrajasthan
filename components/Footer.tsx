"use client";
import React, { useEffect } from "react";
import { siteConfig } from "@/data/siteData";
const reactLogo = "/assets/react.png";
const mus = "/assets/fashion.png";
import ModalFormWrapper from "./ModalFormWrapper";
import { VenueDetails } from "@/types";
import { scrollToElement } from "@/utils/scrollToElement";

interface FooterProps {
  venueDetails: VenueDetails | undefined;
}

const Footer: React.FC<FooterProps> = ({ venueDetails }) => {
  const currentYear = new Date().getFullYear();
  const registrationKey = `registration_${venueDetails?.date ?? "unknown"}`;

  const [registered, setRegistered] = React.useState<boolean>(false);

  useEffect(() => {
    const updateRegistered = () => {
      try {
        // Guard for SSR and privacy mode
        if (typeof window !== "undefined") {
          setRegistered(localStorage.getItem(registrationKey) === "true");
        }
      } catch {
        // ignore
      }
    };
    window.addEventListener("storage", updateRegistered);
    window.addEventListener("registrationChange", updateRegistered);

    updateRegistered(); // Initial sync

    return () => {
      window.removeEventListener("storage", updateRegistered);
      window.removeEventListener("registrationChange", updateRegistered);
    };
  });

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <a href="#" className="text-xl md:text-2xl font-bold text-pink-400">
              <div className="flex" style={{ gap: 10 }}>
                <div
                  className="logo"
                  style={{ transform: "translateY(-20%) scale(0.8)" }}
                >
                  <img src={reactLogo} alt="React" style={{ height: 40 }} />
                  <img
                    src={mus}
                    alt="React"
                    style={{
                      position: "absolute",
                      height: 40,
                      transform: "translateY(-20%) scale(1.4)",
                    }}
                  />
                </div>
                {siteConfig.name}
              </div>
            </a>
            <br />
            {/* <h3 className="text-xl font-bold mb-4">{siteConfig.name}</h3> */}
            <p className="text-gray-400 mb-4 max-w-xs">
              The premier React community in Rajasthan, bringing together
              developers to learn, share knowledge and build connections.
            </p>
            <div className="flex gap-4 flex-wrap">
              {Object.entries(siteConfig.socialLinks).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={platform}
                >
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToElement("hero")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToElement("speakers")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Speakers
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToElement("sponsors")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sponsors
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToElement("venue")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Venue
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToElement("organizers")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Organizers
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToElement("volunteers")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Volunteers
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400 mb-4">
              Have questions about the event? Reach out to us!
            </p>
            <a
              href="mailto:info@reactrajasthan.com"
              className="text-pink-400 hover:text-pink-300 transition-colors"
            >
              info@reactrajasthan.com | +91 9782312993
            </a>
            {/* <div className="mt-6">{!registered && <ModalFormWrapper venueDetails={venueDetails} />}</div> */}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
            <span className="block mt-1">
              Made with ❤️ by the React community in Rajasthan.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
