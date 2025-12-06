import { API_URL } from "@/lib/constant";
import { Suspense } from "react";
import { getApiData } from "@/lib/getApiData";
import TabContent from "@/components/tab-content";

import { getMetadata } from "@/lib/metadata";

export async function generateMetadata(props: {
    params: Promise<{ id: string }>
}) {
    const { id } = await props.params;
    return getMetadata(id);
}

import { VideoSkeleton } from "@/components/skeleton";

export default async function App(props:
    {
        params: Promise<{ id: string }>
    }) {
    const contentInfo = await props.params;
    return (
        <Suspense fallback={<VideoSkeleton />}>
            <TabContent id={contentInfo.id} tab={"video"} />
        </Suspense>
    );
}