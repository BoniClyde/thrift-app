"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export function useTextReveal() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const elements = containerRef.current?.querySelectorAll(".text-anime-style-3");
            const rootElement = containerRef.current?.classList.contains("text-anime-style-3") ? [containerRef.current] : [];
            const allElements = [...Array.from(elements || []), ...rootElement];

            allElements.forEach((element) => {
                // Split text into characters manually if SplitText is not available
                const text = element.textContent || "";
                element.innerHTML = text
                    .split("")
                    .map((char) => `<span class="split-char">${char === " " ? "&nbsp;" : char}</span>`)
                    .join("");

                const chars = element.querySelectorAll(".split-char");
                gsap.to(chars, {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "back.out(1.7)",
                    stagger: 0.02,
                    scrollTrigger: {
                        trigger: element,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return containerRef;
}

export function useImageReveal() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const reveals = containerRef.current?.querySelectorAll(".reveal");
            const rootReveal = containerRef.current?.classList.contains("reveal") ? [containerRef.current] : [];
            const allReveals = [...Array.from(reveals || []), ...rootReveal];

            allReveals.forEach((container) => {
                const image = container.querySelector("img");
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        toggleActions: "play none none none",
                    },
                });
                tl.set(container, { autoAlpha: 1 });
                tl.from(container, {
                    duration: 1,
                    xPercent: -100,
                    ease: "power2.out",
                });
                tl.from(image, {
                    duration: 1,
                    xPercent: 100,
                    scale: 1,
                    delay: -1,
                    ease: "power2.out",
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return containerRef;
}

export function useStaggerFadeUp(selector = ".wow.fadeInUp", stagger = 0.2) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const elements = containerRef.current?.querySelectorAll(selector);
            if (elements?.length) {
                gsap.from(elements, {
                    y: 60,
                    opacity: 0,
                    duration: 1,
                    stagger: stagger,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                });
            }
        }, containerRef);
        return () => ctx.revert();
    }, [selector, stagger]);

    return containerRef;
}
