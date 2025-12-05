import { API_URL } from "@/lib/constant";
import AppInfo from '@/components/app-info';
import { Suspense } from 'react';
import { getApiData } from '@/lib/getApiData';

export const metadata = {
    title: 'Home'
}

import { GridSkeleton } from "@/components/skeleton";

export default async function Home() {
    const apps = await getApiData(API_URL);
    return (
        <div className="container mx-auto px-4 py-8 pt-32">
            <h2 className="text-3xl font-bold mb-8 text-white">Trending Now</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {apps.map((app: any) => (
                    <AppInfo
                        key={app.id}
                        id={String(app.id)}
                        title={app.title}
                        poster_path={app.poster_path}
                        vote_average={app.vote_average}
                        release_date={app.release_date}
                    />
                ))}
            </div>
        </div>
    );
}