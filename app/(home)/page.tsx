import { API_URL } from "@/lib/constant";
import AppInfo from '@/components/app-info';
import { getApiData } from '@/lib/getApiData';
import { IMovie } from '@/types/tmdb';

export const metadata = {
    title: 'Home'
}

export default async function Home() {
    const apps = await getApiData<IMovie[]>(API_URL);
    const randomApp = apps[Math.floor(Math.random() * apps.length)];

    return (
        <div className="relative min-h-screen">
            {/* Random Background Image */}
            {randomApp?.backdrop_path && (
                <div className="fixed top-0 left-0 w-full h-[80vh] overflow-hidden -z-10 select-none">
                    <img
                        src={`https://image.tmdb.org/t/p/original${randomApp.backdrop_path}`}
                        alt="Background"
                        loading="lazy"
                        className="w-full h-full object-cover opacity-20"
                    />
                    {/* Gradient Overlay for Fade Out */}
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/60 to-black" />
                </div>
            )}

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
        </div>
    );
}