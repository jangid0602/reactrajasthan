"use client";
import { ReactNode, useState } from "react";
import { createPortal } from "react-dom";
import Form from "./Form";
import CommunityForm from "./CommunityForm";
import { VenueDetails } from "@/types";

type ModalFormWrapperProps = {
    button?: ReactNode;
    defaultRole?: "Attendee" | "Volunteer" | "Speaker";
    type?: "community" | "normal";
    venueDetails: VenueDetails | undefined;
    meetupName: string;
};

const ModalFormWrapper: React.FC<ModalFormWrapperProps> = ({ button, defaultRole, type = "normal", venueDetails, meetupName }) => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const modalContent = (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 overflow-y-auto max-h-[90vh] relative">
                <div className="flex justify-between items-center p-6 pb-0">
                    <p className="text-xl md:text-2xl">{type == "community" ? "Become Community Partner" : "React Rajasthan 20 July 2025"}</p>

                    <button onClick={() => setShowModal(false)} className="text-gray-600 hover:text-black text-2xl font-bold">
                        &times;
                    </button>
                </div>
                <div className="p-6">{type === "community" ? <CommunityForm showModal={setShowModal} meetupName={meetupName} /> : <Form showModal={setShowModal} defaultRole={defaultRole} venueDetails={venueDetails} meetupName={meetupName} />}</div>
            </div>
        </div>
    );

    return (
        <>
            {button ? (
                <span onClick={() => setShowModal(true)}>{button}</span>
            ) : (
                <button onClick={() => setShowModal(true)} className="inline-block bg-pink-400 text-white hover:bg-pink-700 font-medium px-6 py-2 rounded-md transition-colors">
                    Register Now
                </button>
            )}

            {showModal && typeof window !== "undefined" && createPortal(modalContent, document.body)}
        </>
    );
};

export default ModalFormWrapper;
