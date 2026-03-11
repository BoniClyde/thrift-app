"use client";

import Hero from "@/components/home/Hero";
import ScrollingTicker from "@/components/home/ScrollingTicker";
import AboutUs from "@/components/home/AboutUs";
import Services from "@/components/home/Services";
import Expertise from "@/components/home/Expertise";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OurApproach from "@/components/home/OurApproach";
import CompanyWisdom from "@/components/home/CompanyWisdom";
import CTABox from "@/components/home/CTABox";
import FAQs from "@/components/home/FAQs";
import LatestPosts from "@/components/home/LatestPosts";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollingTicker />
      <AboutUs />
      <Services />
      <Expertise />
      <WhyChooseUs />
      <OurApproach />
      <CompanyWisdom />
      <CTABox />
      <FAQs />
      {/* <LatestPosts /> */}
    </>
  );
}
