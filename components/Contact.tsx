"use client";

import { CONTACT } from "@/lib/data";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-6">Get In Touch</h2>
                <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                    I'm currently looking for new opportunities in hardware engineering and robotics.
                    If you have a project in mind or just want to chat engineering, feel free to reach out.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href={`mailto:${CONTACT.email}`}
                        className="inline-flex h-12 items-center justify-center rounded-lg bg-background text-primary font-medium px-8 hover:bg-background/90 transition-colors"
                    >
                        Email Me
                    </a>
                    <a
                        href={CONTACT.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-12 items-center justify-center rounded-lg border border-primary-foreground/20 hover:bg-primary-foreground/10 px-8 transition-colors"
                    >
                        LinkedIn
                    </a>
                </div>

                <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-sm text-primary-foreground/50">
                    © {new Date().getFullYear()} Jennifer Nguyen. Built with Next.js & Tailwind.
                </div>
            </div>
        </section>
    );
}
