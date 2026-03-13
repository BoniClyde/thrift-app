"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Topbar() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    if (!isHomePage) return null;

    return (
        <div className="bg-accent py-[10px] relative z-[2]">
            <div className="container mx-auto px-[15px]">
                <div className="flex items-center justify-center">
                    <div className="w-full">
                        <div className="text-center">
                            <p className="m-0 text-primary flex items-center justify-center gap-1">
                                <Image
                                    src="/temp/custom/assets/images/icon-topbar-info.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="max-w-[20px]"
                                />
                                World class service from your true international community bank
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
