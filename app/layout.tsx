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
            <body className="bg-black text-white min-h-screen flex flex-col font-sans">
                <header className="sticky top-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/10 py-4">
                    <div className="container mx-auto px-4 flex justify-between items-center">
                        <h1 className="text-3xl font-bold tracking-tight bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            {SITE_NAME}
                        </h1>
                        <Navigation />
                    </div>
                </header>
                <main className="grow container mx-auto px-4 py-8">
                    {children}
                </main>
            </body>
        </html>
    )
}