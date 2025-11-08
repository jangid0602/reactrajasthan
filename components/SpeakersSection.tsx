"use client";
import React from "react";
import Section from "./Section";
// import { speakersData } from '@/data/siteData';
import { Github as GitHub, Twitter, Linkedin } from "lucide-react";
import ModalFormWrapper from "./ModalFormWrapper";
import { Speaker, VenueDetails } from "@/types";
const bg = "/assets/bg.png";

interface SpeakersSectionProps {
    speakersData: Speaker[];
    venueDetails: VenueDetails | undefined;
}

const SpeakersSection: React.FC<SpeakersSectionProps> = ({ speakersData, venueDetails }) => {
    const speakerMap = (speaker: any) => (
        <div
            key={speaker.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:shadow-xl hover:-translate-y-1
                   w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.5rem)]"
        >
            <div className="h-56 overflow-hidden" style={{ background: `url(${bg})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                <img
                    src={speaker.imageUrl}
                    alt={speaker.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    style={{ background: `linear-gradient(45deg, rgba(131, 24, 67, 0.8), rgba(157, 23, 77, 0.8), rgba(190, 24, 93, 0.8))` }}
                />
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{speaker.name}</h3>
                <p className="text-pink-400 mb-3">{speaker.role}</p>
                <p className="text-gray-500 text-sm mb-1">{speaker.company}</p>
                {speaker.bio && <p className="text-gray-600 mt-3 text-sm line-clamp-3">{speaker.bio}</p>}

                <div className="mt-4 flex space-x-3">
                    {speaker.twitterUrl && (
                        <a href={speaker.twitterUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-500 transition-colors" aria-label={`${speaker.name}'s Twitter`}>
                            <Twitter className="h-5 w-5" />
                        </a>
                    )}
                    {speaker.githubUrl && (
                        <a href={speaker.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 transition-colors" aria-label={`${speaker.name}'s GitHub`}>
                            <GitHub className="h-5 w-5" />
                        </a>
                    )}
                    {speaker.linkedinUrl && (
                        <a href={speaker.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-700 transition-colors" aria-label={`${speaker.name}'s LinkedIn`}>
                            <Linkedin className="h-5 w-5" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
    return (
        <Section id="speakers" title="Meet Our Speakers" subtitle="Learn from industry experts and React professionals">
            <div className="flex flex-wrap justify-center gap-6" style={{ alignItems: "stretch" }}>
                {speakersData.filter((speaker) => speaker.type === "general").length > 0 ? (
                    speakersData.filter((speaker) => speaker.type === "general").map(speakerMap)
                ) : (
                    <div className="text-center text-gray-500 font-semibold bg-gray-50 py-6 px-10 rounded-lg shadow-md">No speakers have been announced yet. Stay tuned for updates!</div>
                )}
            </div>

            {speakersData.filter((speaker) => speaker.type === "panel").length > 0 && (
                <>
                    <h3 className="text-2xl md:text-3xl font-bold mt-10 mb-6 text-center">Panel Speakers</h3>
                    <div className="flex flex-wrap justify-center gap-6" style={{ alignItems: "stretch" }}>
                        {speakersData.filter((speaker) => speaker.type === "panel").map(speakerMap)}
                    </div>
                </>
            )}

            {venueDetails?.date && new Date(venueDetails.date) > new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) && (
                <div className="mt-12 text-center">
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Have a good tech tale to tell?
                        <ModalFormWrapper
                            button={<button className="text-pink-400 hover:text-pink-600 transition-colors hover:underline ml-1 font-semibold">Call for Speaker</button>}
                            defaultRole="Speaker"
                            venueDetails={venueDetails?.venue}
                            meetupName={venueDetails?.id}
                        />
                        .
                    </p>
                </div>
            )}
        </Section>
    );
};

export default SpeakersSection;
