"use client";

import { ABOUT } from "@/lib/data";

export default function About() {
    return (
        <section id="about" className="py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="flex-1">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold tracking-tight mb-4">About Me</h2>
                            <div className="h-1 w-20 bg-primary/20 rounded-full" />
                        </div>
                        <div className="prose prose-neutral max-w-none">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {ABOUT.text}
                            </p>
                        </div>
                    </div>
                    {/* Optional: Add an image placeholder or keep it text-only as per PRD "Clean / minimal" */}
                    {/* PRD doesn't explicitly ask for a photo, just "About". "Short (1–3 sentences)". */}
                    {/* Keeping it text focused is safer for now. */}
                </div>
            </div>
        </section>
    );
}
