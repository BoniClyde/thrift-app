"use client";

import ProductHero from "@/components/home/ProductHero";
import Expertise from "@/components/home/Expertise";
import CompanyWisdom from "@/components/home/CompanyWisdom";
import CTABox from "@/components/home/CTABox";
import FAQs from "@/components/home/FAQs";
import { BANK_DATA } from "@/config/bankData";

export default function CardsPage() {
    const data = BANK_DATA.cards;

    return (
        <>
            <ProductHero 
                title={data.hero.title}
                description={data.hero.description}
                videoSrc={data.hero.videoSrc}
            />
            <Expertise 
                title={data.expertise.title}
                description={data.expertise.description}
                tabs={data.expertise.tabs}
            />
            <CompanyWisdom />
            <CTABox />
            <FAQs />
        </>
    );
}
