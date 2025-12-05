import { Suspense } from "react";
import AppDetails from "@/components/app-details";
import DetailsTabs from "@/components/details-tabs";
import { Skeleton } from "@/components/skeleton";
import { API_URL } from "@/lib/constant";
import { getApiData } from "@/lib/getApiData";

export default async function AppLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const similar = await getApiData(`${API_URL}/${id}/similar`);
    const hasSimilar = similar.length > 0;

    return (
        <section>
            <Suspense fallback={<Skeleton variant="banner" />}>
                <AppDetails id={id} />
            </Suspense>
            <Suspense fallback={<div className="max-w-6xl mx-auto px-4"><Skeleton variant="rectangular" className="h-10 w-full mb-8" /></div>}>
                <DetailsTabs id={id} hasSimilar={hasSimilar} />
            </Suspense>
            {children}
        </section>
    );
}
