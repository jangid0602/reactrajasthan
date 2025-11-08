"use client";
import React, { useEffect, useRef } from "react";
import { EventType } from "@/types";

interface EventTabsProps {
    events: EventType[];
    activeEventId: string | undefined;
    onSelect: (event: EventType) => void;
}

const formatDate = (date?: Date) => {
    if (!date) return "Coming Soon";
    return date.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
};

const EventTabs: React.FC<EventTabsProps> = ({ events, activeEventId, onSelect }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const activeRef = useRef<HTMLButtonElement>(null);

    // scroll into view when activeEventId changes
    useEffect(() => {
        if (activeRef.current && containerRef.current) {
            activeRef.current.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest",
            });
        }
    }, [activeEventId]);

    const now = new Date();

    return (
        <div ref={containerRef} className="bg-black/50 backdrop-blur rounded-lg px-4 py-2 shadow-md flex gap-2 max-w-[85vw] overflow-auto scrollbar-thin custom-scrollbar">
            {events.map((event) => {
                const isActive = event.id === activeEventId;
                const isComingSoon = !event.date;
                const isPast = event.date && event.date < now;

                let baseClasses = "px-4 py-1.5 rounded-lg text-sm transition-colors font-medium flex flex-col items-center text-center min-w-[120px]";
                let conditionalClasses = "";

                if (isActive) {
                    conditionalClasses = "text-white shadow";
                } else if (isPast) {
                    conditionalClasses = "text-gray-400 hover:text-pink-400";
                } else {
                    conditionalClasses = "text-gray-200 hover:text-pink-400";
                }

                return (
                    <button key={event.id} ref={isActive ? activeRef : null} onClick={() => onSelect(event)} className={`${baseClasses} ${conditionalClasses}`}>
                        <span className="font-semibold truncate">{event.title}</span>
                        <span className="text-xs">{formatDate(event.date)}</span>
                    </button>
                );
            })}
        </div>
    );
};

export default EventTabs;
