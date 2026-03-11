"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTextReveal, useStaggerFadeUp } from "@/lib/animations";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const wisdomItems = [
    {
        type: "counter",
        title: "The number of publicly traded companies",
        value: 12,
        suffix: "k+",
    },
    {
        type: "image",
        src: "/temp/custom/assets/images/company-wisdom-img-1.jpg",
    },
    {
        type: "counter",
        title: "The percentage of financial advisors",
        value: 80,
        suffix: "%",
    },
    {
        type: "image",
        src: "/temp/custom/assets/images/company-wisdom-img-2.jpg",
    },
    {
        type: "counter",
        title: "The number of credit cards in circulation",
        value: 31,
        suffix: "k+",
    },
    {
        type: "image",
        src: "/temp/custom/assets/images/company-wisdom-img-3.jpg",
    },
    {
        type: "counter",
        title: "The proportion of Americans who believe that financial literacy",
        value: 90,
        suffix: "%",
    },
    {
        type: "image",
        src: "/temp/custom/assets/images/company-wisdom-img-4.jpg",
    },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const counterRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        const tl = gsap.to({ val: 0 }, {
            val: value,
            duration: 2,
            scrollTrigger: {
                trigger: counterRef.current,
                start: "top 90%",
            },
            onUpdate: function () {
                const targets = this.targets();
                if (targets && targets[0]) {
                    setCount(Math.ceil(targets[0].val));
                }
            }
        });
        return () => {
            tl.kill();
        };
    }, [value, isMounted]);

    return <h2 ref={counterRef}>{isMounted ? count : 0}{suffix}</h2>;
}

export default function CompanyWisdom() {
    const wisdomRef = useStaggerFadeUp(".wow.fadeInUp", 0.1);
    useTextReveal();

    return (
        <div ref={wisdomRef} className="company-wisdom bg-white">
            <div className="container">
                <div className="row section-row align-items-center mb-[80px] flex flex-wrap -mx-[15px]">
                    <div className="col-lg-7 w-full lg:w-7/12 px-[15px]">
                        <div className="section-title mb-0">
                            <h3 className="wow fadeInUp text-[#114a43] text-[15px] font-medium capitalize inline-block pl-[24px] mb-[20px] relative">
                                financial wisdom
                            </h3>
                            <h2 className="text-anime-style-3 text-[46px] leading-[1.2] font-semibold text-primary" data-cursor="-opaque">
                                Fascinating facts that shape your financial knowledge
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-5 w-full lg:w-5/12 px-[15px] mt-10 lg:mt-0">
                        <div className="section-title-content wow fadeInUp" data-wow-delay="0.25s">
                            <p className="m-0 text-text-color text-[15px] leading-[1.8em]">
                                Explore fun and surprising facts about the financial world. Learn how history, trends, and innovations have shaped today's finance landscape, making it easier to navigate your financial journey.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="company-wisdom-box">
                    {wisdomItems.map((item, idx) => (
                        item.type === "image" ? (
                            <div key={idx} className="company-wisdom-image wow fadeInUp">
                                <figure>
                                    <Image
                                        src={item.src!}
                                        alt=""
                                        width={300}
                                        height={300}
                                        style={{ width: "100%", height: "auto" }}
                                        className="object-cover"
                                    />
                                </figure>
                            </div>
                        ) : (
                            <div key={idx} className="company-wisdom-item wow fadeInUp">
                                <div className="company-counter-title">
                                    <h3>{item.title}</h3>
                                </div>
                                <div className="company-wisdom-counter">
                                    <Counter value={item.value!} suffix={item.suffix!} />
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
}
