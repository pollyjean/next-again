'use client';

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="text-center my-20 pb-10 px-4">
            <h2 className="text-2xl font-bold text-gray-200 mb-4">Something went wrong!</h2>
            <p className="text-gray-400 mb-8">{error.message || "An unexpected error occurred."}</p>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg transition-colors border border-gray-700"
            >
                Try again
            </button>
        </div>
    );
}