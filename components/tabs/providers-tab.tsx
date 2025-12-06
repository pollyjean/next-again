import { API_URL } from "@/lib/constant";
import { getApiData } from "@/lib/getApiData";

import { IProvidersResponse } from "@/types/tmdb";

export default async function ProvidersTab({ id }: { id: string }) {
    const content = await getApiData<IProvidersResponse>(`${API_URL}/${id}/providers`);
    const usProviders = content.US;

    if (!usProviders) {
        return <div className="p-8 text-center text-gray-400">No providers available in United States.</div>;
    }

    const renderProviderSection = (title: string, providers: any[]) => {
        if (!providers || providers.length === 0) return null;
        return (
            <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 border-l-4 border-yellow-500 pl-3">{title}</h3>
                <div className="flex flex-wrap gap-4">
                    {providers.map((provider: any) => (
                        <a
                            key={provider.provider_id}
                            href={usProviders.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-2 w-20 hover:opacity-80 transition-opacity"
                            title={provider.provider_name}
                        >
                            <img
                                src={`https://image.tmdb.org/t/p/w300${provider.logo_path}`}
                                alt={provider.provider_name}
                                loading="lazy"
                                className="w-12 h-12 rounded-lg"
                            />
                            <span className="text-xs text-center text-gray-400 truncate w-full">{provider.provider_name}</span>
                        </a>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="max-w-6xl mx-auto my-12 px-4">
            {renderProviderSection("Stream", usProviders.flatrate)}
            {renderProviderSection("Rent", usProviders.rent)}
            {renderProviderSection("Buy", usProviders.buy)}
        </div>
    );
}
