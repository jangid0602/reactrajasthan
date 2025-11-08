"use client";
import React, { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import VenueSection from "@/components/VenueSection";
import SpeakersSection from "@/components/SpeakersSection";
import SponsorsSection from "@/components/SponsorsSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import "./index.css";
import JoinCommunity from "@/components/JoinCommunity";
import { eventsData } from "@/data/siteData";
import { EventType } from "@/types";
import axios from "axios";
// import Agenda from "@/components/Agenda";
// import Images from "@/components/Images";
// import FaceFinder from "@/components/FaceFinder";

const Home: React.FC<any> = ({ setEventName, setShowFeedback }) => {
    const [allEvents, setAllEvents]: any = useState<EventType[]>([]);
    const [siteData, setSiteData]: any = useState<EventType | null>(null);
    // const [eventsData, setEventsData] = useState();

    useEffect(() => {
        setEventName(siteData?.title || "");
        console.log(siteData);
    }, [siteData]);

    // useEffect(() => {
    //     const getEventsData = async () => {
    //         try {
    //             const res = axios.get("http://10.33.0.41:3000/api/events");
    //             const { data } = await res;
    //             console.log(data);
    //             data.forEach((event: any) => {
    //                 if (event.date) {
    //                     event.date = new Date(event.date);
    //                 }
    //             });
    //             console.log(data);
    //             setEventsData(data);
    //         } catch (error) {
    //             console.error("Error fetching events data:", error);
    //             return null;
    //         }
    //     };
    //     getEventsData();
    // }, []);

    // useEffect(() => {
    //     const now = new Date();

    //     if (!eventsData) return;

    //     // Sort events chronologically by date (undefined at bottom)
    //     const sorted = [...eventsData].sort((a, b) => {
    //         const dateA = a.date?.getTime() ?? Infinity;
    //         const dateB = b.date?.getTime() ?? Infinity;
    //         return dateA - dateB;
    //     });

    //     // First upcoming event (or undefined if all in past)
    //     const nextEvent = sorted.find((event) => event.date && event.date > now);

    //     setAllEvents(sorted);
    //     setSiteData(nextEvent || sorted[0]); // fallback: show most relevant/past event
    // }, [eventsData]);

    // useEffect(() => {
    //     if (siteData?.date && siteData.date > new Date()) {
    //         setShowFeedback(false);
    //     } else {
    //         setShowFeedback(true);
    //     }
    // }, [siteData]);

    useEffect(() => {
        const now = new Date();

        if (!eventsData) return;

        // Sort events chronologically by date (undefined at bottom)
        const sorted = [...eventsData].sort((a, b) => {
            const dateA = a.date?.getTime() ?? Infinity;
            const dateB = b.date?.getTime() ?? Infinity;
            return dateA - dateB;
        });

        // Find the next upcoming event
        const nextEvent = sorted.find((event) => event.date && event.date > now);

        // Find the most recent past event (latest before now)
        const pastEvents = sorted.filter((event) => event.date && event.date <= now);
        const latestPastEvent = pastEvents.length > 0 ? pastEvents[pastEvents.length - 1] : undefined;

        // Fallback logic: next upcoming OR latest past OR first available
        const fallbackEvent = nextEvent || latestPastEvent || sorted[0];

        setAllEvents(sorted);
        setSiteData(fallbackEvent);
    }, [eventsData]);

    useEffect(() => {
        document.title = "React Rajasthan - The Premier React Community in Rajasthan";
    }, []);

    return (
        <>
            <Hero venueDetails={siteData?.venue} events={allEvents} activeEventId={siteData?.id} onSelect={(event) => setSiteData(event)} background={siteData?.backgroundImageUrl} />
            {siteData?.date && (
                <>
                    {/* <Agenda /> */}
                    <SpeakersSection speakersData={siteData?.speakers || []} venueDetails={siteData} />
                    <SponsorsSection sponsorsData={siteData?.sponsors || []} venueDetails={siteData?.venue} />
                    {siteData?.venue && <VenueSection venueDetails={siteData.venue} />}
                    <TeamSection id="organizers" title="Organizers" subtitle="The team making React Rajasthan possible" members={siteData?.organizers || []} className="bg-gray-50" />
                    <TeamSection id="volunteers" title="Our Volunteers" subtitle="Meet the amazing team working behind the scenes" members={siteData?.volunteers || []} />
                </>
            )}
            <JoinCommunity />
            {/* <Images /> */}
            {/* <FaceFinder /> */}
            <Footer venueDetails={siteData?.venue} />
        </>
    );
};

// export default Home;


export default function Page() {
  const [eventName, setEventName] = useState<string>("");
  const [showFeedback, setShowFeedback] = useState<boolean>(true);

  return <Home setEventName={setEventName} setShowFeedback={setShowFeedback} />;
}
