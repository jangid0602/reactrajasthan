"use client";
import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/siteData";
const reactLogo = "/assets/react.png";
const mus = "/assets/fashion.png";
import GoogleSignInButton, { getUser, signOut } from "./GoogleSigninButton";
import { useAuth } from "./AuthContext";
import Link from "next/link";
import { scrollToElement } from "@/utils/scrollToElement";

// const navLinks = [
//     // { label: 'Home', href: '#hero' },
//     { label: "Speakers", href: "#speakers" },
//     { label: "Sponsors", href: "#sponsors" },
//     { label: "Venue", href: "#venue" },
//     { label: "Organizers", href: "#organizers" },
//     { label: "Volunteers", href: "#volunteers" },
//     { label: "Feedback", link: "/feedback" },
//     // { label: "Images", href: "#images" },
// ];

const Navbar: React.FC<any> = ({ eventName, showFeedback }) => {
    const location = typeof window !== "undefined" ? window.location : null;
    const [navLinks, setNavLinks]: any = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    // const [scrolled, setScrolled] = useState(false);
    const [scrollHeight, setScrollHeight] = useState(0);

    const { user, setUser } = useAuth();
    // const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        setNavLinks(
            location && location.pathname === "/"
                ? [
                      { label: "Speakers", href: "#speakers" },
                      { label: "Sponsors", href: "#sponsors" },
                      { label: "Venue", href: "#venue" },
                      { label: "Organizers", href: "#organizers" },
                      { label: "Volunteers", href: "#volunteers" },
                      ...(showFeedback && eventName ? [{ label: "Feedback", link: `/${eventName.replaceAll(" ", "_").replaceAll("#", "").toLowerCase()}/feedback` }] : []),
                  ]
                : []
        );
    }, [showFeedback, eventName]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const auth = getUser();
        if (auth?.user) setUser(auth.user);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    // useEffect(() => {
    //   const handleScroll = () => {
    //     if (window.scrollY > 50) {
    //       setScrolled(true);
    //     } else {
    //       setScrolled(false);
    //     }
    //   };

    //   window.addEventListener('scroll', handleScroll);
    //   return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrollHeight(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <header className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${true ? "bg-white shadow-md" : "bg-transparent"}`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <div className="flex items-center">
                        <a href="#" className="text-xl md:text-2xl font-bold text-pink-400">
                            <div className="flex" style={{ gap: 10 }}>
                                <div className="logo" style={{ transform: "translateY(-20%) scale(0.8)" }}>
                                    <img src={reactLogo} alt="React" style={{ height: 40, rotate: `${scrollHeight / 8}deg` }} className="slow-spin" />
                                    <img src={mus} alt="React" style={{ position: "absolute", height: 40, transform: "translateY(-20%) scale(1.4)" }} />
                                </div>
                                {siteConfig.name}
                            </div>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className={`${navLinks.length === 0 ? "hidden" : ""} lg:flex items-center space-x-8 hidden`}>
                        {navLinks.map((link: any) => {
                            const className = `text-sm font-medium transition-colors hover:text-pink-400 ${true ? "text-gray-900" : "text-white"}`;

                            if (link.href) {
                                const sectionId = link.href.replace("#", "");

                                // const handleScroll = (e: React.MouseEvent) => {
                                //     e.preventDefault();
                                //     const el = document.getElementById(sectionId);
                                //     if (el) el.scrollIntoView({ behavior: "smooth" });
                                // };

                                return (
                                    <button
                                        key={sectionId}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToElement(sectionId);
                                        }}
                                        className={className}
                                    >
                                        {link.label}
                                    </button>
                                );
                            } else if (link.link) {
                                return (
                                    <Link key={link.link} to={link.link} className={className}>
                                        {link.label}
                                    </Link>
                                );
                            }
                            return null;
                        })}

                        {user ? (
                            <div ref={dropdownRef} className="relative">
                                <img src={user.picture} alt="Profile" className="w-10 h-10 rounded-full cursor-pointer" onClick={() => setShowDropdown((prev) => !prev)} />
                                {showDropdown && (
                                    <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-50">
                                        <button
                                            onClick={() => {
                                                signOut();
                                                setShowDropdown(false);
                                            }}
                                            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                                        >
                                            Sign out
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <GoogleSignInButton afterSignin={() => setUser(getUser()?.user || null)} />
                        )}
                    </nav>

                    {/* Mobile Navigation Toggle */}
                    <button className={`${navLinks.length > 0 ? "lg:hidden" : "hidden"} text-gray-900 focus:outline-none`} onClick={toggleMenu} aria-label="Toggle menu">
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="md:hidden bg-white">
                    <div className="container mx-auto px-4 py-4">
                        <nav className="flex flex-col space-y-4">
                            {navLinks.map((link: any, index: number) => (
                                <button
                                    key={index}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        // closeMenu();
                                        if (link.href) {
                                            closeMenu();
                                            scrollToElement(link.href.replace("#", ""));
                                        }
                                    }}
                                    className="text-left text-gray-900 hover:text-pink-400 font-medium"
                                >
                                    {link.label}
                                </button>
                            ))}
                            {user ? (
                                <div ref={dropdownRef} className="relative">
                                    <img src={user.picture} alt="Profile" className="w-10 h-10 rounded-full cursor-pointer" onClick={() => setShowDropdown((prev) => !prev)} />
                                    {showDropdown && (
                                        <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-50">
                                            {/* <div className="p-2 text-sm text-gray-700 border-b">{user.name}</div> */}
                                            <button
                                                onClick={() => {
                                                    signOut();
                                                    setShowDropdown(false);
                                                }}
                                                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                                            >
                                                Sign out
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <GoogleSignInButton />
                            )}
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
