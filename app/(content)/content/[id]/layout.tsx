import { Suspense } from "react";
import ContentInfo from "@/components/content-info";
import DetailsTabs from "@/components/details-tabs";
import { Skeleton } from "@/components/skeleton";
import { API_URL } from "@/lib/constant";
import { getApiData } from "@/lib/getApiData";

import { IMovie } from "@/types/tmdb";

export default async function ContentLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const similar = await getApiData<IMovie[]>(`${API_URL}/${id}/similar`);
    const hasSimilar = similar.length > 0;

    return (
        <section>
            <Suspense fallback={<Skeleton variant="banner" />}>
                <ContentInfo id={id} />
            </Suspense>
            <Suspense fallback={<div className="max-w-6xl mx-auto px-4"><Skeleton variant="rectangular" className="h-10 w-full mb-8" /></div>}>
                <DetailsTabs id={id} hasSimilar={hasSimilar} />
            </Suspense>
            {children}
        </section>
    );
}
