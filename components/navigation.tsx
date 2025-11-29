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
                <li className="px-2"><Link href="/" onClick={() => setCount(count + 1)}>Home{path === '/' ? ' 🔥' : ''}</Link></li>
                <li className="px-2"><Link href="/about-us" onClick={() => setCount(count + 1)}>About{path === '/about-us' ? ' 🔥' : ''}</Link></li>
                <li className="px-2 text-gray-400 cursor-not-allowed"><span>Company{path === '/about-us/company' ? ' 🔥' : ''}</span></li>
                <li className="px-2"><Link href="/about-us/company/story" onClick={() => setCount(count + 1)}>Story{path === '/about-us/company/story' ? ' 🔥' : ''}</Link></li>
                <li className="px-2"><Link href="/about-us/company/map" onClick={() => setCount(count + 1)}>Map{path === '/about-us/company/map' ? ' 🔥' : ''}</Link></li>
            </ul>
            <button className="border border-gray-300 rounded-md px-2">Click Count: {count}</button>
        </nav>
    )
}