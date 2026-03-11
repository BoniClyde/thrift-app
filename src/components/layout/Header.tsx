"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
    {
        label: "Personal",
        links: [
            { label: "Savings Accounts", href: "/savings" },
            { label: "Checking Accounts", href: "/checking" },
            { label: "Credit Cards", href: "/cards" },
            { label: "Personal Loans", href: "/loans" },
        ],
    },
    {
        label: "Business",
        links: [
            { label: "Business Checking", href: "/business-checking" },
            { label: "Business Loans", href: "/business-loans" },
            { label: "Merchant Services", href: "/merchant-services" },
            { label: "Payroll Services", href: "/payroll" },
        ],
    },
    {
        label: "Mortgages & Loans",
        links: [
            { label: "Home Mortgages", href: "/home-mortgages" },
            { label: "Auto Loans", href: "/auto-loans" },
            { label: "Debt Consolidation", href: "/debt-consolidation" },
            { label: "Home Equity Lines", href: "/home-equity" },
        ],
    },
    {
        label: "Investments & Insurance",
        links: [
            { label: "Investment Accounts", href: "/investment-accounts" },
            { label: "Retirement Planning", href: "/retirement-planning" },
            { label: "Insurance Products", href: "/insurance" },
            { label: "Wealth Management", href: "/wealth-management" },
        ],
    },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState<number | null>(null);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0d4f48] text-white">
            {/* Top strip */}
            {/* <div className="bg-[#c8d67a] text-[#18352f]">
                <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-3 text-center text-sm font-medium sm:px-6 lg:px-8">
                    <span>World class service from your true international community bank</span>
                </div>
            </div> */}

            {/* Main nav */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-24 items-center justify-between gap-6">
                    {/* Logo */}
                    <Link href="/" className="flex shrink-0 items-center">
                        <Image
                            src="/logo.png"
                            width={170}
                            height={70}
                            alt="Quickflow Finance Logo"
                            className="h-auto w-[130px] sm:w-[150px] lg:w-[170px]"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden flex-1 justify-center lg:flex">
                        <ul className="flex items-center gap-2 xl:gap-5">
                            {navItems.map((item, index) => (
                                <li key={index} className="group relative">
                                    <button
                                        type="button"
                                        className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white"
                                    >
                                        {item.label}
                                        <ChevronDown className="h-4 w-4" />
                                    </button>

                                    <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-64 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#0b433d] p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                                        <ul className="space-y-1">
                                            {item.links.map((link, linkIndex) => (
                                                <li key={linkIndex}>
                                                    <Link
                                                        href={link.href}
                                                        className="block rounded-xl px-4 py-3 text-sm text-white/90 transition hover:bg-white/10 hover:text-white"
                                                    >
                                                        {link.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden shrink-0 items-center gap-3 lg:flex">
                        <Link
                            href="/login"
                            className="rounded-full px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                        >
                            Login
                        </Link>

                        <Link
                            href="/register"
                            className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#d7df87] px-6 py-3 text-sm font-semibold text-[#123a35] transition hover:scale-[1.02] hover:bg-[#e1e89a]"
                        >
                            Open an Account
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        type="button"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="border-t border-white/10 bg-[#0b433d] lg:hidden">
                    <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
                        <div className="space-y-3">
                            {navItems.map((item, index) => {
                                const isOpen = openMobileDropdown === index;

                                return (
                                    <div
                                        key={index}
                                        className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                                    >
                                        <button
                                            type="button"
                                            onClick={() => setOpenMobileDropdown(isOpen ? null : index)}
                                            className="flex w-full items-center justify-between px-4 py-4 text-left text-sm font-semibold text-white"
                                        >
                                            <span>{item.label}</span>
                                            <ChevronDown
                                                className={`h-4 w-4 transition ${isOpen ? "rotate-180" : ""}`}
                                            />
                                        </button>

                                        {isOpen && (
                                            <div className="border-t border-white/10 px-2 py-2">
                                                {item.links.map((link, linkIndex) => (
                                                    <Link
                                                        key={linkIndex}
                                                        href={link.href}
                                                        className="block rounded-xl px-3 py-3 text-sm text-white/85 transition hover:bg-white/10 hover:text-white"
                                                        onClick={() => setMobileOpen(false)}
                                                    >
                                                        {link.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}

                            <div className="mt-4 flex flex-col gap-3 pt-2">
                                <Link
                                    href="/login"
                                    className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    Login
                                </Link>

                                <Link
                                    href="/register"
                                    className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#d7df87] px-5 py-3 text-sm font-semibold text-[#123a35] transition hover:bg-[#e1e89a]"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    Open an Account
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}