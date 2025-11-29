'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
    const path = usePathname();
    const [count, setCount] = useState(0);
    return (
        <nav className="flex">
            <ul className="flex">
                <li className="px-2"><Link href="/">Home{path === '/' ? ' (current)' : ''}</Link></li>
                <li className="px-2"><Link href="/about-us">About{path === '/about-us' ? ' (current)' : ''}</Link></li>
                <li className="px-2"><Link href="/about-us/company">Company{path === '/about-us/company' ? ' (current)' : ''}</Link></li>
                <li className="px-2"><Link href="/about-us/company/story">Story{path === '/about-us/company/story' ? ' (current)' : ''}</Link></li>
                <li className="px-2"><Link href="/about-us/company/map">Map{path === '/about-us/company/map' ? ' (current)' : ''}</Link></li>
            </ul>
            <button className="border border-gray-300 rounded px-1 shadow-md hover:shadow-sm transition-all-faster cursor-pointer" onClick={() => setCount(count + 1)}>Count: {count}</button>
        </nav>
    )
}