"use client";

import Image from "next/image";
import Link from "next/link";
import { BANK_NAME } from "@/config/constants";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer bg-white">
            {/* Main Footer Content */}
            <div className="py-[80px] border-b border-gray-200">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[50px]">
                        {/* Column 1: Brand & About */}
                        <div className="footer-widget lg:col-span-1">
                            <div className="footer-logo mb-[25px]">
                                <Link href="/">
                                    <Image
                                        src="/logo.png"
                                        width={140}
                                        height={50}
                                        alt="Quickflow Finance Logo"
                                        style={{ width: "auto", height: "auto" }}
                                    />
                                </Link>
                            </div>
                            <p className="text-gray-600 text-[13px] leading-[1.8em] mb-[25px]">
                                Your trusted partner in financial excellence. Providing world-class banking solutions since 1995.
                            </p>
                            <div className="footer-social flex gap-[15px]">
                                <Link href="#" className="w-[40px] h-[40px] bg-primary text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all font-bold text-[16px]">
                                    f
                                </Link>
                                <Link href="#" className="w-[40px] h-[40px] bg-primary text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all font-bold text-[16px]">
                                    𝕏
                                </Link>
                                <Link href="#" className="w-[40px] h-[40px] bg-primary text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all font-bold text-[14px]">
                                    in
                                </Link>
                                <Link href="#" className="w-[40px] h-[40px] bg-primary text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all font-bold text-[16px]">
                                    ⊕
                                </Link>
                            </div>
                        </div>

                        {/* Column 2: Personal Banking */}
                        <div className="footer-widget">
                            <h4 className="footer-title text-[15px] font-bold mb-[25px] text-gray-900 uppercase tracking-wide">Personal Banking</h4>
                            <ul className="footer-menu space-y-[12px]">
                                <li>
                                    <Link href="/checking" className="text-gray-600 hover:text-primary transition-colors text-[13px] font-medium">
                                        Checking Accounts
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/savings" className="text-gray-600 hover:text-primary transition-colors text-[13px] font-medium">
                                        Savings Accounts
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/credit-cards" className="text-gray-600 hover:text-primary transition-colors text-[13px] font-medium">
                                        Credit Cards
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/personal-loans" className="text-gray-600 hover:text-primary transition-colors text-[13px] font-medium">
                                        Personal Loans
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/mortgages" className="text-gray-600 hover:text-primary transition-colors text-[13px] font-medium">
                                        Mortgages
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/auto-loans" className="text-gray-600 hover:text-primary transition-colors text-[13px] font-medium">
                                        Auto Loans
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Business Banking */}
                        <div className="footer-widget">
                            <h4 className="footer-title text-[15px] font-bold mb-[25px] text-gray-900 uppercase tracking-wide">Business Banking</h4>
                            <ul className="footer-menu space-y-[12px]">
                                <li>
                                    <Link href="/business-checking" className="text-gray-600 hover:text-primary transition-colors text-[13px] font-medium">
                                        Business Checking
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/business-loans" className="text-gray-600 hover:text-primary transition-colors text-[13px] font-medium">
                                        Business Loans
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/merchant-services" className="text-gray-600 hover:text-primary transition-colors text-[13px] font-medium">
                                        Merchant Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/payroll" className="text-gray-600 hover:text-primary transition-colors text-[13px] font-medium">
                                        Payroll Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/treasury" className="text-gray-600 hover:text-primary transition-colors text-[13px] font-medium">
                                        Treasury Management
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/corporate-cards" className="text-gray-600 hover:text-primary transition-colors text-[13px] font-medium">
                                        Corporate Cards
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4: Investment & Wealth */}
                        <div className="footer-widget">
                            <h4 className="footer-title text-[15px] font-bold mb-[25px] text-gray-900 uppercase tracking-wide">Investments</h4>
                            <ul className="footer-menu space-y-[12px]">
                                <li>
                                    <Link href="/investment-accounts" className="text-gray-600 hover:text-primary transition-colors text-[13px] font-medium">
                                        Investment Accounts
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/wealth-management" className="text-gray-600 hover:text-primary transition-colors text-[13px] font-medium">
                                        Wealth Management
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/retirement-planning" className="text-gray-600 hover:text-primary transition-colors text-[13px] font-medium">
                                        Retirement Planning
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/insurance-products" className="text-gray-600 hover:text-primary transition-colors text-[13px] font-medium">
                                        Insurance Products
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/advisory-services" className="text-gray-600 hover:text-primary transition-colors text-[13px] font-medium">
                                        Advisory Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/estate-planning" className="text-gray-600 hover:text-primary transition-colors text-[13px] font-medium">
                                        Estate Planning
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 5: Support & Company */}
                        <div className="footer-widget">
                            <h4 className="footer-title text-[15px] font-bold mb-[25px] text-gray-900 uppercase tracking-wide">Support</h4>
                            <ul className="footer-menu space-y-[12px]">
                                <li>
                                    <Link href="/contact-us" className="text-gray-600 hover:text-primary transition-colors text-[13px] font-medium">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faq" className="text-gray-600 hover:text-primary transition-colors text-[13px] font-medium">
                                        FAQs
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/locations" className="text-gray-600 hover:text-primary transition-colors text-[13px] font-medium">
                                        Branch Locator
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about-us" className="text-gray-600 hover:text-primary transition-colors text-[13px] font-medium">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/careers" className="text-gray-600 hover:text-primary transition-colors text-[13px] font-medium">
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog" className="text-gray-600 hover:text-primary transition-colors text-[13px] font-medium">
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact & Hours Section */}
            <div className="py-[60px] border-b border-gray-200 bg-gray-50">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
                        {/* Phone */}
                        <div className="flex gap-[20px]">
                            <div className="flex-shrink-0">
                                <div className="w-[50px] h-[50px] bg-primary text-white rounded-lg flex items-center justify-center">
                                    <Image
                                        src="/temp/custom/assets/images/icon-phone.svg"
                                        alt="Phone"
                                        width={24}
                                        height={24}
                                        style={{ filter: "brightness(0) invert(1)" }}
                                    />
                                </div>
                            </div>
                            <div>
                                <h5 className="text-gray-900 font-bold text-[14px] mb-[5px]">Call Us</h5>
                                <p className="text-gray-600 text-[13px] m-0">
                                    <Link href="tel:+15551234567" className="hover:text-primary transition-colors">
                                        +1 (555) 123-4567
                                    </Link>
                                </p>
                                <p className="text-gray-500 text-[12px] m-0 mt-[3px]">Available 24/7</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex gap-[20px]">
                            <div className="flex-shrink-0">
                                <div className="w-[50px] h-[50px] bg-primary text-white rounded-lg flex items-center justify-center">
                                    <Image
                                        src="/temp/custom/assets/images/icon-email.svg"
                                        alt="Email"
                                        width={24}
                                        height={24}
                                        style={{ filter: "brightness(0) invert(1)" }}
                                    />
                                </div>
                            </div>
                            <div>
                                <h5 className="text-gray-900 font-bold text-[14px] mb-[5px]">Email Us</h5>
                                <p className="text-gray-600 text-[13px] m-0">
                                    <Link href="mailto:support@quickflow.com" className="hover:text-primary transition-colors">
                                        support@quickflow.com
                                    </Link>
                                </p>
                                <p className="text-gray-500 text-[12px] m-0 mt-[3px]">Response within 24 hours</p>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex gap-[20px]">
                            <div className="flex-shrink-0">
                                <div className="w-[50px] h-[50px] bg-primary text-white rounded-lg flex items-center justify-center">
                                    <Image
                                        src="/temp/custom/assets/images/icon-location.svg"
                                        alt="Location"
                                        width={24}
                                        height={24}
                                        style={{ filter: "brightness(0) invert(1)" }}
                                    />
                                </div>
                            </div>
                            <div>
                                <h5 className="text-gray-900 font-bold text-[14px] mb-[5px]">Visit Us</h5>
                                <p className="text-gray-600 text-[13px] m-0">
                                    123 Banking Street<br />
                                    Financial City, FC 12345
                                </p>
                                <p className="text-gray-500 text-[12px] m-0 mt-[3px]">
                                    <Link href="/locations" className="hover:text-primary transition-colors">
                                        Find all locations
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom py-[40px]">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-[30px]">
                        <div>
                            <p className="text-gray-600 text-[12px] leading-[1.8em] m-0">
                                <strong>Disclaimer:</strong> This website is for informational purposes only. {BANK_NAME} does not provide investment advice. Please consult with a financial advisor before making investment decisions. All products and services are subject to applicable laws and regulations.
                            </p>
                        </div>
                        <div>
                            <p className="text-gray-600 text-[12px] leading-[1.8em] m-0">
                                <strong>Security:</strong> {BANK_NAME} uses industry-leading encryption and security measures to protect your information. We are FDIC insured and comply with all federal banking regulations.
                            </p>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 pt-[30px]">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-[20px]">
                            <p className="text-gray-600 text-[12px] m-0">
                                &copy; {currentYear} {BANK_NAME}. All Rights Reserved.
                            </p>
                            <div className="footer-links flex flex-wrap justify-center gap-[20px]">
                                <Link href="/privacy" className="text-gray-600 hover:text-primary transition-colors text-[12px] font-medium">
                                    Privacy Policy
                                </Link>
                                <span className="text-gray-300">|</span>
                                <Link href="/terms" className="text-gray-600 hover:text-primary transition-colors text-[12px] font-medium">
                                    Terms of Service
                                </Link>
                                <span className="text-gray-300">|</span>
                                <Link href="/security" className="text-gray-600 hover:text-primary transition-colors text-[12px] font-medium">
                                    Security
                                </Link>
                                <span className="text-gray-300">|</span>
                                <Link href="/accessibility" className="text-gray-600 hover:text-primary transition-colors text-[12px] font-medium">
                                    Accessibility
                                </Link>
                                <span className="text-gray-300">|</span>
                                <Link href="/sitemap" className="text-gray-600 hover:text-primary transition-colors text-[12px] font-medium">
                                    Sitemap
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
