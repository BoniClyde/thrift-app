"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTextReveal, useStaggerFadeUp, useImageReveal } from "@/lib/animations";
import { BANK_NAME } from "@/config/constants";

export default function AboutUs() {
    const sectionRef = useStaggerFadeUp(".wow.fadeInUp", 0.2);
    useTextReveal();
    const imageRevealRef = useImageReveal();
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div ref={sectionRef} className="about-us py-12 bg-section">
            <div className="container">
                <div className="row section-row align-items-center mb-[80px] flex flex-wrap -mx-[15px]">
                    <div className="col-lg-7 w-full lg:w-7/12 px-[15px]">
                        <div className="section-title mb-0 lg:mr-[20px]">
                            <h3 className="wow fadeInUp text-[#114a43] text-[15px] font-medium capitalize inline-block pl-[24px] mb-[20px] relative">
                                about us
                            </h3>
                            <h2 className="text-anime-style-3 text-[46px] leading-[1.2] font-semibold text-primary" data-cursor="-opaque">
                                Empowering businesses and individuals with experts
                            </h2>
                        </div>
                    </div>

                    <div className="col-lg-5 w-full lg:w-5/12 px-[15px] mt-10 lg:mt-0">
                        <div className="section-title-content wow fadeInUp" data-wow-delay="0.25s">
                            <p className="m-0 text-text-color text-[15px] leading-[1.8em]">
                                We are dedicated to helping businesses and individuals navigate
                                the complexities of finance with confidence and clarity. With
                                years of experience in financial planning, investment
                                management, business consulting.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row flex flex-wrap -mx-[15px]">
                    {[
                        {
                            icon: "icon-about-company-1.svg",
                            title: "expertise you can trust",
                            desc: "Our experienced team delivers reliable insights and strategies, ensuring your financial decisions are well-informed and secure.",
                            delay: "0s",
                        },
                        {
                            icon: "icon-about-company-2.svg",
                            title: "personalized solutions",
                            desc: "Our personalized solutions are crafted address your unique financial helping you achieve your specific goals and aspirations.",
                            delay: "0.25s",
                        },
                        {
                            icon: "icon-about-company-3.svg",
                            title: "proven track record",
                            desc: "Our proven track record highlights successful outcomes and client satisfaction through effective financial solutions.",
                            delay: "0.5s",
                        },
                    ].map((item, idx) => (
                        <div key={idx} className="col-md-4 w-full md:w-1/3 px-[15px]">
                            <div className={`about-company-item wow fadeInUp mb-[30px] md:mb-0`} data-wow-delay={item.delay}>
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
                                        {item.desc}
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
                            {/* About Image Start */}
                            <div className="about-us-video reveal rounded-[30px] overflow-hidden">
                                <figure className="relative w-full h-[500px] md:h-[600px]">
                                    <Image
                                        src="/temp/custom/assets/images/hero-image.jpg"
                                        alt="About Video"
                                        fill
                                        style={{ objectFit: "cover" }}
                                        priority
                                    />
                                </figure>
                            </div>
                            {/* About Image End */}

                            {/* About Video Btn Start */}
                            <div className="about-video-btn absolute inset-0 flex items-center justify-center">
                                {/* Video Play Button Start */}
                                <div className="video-play-button">
                                    <button
                                        onClick={() => isMounted && setIsVideoPlaying(true)}
                                        className="popup-video w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-white rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-2xl"
                                        data-cursor-text="<>"
                                    >
                                        <i className="fa fa-play text-primary text-[30px] md:text-[40px] ml-2"></i>
                                    </button>
                                </div>
                                {/* Video Play Button End */}
                            </div>
                            {/* About Video Btn End */}

                            {/* Video Modal */}
                            {isMounted && isVideoPlaying && (
                                <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
                                    <div className="relative w-full max-w-4xl">
                                        <button
                                            onClick={() => setIsVideoPlaying(false)}
                                            className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300"
                                        >
                                            ×
                                        </button>
                                        <div className="relative w-full pt-[56.25%]">
                                            <iframe
                                                className="absolute inset-0 w-full h-full rounded-lg"
                                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                                                title={`${BANK_NAME} Video`}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* About Video Section End */}
        </div>
    );
}
