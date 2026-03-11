"use client";

import Image from "next/image";
import Link from "next/link";
import { useTextReveal, useStaggerFadeUp, useImageReveal } from "@/lib/animations";

const chooseItems = [
    {
        no: "01",
        title: "unparalleled expertise",
        desc: "Our team comprises seasoned professionals with extensive.",
        image: "/temp/custom/assets/images/why-choose-image-1.jpg",
        delay: "0s",
    },
    {
        no: "02",
        title: "cash flow optimization",
        desc: "Improve cash flow through structured savings, budgeting techniques",
        image: "/temp/custom/assets/images/why-choose-image-2.jpg",
        delay: "0.25s",
    },
    {
        no: "03",
        title: "financial accountability",
        desc: "Stay on track with your financial goals through regular check-ins",
        image: "/temp/custom/assets/images/why-choose-image-3.jpg",
        delay: "0.5s",
    },
];

export default function OurApproach() {
    const sectionRef = useStaggerFadeUp(".wow.fadeInUp", 0.2);
    useTextReveal();
    const imageRevealRef = useImageReveal();

    return (
        <div ref={sectionRef} className="why-choose-us bg-white">
            <div className="container" ref={imageRevealRef}>
                <div className="row section-row align-items-center mb-[80px] flex flex-wrap -mx-[15px]">
                    <div className="col-lg-7 w-full lg:w-7/12 px-[15px]">
                        <div className="section-title mb-0 lg:mr-[20px]">
                            <h3 className="wow fadeInUp">why choose us</h3>
                            <h2 className="text-anime-style-3 text-[46px] leading-[1.2] font-semibold text-primary" data-cursor="-opaque">
                                Expertise and client focused solutions for your success
                            </h2>
                        </div>
                    </div>

                    <div className="col-lg-5 w-full lg:w-5/12 px-[15px] mt-10 lg:mt-0">
                        <div className="section-title-content wow fadeInUp" data-wow-delay="0.25s">
                            <p className="m-0 text-text-color text-[15px] leading-[1.8em]">
                                Our team of experienced professionals delivers personalized, results-driven financial strategies tailored to your unique goals. We prioritize transparency, trust, and long-term success.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row flex flex-wrap -mx-[15px]">
                    {chooseItems.map((item, idx) => (
                        <div key={idx} className="col-lg-4 col-md-6 w-full md:w-1/2 lg:w-1/3 px-[15px]">
                            <div className="why-choose-item wow fadeInUp" data-wow-delay={item.delay}>
                                <div className="why-choose-image reveal">
                                    <figure>
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={400}
                                            height={500}
                                            style={{ width: "100%", height: "auto" }}
                                            className="object-cover transition-all duration-400 group-hover:scale-110"
                                        />
                                    </figure>
                                </div>

                                <div className="why-choose-no">
                                    <h3>{item.no}</h3>
                                </div>

                                <div className="why-choose-body">
                                    <div className="why-choose-content">
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>

                                    <div className="why-choose-btn">
                                        <Link href="#" className="readmore-btn">
                                            <Image
                                                src="/temp/custom/assets/images/icon-arrow.svg"
                                                alt=""
                                                width={24}
                                                height={24}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
