import Navigation from "../components/navigation";
import "./globals.css";

export const metadata = {
    title: 'NextJS Again',
    description: 'NextJS Again App',
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