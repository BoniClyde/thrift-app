"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        setIsVisible(true);

        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!isMounted || !isVisible) return null;

    return (
        <div className="preloader fixed inset-0 bg-white z-[9999] flex items-center justify-center">
            <div className="loading-container">
                <div className="loading"></div>
                <div id="loading-icon">
                    <Image
                        src="/logo.png"
                        alt="Loading"
                        width={60}
                        height={60}
                    />
                </div>
            </div>
        </div>
    );
}
