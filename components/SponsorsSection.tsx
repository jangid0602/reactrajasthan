"use client";
import React from "react";
import Section from "./Section";
import ModalFormWrapper from "./ModalFormWrapper";
const bg = "/assets/bg.png";
import { Sponsor, VenueDetails } from "@/types";

interface SponsorsSectionProps {
    sponsorsData: Sponsor[];
    venueDetails: VenueDetails | undefined;
}

const SponsorsSection: React.FC<SponsorsSectionProps> = ({ sponsorsData, venueDetails }) => {
    // Group sponsors by tier
    const goldSponsors = sponsorsData.filter((sponsor) => sponsor.tier === "gold");
    const silverSponsors = sponsorsData.filter((sponsor) => sponsor.tier === "silver");
    const bronzeSponsors = sponsorsData.filter((sponsor) => sponsor.tier === "bronze");
    const defaultSponsors = sponsorsData.filter((sponsor) => sponsor.tier === "sponsor");
    const partners = sponsorsData.filter((sponsor) => sponsor.tier === "partner");
    const communityPartners = sponsorsData.filter((sponsor) => sponsor.tier === "community");

    return (
        <Section id="sponsors" title="Our Sponsors & Partners" subtitle="The amazing companies and organizations that make this event possible" className="bg-gray-50">
            {/* Become a Sponsor */}
            <div className="mt-16 bg-pink-400 text-white p-8 rounded-lg text-center mb-16" style={{ background: `linear-gradient(45deg, #831843cc, #9d174dcc, #be185dcc), url(${bg}) center` }}>
                <h3 className="text-2xl font-bold mb-4">Become a Sponsor</h3>
                <p className="max-w-2xl mx-auto mb-6">Support the React community in Rajasthan and showcase your brand to hundreds of tech enthusiasts. We offer various sponsorship packages to meet your goals.</p>
                <a href="mailto:info@reactrajasthan.com" className="text-white hover:text-pink-300 transition-colors">
                    info@reactrajasthan.com | +91 9782312993
                </a>
            </div>
            {/* Gold Sponsors */}
            {sponsorsData.length > 0 && (
                <div className="mb-16">
                    <h3 className="text-xl font-bold text-center mb-8 text-amber-600">SPONSORS</h3>
                    {goldSponsors.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-6 mb-6">
                            {goldSponsors.map((sponsor) => (
                                <a
                                    key={sponsor.id}
                                    href={sponsor.websiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white p-8 rounded-lg shadow-md flex items-center justify-center transform transition-all hover:shadow-lg hover:-translate-y-1 w-[calc(100%-0.75rem)] md:w-[calc(50%-0.75rem)] lg:w-[calc(33.3333%-1rem)] sponsor-item"
                                >
                                    <img src={sponsor.logoUrl} alt={`${sponsor.name} logo`} className="max-h-20 max-w-full object-contain" />
                                    <p>{sponsor.tier.toUpperCase()}</p>
                                </a>
                            ))}
                        </div>
                    )}
                    {silverSponsors.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-6 mb-6">
                            {silverSponsors.map((sponsor) => (
                                <a
                                    key={sponsor.id}
                                    href={sponsor.websiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white p-8 rounded-lg shadow-md flex items-center justify-center transform transition-all hover:shadow-lg hover:-translate-y-1 w-[calc(100%-0.75rem)] md:w-[calc(50%-0.75rem)] lg:w-[calc(33.3333%-1rem)] sponsor-item"
                                >
                                    <img src={sponsor.logoUrl} alt={`${sponsor.name} logo`} className="max-h-20 max-w-full object-contain" />
                                    <p>{sponsor.tier.toUpperCase()}</p>
                                </a>
                            ))}
                        </div>
                    )}
                    {bronzeSponsors.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-6">
                            {bronzeSponsors.map((sponsor) => (
                                <a
                                    key={sponsor.id}
                                    href={sponsor.websiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white p-8 rounded-lg shadow-md flex items-center justify-center transform transition-all hover:shadow-lg hover:-translate-y-1 w-[calc(100%-0.75rem)] md:w-[calc(50%-0.75rem)] lg:w-[calc(33.3333%-1rem)] sponsor-item"
                                >
                                    <img src={sponsor.logoUrl} alt={`${sponsor.name} logo`} className="max-h-20 max-w-full object-contain" />
                                    <p>{sponsor.tier.toUpperCase()}</p>
                                </a>
                            ))}
                        </div>
                    )}

                    {defaultSponsors.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-6">
                            {defaultSponsors.map((sponsor) => (
                                <a
                                    key={sponsor.id}
                                    href={sponsor.websiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white p-8 rounded-lg shadow-md flex items-center justify-center transform transition-all hover:shadow-lg hover:-translate-y-1 w-[calc(100%-0.75rem)] md:w-[calc(50%-0.75rem)] lg:w-[calc(33.3333%-1rem)] sponsor-item"
                                >
                                    <img src={sponsor.logoUrl} alt={`${sponsor.name} logo`} className="max-h-20 max-w-full object-contain" />
                                    {/* <p>{sponsor.tier.toUpperCase()}</p> */}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Silver Sponsors */}
            {partners.length > 0 && (
                <div className="mb-16">
                    <h3 className="text-xl font-bold text-center mb-8 text-gray-500">Platform Partners</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {partners.map((sponsor) => (
                            <a key={sponsor.id} href={sponsor.websiteUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-900 p-5 rounded-lg shadow-md flex items-center justify-center transform transition-all hover:shadow-lg hover:-translate-y-1">
                                <img style={{ transform: "scale(0.6)" }} src={sponsor.logoUrl} alt={`${sponsor.name} logo`} className="max-h-24 max-w-full object-contain" />
                            </a>
                        ))}
                    </div>
                </div>
            )}

            {/* Bronze Sponsors */}
            {/* {bronzeSponsors.length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-center mb-8 text-amber-800">Bronze Sponsors</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {bronzeSponsors.map((sponsor) => (
              <a
                key={sponsor.id}
                href={sponsor.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center transform transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <img
                  src={sponsor.logoUrl}
                  alt={`${sponsor.name} logo`}
                  className="max-h-16 max-w-full object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      )} */}

            {/* Community Partners */}
            {communityPartners.length > 0 && (
                <div className="mb-16">
                    <h3 className="text-xl font-bold text-center mb-8 text-gray-500">Community Partners</h3>
                    <div className="flex flex-wrap justify-center gap-6" style={{ alignItems: "unset" }}>
                        {communityPartners.map((sponsor) => (
                            <a
                                key={sponsor.id}
                                href={sponsor.websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white py-8 rounded-lg shadow-md flex items-center justify-center transform transition-all hover:shadow-lg hover:-translate-y-1 w-[calc(50%-0.75rem)] md:w-[calc(33.3333%-1rem)] lg:w-[calc(25%-1.125rem)]"
                            >
                                <img src={sponsor.logoUrl} alt={`${sponsor.name} logo`} className="max-h-20 max-w-full object-contain" />
                            </a>
                        ))}
                    </div>
                </div>
            )}

            {/* Become a Community Partner */}
            <div className="mt-10 bg-pink-500 text-white p-8 rounded-lg text-center" style={{ background: `linear-gradient(45deg, #831843cc, #9d174dcc, #be185dcc), url(${bg}) center` }}>
                <h3 className="text-2xl font-bold mb-4">Become a Community Partner</h3>
                <p className="max-w-2xl mx-auto mb-6">If you're a community, meetup group, or nonprofit interested in collaborating, we'd love to partner with you.</p>
                <ModalFormWrapper button={<button className="text-white hover:text-pink-300 transition-colors">Reach out to us</button>} type="community" venueDetails={venueDetails} />
            </div>
        </Section>
    );
};

export default SponsorsSection;
