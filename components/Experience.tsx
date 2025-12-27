"use client";

import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
    return (
        <section id="experience" className="py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Experience</h2>
                    <div className="h-1 w-20 bg-primary/20 rounded-full" />
                </div>

                <div className="relative border-l border-border/60 ml-3 md:ml-6 space-y-12">
                    {EXPERIENCE.map((job, index) => (
                        <div key={index} className="relative pl-8 md:pl-12">
                            <span className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />

                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-2">
                                <h3 className="text-lg font-semibold text-foreground">
                                    {job.company}
                                </h3>
                                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                                    {job.period}
                                </span>
                            </div>
                            <p className="text-base font-medium text-foreground/80 mb-2">
                                {job.role}
                            </p>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {job.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
