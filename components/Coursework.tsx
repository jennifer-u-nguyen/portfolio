"use client";

import { COURSEWORK } from "@/lib/data";

export default function Coursework() {
    return (
        <section id="coursework" className="py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Relevant Coursework</h2>
                    <div className="h-1 w-20 bg-primary/20 rounded-full" />
                </div>

                <div className="bg-card rounded-2xl border border-border/50 p-8 shadow-sm">
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {COURSEWORK.map((course) => (
                            <li key={course} className="flex items-center gap-3">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                <span className="text-foreground/80 font-medium">{course}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
