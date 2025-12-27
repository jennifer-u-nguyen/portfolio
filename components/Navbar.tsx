"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_ITEMS = [
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Coursework", href: "#coursework" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border/40"
                : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
                <Link
                    href="#hero"
                    className="text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity"
                >
                    Jennifer Nguyen
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Nav Placeholder - could add a hamburger menu here if needed, keeping it simple for now */}
                <div className="md:hidden">
                    {/* Simple mobile menu (optional for MVP but good for reliability) */}
                    {/* For now, we rely on horizontal scroll or stack if needed, but let's just show a simple list or hide non-criticals */}
                    {/* Actually, let's just render links in a simple row for mobile? No, too crowded. */}
                    {/* MVP: Just hide secondary links on very small screens or simple scroll. */}
                    {/* Let's stick to simple implementation first. */}
                </div>
            </div>
        </nav>
    );
}
