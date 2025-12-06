import { API_URL } from "@/lib/constant";
import { getApiData } from "@/lib/getApiData";
import { Suspense } from "react";
import { Skeleton } from "@/components/skeleton";
import { IVideo } from "@/types/tmdb";

export default async function VideoTab({ id }: { id: string }) {
    const content = await getApiData<IVideo[]>(`${API_URL}/${id}/videos`);

    if (!content || content.length === 0) {
        return <div className="text-center my-20 text-gray-400 text-lg pb-10">No related videos found.</div>;
    }

    return (
        <div className="max-w-6xl mx-auto my-12 px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {content.map((video: any) => (
                <Suspense key={video.id} fallback={<Skeleton className="w-full aspect-video rounded-xl" variant="rectangular" />}>
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-lg border border-gray-800 hover:scale-105 transition-transform duration-300">
                        <iframe
                            src={`https://www.youtube.com/embed/${video.key}`}
                            className="absolute top-0 left-0 w-full h-full"
                            title={video.name}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </Suspense>
            ))}
        </div>
    );
}
