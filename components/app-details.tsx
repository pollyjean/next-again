import { API_URL } from "@/lib/constant";
import { getApiData } from "@/lib/getApiData";

export default async function AppDetails({ id }: { id: string }) {
    const video = await getApiData(`${API_URL}/${id}`);
    return (
        <div className="relative">
            {/* Backdrop Image */}
            {video.backdrop_path && (
                <div className="absolute top-0 left-0 w-full h-[80vh] overflow-hidden -z-10 select-none">
                    <img
                        src={`https://image.tmdb.org/t/p/original${video.backdrop_path}`}
                        alt="Backdrop"
                        className="w-full h-full object-cover opacity-50"
                    />
                    {/* Gradient Overlay for Fade Out */}
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/60 to-black" />
                </div>
            )}

            <div className="px-4 py-6 max-w-6xl mx-auto pt-[25vh] relative z-20">
                {/* Header Section */}
                <div className="mb-10 text-center max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-xl tracking-tight">{video.title}</h1>
                    {video.tagline && <p className="text-2xl text-gray-200 italic font-light drop-shadow-lg opacity-90">{video.tagline}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-start">
                    <img
                        className="w-full rounded-2xl shadow-2xl hover:opacity-90 transition-opacity duration-300 z-10 border-4 border-white/5"
                        src={`https://image.tmdb.org/t/p/w500${video.poster_path}`}
                        alt={video.title}
                    />
                    <div className="flex flex-col gap-6">
                        {/* Title removed from here */}
                        <div className="flex flex-wrap gap-4 text-sm font-medium">
                            <span className="bg-yellow-500/20 text-yellow-500 px-3 py-1 rounded-full border border-yellow-500/30 backdrop-blur-sm">
                                ★ {video.vote_average.toFixed(1)}
                            </span>
                            <span className="bg-gray-800/80 text-gray-300 px-3 py-1 rounded-full border border-gray-700 backdrop-blur-sm">
                                {video.vote_count} votes
                            </span>
                            <span className="bg-gray-800/80 text-gray-300 px-3 py-1 rounded-full border border-gray-700 backdrop-blur-sm">
                                {video.release_date}
                            </span>
                        </div>

                        <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10">
                            <h3 className="text-lg font-semibold text-gray-200 mb-2">Overview</h3>
                            <p className="text-gray-300 leading-relaxed text-lg mb-6">{video.overview}</p>

                            {/* Detailed Info Grid */}
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm mt-6 pt-6 border-t border-white/10">
                                <div>
                                    <span className="block text-gray-400 mb-1">Original Title</span>
                                    <span className="text-white font-medium">{video.original_title}</span>
                                </div>
                                <div>
                                    <span className="block text-gray-400 mb-1">Status</span>
                                    <span className="text-white font-medium">{video.status}</span>
                                </div>
                                <div>
                                    <span className="block text-gray-400 mb-1">Runtime</span>
                                    <span className="text-white font-medium">
                                        {Math.floor(video.runtime / 60)}h {video.runtime % 60}m
                                    </span>
                                </div>
                                <div>
                                    <span className="block text-gray-400 mb-1">Genres</span>
                                    <div className="flex flex-wrap gap-2">
                                        {video.genres.map((g: any) => (
                                            <span key={g.id} className="text-white font-medium bg-white/10 px-2 py-0.5 rounded text-xs">
                                                {g.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <span className="block text-gray-400 mb-1">Production Countries</span>
                                    <div className="flex flex-wrap gap-1">
                                        {video.production_countries.map((c: any) => (
                                            <span key={c.iso_3166_1} className="text-white font-medium after:content-[','] last:after:content-[''] mr-1">
                                                {c.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <span className="block text-gray-400 mb-1">Spoken Languages</span>
                                    <div className="flex flex-wrap gap-1">
                                        {video.spoken_languages.map((l: any) => (
                                            <span key={l.iso_639_1} className="text-white font-medium after:content-[','] last:after:content-[''] mr-1">
                                                {l.english_name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            {video.homepage && (
                                <a
                                    href={video.homepage}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
                                >
                                    Visit Official Homepage
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            )}
                            {video.imdb_id && (
                                <a
                                    href={`https://www.imdb.com/title/${video.imdb_id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-[#f5c518] text-black px-6 py-3 rounded-lg font-bold hover:bg-[#e2b60f] transition-colors"
                                >
                                    IMDb
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9.5 17.5h-1.5v-2.5h-1v2.5H5.5v-11h1.5v3.5h1V6.5h1.5v11zm5 0h-1.5v-4h-0.75v4h-1.5v-11h1.5v4.25h0.75V6.5h1.5v11zm5 0h-3.5v-11h1.5v8.5h2v2.5z" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}