"use client";
import React, { useEffect, Fragment, ReactNode } from "react";
import { createRoot, Root } from "react-dom/client";
import { useState } from "react";

interface AlertProps {
    show: boolean;
    message: string | null;
    onClose: () => void;
    buttons?: ReactNode;
}

interface AlertState {
    show: boolean;
    message: string | null;
    onClose?: () => void;
    buttons?: ReactNode;
}

let root: Root | null = null;
let updateState: ((state: AlertState) => void) | null = null;

const Alert: React.FC<AlertProps> = ({ show, message, onClose, buttons }) => {
    const isLoading = !message;

    useEffect(() => {
        if (show) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [show]);

    if (!show) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 text-center">
                {isLoading ? (
                    <div className="w-10 h-10 border-4 border-gray-300 border-t-pink-500 rounded-full animate-spin mx-auto my-4" />
                ) : (
                    <>
                        <p className="text-lg font-semibold mb-6 min-h-[100px] flex items-center justify-center whitespace-pre-line">{message}</p>
                        {buttons ? (
                            buttons
                        ) : (
                            <button className="bg-pink-500 text-white hover:bg-pink-600 px-6 py-2 rounded-md font-medium" onClick={onClose}>
                                Okay
                            </button>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

const AlertManager: React.FC = () => {
    const [state, setState] = useState<AlertState>({
        show: false,
        message: null,
        onClose: undefined,
        buttons: undefined,
    });
    updateState = setState;

    const handleClose = () => {
        setState({ show: false, message: null });
        if (typeof state.onClose === "function") {
            state.onClose();
        }
    };

    return <Alert show={state.show} message={state.message} onClose={handleClose} buttons={state.buttons} />;
};

export const mountAlertManager = (): void => {
    if (!root) {
        const container = document.createElement("div");
        document.body.appendChild(container);
        root = createRoot(container);
        root.render(<AlertManager />);
    }
};

export const codeupAlert = (message?: string | null, onClose?: () => void, buttons?: ReactNode): void => {
    if (!root || !updateState) {
        console.warn("Alert manager is not mounted. Call mountAlertManager() first.");
        return;
    }

    updateState({
        show: true,
        message: message || null,
        onClose,
        buttons,
    });
};

codeupAlert.close = (): void => {
    if (!updateState) return;
    updateState({ show: false, message: null, onClose: undefined, buttons: undefined });
};
