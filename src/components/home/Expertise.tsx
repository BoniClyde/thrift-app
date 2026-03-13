"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useStaggerFadeUp, useTextReveal, useImageReveal } from "@/lib/animations";
import { BANK_NAME } from "@/config/constants";

interface TabData {
    id: string;
    label: string;
    title: string;
    desc: string;
    image: string;
    list: string[];
}

interface ExpertiseProps {
    title?: string;
    description?: string;
    subtitle?: string;
    tabs?: TabData[];
    ctaText?: string;
    ctaLink?: string;
}

const originalTabs = [
    { id: "financial", label: "Financial Wisdom" },
    { id: "strategic", label: "Strategic Advice" },
    { id: "investment", label: "Investment Benefits" },
];

const originalContent = {
    financial: {
        title: "Mastering your finances:",
        desc: "Unlock the secrets to sustainable wealth and long-term financial security with our expert-led guidance and holistic planning.",
        list: [
            "Financial Literacy Programs",
            "Debt Management Plans",
            "Retirement Readiness Tools",
        ],
        image: "/temp/custom/assets/images/why-choose-image-1.jpg",
    },
    strategic: {
        title: "Your roadmap to success:",
        desc: "Navigate complex markets and business challenges with precision using our data-driven strategic advisory services.",
        list: [
            "Market Analysis & Insights",
            "Risk Assessment Frameworks",
            "Growth Strategy Consulting",
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

export default function Expertise({ title, description, subtitle, tabs, ctaText, ctaLink }: ExpertiseProps) {
    const [activeTab, setActiveTab] = useState<string>("financial");
    const [isMounted, setIsMounted] = useState(false);
    const sectionRef = useStaggerFadeUp(".wow.fadeInUp", 0.2);
    useTextReveal();
    const imageRevealRef = useImageReveal();

    useEffect(() => {
        setIsMounted(true);
        if (tabs && tabs.length > 0) {
            setActiveTab(tabs[0].id);
        }
    }, [tabs]);

    const tabsToUse = tabs || originalTabs;
    const contentToUse = tabs
        ? Object.fromEntries(tabs.map(t => [t.id, t]))
        : originalContent;

    const currentTab = tabs
        ? (tabs.find(t => t.id === activeTab) || tabs[0])
        : (originalContent[activeTab as keyof typeof originalContent] || originalContent.financial);

    const defaultCtaText = tabs ? "Contact Now" : "Contact Now";
    const defaultCtaLink = tabs ? "/contact" : "/contact";

    return (
        <div ref={sectionRef} className="our-expertise bg-section py-[100px]">
            <div className="container">
                <div className="section-title mb-[80px]">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">
                        <div className="w-full lg:w-6/12">
                            <h3 className="wow fadeInUp text-[15px] font-medium capitalize text-primary flex items-center gap-2 mb-4">
                                <span className="text-[18px] text-primary">*</span> {subtitle || "Our Expertise"}
                            </h3>
                            <h2 className="text-anime-style-3 text-[46px] lg:text-[56px] leading-[1.1] font-bold text-primary" data-cursor="-opaque">
                                {title || "Driving innovation and success in Industry Insights"}
                            </h2>
                        </div>
                        <div className="w-full lg:w-5/12 pt-4">
                            <p className="wow fadeInUp text-text-color text-[18px] m-0 leading-[1.8em]" data-wow-delay="0.25s">
                                {description || `${BANK_NAME} Invent is our enterprise approach to innovation and supports our business strategy as a forward-focused bank. It's about using emerging technology to engage with our customers and exceeding their rapidly evolving expectations.`}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="our-tab-nav wow fadeInUp mb-[60px]" data-wow-delay="0.25s">
                            <ul className="nav nav-tabs flex flex-wrap justify-between gap-4 border-0 w-full mb-0">
                                {tabsToUse.map((tab) => (
                                    <li key={tab.id} className="nav-item flex-1 min-w-[200px] text-center">
                                        <button
                                            onClick={() => isMounted && setActiveTab(tab.id)}
                                            className={`nav-link w-full text-[16px] font-medium px-[20px] py-[15px] rounded-[100px] transition-all duration-300 ${isMounted && activeTab === tab.id
                                                    ? "bg-primary text-white"
                                                    : "bg-transparent text-primary hover:bg-primary/5"
                                                }`}
                                        >
                                            {tab.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="expertise-box mt-10">
                            <div className="expertise-item">
                                <div className="flex flex-col lg:flex-row items-center gap-10">
                                    <div className="w-full lg:w-5/12">
                                        <div className="expertise-content">
                                            <div className="expertise-content-header mb-[40px]">
                                                <h3 className="text-[24px] font-bold text-primary mb-[20px]">
                                                    {currentTab.title}
                                                </h3>
                                                <p className="m-0 text-text-color leading-[1.8em]">
                                                    {currentTab.desc}
                                                </p>
                                            </div>

                                            <div className="expertise-content-body space-y-[20px] mb-[40px]">
                                                {currentTab.list.map((item, idx) => (
                                                    <div key={idx} className="expertise-list-item flex items-center">
                                                        <div className="icon-box w-[40px] h-[40px] rounded-full flex items-center justify-center mr-[20px]">
                                                            <Image
                                                                src={`/temp/custom/assets/images/icon-expertise-list-${(idx % 3) + 1}.svg`}
                                                                alt=""
                                                                width={30}
                                                                height={30}
                                                                style={{ width: "auto", height: "auto" }}
                                                            />
                                                        </div>
                                                        <div className="expertise-list-content flex-1">
                                                            <p className="m-0 text-primary font-medium">{item}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="expertise-btn mt-10">
                                                <Link href={ctaLink || defaultCtaLink} className="btn-default">
                                                    {ctaText || defaultCtaText}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full lg:w-7/12 mt-10 lg:mt-0">
                                        <div className="expertise-image reveal" ref={imageRevealRef}>
                                            <figure className="rounded-[30px] overflow-hidden m-0 shadow-lg">
                                                {isMounted && (
                                                    <Image
                                                        src={currentTab.image}
                                                        alt={activeTab}
                                                        width={900}
                                                        height={600}
                                                        priority
                                                        style={{ width: "100%", height: "auto" }}
                                                        className="object-cover transition-transform duration-700 hover:scale-105"
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
