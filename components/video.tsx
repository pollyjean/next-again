import { API_URL } from "@/lib/constant";

async function fetchAppVideos(id: string) {
    const response = await fetch(`${API_URL}/${id}/videos`)
        .then(response => response.json())
        .catch(error => console.log('error', error));
    return response;
}

export default async function Video({ id }: { id: string }) {
    const videos = await fetchAppVideos(id);
    return <div className="max-w-6xl mx-auto my-12 px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video: any) => (
            <div key={video.id} className="relative aspect-video w-full overflow-hidden rounded-xl shadow-lg border border-gray-800 hover:scale-105 transition-transform duration-300">
                <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    className="absolute top-0 left-0 w-full h-full"
                    title={video.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        ))}
    </div>;
}