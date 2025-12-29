"use client";

import { motion } from "framer-motion";

export default function FadeIn({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            viewport={{
                once: false,
                amount: 0.3, // Triggers when 30% of element is visible
                margin: "0px 0px -100px 0px" // Slight offset so it doesn't trigger too early at bottom
            }}
            transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}
