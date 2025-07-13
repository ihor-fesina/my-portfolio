import type {Metadata} from "next";
import {Inter} from "next/font/google";
import Sidebar from "@/components/layout/Sidebar";
import GlowEffect from "@/components/layout/GlowEffect";
import "./globals.css";
import React from "react";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Ihor Fesina",
    description:
        "Ihor Fesina is a frontend developer building modern and performant web applications.",
    icons: {
        icon: [
            {rel: "icon", url: "/favicon-16x16.png", sizes: "16x16"},
            {rel: "icon", url: "/favicon-32x32.png", sizes: "32x32"},
            {rel: "icon", url: "/favicon.ico"},
        ],
        apple: "/apple-touch-icon.png",
        other: [
            {rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192"},
            {rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512"},
        ],
    },
    openGraph: {
        title: "Ihor Fesina",
        description:
            "Ihor Fesina is a frontend developer building modern and performant web applications.",
        url: "https://my-portfolio-url.com",
        images: [
            {
                url: "https://my-portfolio-url.com/android-chrome-512x512.png",
                width: 512,
                height: 512,
                alt: "Ihor Fesina's Logo",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Ihor Fesina",
        description:
            "Ihor Fesina is a frontend developer building modern and performant web applications.",
        images: ["https://my-portfolio-url.com/android-chrome-512x512.png"],
    },
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} antialiased bg-blue-dark`}>
            <GlowEffect>
                <div className="container flex flex-col lg:flex-row justify-between sm:!px-12 relative min-h-screen h-full">
                    <Sidebar/>
                    <div className="flex-1 pt-8 pb-16 lg:py-24">
                        {children}
                    </div>
                </div>
            </GlowEffect>
            </body>
        </html>
    );
}
