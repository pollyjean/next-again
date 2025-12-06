import Link from "next/link";

interface IAppInfoProps {
    title: string;
    id: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
}

export default function AppInfo({ title, id, poster_path, vote_average, release_date }: IAppInfoProps) {

    return (
        <Link href={`/content/${id}`} className="block group perspective-1000" prefetch={true}>
            <div className={`relative w-full aspect-2/3 transition-transform duration-500 transform-style-3d group-hover:rotate-y-180`}>
                {/* Front Face: Poster */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg border border-gray-800">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        alt={title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Back Face: Details */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl overflow-hidden border border-white/20 shadow-xl group-hover:shadow-2xl transition-shadow flex flex-col justify-center items-center text-center p-6 bg-black">
                    {/* Blurred Background Image */}
                    <div className="absolute inset-0 z-0 opacity-90 blur-xs scale-105 inner-shadow-sm">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                            alt=""
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 z-10 bg-linear-to-b from-black/60 via-black/40 to-black/80" />

                    {/* Content */}
                    <div className="relative z-20 flex flex-col items-center gap-3">
                        <h3 className="text-xl font-bold text-white leading-tight drop-shadow-md">{title}<br /> <span className="text-gray-200 text-sm font-thin">({release_date.split('-')[0]})</span></h3>
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-yellow-400 font-bold text-xl flex items-center gap-1 drop-shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                </svg>
                                {vote_average.toFixed(1)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}