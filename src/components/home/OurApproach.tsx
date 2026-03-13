"use client";

import Image from "next/image";
import Link from "next/link";
import { useTextReveal, useStaggerFadeUp, useImageReveal } from "@/lib/animations";

export default function OurApproach() {
    const sectionRef = useStaggerFadeUp(".wow.fadeInUp", 0.2);
    useTextReveal();
    const imageRevealRef = useImageReveal();

    return (
        <div id="our-approach-section" ref={sectionRef} className="our-approach bg-section">
            <div className="container" ref={imageRevealRef}>
                <div className="row section-row align-items-center mb-[100px] flex flex-wrap -mx-[15px]">
                    <div className="col-lg-7 w-full lg:w-7/12 px-[15px]">
                        <div className="section-title mb-0">
                            <h3 className="wow fadeInUp">our approach</h3>
                            <h2 className="text-anime-style-3 text-[46px] leading-[1.2] font-semibold text-white" data-cursor="-opaque">
                                Client centric strategy for lasting success
                            </h2>
                        </div>
                    </div>

                    <div className="col-lg-5 w-full lg:w-5/12 px-[15px] mt-10 lg:mt-0">
                        <div className="section-title-content wow fadeInUp" data-wow-delay="0.25s">
                            <p className="m-0 text-white text-[15px] leading-[1.8em]">
                                We believe that a successful financial journey starts with understanding your unique needs and aspirations Our approach is built on a foundation of collaboration, transparency, and expertise.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-end flex flex-wrap -mx-[15px]">
                    <div className="col-lg-3 col-md-6 w-full md:w-1/2 lg:w-1/4 px-[15px] mb-8 lg:mb-0">
                        {/* Approach item Start */}
                        <div className="approach-item approach-box-1 wow fadeInUp">
                            <div className="approach-btn">
                                <Link href="#" className="readmore-btn">
                                    <Image src="/temp/custom/assets/images/icon-arrow.svg" alt="" width={24} height={24} />
                                </Link>
                            </div>
                            <div className="approach-image reveal">
                                <Image
                                    src="/temp/custom/assets/images/approach-image-1.png"
                                    alt=""
                                    width={300}
                                    height={300}
                                    style={{ width: "100%", height: "auto" }}
                                    priority
                                />
                            </div>
                            <div className="approach-body">
                                <div className="approach-tags">
                                    <Link href="#" className="tag-btn">focus</Link>
                                </div>
                                <div className="approach-content">
                                    <h3 className="text-primary">Get the real exchange rate</h3>
                                    <p className="text-text-color">
                                        We don’t charge fees for spending on your card abroad, and we pass Mastercard's exchange ratedirectly onto you, without extra charges.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 w-full md:w-1/2 lg:w-1/4 px-[15px] mb-8 lg:mb-0">
                        {/* Approach item Start */}
                        <div className="approach-item approach-box-2 wow fadeInUp" data-wow-delay="0.25s">
                            <div className="approach-content">
                                <h3 className="text-primary">
                                    We craft customized financial strategies that align with your objectives.
                                </h3>
                            </div>
                            <div className="approach-image reveal">
                                <Image src="/temp/custom/assets/images/approach-image-2.png" alt="" width={300} height={300} style={{ width: "100%", height: "auto" }} />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 w-full md:w-1/2 lg:w-1/4 px-[15px] mb-8 lg:mb-0">
                        {/* Approach item Start */}
                        <div className="approach-item approach-box-3 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="approach-header">
                                <div className="approach-body">
                                    <div className="approach-content">
                                        <p className="text-primary opacity-60">Stay on the KNOW</p>
                                        <h3 className="text-primary">Eroll for Online Banking</h3>
                                    </div>
                                    <div className="approach-tags">
                                        <Link href="#" className="tag-btn">100%</Link> Secured
                                    </div>
                                </div>
                                <div className="approach-btn">
                                    <Link href="#" className="readmore-btn">
                                        <Image src="/temp/custom/assets/images/icon-arrow.svg" alt="" width={24} height={24} />
                                    </Link>
                                </div>
                            </div>
                            <div className="approach-image reveal">
                                <Image src="/temp/custom/assets/images/approach-image-3.png" alt="" width={300} height={300} style={{ width: "100%", height: "auto" }} />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 w-full md:w-1/2 lg:w-1/4 px-[15px]">
                        {/* Approach item Start */}
                        <div className="approach-item approach-box-4 wow fadeInUp" data-wow-delay="0.75s">
                            <div className="approach-btn">
                                <Link href="#" className="readmore-btn">
                                    <Image src="/temp/custom/assets/images/icon-arrow.svg" alt="" width={24} height={24} />
                                </Link>
                            </div>
                            <div className="approach-image reveal">
                                <Image src="/temp/custom/assets/images/approach-image-4.png" alt="" width={300} height={300} className="w-full h-auto" />
                            </div>
                            <div className="approach-body">
                                <div className="approach-content">
                                    <h3 className="text-primary">
                                        You gain a trusted partner committed to your financial well-being
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
