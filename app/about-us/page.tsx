export const metadata = {
    title: 'About Us',
}

export default function AboutUs() {
    return <div className="container mx-auto px-4 py-8 pt-32 flex-col gap-2 justify-center items-center">
        <h1 className="text-4xl font-bold text-white drop-shadow-md">Next.js Clone Coding Project</h1>
        <p className="text-white text-sm mt-4">Copyright © {new Date().getFullYear()} Next.js Clone Coding Project.</p>
    </div>
}