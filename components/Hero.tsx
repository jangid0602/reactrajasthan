"use client";
import React, { useEffect, useState } from "react";
import { siteConfig } from "@/data/siteData";
const bg = "/assets/bg.png";
import ModalFormWrapper from "./ModalFormWrapper";
import { EventType, VenueDetails } from "@/types";
import EventTabs from "./EventTabs";
import axios from "axios";
import { getUser } from "./GoogleSigninButton";
import { codeupAlert } from "./Alert";
import { scrollToElement } from "@/utils/scrollToElement";

interface HeroProps {
    venueDetails: VenueDetails | undefined;
    events: EventType[];
    activeEventId: string | undefined;
    onSelect: (event: EventType) => void;
    background?: string;
}

const Hero: React.FC<HeroProps> = ({ venueDetails, events, activeEventId, onSelect, background = bg }) => {
    const [currentEvent, setCurrentEvent] = useState(events.find((e) => e.id === activeEventId));
    // const registrationKey = venueDetails?.date ? `registration_${venueDetails?.date}` : undefined;
    const [registrationKey, setRegistrationKey]: any = useState();
    const [registered, setRegistered]: any = useState(false);

    useEffect(() => {
        setCurrentEvent(events.find((e) => e.id === activeEventId));
    }, [activeEventId]);

    useEffect(() => {
        if (currentEvent?.date) setRegistrationKey(`registration_${currentEvent.date.toLocaleDateString()}`);
    }, [currentEvent]);

    useEffect(() => {
        setRegistered(registrationKey ? localStorage.getItem(registrationKey) === "true" : "false");
    }, [registrationKey]);

    useEffect(() => {
        const user = getUser()?.user;

        if (!user || !registrationKey) {
            setRegistered(false);
            return;
        }
        setRegistered(registrationKey ? localStorage.getItem(registrationKey) === "true" : "false");
        const isRegistered = async () => {
            try {
                const res = await axios.get(`https://codeup.in/dev/participant/check-email/${user.id}`, {
                    headers: {
                        "meetup-name": events.find((e) => e.id === activeEventId)?.id,
                    },
                });
                const data = res.data;
                if (data.exists === true) {
                    setRegistered(true);
                } else {
                    setRegistered(false);
                }
            } catch (e) {
                console.log(e);
            }
        };

        isRegistered();
    }, [registrationKey, activeEventId]);

    useEffect(() => {
        const updateRegistered = () => {
            if (registrationKey) {
                setRegistered(localStorage.getItem(registrationKey) === "true");
            }
        };

        window.addEventListener("storage", updateRegistered);
        window.addEventListener("registrationChange", updateRegistered);

        updateRegistered(); // Initial check

        return () => {
            window.removeEventListener("storage", updateRegistered);
            window.removeEventListener("registrationChange", updateRegistered);
        };
    }, [registrationKey]);

    useEffect(() => {
        if (registrationKey) localStorage.setItem(registrationKey, registered ? "true" : "false");
    }, [registered]);

    const isDisabled = !venueDetails?.date;

    const handleOptOut = () => {
        codeupAlert(
            "By opting out of this event, your ticket will be released and will no longer be valid for use.\nAre you sure you want to opt out?",
            undefined,
            <span className="flex justify-between">
                <button
                    className="bg-red-600 text-white hover:bg-red-700 px-6 py-2 rounded-md font-medium"
                    onClick={async () => {
                        try {
                            const apiURL = `https://codeup.in/dev/admin/participant/${getUser()?.user.id}/status`;
                            const res = await axios.put(apiURL, {
                                headers: {
                                    Authorization: `Bearer ${getUser()?.token}`,
                                    "meetup-name": events.find((e) => e.id === activeEventId)?.id,
                                },
                            });
                            console.log(res.data);
                            setRegistered(false);
                            codeupAlert.close();
                        } catch (err) {
                            console.log(err);
                        }
                    }}
                >
                    Yes
                </button>
                <button className="bg-pink-500 text-white hover:bg-pink-600 px-6 py-2 rounded-md font-medium" onClick={codeupAlert.close}>
                    Cancel
                </button>
            </span>
        );
    };

    return (
        <section id="hero" className="relative flex items-center bg-gradient-to-br from-pink-900 via-pink-800 to-pink-700 text-white flex-col" style={{ minHeight: "100dvh" }}>
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 opacity-15 bg-cover bg-center bg-no-repeat h-screen" style={{ backgroundImage: `url(${background})` }}></div>
            </div>

            <div className="mt-20 md:mt-24">{events.length > 0 && <EventTabs events={events} activeEventId={activeEventId} onSelect={onSelect} />}</div>

            <div className="container mx-auto px-4 z-10 text-center pb-20 pt-14">
                <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fadeIn">
                    <span className="block">&lt;RamRamSa /&gt;</span>
                    <span className="text-pink-300 block mt-3 text-2xl md:text-5xl">{venueDetails?.date || "Coming Soon"}</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">Join the biggest React community event in Rajasthan. Connect with tech enthusiasts, share knowledge and explore the latest in React ecosystem.</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                    {!registered &&
                        currentEvent?.date &&
                        (() => {
                            const eventDate: any = currentEvent?.date;
                            const today: any = new Date();
                            const daysRemaining = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));
                            return (
                                daysRemaining > 4 && (
                                    <ModalFormWrapper
                                        button={
                                            <button
                                                disabled={isDisabled}
                                                className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-14 px-8 text-lg ${
                                                    isDisabled ? "bg-gray-400 text-white cursor-not-allowed" : "bg-pink-400 text-white hover:bg-pink-700 focus-visible:ring-pink-500"
                                                }`}
                                            >
                                                Register Now
                                            </button>
                                        }
                                        //  button={
                                        //     <button disabled={true} className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-14 px-8 text-lg ${!isDisabled ? "bg-gray-400 text-white cursor-not-allowed" : "bg-pink-400 text-white hover:bg-pink-700 focus-visible:ring-pink-500"}`}>
                                        //         Registrations Closed
                                        //     </button>
                                        // }
                                        venueDetails={venueDetails}
                                        meetupName={currentEvent.id}
                                    />
                                    // <a
                                    //     href={!isDisabled ? `https://luma.com/react-india-rajasthan-meetup-2025` : ""}
                                    //     className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-14 px-8 text-lg ${
                                    //         isDisabled ? "bg-gray-400 text-white cursor-not-allowed" : "bg-pink-400 text-white hover:bg-pink-700 focus-visible:ring-pink-500"
                                    //     }`}
                                    // >
                                    //     Register Now
                                    // </a>
                                )
                            );
                        })()}
                    {venueDetails?.date &&
                        (() => {
                            const eventDate: any = currentEvent?.date;
                            const today: any = new Date();
                            const daysRemaining = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));

                            return (
                                !registered &&
                                daysRemaining > 0 &&
                                daysRemaining <= 1 && (
                                    <button
                                        disabled={true}
                                        className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-14 px-8 text-lg bg-gray-400 text-white cursor-not-allowed"
                                    >
                                        Registration Closed
                                    </button>
                                )
                            );
                        })()}
                    {/* <button onClick={() => setRegistered(true)}>a</button> */}
                    {/* <a
                        href="#agenda"
                        className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-14 px-8 text-lg ${
                            isDisabled && false ? "bg-gray-400 text-white cursor-not-allowed pointer-events-none" : "bg-white/10 border border-white text-white hover:bg-white/20 focus-visible:ring-pink-500"
                        }`}
                    >
                        Agenda
                    </a> */}
                    <button
                        // href="#community"
                        onClick={() => scrollToElement("community")}
                        className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-14 px-8 text-lg ${
                            isDisabled && false ? "bg-gray-400 text-white cursor-not-allowed pointer-events-none" : "bg-white/10 border border-white text-white hover:bg-white/20 focus-visible:ring-pink-500"
                        }`}
                    >
                        Join Us
                    </button>
                </div>

                {registered &&
                    (() => {
                        const eventDate: any = currentEvent?.date;
                        const today: any = new Date();
                        const daysRemaining = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));

                        return daysRemaining > 0 ? (
                            <p className="mt-6 text-xl md:text-2xl mb-6 max-w-2xl mx-auto opacity-90">Thank you for applying</p>
                        ) : (
                            <p className="mt-6 text-xl md:text-2xl mb-6 max-w-2xl mx-auto opacity-90">The event has ended - we appreciate your support and participation!</p>
                        );
                    })()}

                {registered &&
                    (() => {
                        const eventDate: any = currentEvent?.date;
                        const today: any = new Date();
                        const daysRemaining = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));

                        return (
                            daysRemaining > 0 &&
                            daysRemaining <= 4 && (
                                <>
                                    <p className="mb-2 text-xl">
                                        <b>Can't Make It to the event? Let Us Know</b>
                                    </p>
                                    <p className="mb-2">
                                        We understand that plans can change. If, for any reason, you won't be able to attend React Rajasthan, we kindly ask you to opt out by clicking the link below. This will help us offer your spot to someone on the waitlist
                                        who's eager to attend.
                                    </p>
                                    <button className="mb-2 inline-block text-white hover:text-pink-400 underline transition-colors" onClick={handleOptOut}>
                                        <b>Click here to opt out</b>
                                    </button>
                                    <p>Thank you for your consideration and support!</p>
                                </>
                            )
                        );
                    })()}

                <div className="mt-10 text-sm font-medium">
                    {venueDetails?.time && venueDetails?.name ? (
                        <p className="mb-2 opacity-80">
                            {venueDetails.time} | {venueDetails.name}
                        </p>
                    ) : (
                        <p className="mb-2 opacity-80">Venue details coming soon</p>
                    )}

                    <div className="flex items-center justify-center space-x-2 sm:space-x-6 mt-6">
                        {Object.entries(siteConfig.socialLinks).map(([platform, url]) => (
                            <a key={platform} href={url} className="text-white hover:text-pink-300 transition-colors" target="_blank" rel="noopener noreferrer">
                                {platform.charAt(0).toUpperCase() + platform.slice(1)}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 transform -translate-x-1/2 animate-bounce z-20">
                <button onClick={() => scrollToElement("venue")} className="text-white opacity-80 hover:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default Hero;
