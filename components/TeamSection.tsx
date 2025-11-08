"use client";
import React from "react";
import Section from "./Section";
import { TeamMember } from "@/types";
import { Github as GitHub, Twitter, Linkedin } from "lucide-react";
const bg = "/assets/bg.png";

interface TeamSectionProps {
    id: string;
    title: string;
    subtitle: string;
    members: TeamMember[];
    className?: string;
}

const TeamSection: React.FC<TeamSectionProps> = ({ id, title, subtitle, members, className = "" }) => {
    if (!members || members.length === 0) {
        return null;
    }
    return (
        <Section id={id} title={title} subtitle={subtitle} className={className}>
            <div className="flex flex-wrap justify-center gap-6" style={{ alignItems: "unset" }}>
                {members.map((member) => (
                    <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden group w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.5rem)] ">
                        <div className="h-56 overflow-hidden relative" style={{ background: `url(${bg})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                            <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" style={{ background: `linear-gradient(45deg, rgba(131, 24, 67, 0.8), rgba(157, 23, 77, 0.8), rgba(190, 24, 93, 0.8))` }} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                                <div className="flex space-x-4">
                                    {member.twitterUrl && (
                                        <a href={member.twitterUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors" aria-label={`${member.name}'s Twitter`}>
                                            <Twitter className="h-5 w-5" />
                                        </a>
                                    )}

                                    {member.githubUrl && (
                                        <a href={member.githubUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors" aria-label={`${member.name}'s GitHub`}>
                                            <GitHub className="h-5 w-5" />
                                        </a>
                                    )}

                                    {member.linkedinUrl && (
                                        <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors" aria-label={`${member.name}'s LinkedIn`}>
                                            <Linkedin className="h-5 w-5" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                            <p className="text-pink-600">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default TeamSection;
