"use client";

import Image from "next/image";
import Link from "next/link";

export default function CTABox() {
    return (
        <div id="cta-box-section" className="cta-box bg-section">
            <div className="container">
                <div className="row align-items-center flex flex-wrap -mx-[15px]">
                    <div className="col-lg-5 w-full lg:w-5/12 order-lg-1 order-2 px-[15px]">
                        <div className="cta-box-image">
                            <Image
                                src="/temp/custom/assets/images/cta-box-image.jpg"
                                alt=""
                                width={600}
                                height={700}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    <div className="col-lg-7 w-full lg:w-7/12 order-lg-2 order-1 px-[15px]">
                        <div className="cta-box-content lg:ml-[30px]">
                            <div className="section-title mb-[40px]">
                                <h3 className="wow fadeInUp">FDIC-Insured - Backed by the full faith and credit of the U.S. Government</h3>
                                <h2 className="text-[46px] leading-[1.2] font-semibold text-white">
                                    Take control of your financial future today!
                                </h2>
                                <p className="wow fadeInUp mt-[30px] mb-0 text-white opacity-80 text-[15px] leading-[1.8em]">
                                    We’ve made it easy for GreenTop Bank employees to harness their creativity,
                                    bring their ideas to life, and solve customer and colleague problems.
                                </p>
                            </div>

                            <div className="cta-box-btn flex flex-wrap gap-4">
                                <Link href="#" className="btn-default">
                                    get started today
                                </Link>
                                <Link href="#" className="btn-highlighted">
                                    explore our services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
