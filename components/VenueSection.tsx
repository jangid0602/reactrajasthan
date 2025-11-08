"use client";
import React from "react";
import Section from "./Section";
// import { venueDetails } from "@/data/siteData";
import { MapPin, Calendar, Clock } from "lucide-react";
const bg = "/assets/bg.png";
import { VenueDetails } from "@/types";

interface VenueSectionProps {
    venueDetails: VenueDetails;
}

const VenueSection: React.FC<VenueSectionProps> = ({ venueDetails }) => {
    return (
        <Section id="venue" title="Our Venue" subtitle="Join us for an amazing day of React sessions, workshops and networking">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-white p-8 rounded-lg shadow-md transform transition-transform hover:scale-[1.02]">
                    <h3 className="text-2xl font-bold text-pink-400 mb-4">{venueDetails.name}</h3>

                    <div className="space-y-4">
                        <div className="flex items-start">
                            <MapPin className="h-5 w-5 text-pink-400 mt-1 mr-3" />
                            <div>
                                <p className="font-medium">Location</p>
                                <p className="text-gray-600">{venueDetails.address}</p>
                                <p className="text-gray-600">{venueDetails.city}</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <Calendar className="h-5 w-5 text-pink-400 mt-1 mr-3" />
                            <div>
                                <p className="font-medium">Date</p>
                                <p className="text-gray-600">{venueDetails.date}</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <Clock className="h-5 w-5 text-pink-400 mt-1 mr-3" />
                            <div>
                                <p className="font-medium">Time</p>
                                <p className="text-gray-600">{venueDetails.time}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <a href={venueDetails.mapUrl} target="_blank" rel="noopener noreferrer" className="text-pink-400 font-medium hover:text-pink-800 inline-flex items-center">
                            View on Google Maps
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="rounded-lg overflow-hidden shadow-md h-[300px] md:h-auto" style={{ minHeight: 360 }}>
                    <iframe src={venueDetails.mapEmbed} width="100%" height="100%" style={{ border: 0, minHeight: 360 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Venue location map"></iframe>
                </div>
            </div>

            <div className="mt-16 bg-pink-400 text-white rounded-lg p-8 text-center" style={{ background: `linear-gradient(45deg, #831843cc, #9d174dcc, #be185dcc), url(${bg}) center` }}>
                <h3 className="text-2xl font-bold mb-4">What to expect</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-white/10 rounded-lg">
                        <h4 className="font-bold text-xl mb-2">Technical Talks</h4>
                        <p>Deep dives into React, performance optimization and modern web development.</p>
                    </div>
                    <div className="p-4 bg-white/10 rounded-lg">
                        <h4 className="font-bold text-xl mb-2">Networking</h4>
                        <p>Connect with fellow developers, speakers and community leaders.</p>
                    </div>
                    <div className="p-4 bg-white/10 rounded-lg">
                        <h4 className="font-bold text-xl mb-2">Workshops</h4>
                        <p>Hands-on sessions to improve your React and frontend development skills.</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default VenueSection;
