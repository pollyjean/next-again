import AppInfo from "@/components/appInfo";
import Video from "@/components/video";
import { API_URL } from "@/lib/constant";
import { Suspense } from "react";

export async function generateMetadata(props: {
    params: Promise<{ id: string }>
}) {
    const { id } = await props.params;
    return {
        title: await fetch(`${API_URL}/${id}`)
            .then(response => response.json())
            .then(data => data.title)
            .catch(error => console.log('error', error)),
    }
}

export default async function App(props:
    {
        params: Promise<{ id: string }>
    }) {
    const { id } = await props.params;
    return <section>
        <Suspense fallback={<div>Loading Information...</div>}>
            <AppInfo id={id} />
        </Suspense>
        <Suspense fallback={<div>Loading Video...</div>}>
            <Video id={id} />
        </Suspense>
    </section>
}