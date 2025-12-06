"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DetailsTabs({ id, hasSimilar }: { id: string, hasSimilar: boolean }) {
    const pathname = usePathname();

    const getActiveTab = (path: string) => {
        if (path.endsWith("/credits")) return "credits";
        if (path.endsWith("/similar")) return "similar";
        if (path.endsWith("/providers")) return "providers";
        return "video";
    };

    const currentTab = getActiveTab(pathname);

    const tabs = [
        { name: "Video", id: "video", href: `/content/${id}` },
        { name: "Credits", id: "credits", href: `/content/${id}/credits` },
        { name: "Providers (US)", id: "providers", href: `/content/${id}/providers` },
    ];

    if (hasSimilar) {
        tabs.push({ name: "Similar", id: "similar", href: `/content/${id}/similar` });
    }

    return (
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex border-b border-gray-800 mb-8">
                {tabs.map((t) => (
                    <Link
                        key={t.id}
                        href={t.href}
                        className={`px-6 py-3 font-medium text-sm transition-colors border-b-2 ${currentTab === t.id
                            ? "border-white text-white"
                            : "border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-700"
                            }`}
                        prefetch={true}
                    >
                        {t.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}