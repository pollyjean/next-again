'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const path = usePathname();
    return (
        <nav>
            <ul className="flex gap-8 bg-black/60 backdrop-blur-xs px-8 py-4 rounded-full border-2 border-black/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] ring-1 ring-white/10">
                <li>
                    <Link
                        href="/"
                        className={`text-lg font-medium transition-colors hover:text-white drop-shadow-md ${path === '/' ? 'text-white' : 'text-gray-300'}`}
                    >
                        Contents
                    </Link>
                </li>
                <li>
                    <Link
                        href="/about-us"
                        className={`text-lg font-medium transition-colors hover:text-white drop-shadow-md ${path === '/about-us' ? 'text-white' : 'text-gray-300'}`}
                    >
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    )
}