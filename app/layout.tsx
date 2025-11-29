import Navigation from "../components/navigation";
import "./globals.css";
import { Metadata } from "next";

// metadata other fields example : https://nextjs.org/docs/app/api-reference/functions/generate-metadata#other-fields
export const metadata: Metadata = {
    title: {
        template: "%s | NextJS App",
        default: "NextJS App"
    },
    description: 'NextJS generated Website',
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
                    <h1>NextJS Again</h1>
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <Navigation />
                </footer>
            </body>
        </html>
    )
}