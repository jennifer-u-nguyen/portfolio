"use client";

import Link from "next/link";
import { HERO } from "@/lib/data";

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center pt-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                            {HERO.name}
                        </h1>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground">
                            {HERO.headline}
                        </h2>
                    </div>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                        {HERO.subtext}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                            href="#projects"
                            className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-transform hover:translate-y-[-1px] hover:shadow-lg focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                            {HERO.primaryCTA}
                        </Link>
                        <Link
                            href="#contact"
                            className="inline-flex h-12 items-center justify-center rounded-lg border border-input bg-background/50 backdrop-blur-sm px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                            {HERO.secondaryCTA}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
