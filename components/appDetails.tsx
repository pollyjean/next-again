import { API_URL } from "@/lib/constant";

async function fetchAppDetails(id: string) {
    const response = await fetch(`${API_URL}/${id}`)
        .then(response => response.json())
        .catch(error => console.log('error', error));
    return response;
}

export default async function AppDetails({ id }: { id: string }) {
    const video = await fetchAppDetails(id);
    return <div className="p-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-start">
            <img
                className="w-full rounded-2xl shadow-2xl hover:opacity-90 transition-opacity duration-300"
                src={`https://image.tmdb.org/t/p/w500${video.poster_path}`}
                alt={video.title}
            />
            <div className="flex flex-col gap-6">
                <div>
                    <h1 className="text-5xl font-extrabold text-white mb-2">{video.title}</h1>
                    {video.tagline && <p className="text-xl text-gray-400 italic">{video.tagline}</p>}
                </div>

                <div className="flex flex-wrap gap-4 text-sm font-medium">
                    <span className="bg-yellow-500/20 text-yellow-500 px-3 py-1 rounded-full border border-yellow-500/30">
                        ★ {video.vote_average.toFixed(1)}
                    </span>
                    <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">
                        {video.vote_count} votes
                    </span>
                    <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">
                        {video.release_date}
                    </span>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                    <h3 className="text-lg font-semibold text-gray-200 mb-2">Overview</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">{video.overview}</p>
                </div>

                {video.homepage && (
                    <a
                        href={video.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors self-start"
                    >
                        Visit Homepage &rarr;
                    </a>
                )}
            </div>
        </div>
    </div>
}