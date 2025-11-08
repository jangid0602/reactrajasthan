"use client";
import React from "react";

interface SectionProps {
    id: string;
    title?: string;
    subtitle?: string;
    className?: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, className = "", children }) => {
    return (
        <section id={id} className={`py-16 md:py-24 scroll-mt-16 ${className}`}>
            <div className="container mx-auto px-4">
                {title && subtitle && (
                    <div className="text-center mb-12">
                        {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
                        {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
