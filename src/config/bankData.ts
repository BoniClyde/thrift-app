import { BANK_NAME } from "./constants";

export const BANK_DATA = {
    savings: {
        hero: {
            title: "Empowering Individuals and Businesses to Grow",
            description: "Maximize your wealth with tailored strategies and expert guidance. We provide comprehensive financial solutions designed to help individuals and businesses thrive in today's dynamic marketplace.",
            videoSrc: "/temp/custom/assets/videos/hero.mp4",
        },
        expertise: {
            title: "We have made banking made easier by caring for your needs.",
            description: `${BANK_NAME} Savings Invent is our enterprise approach to innovation and supports our business strategy as a forward-focused bank. It's about using emerging technology to engage with our customers and exceeding their rapidly evolving expectations.`,
            tabs: [
                {
                    id: "basic",
                    label: "Basic Savings",
                    title: "Essential Savings:",
                    desc: "A simple and effective way to save for your short-term needs with no monthly maintenance fees.",
                    list: [
                        "Minimum opening deposit $25",
                        "No monthly service fee",
                        "Earns competitive interest",
                    ],
                    image: "/temp/custom/assets/images/expertise-financial-img.jpg",
                },
                {
                    id: "money-market",
                    label: "Money Market",
                    title: "Premium Growth:",
                    desc: "Earn higher interest rates while maintaining access to your funds with our tiered Money Market accounts.",
                    list: [
                        "Higher yields for larger balances",
                        "Check writing privileges",
                        "FDIC-insured security",
                    ],
                    image: "/temp/custom/assets/images/why-choose-image-1.jpg",
                },
            ],
        },
    },
    checkings: {
        hero: {
            title: "Flexible Financial Solutions for Modern Living",
            description: "Manage your wealth with tailored accounts and digital tools designed to fit your lifestyle. We provide comprehensive banking solutions that evolve with your needs.",
            videoSrc: "/temp/custom/assets/videos/business-banking.mp4",
        },
        expertise: {
            title: "Expertly crafted checking plans designed for you.",
            description: `${BANK_NAME} Checking Invent is our forward-focused approach to daily banking operations. We combine security with convenience to deliver a seamless management experience.`,
            tabs: [
                {
                    id: "economy",
                    label: "Economy Checking",
                    title: "Daily Banking:",
                    desc: "Perfect for students or those starting out, with low requirements and high convenience for everyday use.",
                    list: [
                        "Free debit card included",
                        "Online & Mobile banking",
                        "No minimum balance",
                    ],
                    image: "/temp/custom/assets/images/expertise-financial-img.jpg",
                },
                {
                    id: "now",
                    label: "NOW Checking",
                    title: "Value Added:",
                    desc: "Get more from your money with interest earnings and waived fees on ATM withdrawals nationwide.",
                    list: [
                        "Interest-bearing balance",
                        "ATM fee reimbursements",
                        "Personalized checkbooks",
                    ],
                    image: "/temp/custom/assets/images/why-choose-image-2.jpg",
                },
            ],
        },
    },
    cards: {
        hero: {
            title: "Global Rewards and Unmatched Security",
            description: "Unlock a world of possibilities with cards designed for the modern connoisseur. Enjoy premium rewards, exclusive travel perks, and the peace of mind that comes with world-class security.",
            videoSrc: "/temp/custom/assets/videos/credit-card.mp4",
        },
        expertise: {
            title: "Premium card solutions for every journey.",
            description: `${BANK_NAME} Card Services brings elite rewards and local support to your fingertips, ensuring you're empowered wherever life takes you with style and confidence.`,
            tabs: [
                {
                    id: "rewards",
                    label: "Rewards Card",
                    title: "Travel & Everyday Rewards:",
                    desc: "Earn miles on every purchase and enjoy exclusive travel perks and comprehensive insurance coverage.",
                    list: [
                        "2x points on travel and dining",
                        "No foreign transaction fees",
                        "Concierge services",
                    ],
                    image: "/temp/custom/assets/images/expertise-financial-img.jpg",
                },
                {
                    id: "cashback",
                    label: "Cashback Plus",
                    title: "Everyday Earning:",
                    desc: "Get cash back on groceries, gas, and dining with our most popular rewards card for daily spending.",
                    list: [
                        "3% back on dining",
                        "2% back on groceries",
                        "1% on all other purchases",
                    ],
                    image: "/temp/custom/assets/images/why-choose-image-3.jpg",
                },
            ],
        },
    },
    loans: {
        hero: {
            title: "Strategic Lending to Power Your Potential",
            description: "Turn your vision into reality with customized capital solutions. From personal milestones to business expansions, we provide the strategic lending support you need.",
            videoSrc: "/temp/custom/assets/videos/mortgage.mp4",
        },
        expertise: {
            title: "Lending frameworks designed for growth.",
            description: `${BANK_NAME} Lending Invent provides the structural support and capital injections needed to scale your operations and achieve your most ambitious financial goals.`,
            tabs: [
                {
                    id: "personal",
                    label: "Personal Loans",
                    title: "Any Purpose Lending:",
                    desc: "Unsecured loans for home improvement, debt consolidation, or unexpected expenses with quick approval.",
                    list: [
                        "Competitive fixed rates",
                        "No prepayment penalties",
                        "Quick approval process",
                    ],
                    image: "/temp/custom/assets/images/expertise-financial-img.jpg",
                },
                {
                    id: "business",
                    label: "Business Loans",
                    title: "Grow Success Capital:",
                    desc: "Capital to expand your operations, purchase equipment, or manage cash flow with expert business advice.",
                    list: [
                        "SBA loan options",
                        "Equipment financing",
                        "Flexible lines of credit",
                    ],
                    image: "/temp/custom/assets/images/why-choose-image-1.jpg",
                },
            ],
        },
    },
};
