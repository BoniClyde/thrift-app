import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#14202e",
                secondary: "#fafafa",
                accent: "#d8e28c",
                dark: "#114a43",
                divider: "#e3e3e3",
                "dark-divider": "rgba(255, 255, 255, 0.1)",
                error: "rgb(230, 87, 87)",
            },
            fontFamily: {
                inter: ["var(--font-inter)", "sans-serif"],
                onest: ["var(--font-onest)", "sans-serif"],
            },
            container: {
                center: true,
                padding: "15px",
                screens: {
                    sm: "540px",
                    md: "720px",
                    lg: "960px",
                    xl: "1140px",
                    "2xl": "1320px",
                },
            },
            backgroundImage: {
                "section-bg": "url('/temp/custom/assets/images/section-bg.svg')",
                "hero-bg": "url('/temp/custom/assets/images/hero-bg.jpg')",
            },
        },
    },
    plugins: [],
};
export default config;
