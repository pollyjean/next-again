
import { API_URL } from "@/lib/constant";
import { getApiData } from "@/lib/getApiData";
import { Suspense } from "react";

export default async function ProvidersTab({ id }: { id: string }) {
    const content = await getApiData(`${API_URL}/${id}/providers`);
    const krProviders = content.results?.KR;

    if (!krProviders) {
        return <div className="p-8 text-center text-gray-400">No providers available in Korea.</div>;
    }

    const renderProviderSection = (title: string, providers: any[]) => {
        if (!providers || providers.length === 0) return null;
        return (
            <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 border-l-4 border-yellow-500 pl-3">{title}</h3>
                <div className="flex flex-wrap gap-4">
                    {providers.map((provider: any) => (
                        <div key={provider.provider_id} className="flex flex-col items-center gap-2 w-20">
                            <img
                                src={`https://image.tmdb.org/t/p/w300${provider.logo_path}`}
                                alt={provider.provider_name}
                                loading="lazy"
                                className="w-12 h-12 rounded-lg"
                            />
                            <span className="text-xs text-center text-gray-400 truncate w-full">{provider.provider_name}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="max-w-6xl mx-auto my-12 px-4">
            {renderProviderSection("Stream", krProviders.flatrate)}
            {renderProviderSection("Rent", krProviders.rent)}
            {renderProviderSection("Buy", krProviders.buy)}
        </div>
    );
}
