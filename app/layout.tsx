import Navigation from "../components/navigation";
import "./globals.css";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constant";
import { Metadata } from "next";
import Link from "next/link";

// metadata other fields example : https://nextjs.org/docs/app/api-reference/functions/generate-metadata#other-fields
export const metadata: Metadata = {
    title: {
        template: '%s | ' + SITE_NAME,
        default: SITE_NAME,
    },
    description: SITE_DESCRIPTION,
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <header>
                    <h1>{SITE_NAME}</h1>
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <Navigation />
                    <ul className="flex justify-around">
                        <li><Link href="/app/1">Apple</Link></li>
                        <li><Link href="/app/1?lang=ko">Apple (ko)</Link></li>
                        <li><Link href="/app/1?lang=en">Apple (en)</Link></li>
                        <li><Link href="/app/1?lang=ja">Apple (ja)</Link></li>
                        <li><Link href="/app/1?lang=fr">Apple (fr)</Link></li>
                        <li><Link href="/app/1?lang=zh">Apple (zh)</Link></li>
                    </ul>
                </footer>
            </body>
        </html>
    )
}