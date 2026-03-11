"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTextReveal, useStaggerFadeUp, useImageReveal } from "@/lib/animations";
import { BANK_NAME } from "@/config/constants";

const tabs = [
    { id: "financial", label: "Financial Planning" },
    { id: "business", label: "Business Consulting" },
    { id: "risk", label: "Risk Management" },
    { id: "investment", label: "Investment Management" },
];

const expertiseContent = {
    financial: {
        title: "Benefits of our financial:",
        desc: "Empower your financial journey with expert advice, personalized strategies, and solutions designed to help you achieve long-term stability, growth, and peace of mind.",
        list: [
            "expert nvestment management",
            "Social Security and Pension Optimization",
            "business financial planning",
        ],
        image: "/temp/custom/assets/images/expertise-financial-img.jpg",
    },
    business: {
        title: "Benefits of our business:",
        desc: "Empower your business journey with expert advice, personalized strategies, and solutions designed to help you achieve long-term stability, growth, and peace of mind.",
        list: [
            "Strategic Business Consulting",
            "Market Analysis & Research",
            "Operational Excellence",
        ],
        image: "/temp/custom/assets/images/why-choose-image-1.jpg",
    },
    risk: {
        title: "Benefits of our risk mgmt:",
        desc: "Protect your assets and future with our comprehensive risk management solutions tailored to your unique needs.",
        list: [
            "Comprehensive Risk Assessment",
            "Insurance Optimization",
            "Contingency Planning",
        ],
        image: "/temp/custom/assets/images/why-choose-image-2.jpg",
    },
    investment: {
        title: "Benefits of our investment:",
        desc: "Grow your wealth sustainably with our proven investment strategies and expert portfolio management.",
        list: [
            "Portfolio Diversification",
            "Asset Allocation Strategies",
            "Performance Monitoring",
        ],
        image: "/temp/custom/assets/images/why-choose-image-3.jpg",
    },
};

export default function Expertise() {
    const [activeTab, setActiveTab] = useState<keyof typeof expertiseContent>("financial");
    const [isMounted, setIsMounted] = useState(false);
    const sectionRef = useStaggerFadeUp(".wow.fadeInUp", 0.2);
    useTextReveal();
    const imageRevealRef = useImageReveal();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div ref={sectionRef} className="our-expertise bg-section">
            <div className="container">
                <div className="row section-row align-items-center flex flex-wrap -mx-[15px]">
                    <div className="col-lg-7 w-full lg:w-7/12 px-[15px]">
                        <div className="section-title">
                            <h3 className="wow fadeInUp text-[#114a43] text-[15px] font-medium capitalize inline-block pl-[24px] mb-[20px] relative">
                                our expertise
                            </h3>
                            <h2 className="text-anime-style-3 text-[46px] leading-[1.2] font-semibold text-primary" data-cursor="-opaque">
                                Driving innovation and success in Industry Insights
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-5 w-full lg:w-5/12 px-[15px]">
                        <div className="section-title-content wow fadeInUp" data-wow-delay="0.25s">
                            <p className="text-text-color m-0 leading-[1.8em]">
                                {BANK_NAME} Invent is our enterprise approach to innovation and supports our business strategy as a forward-focused bank.
                                It's about using emerging technology to engage with our customers and exceeding their rapidly evolving expectations.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row flex flex-wrap -mx-[15px]">
                    <div className="col-lg-12 w-full px-[15px]">
                        <div className="our-tab-nav wow fadeInUp" data-wow-delay="0.25s">
                            <ul className="nav nav-tabs">
                                {tabs.map((tab) => (
                                    <li key={tab.id} className="nav-item">
                                        <button
                                            onClick={() => isMounted && setActiveTab(tab.id as any)}
                                            className={cn(
                                                "nav-link btn-highlighted",
                                                isMounted && activeTab === tab.id && "active"
                                            )}
                                        >
                                            {tab.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="expertise-box">
                            <div className="expertise-item">
                                <div className="row align-items-center flex flex-wrap -mx-[15px]">
                                    <div className="col-lg-6 w-full lg:w-1/2 px-[15px]">
                                        <div className="expertise-content bg-white rounded-[30px] p-[40px] shadow-sm">
                                            <div className="expertise-content-header mb-[40px]">
                                                <h3 className="text-[20px] font-semibold text-primary mb-[20px]">
                                                    {isMounted && expertiseContent[activeTab].title}
                                                </h3>
                                                <p className="m-0 text-text-color leading-[1.8em]">
                                                    {isMounted && expertiseContent[activeTab].desc}
                                                </p>
                                            </div>

                                            <div className="expertise-content-body space-y-[20px] mb-[40px]">
                                                {isMounted && expertiseContent[activeTab].list.map((item, idx) => (
                                                    <div key={idx} className="expertise-list-item flex items-center">
                                                        <div className="icon-box w-[40px] h-[40px] bg-secondary rounded-full flex items-center justify-center mr-[20px]">
                                                            <Image
                                                                src={`/temp/custom/assets/images/icon-expertise-list-${(idx % 3) + 1}.svg`}
                                                                alt=""
                                                                width={24}
                                                                height={24}
                                                                style={{ width: "auto", height: "auto" }}
                                                            />
                                                        </div>
                                                        <div className="expertise-list-content">
                                                            <p className="m-0 text-primary capitalize font-medium">{item}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="expertise-btn">
                                                <Link href="/contact" className="btn-default">
                                                    contact now
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 w-full lg:w-1/2 px-[15px] mt-10 lg:mt-0">
                                        <div className="expertise-image reveal" ref={imageRevealRef}>
                                            <figure className="rounded-[30px] overflow-hidden">
                                                {isMounted && (
                                                    <Image
                                                        src={expertiseContent[activeTab].image}
                                                        alt={activeTab}
                                                        width={600}
                                                        height={450}
                                                        priority
                                                        style={{ width: "100%", height: "auto" }}
                                                        className="object-cover transition-transform duration-700 hover:scale-110"
                                                    />
                                                )}
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
