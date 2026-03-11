"use client";

import Image from "next/image";

export default function ScrollingTicker() {
    const tickerItems = [
        "International Banking",
        "Flexible Mortgage",
        "Low Rate Loans",
        "Secured Payments",
        "Market Data",
        "Credit/Debit Cards",
        "Insurance",
        "Business Loan",
        "Offshore Account",
        "Latest Financial News",
        "Security & Trust",
    ];

    return (
        <div className="our-scrolling-ticker">
            <div className="scrolling-ticker-box">
                <div className="scrolling-content">
                    {tickerItems.map((item, idx) => (
                        <span key={idx}>
                            <Image
                                src="/temp/custom/assets/images/asterisk-icon.svg"
                                alt=""
                                width={18}
                                height={18}
                            />
                            {item}
                        </span>
                    ))}
                </div>
                <div className="scrolling-content">
                    {tickerItems.map((item, idx) => (
                        <span key={`dup-${idx}`}>
                            <Image
                                src="/temp/custom/assets/images/asterisk-icon.svg"
                                alt=""
                                width={18}
                                height={18}
                            />
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
