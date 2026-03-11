"use client";

"use client";

import Image from "next/image";
import Link from "next/link";
import { useTextReveal, useStaggerFadeUp, useImageReveal } from "@/lib/animations";

const posts = [
    {
        date: "10 Mar, 2025",
        title: "How to maximize your savings with our new plan",
        image: "/temp/custom/assets/images/why-choose-image-1.jpg",
    },
    {
        date: "05 Mar, 2025",
        title: "Understanding mortgage rates in today's market",
        image: "/temp/custom/assets/images/why-choose-image-2.jpg",
    },
    {
        date: "01 Mar, 2025",
        title: "The benefits of business consulting for experts",
        image: "/temp/custom/assets/images/why-choose-image-3.jpg",
    },
];

export default function LatestPosts() {
    const sectionRef = useStaggerFadeUp(".wow.fadeInUp", 0.2);
    useTextReveal();
    const imageRevealRef = useImageReveal();
    return (
        <div ref={sectionRef} className="latest-posts py-[100px] bg-white overflow-hidden">
            <div className="container mx-auto px-[15px]" ref={imageRevealRef}>
                <div className="flex flex-wrap items-center mb-[80px] -mx-[15px]">
                    <div className="w-full lg:w-7/12 px-[15px]">
                        <div className="section-title mb-0">
                            <h3 className="wow fadeInUp inline-block relative font-inter text-[15px] font-medium text-dark pl-6 mb-5 before:content-[''] before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-[14px] before:h-[14px] before:bg-[url('/temp/custom/assets/images/icon-sub-heading-primary.svg')] before:bg-cover">
                                latest posts
                            </h3>
                            <h2 className="text-anime-style-3 text-[46px] font-onest font-semibold leading-[1.2] text-primary">
                                Stay updated with our latest news & articles
                            </h2>
                        </div>
                    </div>
                    <div className="w-full lg:w-5/12 text-right">
                        <Link href="#" className="btn-default py-4 px-10 after:bg-primary">
                            explore all news
                        </Link>
                    </div>
                </div>

                <div className="flex flex-wrap -mx-[15px]">
                    {posts.map((post, idx) => (
                        <div key={idx} className="w-full md:w-1/2 lg:w-1/3 px-[15px] mb-8 lg:mb-0">
                            <div className="post-item group bg-secondary rounded-[40px] overflow-hidden border border-divider hover:shadow-xl transition-all duration-500">
                                <div className="relative h-[250px] min-h-[250px] overflow-hidden reveal">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        style={{ objectFit: "cover" }}
                                        className="group-hover:scale-110 transition-transform duration-700"
                                        priority={idx === 0}
                                    />
                                    <div className="absolute top-6 left-6 bg-accent px-4 py-2 rounded-full">
                                        <span className="text-primary font-bold text-sm">{post.date}</span>
                                    </div>
                                </div>
                                <div className="p-10">
                                    <h3 className="text-[22px] font-onest font-semibold text-primary mb-6 group-hover:text-dark transition-colors line-clamp-2 min-h-[66px]">
                                        <Link href="#">{post.title}</Link>
                                    </h3>
                                    <div className="flex items-center justify-between border-t border-divider pt-6">
                                        <Link href="#" className="text-primary font-bold uppercase text-sm tracking-wider hover:text-dark transition-colors">
                                            Read More
                                        </Link>
                                        <Image src="/temp/custom/assets/images/icon-arrow.svg" alt="" width={16} height={16} />
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
