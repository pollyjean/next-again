import { API_URL } from "@/lib/constant";
import { Suspense } from "react";
import { getApiData } from "@/lib/getApiData";
import { GridSkeleton } from "@/components/skeleton";
import TabContent from "@/components/tab-content";

import { getMetadata } from "@/lib/metadata";

export async function generateMetadata(props: {
    params: Promise<{ id: string }>
}) {
    const { id } = await props.params;
    return getMetadata(id);
}

export default async function CreditsPage(props:
    {
        params: Promise<{ id: string }>
    }) {
    const appInfo = await props.params;
    return (
        <Suspense fallback={<GridSkeleton />}>
            <TabContent id={appInfo.id} tab={"credits"} />
        </Suspense>
    );
}