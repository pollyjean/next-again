'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from './navigation.module.css';

export default function Navigation() {
    const path = usePathname();
    return (
        <nav>
            <ul className="flex gap-8 bg-white/10 backdrop-blur-lg px-8 py-4 rounded-full border border-white/5 shadow-lg">
                <li>
                    <Link
                        href="/"
                        className={`text-lg font-medium transition-colors hover:text-white ${path === '/' ? 'text-white' : 'text-gray-400'}`}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/about-us"
                        className={`text-lg font-medium transition-colors hover:text-white ${path === '/about-us' ? 'text-white' : 'text-gray-400'}`}
                    >
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    )
}