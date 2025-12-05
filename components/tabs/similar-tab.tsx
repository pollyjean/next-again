import Link from "next/link";
import { API_URL } from "@/lib/constant";
import { getApiData } from "@/lib/getApiData";
import { Suspense } from "react";

export default async function SimilarTab({ id }: { id: string }) {
    const content = await getApiData(`${API_URL}/${id}/similar`);

    return (
        <div className="max-w-6xl mx-auto my-12 px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {content.map((movie: any) => (
                <div key={movie.id} className="relative group hover:z-10">
                    <Link href={`/content/${movie.id}`}>
                        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-800 transition-transform duration-300 hover:scale-105 bg-gray-900">
                            <img
                                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/500x750?text=No+Poster"}
                                alt={movie.title}
                                loading="lazy"
                                className="w-full h-full object-cover rounded-xl"
                            />
                            <div className="p-4 bg-gray-900/90 absolute bottom-0 left-0 right-0 transform translate-y-full transition-transform duration-300 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                <h4 className="font-bold text-white text-sm truncate">{movie.title}</h4>
                                <p className="text-xs text-gray-400">★ {movie.vote_average.toFixed(1)}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}
