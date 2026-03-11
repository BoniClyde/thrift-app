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
                <div className="flex flex-wrap lg:flex-nowrap items-center -mx-[15px]">
                    <div className="w-full lg:w-4/12 px-[15px] order-1">
                        <div className="hero-content">
                            <div className="section-title">
                                <h3 className="wow fadeInUp">Welcome to {BANK_NAME}</h3>
                                <h1 className="text-anime-style-3">Empowering your Day to Day Banking</h1>
                                <p className="wow fadeInUp">
                                    Simple and secure personal banking available in person, online, or on your device.
                                </p>
                            </div>

                            <div className="hero-content-form mt-[40px]">
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/register" className="btn-highlighted">
                                        Enrol New Account
                                    </Link>
                                    <Link href="/login" className="btn-default">
                                        Login
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-4/12 px-[15px] order-2 mt-10 lg:mt-0">
                        <div className="hero-images relative">
                            <div className="hero-img">
                                <figure className="image-anime">
                                    <Image
                                        src="/temp/custom/assets/images/hero-image.jpg"
                                        alt=""
                                        width={500}
                                        height={770}
                                        style={{ width: "100%", height: "auto" }}
                                        priority
                                    />
                                </figure>
                            </div>
                            <div className="payment-method-image">
                                <Image
                                    src="/temp/custom/assets/images/payment-method-image.png"
                                    alt=""
                                    width={255}
                                    height={150}
                                    style={{ width: "auto", height: "auto" }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-4/12 px-[15px] order-3 mt-10 lg:mt-0">
                        <div className="hero-counter-box lg:pl-[30px]">
                            <div className="hero-counter-item">
                                <h2>13M+</h2>
                                <p className="wow fadeInUp">
                                    The first credit card ever issued was made of cardboard and was introduced by American Express in 1958.
                                </p>
                            </div>

                            <div className="hero-counter-item">
                                <h2>0%</h2>
                                <p className="wow fadeInUp">
                                    we believe that you should keep more of what you earn. That's why we're excited to offer a 0% commission.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
