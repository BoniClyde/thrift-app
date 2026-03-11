"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [cursorClass, setCursorClass] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const handleMouseMove = (e: MouseEvent) => {
            setIsVisible(true);
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out",
            });
        };

        const handleMouseEnter = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const cursorType = target.getAttribute("data-cursor");
            if (cursorType) {
                setCursorClass(cursorType);
            }
        };

        const handleMouseLeave = () => {
            setCursorClass("");
        };

        const handleMouseDown = () => {
            cursor.classList.add("-active");
        };

        const handleMouseUp = () => {
            cursor.classList.remove("-active");
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        // Attach to elements with data-cursor
        const updateListeners = () => {
            const cursorElements = document.querySelectorAll('[data-cursor]');
            cursorElements.forEach((el) => {
                el.addEventListener("mouseenter", handleMouseEnter as any);
                el.addEventListener("mouseleave", handleMouseLeave as any);
            });
        };

        updateListeners();
        // Re-check for elements periodically in case of dynamic content
        const interval = setInterval(updateListeners, 1000);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            clearInterval(interval);
            const cursorElements = document.querySelectorAll('[data-cursor]');
            cursorElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter as any);
                el.removeEventListener("mouseleave", handleMouseLeave as any);
            });
        };
    }, []);

    return (
        <div
            className={cn(
                "cb-cursor hidden lg:block",
                isVisible && "-visible",
                cursorClass
            )}
            ref={cursorRef}
        />
    );
}
