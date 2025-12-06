"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function ScrollToTop() {
    const pathname = usePathname();
    const prevPathRef = useRef(pathname);

    useEffect(() => {
        const prevPath = prevPathRef.current;
        console.log(prevPath);
        const currPath = pathname;

        // Extract ID from paths: /content/123...
        const getContentId = (path: string) => {
            const match = path.match(/^\/content\/([^\/]+)/);
            return match ? match[1] : null;
        };

        const prevId = getContentId(prevPath);
        const currId = getContentId(currPath);

        // If we represent the same content (same ID), do NOT scroll
        if (currId && prevId && currId === prevId) {
            // Tab switch - do nothing
        } else {
            // Different content or logic, scroll to top
            window.scrollTo({ top: 0, behavior: "smooth" });
        }

        prevPathRef.current = currPath;
    }, [pathname]);

    return null;
}
