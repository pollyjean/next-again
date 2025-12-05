import { GridSkeleton } from "@/components/skeleton";

export default function Loading() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-8 text-white">Trending Now</h2>
            <GridSkeleton />
        </div>
    );
}