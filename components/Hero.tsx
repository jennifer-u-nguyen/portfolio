"use client";

import Link from "next/link";
import Image from "next/image";
import { HERO } from "@/lib/data";
import { Press_Start_2P } from "next/font/google";

const pressStart2P = Press_Start_2P({
    weight: "400",
    subsets: ["latin"],
});

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-16 pb-12 overflow-hidden bg-white">

            {/* Pixelated Stepped Gradient Background */}
            <div
                className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-90"
                style={{
                    background: `linear-gradient(to bottom, 
                        #0f2fb2 0%, #0f2fb2 5%,
                        #153bba 5%, #153bba 10%,
                        #1b48c3 10%, #1b48c3 15%,
                        #2254cb 15%, #2254cb 20%,
                        #2861d4 20%, #2861d4 25%,
                        #2e6ddc 25%, #2e6ddc 30%,
                        #347ae5 30%, #347ae5 35%,
                        #3a86ed 35%, #3a86ed 40%,
                        #4193f5 40%, #4193f5 45%,
                        #479efd 45%, #479efd 50%,
                        #59a8fd 50%, #59a8fd 55%,
                        #6bb2fe 55%, #6bb2fe 60%,
                        #7dbcfe 60%, #7dbcfe 65%,
                        #8fc6fe 65%, #8fc6fe 70%,
                        #a1d0fe 70%, #a1d0fe 75%,
                        #b4dafe 75%, #b4dafe 80%,
                        #c6e4fe 80%, #c6e4fe 85%,
                        #d8eeff 85%, #d8eeff 90%,
                        #eaf8ff 90%, #eaf8ff 95%,
                        #ffffff 95%, #ffffff 100%
                    )`
                }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Main Card Container */}
                <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-sm border border-black/5 p-8 md:p-16 text-center animate-in fade-in zoom-in-95 duration-700">

                    {/* Designer Row */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-2 md:mb-6">
                        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-3xl overflow-hidden shadow-md -rotate-6 transition-transform hover:rotate-0 duration-300">
                            <Image
                                src={HERO.images.designer}
                                alt="Jennifer Nguyen"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h1 className={`${pressStart2P.className} text-4xl md:text-6xl lg:text-7xl text-foreground`}>
                            {HERO.labels.first}
                        </h1>
                    </div>

                    {/* Builder Row */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
                        <h1 className={`${pressStart2P.className} text-4xl md:text-6xl lg:text-7xl text-foreground`}>
                            {HERO.labels.second}
                        </h1>
                        <div className="flex gap-4">
                            {HERO.images.builder.map((img, idx) => (
                                <div
                                    key={idx}
                                    className={`relative w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden shadow-md transition-transform hover:scale-110 duration-300 ${idx === 1 ? 'mt-4' : ''}`}
                                >
                                    <Image
                                        src={img}
                                        alt={`Item ${idx}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Subtext */}
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
                        {HERO.subtext}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="#contact"
                            className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-sm font-medium text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-105"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                            {HERO.secondaryCTA}
                        </Link>
                        <Link
                            href="#projects"
                            className="inline-flex h-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground px-8 text-sm font-medium shadow-sm transition-all hover:bg-secondary/80 hover:scale-105"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                            {HERO.primaryCTA}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
