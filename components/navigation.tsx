'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from './navigation.module.css';

export default function Navigation() {
    const path = usePathname();
    return (
        <nav>
            <ul className="flex gap-8 bg-white/5 backdrop-blur-2xl px-8 py-4 rounded-full border border-white/10 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] ring-1 ring-white/20">
                <li>
                    <Link
                        href="/"
                        className={`text-lg font-medium transition-colors hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] ${path === '/' ? 'text-white' : 'text-gray-400'}`}
                    >
                        Contents
                    </Link>
                </li>
                <li>
                    <Link
                        href="/about-us"
                        className={`text-lg font-medium transition-colors hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] ${path === '/about-us' ? 'text-white' : 'text-gray-400'}`}
                    >
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    )
}