
import { API_URL } from "@/lib/constant";
import { getApiData } from "@/lib/getApiData";

export default async function CreditsTab({ id }: { id: string }) {
    const contents = await getApiData(`${API_URL}/${id}/credits`);

    return (
        <div className="max-w-6xl mx-auto my-12 px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {contents.map((content: any) => (
                <div key={content.id} className="flex flex-col gap-2 mb-4">
                    <a
                        href={`https://www.imdb.com/find?q=${encodeURIComponent(content.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                    >
                        {content.profile_path ? (
                            <img
                                src={`https://image.tmdb.org/t/p/w500${content.profile_path}`}
                                alt={content.name}
                                loading="lazy"
                                className="w-full aspect-2/3 rounded-lg object-cover shadow-md group-hover:opacity-80 transition-opacity"
                            />
                        ) : (
                            <div className="w-full aspect-2/3 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 group-hover:bg-gray-700 transition-colors">
                                No Image
                            </div>
                        )}
                        <div className="mt-2">
                            <h3 className="text-lg font-bold text-gray-200 group-hover:text-yellow-500 transition-colors">{content.name}</h3>
                            <p className="text-sm text-gray-400">{content.character}</p>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
}
