"use client";

import Image from "next/image";
import { useTextReveal } from "@/lib/animations";

const services = [
    {
        tag: "financial planning",
        title: "Strategic Business Consulting for Growth Success",
        image: "/temp/custom/assets/images/service-box-image-1.png",
    },
    {
        tag: "business consulting",
        title: "Comprehensive Financial Planning for Your Future",
        image: "/temp/custom/assets/images/service-box-image-2.png",
    },
    {
        tag: "Want to own your own home?",
        title: "Check Out Our Morgage Plan",
        image: "/temp/custom/assets/images/service-box-image-3.png",
    },
];

export default function Services() {
    useTextReveal();

    return (
        <div className="our-services overflow-hidden">
            <div className="container">
                <div className="row section-row align-items-center mb-[80px] flex flex-wrap -mx-[15px]">
                    <div className="col-lg-7 w-full lg:w-7/12 px-[15px]">
                        <div className="section-title mb-0">
                            <h3 className="wow fadeInUp text-[#114a43] text-[15px] font-medium capitalize inline-block pl-[24px] mb-[20px] relative">our services</h3>
                            <h2 className="text-anime-style-3 text-[46px] leading-[1.2] font-semibold text-primary" data-cursor="-opaque">
                                Expert financial services for your needs
                            </h2>
                        </div>
                    </div>

                    <div className="col-lg-5 w-full lg:w-5/12 px-[15px] mt-10 lg:mt-0">
                        <div className="section-title-content wow fadeInUp" data-wow-delay="0.25s">
                            <p className="m-0 text-text-color text-[15px] leading-[1.8em]">
                                Move funds between your accounts and schedule transfers, plus use Send Money with Zelle® to pay friends quickly, easily and for free. View all your account activity and balances, pay bills automatically, set up e-mail alerts and more.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row flex flex-wrap -mx-[15px]">
                    {services.map((service, idx) => (
                        <div key={idx} className="col-lg-4 col-md-6 w-full md:w-1/2 lg:w-1/3 px-[15px]">
                            <div className={`service-box ${idx % 2 === 1 ? 'bg-dark' : 'bg-secondary'}`}>
                                <div className="service-box-header">
                                    <div className="service-box-tag">
                                        <a href="#">{service.tag}</a>
                                    </div>
                                    <div className="service-box-title">
                                        <h3 className={idx % 2 === 1 ? 'text-white' : 'text-primary'}>{service.title}</h3>
                                    </div>
                                </div>
                                <div className="service-box-image relative w-full h-[250px] overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        style={{ objectFit: "cover" }}
                                        loading={idx === 0 ? "eager" : "lazy"}
                                        priority={idx === 0}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
