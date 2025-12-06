export const metadata = {
    title: 'About Us',
}

export default function AboutUs() {
    return (
        <div className="container mx-auto px-4 py-8 pt-32 max-w-4xl text-gray-200 flex flex-col gap-8">
            {/* Header */}
            <div className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-xl">
                    Next.js Clone Coding Project
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    A modern movie discovery web application built as a Next.js clone coding practice, focusing on strict type safety and immersive UI.
                </p>
            </div>

            <div className="space-y-12 flex flex-col gap-8">
                {/* 1. Overview */}
                <section className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm shadow-xl">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-yellow-500">#</span> Project Overview
                    </h2>
                    <p className="leading-relaxed text-gray-300">
                        <strong>Next.js Clone Coding Project</strong> began as a clone coding project from "Nomad Coders Next.js for Beginners". It has been reimagined and significantly improved using <strong>Antigravity</strong>, refining the original work with modern aesthetics, strict TypeScript integration, and optimized performance.
                    </p>
                </section>

                {/* 2. Tech Stack */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">Technology Stack</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { name: "Next.js 16", desc: "App Router & Turbopack" },
                            { name: "React 19", desc: "Server Components" },
                            { name: "Tailwind 4", desc: "Modern CSS Styling" },
                            { name: "TypeScript", desc: "Strict Type Safety" },
                            { name: "TMDB API", desc: "Real-time Data" },
                        ].map((tech) => (
                            <div key={tech.name} className="bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-gray-500 transition-colors">
                                <h3 className="font-bold text-white">{tech.name}</h3>
                                <p className="text-sm text-gray-400 mt-1">{tech.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. Key Features */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">Key Features</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">🏠 Home Page</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
                                <li>Trending Contents Grid</li>
                                <li>Dynamic Immersive Background</li>
                                <li>3D Card Flip Animation</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">🎬 Content Details</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
                                <li>Immersive Hero Header</li>
                                <li><strong>Tabs:</strong> Videos, Credits, Providers, Similar</li>
                                <li>External Links (IMDB, Homepage)</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 4. Project Structure (Simplified) */}
                <section className="bg-black/40 rounded-xl p-6 border border-white/5 font-mono text-sm overflow-x-auto">
                    <h2 className="text-xl font-bold text-white mb-4">Project Structure</h2>
                    <pre className="text-gray-300 leading-relaxed">
                        {`next-again/
├── app/
│   ├── (home)/              # Home route group
│   │   ├── page.tsx         # Main landing page
│   │   └── loading.tsx      # Home skeleton loader
│   ├── (content)/content/[id]/ # Dynamic movie detail routes
│   │   ├── page.tsx         # Defaults to 'video' tab
│   │   ├── credits/         # Credits tab route
│   │   ├── providers/       # Providers tab route
│   │   ├── similar/         # Similar movies tab route
│   │   ├── layout.tsx       # Shared layout (Header, Nav) for details
│   │   └── error.tsx        # Error boundary
│   ├── about/               # About page
│   ├── layout.tsx           # Root layout (Html, Body, ScrollToTop)
│   ├── globals.css          # Global styles & Tailwind
│   └── not-found.tsx        # 404 Page
├── components/
│   ├── content-card.tsx     # Movie Card component
│   ├── content-info.tsx     # Movie Info component
│   ├── skeleton.tsx         # Loading UI components
│   ├── tab-content.tsx      # Tab Logic
│   └── tabs/                # Individual Tab Components
├── lib/
│   ├── getApiData.ts        # Generic API Fetcher
│   └── metadata.ts          # Shared Metadata Helper
└── types/
    └── tmdb.ts              # Strict TypeScript Interfaces`}
                    </pre>
                </section>

                {/* 5. Improvements */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">Recent Improvements</h2>
                    <ul className="space-y-3">
                        <li className="flex gap-3">
                            <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-sm font-bold h-fit mt-0.5">Refactor</span>
                            <span className="text-gray-300">Strict Type Safety implementation with Generic API fetchers.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded text-sm font-bold h-fit mt-0.5">Feature</span>
                            <span className="text-gray-300">Centralized Metadata logic to reduce code duplication.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded text-sm font-bold h-fit mt-0.5">UX</span>
                            <span className="text-gray-300">Smart Scroll-to-Top logic avoiding tab-switching jumps.</span>
                        </li>
                    </ul>
                </section>

                {/* 6. Collaboration */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">Development & Collaboration</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* User Role */}
                        <div className="bg-linear-to-br from-blue-900/30 to-gray-900/50 p-6 rounded-xl border border-blue-500/30 backdrop-blur-sm">
                            <h3 className="text-xl font-bold text-blue-400 mb-1">Sky(skysurfr)</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-4">Product Lead / Designer</p>
                            <ul className="space-y-2 text-gray-300 text-sm list-disc list-inside marker:text-blue-500">
                                <li>Concept & Strategic Vision</li>
                                <li>UI/UX Design Direction</li>
                                <li>Core Feature Requirements</li>
                            </ul>
                        </div>

                        {/* AI Role */}
                        <div className="bg-linear-to-br from-purple-900/30 to-gray-900/50 p-6 rounded-xl border border-purple-500/30 backdrop-blur-sm">
                            <h3 className="text-xl font-bold text-purple-400 mb-1">Antigravity (AI)</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-4">Lead Developer</p>
                            <ul className="space-y-2 text-gray-300 text-sm list-disc list-inside marker:text-purple-500">
                                <li>Full Stack Implementation</li>
                                <li>Type Safety & Refactoring</li>
                                <li>Technical Optimization</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

            <p className="text-center text-gray-500 text-sm mt-20 pb-8 border-t border-gray-800 pt-8">
                Copyright © {new Date().getFullYear()} Next.js Clone Coding Project.
            </p>
        </div>
    );
}