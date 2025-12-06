import { API_URL } from "@/lib/constant";
import { Suspense } from "react";
import { getApiData } from "@/lib/getApiData";
import TabContent from "@/components/tab-content";

export async function generateMetadata(props: {
    params: Promise<{ id: string }>
}) {
    const { id } = await props.params;
    return {
        title: getApiData(`${API_URL}/${id}`),
    }
}

import { VideoSkeleton } from "@/components/skeleton";

export default async function App(props:
    {
        params: Promise<{ id: string }>
    }) {
    const appInfo = await props.params;
    return (
        <Suspense fallback={<VideoSkeleton />}>
            <TabContent id={appInfo.id} tab={"video"} />
        </Suspense>
    );
}