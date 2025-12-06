import Link from "next/link";
import Navigation from "../components/navigation";
import "./globals.css";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constant";
import { Metadata } from "next";

// metadata other fields example : https://nextjs.org/docs/app/api-reference/functions/generate-metadata#other-fields
export const metadata: Metadata = {
    title: {
        template: '%s | ' + SITE_NAME,
        default: SITE_NAME,
    },
    description: SITE_DESCRIPTION,
}

import ScrollToTop from "@/components/scroll-to-top";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-black text-white min-h-screen flex flex-col font-sans">
                <ScrollToTop />
                <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none backdrop-blur-[10px]">
                    <div className="container mx-auto px-4 flex justify-between items-center py-2 pointer-events-auto">
                        <h1 className="text-3xl font-bold tracking-tight">
                            <Link href="/" className="flex items-center gap-2 group">
                                <div className="absolute inset-0 bg-white/5 blur-2xl -z-10 rounded-full" />
                                <img src="/assets/images/logo.png" alt={SITE_NAME} className="h-20 w-auto object-contain mix-blend-screen rounded-full drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] opacity-80" />
                                <span className="sr-only">{SITE_NAME}</span>
                            </Link>
                        </h1>
                        <Navigation />
                    </div>
                </header>
                <main className="grow">
                    {children}
                </main>
            </body>
        </html>
    )
}