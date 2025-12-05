import { Suspense } from "react";
import AppDetails from "@/components/app-details";
import DetailsTabs from "@/components/details-tabs";
import { Skeleton } from "@/components/skeleton";

export default async function AppLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    return (
        <section>
            <Suspense fallback={<Skeleton variant="banner" />}>
                <AppDetails id={id} />
            </Suspense>
            <Suspense fallback={<div className="max-w-6xl mx-auto px-4"><Skeleton variant="rectangular" className="h-10 w-full mb-8" /></div>}>
                <DetailsTabs id={id} />
            </Suspense>
            {children}
        </section>
    );
}
