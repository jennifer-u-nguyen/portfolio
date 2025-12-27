"use client";

import { SKILLS } from "@/lib/data";

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Technical Skills</h2>
                    <div className="h-1 w-20 bg-primary/20 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SKILLS.map((group) => (
                        <div key={group.category} className="bg-card rounded-xl p-6 border border-border/40 shadow-sm">
                            <h3 className="text-lg font-semibold mb-4 text-foreground/90">{group.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <div
                                        key={item}
                                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium border border-border/50"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
