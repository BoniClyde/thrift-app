"use client";

import { useTextReveal, useStaggerFadeUp } from "@/lib/animations";
import Link from "next/link";

interface ProductHeroProps {
    title: string;
    description: string;
    videoSrc: string;
}

export default function ProductHero({ title, description, videoSrc }: ProductHeroProps) {
    const heroRef = useStaggerFadeUp(".wow.fadeInUp", 0.2);
    useTextReveal();

    return (
        <div ref={heroRef} className="hero hero-image hero-video mb-2 p-0">
            <div className="hero-bg-video">
                <video autoPlay muted loop id="myVideo">
                    <source src={videoSrc} type="video/mp4" />
                </video>
            </div>
            <div className="container relative z-10 flex flex-col items-center justify-center h-full pt-[200px] pb-[160px]">
                <div className="flex flex-col items-center justify-center w-full">
                    <div className="w-full text-center max-w-[900px]">
                        <div className="hero-content !m-0 !pr-0 text-center">
                            <div className="section-title mt-50 mb-10 text-center flex flex-col items-center">
                                <h1 className="text-anime-style-3 text-white text-[48px] lg:text-[72px] font-bold leading-[1.1] mb-6 text-center" data-cursor="-opaque">
                                    {title}
                                </h1>
                                <p className="wow fadeInUp max-w-3xl text-white/90 text-[18px] leading-[1.6] text-center" data-wow-delay="0.25s">
                                    {description}
                                </p>
                            </div>

                            <div className="hero-content-btn flex justify-center mt-12 w-full">
                                <Link href="/register" className="btn-default">
                                    Enrol
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
