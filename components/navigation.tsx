'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from './navigation.module.css';

export default function Navigation() {
    const path = usePathname();
    const [count, setCount] = useState(0);
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.li}><Link href="/" onClick={() => setCount(count + 1)}>Home{path === '/' ? ' 🔥' : ''}</Link></li>
                <li className={styles.li}><Link href="/about-us" onClick={() => setCount(count + 1)}>About{path === '/about-us' ? ' 🔥' : ''}</Link></li>
                <li className={styles.li}><span>Company{path === '/about-us/company' ? ' 🔥' : ''}</span></li>
                <li className={styles.li}><Link href="/about-us/company/story" onClick={() => setCount(count + 1)}>Story{path === '/about-us/company/story' ? ' 🔥' : ''}</Link></li>
                <li className={styles.li}><Link href="/about-us/company/map" onClick={() => setCount(count + 1)}>Map{path === '/about-us/company/map' ? ' 🔥' : ''}</Link></li>
            </ul>
            <button>Click Count: {count}</button>
        </nav>
    )
}