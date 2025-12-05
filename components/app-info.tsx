"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

interface IAppInfoProps {
    title: string;
    id: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
}

export default function AppInfo({ title, id, poster_path, vote_average, release_date }: IAppInfoProps) {
    const [isSafari, setIsSafari] = useState(false);

    useEffect(() => {
        // Robust Safari detection using vendor
        const isSafariBrowser = navigator.vendor &&
            navigator.vendor.indexOf('Apple') > -1 &&
            navigator.userAgent &&
            navigator.userAgent.indexOf('CriOS') === -1 &&
            navigator.userAgent.indexOf('FxiOS') === -1;
        setIsSafari(Boolean(isSafariBrowser));
    }, []);

    const hoverClass = !isSafari ? "group-hover:rotate-y-180" : "";

    return (
        <Link href={`/app/${id}`} className="block group perspective-1000">
            <div className={`relative w-full aspect-2/3 transition-transform duration-500 transform-style-3d ${hoverClass}`}>
                {/* Front Face: Poster */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg border border-gray-800">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        alt={title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Back Face: Details */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gray-900 rounded-xl border border-gray-700 p-6 flex flex-col justify-center items-center text-center shadow-xl">
                    <h3 className="text-xl font-bold text-white mb-4 line-clamp-2">{title}</h3>
                    <div className="flex flex-col gap-2 text-gray-300">
                        <span className="text-yellow-500 font-semibold text-lg">
                            ★ {vote_average.toFixed(1)}
                        </span>
                        <span className="text-sm border border-gray-600 px-3 py-1 rounded-full bg-gray-800">
                            {release_date}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}