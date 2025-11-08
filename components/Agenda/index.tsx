"use client";
import { useEffect, useRef, useState } from "react";
import Wrapper from "./style";
import Section from "../Section";

// Images
import shubham from "../../assets/agenda/shubham.png";
import anil from "../../assets/agenda/anil.png";
import himanshu from "../../assets/agenda/himanshu.png";
import uma from "../../assets/agenda/uma.png";
import vansh from "../../assets/agenda/vansh.png";
import vaibhav from "../../assets/agenda/vaibhav.png";
import harshita from "../../assets/agenda/harshita.png";
import manjeet from "../../assets/agenda/manjeet.png";
import panel from "../../assets/agenda/panel-discussion.png";
import registrations from "../../assets/agenda/registrations-canva.png";
import networking from "../../assets/agenda/networking-canva.png";
import lunch from "../../assets/agenda/lunch.png";
import activity1 from "../../assets/agenda/activity-1.png";
import activity2 from "../../assets/agenda/activity-2.png";
import arrowRight from "../../assets/agenda/right-arrow.png";
import arrowLeft from "../../assets/agenda/left-arrow.png";

const agendaItems = [
    { time: "08:30", image: registrations },
    { time: "09:00", image: networking },
    { time: "09:40", image: shubham },
    { time: "10:00", image: vansh },
    { time: "10:15", image: manjeet },
    { time: "10:30", image: vaibhav },
    { time: "11:15", image: activity1 },
    { time: "11:30", image: himanshu },
    { time: "11:55", image: harshita },
    { time: "12:10", image: lunch },
    { time: "13:00", image: uma },
    { time: "13:25", image: anil },
    { time: "13:50", image: activity2 },
    { time: "14:30", image: panel },
];

const Agenda = () => {
    const [currentTime, setCurrentTime] = useState("08:30:00 AM");
    const [interpolatedTimeInMinutes, setInterpolatedTimeInMinutes] = useState(510); // 08:30
    const [cardWidth, setCardWidth] = useState(620);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const cardRef = useRef<HTMLDivElement | null>(null); // 👈 for measuring card width

    const formatTime = (minutesTotal: number) => {
        const hour24 = Math.floor(minutesTotal / 60);
        const minute = Math.floor(minutesTotal % 60);
        const second = 0;
        const meridiem = hour24 >= 12 ? "PM" : "AM";
        const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;

        return `${hour12.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")} ${meridiem}`;
    };

    const calculateCurrentTime = (scrollLeft: number) => {
        const index = Math.floor(scrollLeft / cardWidth);
        const nextIndex = index + 1;

        const current = agendaItems[index]?.time;
        const next = agendaItems[nextIndex]?.time || current;

        if (!current) return;

        const [h1, m1] = current.split(":").map(Number);
        const [h2, m2] = next.split(":").map(Number);

        const t1 = h1 * 60 + m1;
        const t2 = h2 * 60 + m2;

        const positionRatio = (scrollLeft % cardWidth) / cardWidth;
        const interpolatedMinutes = Math.round(t1 + (t2 - t1) * positionRatio);

        setInterpolatedTimeInMinutes(interpolatedMinutes);
        setCurrentTime(formatTime(interpolatedMinutes));
    };

    useEffect(() => {
        const handleResize = () => {
            if (cardRef.current) {
                setCardWidth(cardRef.current.clientWidth);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scrollBy = (offset: number) => {
        if (!containerRef.current) return;
        const container = containerRef.current;

        container.scrollLeft += offset;

        requestAnimationFrame(() => {
            calculateCurrentTime(container.scrollLeft);
        });
    };

    return (
        <Section id="agenda" title="Agenda" subtitle="View the complete breakdown of activities by time." className="bg-gray-50">
            <Wrapper>
                <div className="inner presentation">
                    <div className="timer-container">
                        <div className="timer">
                            <div className="time">{currentTime.slice(0, currentTime.length - 6)}</div>
                            <div className="meridiem">{currentTime.slice(currentTime.length - 2)}</div>
                        </div>
                    </div>

                    <div className="content-container">
                        <div className="arrow left-arrow" role="button" onClick={() => scrollBy(-cardWidth)}>
                            <img src={arrowLeft} alt="left-arrow" />
                        </div>

                        <div
                            className="content"
                            ref={containerRef}
                            onScroll={(e) => {
                                const scrollLeft = (e.target as HTMLDivElement).scrollLeft;
                                calculateCurrentTime(scrollLeft);
                            }}
                        >
                            {agendaItems.map((item, idx) => (
                                <div
                                    className="data px-2"
                                    key={idx}
                                    ref={idx === 0 ? cardRef : null} // 👈 Only attach to first card
                                >
                                    <img src={item.image} alt={`Agenda item ${idx + 1}`} />
                                </div>
                            ))}
                        </div>

                        <div className="arrow right-arrow" role="button" onClick={() => scrollBy(cardWidth)}>
                            <img src={arrowRight} alt="right-arrow" />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    );
};

export default Agenda;
