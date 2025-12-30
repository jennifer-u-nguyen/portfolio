"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Selected Projects</h2>
                    <div className="h-1 w-20 bg-primary/20 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [isImageOpen, setIsImageOpen] = useState(false);

    const activeMedia = project.images[activeImageIndex];
    const isVideo = activeMedia.endsWith(".mp4") || activeMedia.endsWith(".webm") || activeMedia.endsWith(".mov");

    return (
        <div className="group rounded-2xl border border-border/50 bg-card text-card-foreground shadow-sm transition-all hover:shadow-md overflow-hidden flex flex-col">
            <div className="cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
                {/* Image Section */}
                <div
                    className="relative aspect-video w-full overflow-hidden bg-muted group/image"
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsImageOpen(true);
                    }}
                >
                    {isVideo ? (
                        <video
                            src={activeMedia}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <Image
                            src={activeMedia}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500"
                        />
                    )}

                    {/* Slideshow Arrows (only visible on hover if multiple images) */}
                    {project.images.length > 1 && (
                        <>
                            {/* Left Arrow */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
                                }}
                                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 text-black opacity-0 group-hover/image:opacity-100 transition-opacity hover:bg-white/90"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m15 18-6-6 6-6" />
                                </svg>
                            </button>

                            {/* Right Arrow */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
                                }}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 text-black opacity-0 group-hover/image:opacity-100 transition-opacity hover:bg-white/90"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </button>
                        </>
                    )}

                    {/* Slideshow Indicators */}
                    {project.images.length > 1 && (
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover/image:opacity-100 transition-opacity">
                            {project.images.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`h-1.5 rounded-full transition-all ${idx === activeImageIndex ? "w-4 bg-white" : "w-1.5 bg-white/50"
                                        }`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Content Preview */}
                <div className="p-6 md:p-8">
                    <div className="mb-4">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors mb-2">
                            {project.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    <button
                        className="text-sm font-medium text-primary hover:underline flex items-center gap-1 mt-4"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsExpanded(!isExpanded);
                        }}
                    >
                        {isExpanded ? "Show Less" : "View Details"}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                        >
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </button>
                </div>
            </div>

            {isExpanded && (
                <div className="px-6 md:px-8 pb-8 pt-0 animate-in slide-in-from-top-2 duration-200">
                    <div className="pt-6 border-t border-border/50 space-y-6">
                        {/* Skills moved here */}
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span key={tag} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-muted-foreground bg-secondary/50">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Metric */}
                        <div className="inline-block rounded-lg bg-primary/5 px-3 py-1 text-sm text-primary font-medium">
                            {project.metric}
                        </div>

                        {/* Details Grid */}
                        <div className="space-y-4">
                            <div className="grid gap-2">
                                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Problem</h4>
                                <p className="text-sm leading-relaxed">{project.problem}</p>
                            </div>
                            <div className="grid gap-2">
                                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Approach</h4>
                                <p className="text-sm leading-relaxed">{project.approach}</p>
                            </div>
                            <div className="grid gap-2">
                                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Validation</h4>
                                <p className="text-sm leading-relaxed">{project.validation}</p>
                            </div>
                            <div className="grid gap-2">
                                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Outcome</h4>
                                <p className="text-sm leading-relaxed">{project.outcome}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isImageOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8"
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsImageOpen(false);
                    }}
                >
                    <div
                        className="relative w-full h-full flex items-center justify-center pointer-events-none"
                    >
                        {isVideo ? (
                            <video
                                src={activeMedia}
                                controls
                                autoPlay
                                className="max-h-full max-w-full object-contain rounded-xl overflow-hidden shadow-2xl pointer-events-auto"
                                onClick={(e) => e.stopPropagation()}
                            />
                        ) : (
                            <img
                                src={activeMedia}
                                alt={project.title}
                                className="max-h-full max-w-full object-contain rounded-xl shadow-2xl pointer-events-auto"
                                onClick={(e) => e.stopPropagation()}
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
