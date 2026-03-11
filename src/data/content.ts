import { BANK_NAME } from "@/config/constants";

// Hero Section
export const heroContent = {
    subtitle: `Welcome to ${BANK_NAME}`,
    title: "Empowering your Day to Day Banking",
    description: "Simple and secure personal banking available in person, online, or on your device.",
    cta1: "Enrol New Account",
    cta2: "Login",
    counters: [
        {
            value: 13,
            suffix: "M+",
            description: "The first credit card ever issued was made of cardboard and was introduced by American Express in 1958.",
        },
        {
            value: 0,
            suffix: "%",
            description: "we believe that you should keep more of what you earn. That's why we're excited to offer a 0% commission.",
        },
    ],
};

// FAQs Section
export const faqsContent = {
    subtitle: "frequently asked questions",
    title: "Answers to your common questions",
    contactButtonText: "contact now",
    faqs: [
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
    ],
};

// Company Wisdom Section
export const companyWisdomContent = {
    subtitle: "financial wisdom",
    title: "Fascinating facts that shape your financial knowledge",
    description: "Explore fun and surprising facts about the financial world. Learn how history, trends, and innovations have shaped today's finance landscape, making it easier to navigate your financial journey.",
    items: [
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
    ],
};

// About Us Section
export const aboutUsContent = {
    subtitle: "about us",
    title: "Empowering businesses and individuals with experts",
    description: "We are dedicated to helping businesses and individuals navigate the complexities of finance with confidence and clarity. With years of experience in financial planning, investment management, business consulting.",
    features: [
        {
            icon: "icon-about-company-1.svg",
            title: "expertise you can trust",
            description: "Our experienced team delivers reliable insights and strategies, ensuring your financial decisions are well-informed and secure.",
        },
        {
            icon: "icon-about-company-2.svg",
            title: "personalized solutions",
            description: "Our personalized solutions are crafted address your unique financial helping you achieve your specific goals and aspirations.",
        },
        {
            icon: "icon-about-company-3.svg",
            title: "proven track record",
            description: "Our proven track record highlights successful outcomes and client satisfaction through effective financial solutions.",
        },
    ],
    videoSrc: "/temp/custom/assets/videos/hero.mp4",
    videoPoster: "/temp/custom/assets/images/hero-image.jpg",
    videoTitle: `${BANK_NAME} Video`,
};

// Expertise Section
export const expertiseContent = {
    subtitle: "our expertise",
    title: "Driving innovation and success in Industry Insights",
    description: `${BANK_NAME} Invent is our enterprise approach to innovation and supports our business strategy as a forward-focused bank. It's about using emerging technology to engage with our customers and exceeding their rapidly evolving expectations.`,
    tabs: [
        { id: "financial", label: "Financial Planning" },
        { id: "business", label: "Business Consulting" },
        { id: "risk", label: "Risk Management" },
        { id: "investment", label: "Investment Management" },
    ],
    tabContent: {
        financial: {
            title: "Benefits of our financial:",
            desc: "Empower your financial journey with expert advice, personalized strategies, and solutions designed to help you achieve long-term stability, growth, and peace of mind.",
            list: [
                "expert nvestment management",
                "Social Security and Pension Optimization",
                "business financial planning",
            ],
            image: "/temp/custom/assets/images/expertise-financial-img.jpg",
        },
        business: {
            title: "Benefits of our business:",
            desc: "Empower your business journey with expert advice, personalized strategies, and solutions designed to help you achieve long-term stability, growth, and peace of mind.",
            list: [
                "Strategic Business Consulting",
                "Market Analysis & Research",
                "Operational Excellence",
            ],
            image: "/temp/custom/assets/images/why-choose-image-1.jpg",
        },
        risk: {
            title: "Benefits of our risk mgmt:",
            desc: "Protect your assets and future with our comprehensive risk management solutions tailored to your unique needs.",
            list: [
                "Comprehensive Risk Assessment",
                "Insurance Optimization",
                "Contingency Planning",
            ],
            image: "/temp/custom/assets/images/why-choose-image-2.jpg",
        },
        investment: {
            title: "Benefits of our investment:",
            desc: "Grow your wealth sustainably with our proven investment strategies and expert portfolio management.",
            list: [
                "Portfolio Diversification",
                "Asset Allocation Strategies",
                "Performance Monitoring",
            ],
            image: "/temp/custom/assets/images/why-choose-image-3.jpg",
        },
    },
};

// Footer Content
export const footerContent = {
    about: "Your trusted partner in financial excellence. Providing world-class banking solutions since 1995.",
    contact: {
        phone: "+1 (555) 123-4567",
        email: "support@quickflow.com",
        address: "123 Banking Street, Financial City, FC 12345",
    },
    sections: {
        personal: [
            { label: "Checking Accounts", href: "/checking" },
            { label: "Savings Accounts", href: "/savings" },
            { label: "Credit Cards", href: "/credit-cards" },
            { label: "Personal Loans", href: "/personal-loans" },
            { label: "Mortgages", href: "/mortgages" },
            { label: "Auto Loans", href: "/auto-loans" },
        ],
        business: [
            { label: "Business Checking", href: "/business-checking" },
            { label: "Business Loans", href: "/business-loans" },
            { label: "Merchant Services", href: "/merchant-services" },
            { label: "Payroll Services", href: "/payroll" },
            { label: "Treasury Management", href: "/treasury" },
            { label: "Corporate Cards", href: "/corporate-cards" },
        ],
        investments: [
            { label: "Investment Accounts", href: "/investment-accounts" },
            { label: "Wealth Management", href: "/wealth-management" },
            { label: "Retirement Planning", href: "/retirement-planning" },
            { label: "Insurance Products", href: "/insurance-products" },
            { label: "Advisory Services", href: "/advisory-services" },
            { label: "Estate Planning", href: "/estate-planning" },
        ],
        support: [
            { label: "Contact Us", href: "/contact-us" },
            { label: "FAQs", href: "/faq" },
            { label: "Branch Locator", href: "/locations" },
            { label: "About Us", href: "/about-us" },
            { label: "Careers", href: "/careers" },
            { label: "Blog", href: "/blog" },
        ],
    },
    disclaimer: `This website is for informational purposes only. ${BANK_NAME} does not provide investment advice. Please consult with a financial advisor before making investment decisions. All products and services are subject to applicable laws and regulations.`,
    security: `${BANK_NAME} uses industry-leading encryption and security measures to protect your information. We are FDIC insured and comply with all federal banking regulations.`,
    legalLinks: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Security", href: "/security" },
        { label: "Accessibility", href: "/accessibility" },
        { label: "Sitemap", href: "/sitemap" },
    ],
};
