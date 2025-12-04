import Video from "@/components/video";
import AppInfo from "@/components/appInfo";
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

async function fetchAppInfo(id: string) {
    const response = await fetch(`${API_URL}/${id}/videos`)
        .then(response => response.json())
        .catch(error => console.log('error', error));
    return response;
}

export default async function App(props:
    {
        params: Promise<{ id: string }>
    }) {
    const { id } = await props.params;
    const appInfo = await fetchAppInfo(id);
    return <section>
        <AppInfo {...appInfo} />
    </section>
}