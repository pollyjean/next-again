import { Skeleton } from "@/components/skeleton";

export default function MovieLoading() {
    return (
        <section>
            <Skeleton variant="banner" />
            <div className="max-w-6xl mx-auto px-4 mt-8">
                <Skeleton variant="rectangular" className="h-10 w-full mb-8" />
            </div>
        </section>
    );
}