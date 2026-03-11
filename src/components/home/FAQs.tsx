"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTextReveal } from "@/lib/animations";
import { BANK_NAME } from "@/config/constants";

const faqs = [
    {
        question: `How do I register for mobile banking at ${BANK_NAME}?`,
        answer: `If you are enrolled in Online Banking, simply use your user name and password to log in to your accounts through the ${BANK_NAME} Savings app. After logging in, Android® and iPhone® users may also enroll in the ${BANK_NAME} Savings Mobile Deposit service to deposit checks using the mobile app.`,
    },
    {
        question: "What is Mobile Deposit?",
        answer: `Our Mobile Deposit allows you to deposit a check through the ${BANK_NAME} Savings mobile app using your internet-enabled iPhone® or Android™ mobile device, provided your device has a camera. You must be an Online or Mobile banking customer, and enrolled in the ${BANK_NAME} Savings Mobile Deposit service.`,
    },
    {
        question: "What is your overdraft policy?",
        answer: "We offer several overdraft protection options to help you avoid fees. Please contact our support team for a detailed breakdown of our current policies.",
    },
    {
        question: "Are my deposits FDIC-insured?",
        answer: "Yes, all deposits are insured by the FDIC up to the maximum limit allowed by law, ensuring your money is safe and secure.",
    },
    {
        question: "What is the minimum balance for accounts?",
        answer: "Minimum balance requirements vary by account type. Some checking accounts have no minimum, while certain savings accounts may require a small balance to earn interest.",
    },
    {
        question: "How do I report a lost or stolen card?",
        answer: "If your card is lost or stolen, please login to our mobile app immediately to lock it, or call our 24/7 customer support line for assistance.",
    },
];

export default function FAQs() {
    useTextReveal();
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div id="faqs-section" className="our-faqs bg-white overflow-hidden py-[100px]">
            <div className="container">
                <div className="row section-row align-items-center mb-[80px] flex flex-wrap -mx-[15px]">
                    <div className="col-lg-7 w-full lg:w-7/12 px-[15px]">
                        <div className="section-title mb-0">
                            <h3 className="wow fadeInUp text-[#114a43] text-[15px] font-medium capitalize inline-block pl-[24px] mb-[20px] relative">
                                frequently asked questions
                            </h3>
                            <h2 className="text-[46px] leading-[1.2] font-semibold text-primary">
                                Answers to your common questions
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-5 w-full lg:w-5/12 px-[15px] mt-6 lg:mt-0 text-right">
                        <div className="section-btn">
                            <Link href="#" className="btn-default">contact now</Link>
                        </div>
                    </div>
                </div>

                <div className="our-faqs-box w-full">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="faqs-item border-b border-gray-200 last:border-b-0"
                        >
                            <button
                                onClick={() => isMounted && setActiveIndex(activeIndex === idx ? null : idx)}
                                className="w-full py-[20px] px-0 flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                                <h3 className="text-primary font-semibold text-[16px] text-left">
                                    {faq.question}
                                </h3>
                                <span className={`flex-shrink-0 ml-[20px] text-accent font-bold text-[20px] transition-transform duration-300 ${isMounted && activeIndex === idx ? 'rotate-180' : ''
                                    }`}>
                                    +
                                </span>
                            </button>
                            {isMounted && activeIndex === idx && (
                                <div className="pb-[20px] px-0">
                                    <p className="text-text-color text-[15px] leading-[1.8] m-0">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
