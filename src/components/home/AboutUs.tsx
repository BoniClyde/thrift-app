"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTextReveal, useStaggerFadeUp, useImageReveal } from "@/lib/animations";
import { aboutUsContent } from "@/data/content";

export default function AboutUs() {
    const sectionRef = useStaggerFadeUp(".wow.fadeInUp", 0.2);
    useTextReveal();
    const imageRevealRef = useImageReveal();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div ref={sectionRef} className="about-us bg-section pt-[100px]">
            <div className="container">
                <div className="row section-row align-items-center mb-[80px] flex flex-wrap -mx-[15px]">
                    <div className="col-lg-7 w-full lg:w-7/12 px-[15px]">
                        <div className="section-title mb-0 lg:mr-[20px]">
                            <h3 className="wow fadeInUp text-[#114a43] text-[15px] font-medium capitalize inline-block pl-[24px] mb-[20px] relative">
                                {aboutUsContent.subtitle}
                            </h3>
                            <h2 className="text-anime-style-3 text-[46px] leading-[1.2] font-semibold text-primary" data-cursor="-opaque">
                                {aboutUsContent.title}
                            </h2>
                        </div>
                    </div>

                    <div className="col-lg-5 w-full lg:w-5/12 px-[15px] mt-10 lg:mt-0">
                        <div className="section-title-content wow fadeInUp" data-wow-delay="0.25s">
                            <p className="m-0 text-text-color text-[15px] leading-[1.8em]">
                                {aboutUsContent.description}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row flex flex-wrap -mx-[15px]">
                    {aboutUsContent.features.map((item, idx) => (
                        <div key={idx} className="col-md-4 w-full md:w-1/3 px-[15px]">
                            <div className={`about-company-item wow fadeInUp mb-[30px] md:mb-0`} data-wow-delay={`${idx * 0.25}s`}>
                                <div className="icon-box">
                                    <Image
                                        src={`/temp/custom/assets/images/${item.icon}`}
                                        alt=""
                                        width={40}
                                        height={40}
                                        style={{ width: "auto", height: "auto" }}
                                    />
                                </div>
                                <div className="about-company-content font-onest text-primary">
                                    <h3>{item.title}</h3>
                                    <p className="text-text-color text-[15px] leading-[1.8em]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* About Video Section Start */}
            <div className="container-fluid mt-[100px]">
                <div className="row flex flex-wrap -mx-[15px]">
                    <div className="col-lg-12 w-full px-[15px]">
                        <div className="about-video-image bg-section relative" ref={imageRevealRef}>
                            {/* Mobile: Image View */}
                            <div className="md:hidden about-us-video reveal rounded-[30px] overflow-hidden relative w-full h-[400px]">
                                {isMounted && (
                                    <Image
                                        src={aboutUsContent.videoPoster}
                                        alt="About Us"
                                        fill
                                        className="w-full h-full object-cover rounded-[30px]"
                                        priority
                                    />
                                )}
                            </div>

                            {/* Desktop: Video View */}
                            <div className="hidden md:block about-us-video reveal rounded-[30px] overflow-hidden relative w-full h-[600px]">
                                {isMounted && (
                                    <>
                                        <video
                                            width="100%"
                                            height="100%"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="w-full h-full object-cover rounded-[30px]"
                                        >
                                            <source src={aboutUsContent.videoSrc} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>

                                        {/* Play Button Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center rounded-[30px]">
                                            <button className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-2xl">
                                                <svg className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] text-primary ml-2" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About Video Section End */}
        </div>
    );
}
