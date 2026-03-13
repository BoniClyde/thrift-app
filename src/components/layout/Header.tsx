"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { BANK_NAME, LOGO_PATH } from "@/config/constants";

const navItems = [
    {
        label: "Personal",
        links: [
            { label: "Savings", href: "/savings" },
            { label: "Checking", href: "/checking" },
            { label: "Credit Cards", href: "/cards" },
            { label: "Loans", href: "/loans" },
        ],
    },
    {
        label: "Business",
        links: [
            { label: "Business 1", href: "#" },
            { label: "Business 2", href: "#" },
        ],
    },
    {
        label: "Insurance",
        links: [
            { label: "Insurance 1", href: "#" },
            { label: "Insurance 2", href: "#" },
        ],
    },
    {
        label: "Mortgages",
        links: [
            { label: "Mortgages 1", href: "#" },
            { label: "Mortgages 2", href: "#" },
        ],
    },
    {
        label: "Sefton Savings",
        links: [
            { label: "Savings", href: "/savings" },
            { label: "Checking", href: "/checking" },
            { label: "Credit Cards", href: "/cards" },
            { label: "Loans", href: "/loans" },
        ],
    },
];

export default function Header() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isHomePage) {
        // EXACT MATCH HEADER FOR PRODUCT PAGES
        return (
            <header
                className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${scrolled ? "bg-[#0d4f48] shadow-lg" : "bg-transparent"
                    }`}
            >
                <div className="container-fluid px-0">
                    <nav className="flex items-center justify-between h-[150px]">
                        {/* Logo */}
                        <Link href="/" className="px-14 h-full flex items-center">
                            <Image
                                src={LOGO_PATH}
                                width={160}
                                height={70}
                                alt={BANK_NAME}
                                className="w-[160px] h-auto"
                            />
                        </Link>

                        <div className="container flex flex-1 items-center justify-between px-10">
                            {/* Nav Items */}
                            <div className="hidden lg:flex items-center gap-8">
                                {navItems.map((item, idx) => (
                                    <div key={idx} className="relative group">
                                        <Link
                                            href="#"
                                            className="text-white font-medium hover:text-[#d8e28c] transition flex items-center gap-1 uppercase text-sm tracking-widest"
                                        >
                                            {item.label}
                                            {item.links && <ChevronDown className="w-4 h-4" />}
                                        </Link>
                                        {item.links && (
                                            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-2">
                                                {item.links.map((link, lIdx) => (
                                                    <Link
                                                        key={lIdx}
                                                        href={link.href}
                                                        className="block px-4 py-2 text-sm text-[#114a43] hover:bg-[#fafafa] rounded"
                                                    >
                                                        {link.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Actions */}
                            <div className="hidden lg:flex items-center gap-6">
                                <Link href="/login" className="text-white hover:text-[#d8e28c] font-medium uppercase text-sm tracking-widest">
                                    Login
                                </Link>
                                <Link href="/register" className="btn-default">
                                    Open An Account
                                </Link>
                            </div>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button className="lg:hidden text-white pr-10" onClick={() => setMobileOpen(!mobileOpen)}>
                            <Menu size={32} />
                        </button>
                    </nav>
                </div>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <div className="lg:hidden bg-[#114a43] absolute top-full left-0 w-full p-5 border-t border-white/10">
                        <ul className="space-y-4">
                            {navItems.map((item, idx) => (
                                <li key={idx}>
                                    <Link href="#" className="text-white block font-bold uppercase mb-2">
                                        {item.label}
                                    </Link>
                                    <ul className="pl-4 space-y-2">
                                        {item.links.map((link, lIdx) => (
                                            <li key={lIdx}>
                                                <Link href={link.href} className="text-white/80 text-sm block" onClick={() => setMobileOpen(false)}>
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </header>
        );
    }

    return (
        <header
            className={`sticky top-0 w-full z-[100] transition-all duration-300 ${scrolled ? "bg-[#0b433d] shadow-lg" : "bg-transparent"
                }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-24 items-center justify-between gap-6">
                    <Link href="/" className="flex shrink-0 items-center">
                        <Image
                            src={LOGO_PATH}
                            width={170}
                            height={70}
                            alt={`${BANK_NAME} Logo`}
                            className="h-auto w-[130px] sm:w-[150px] lg:w-[170px]"
                            priority
                        />
                    </Link>

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

                    <div className="hidden shrink-0 items-center gap-6 lg:flex">
                        <Link
                            href="/login"
                            className="text-[16px] font-semibold text-white transition hover:text-white/80"
                        >
                            Login
                        </Link>
                        <Link
                            href="/register"
                            className="btn-default"
                        >
                            Open an Account
                        </Link>
                    </div>

                    <button
                        type="button"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
                    >
                        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {mobileOpen && (
                <div className="border-t border-white/10 bg-[#0b433d] lg:hidden">
                    <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
                        <div className="space-y-3">
                            {navItems.map((item, index) => {
                                const isOpen = openMobileDropdown === index;
                                return (
                                    <div key={index} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                                        <button
                                            type="button"
                                            onClick={() => setOpenMobileDropdown(isOpen ? null : index)}
                                            className="flex w-full items-center justify-between px-4 py-4 text-left text-sm font-semibold text-white"
                                        >
                                            <span>{item.label}</span>
                                            <ChevronDown className={`h-4 w-4 transition ${isOpen ? "rotate-180" : ""}`} />
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
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}