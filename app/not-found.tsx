import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Not Found',
}

export default function NotFound() {
    return (
        <div className="text-center my-20 pb-10 px-4">
            <h2 className="text-2xl font-bold text-gray-200 mb-4">Not Found</h2>
            <p className="text-gray-400 mb-8">Could not find requested resource</p>
            <Link
                href="/"
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg transition-colors border border-gray-700"
            >
                Return Home
            </Link>
        </div>
    );
}