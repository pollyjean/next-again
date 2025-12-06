import { MainSkeleton } from "@/components/skeleton";

export default function Loading() {
    return (
        <div className="container mx-auto px-4 py-8 pt-32">
            <h2 className="text-3xl font-bold mb-8 text-white">Trending Now</h2>
            <MainSkeleton />
        </div>
    );
}