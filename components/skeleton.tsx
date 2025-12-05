interface SkeletonProps {
    className?: string;
    variant?: "text" | "circular" | "rectangular" | "card" | "banner";
    count?: number;
}

export function Skeleton({ className, variant = "text", count = 1 }: SkeletonProps) {
    const baseClasses = "animate-pulse bg-white/10 rounded";

    const items = Array.from({ length: count });

    return (
        <>
            {items.map((_, index) => {
                if (variant === "card") {
                    return (
                        <div key={index} className={`flex flex-col gap-2 ${className}`}>
                            <div className={`${baseClasses} w-full aspect-2/3 rounded-xl`} />
                            <div className={`${baseClasses} h-4 w-3/4`} />
                            <div className={`${baseClasses} h-3 w-1/2`} />
                        </div>
                    );
                }

                if (variant === "banner") {
                    return (
                        <div key={index} className={`w-full max-w-6xl mx-auto px-4 pt-32 ${className}`}>
                            {/* Header Skeleton */}
                            <div className="flex flex-col items-center mb-10 gap-4">
                                <div className={`${baseClasses} h-12 w-3/4 max-w-lg mb-2`} />
                                <div className={`${baseClasses} h-6 w-1/2 max-w-md`} />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
                                <div className={`${baseClasses} w-full aspect-2/3 rounded-2xl`} />
                                <div className="flex flex-col gap-6">
                                    <div className="flex gap-4">
                                        <div className={`${baseClasses} h-8 w-20 rounded-full`} />
                                        <div className={`${baseClasses} h-8 w-24 rounded-full`} />
                                        <div className={`${baseClasses} h-8 w-24 rounded-full`} />
                                    </div>
                                    <div className={`${baseClasses} h-32 w-full rounded-xl`} />
                                </div>
                            </div>
                        </div>
                    );
                }

                if (variant === "rectangular") {
                    return <div key={index} className={`${baseClasses} ${className}`} />;
                }

                if (variant === "circular") {
                    return <div key={index} className={`${baseClasses} rounded-full ${className}`} />;
                }

                return <div key={index} className={`${baseClasses} h-4 ${className}`} />;
            })}
        </>
    );
}

export function GridSkeleton({ count = 12 }: { count?: number }) {
    return (
        <div className="max-w-6xl mx-auto my-12 pt-20 px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <Skeleton variant="card" count={count} />
        </div>
    );
}
