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

    const toggleFAQ = (index: number) => {
        if (!isMounted) return;
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div id="faqs-section" className="our-faqs bg-section">
            <div className="container">
                <div className="row section-row align-items-center">
                    <div className="col-lg-7">
                        <div className="section-title">
                            <h3 className="wow fadeInUp" data-wow-delay="0s">
                                frequently asked questions
                            </h3>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">
                                Answers to your common questions
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="section-btn wow fadeInUp" data-wow-delay="0.25s">
                            <Link href="#" className="btn-default">contact now</Link>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="our-faqs-box">
                            {faqs.map((faq, idx) => (
                                <div
                                    key={idx}
                                    className={`faqs-item wow fadeInUp ${isMounted && activeIndex === idx ? 'active' : ''}`}
                                    data-wow-delay={`${idx * 0.1}s`}
                                >
                                    <div className="faqs-item-content">
                                        <h3 onClick={() => toggleFAQ(idx)}>
                                            {faq.question}
                                        </h3>
                                        <div className="faqs-item-body">
                                            <p>{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
