"use client";

import Link from "next/link";
import Image from "next/image";
import { HERO } from "@/lib/data";

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center pt-16 pb-12">
            <div className="container mx-auto px-4 md:px-6">

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
                        <h1 className="font-['Courier_New'] text-6xl md:text-8xl lg:text-9xl text-foreground">
                            {HERO.labels.first}
                        </h1>
                    </div>

                    {/* Builder Row */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
                        <h1 className="font-['Courier_New'] text-6xl md:text-8xl lg:text-9xl text-foreground">
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
