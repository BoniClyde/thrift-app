"use client";

import Image from "next/image";
import Link from "next/link";
import { useTextReveal, useStaggerFadeUp } from "@/lib/animations";
import { BANK_NAME } from "@/config/constants";

export default function Hero() {
    const heroRef = useStaggerFadeUp(".wow.fadeInUp", 0.2);
    useTextReveal();

    return (
        <div ref={heroRef} className="hero">
            <div className="container">
                <div className="flex flex-wrap items-center -mx-[15px]">
                    <div className="w-full md:w-6/12 lg:w-4/12 px-[15px] order-1">
                        {/* Hero Content Start */}
                        <div className="hero-content">
                            <div className="section-title">
                                <h3 className="wow fadeInUp text-[15px] font-medium uppercase tracking-[2px] text-accent flex items-center gap-2">
                                    <span className="text-accent text-[18px]"></span> Welcome To {BANK_NAME}
                                </h3>
                                <h1 className="text-anime-style-3 text-white text-[56px] lg:text-[58px] font-bold leading-[1.1] mb-6">
                                    Empowering your <br className="hidden md:block" /> Day to Day Banking
                                </h1>
                                <p className="wow fadeInUp text-white/80 text-[18px] max-w-[500px]">
                                    Simple and secure personal banking available in person, online, or on your device.
                                </p>
                            </div>
                            {/* Section Title End */}

                            <div className="hero-content-form mt-[40px]">
                                <div className="flex flex-wrap gap-4 items-center">
                                    <Link href="/register" className="btn-default border border-transparent !bg-[#131b26] hover:!bg-[#131b26]/90 !text-white !px-8 flex items-center gap-2">
                                        Enrol New Account
                                    </Link>
                                    <Link href="/login" className="btn-highlighted border border-transparent !bg-[#D8E28C] hover:!bg-[#D8E28C]/90 !text-[#131b26] !px-8 flex items-center gap-2">
                                        Login
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Hero Content End */}
                    </div>

                    <div className="w-full lg:w-4/12 px-[15px] order-3 lg:order-2 mt-10 lg:mt-0">
                        {/* Hero Images Start */}
                        <div className="hero-images group">
                            {/* Hero Image Start */}
                            <div className="hero-img">
                                <figure className="image-anime">
                                    <Image
                                        src="/temp/custom/assets/images/hero-image.jpg"
                                        alt=""
                                        width={416}
                                        height={640}
                                        style={{ width: "100%", height: "auto" }}
                                        priority
                                    />
                                </figure>
                            </div>
                            {/* Hero Image End */}

                            {/* Payment Method Image Start */}
                            <div className="payment-method-image">
                                <Image
                                    src="/temp/custom/assets/images/payment-method-image.png"
                                    alt=""
                                    width={255}
                                    height={150}
                                    style={{ width: "100%", height: "auto", maxWidth: "255px" }}
                                />
                            </div>
                            {/* Payment Method Image End */}
                        </div>
                        {/* Hero Images End */}
                    </div>

                    <div className="w-full md:w-6/12 lg:w-4/12 px-[15px] order-2 lg:order-3 mt-10 lg:mt-0">
                        {/* Hero Counter Box Start */}
                        <div className="hero-counter-box">
                            {/* Hero Counter Item Start */}
                            <div className="hero-counter-item">
                                <h2><span className="counter">13</span>M+</h2>
                                <p className="wow fadeInUp">The first credit card ever issued was made of cardboard and was introduced by American Express in 1958.</p>
                            </div>
                            {/* Hero Counter Item End */}

                            {/* Hero Counter Item Start */}
                            <div className="hero-counter-item">
                                <h2><span className="counter">0</span>%</h2>
                                <p className="wow fadeInUp" data-wow-delay="0.25s">we believe that you should keep more of what you earn. That's why we're excited to offer a 0% commission.</p>
                            </div>
                            {/* Hero Counter Item End */}
                        </div>
                        {/* Hero Counter Box End */}
                    </div>
                </div>
            </div>
        </div>
    );
}
