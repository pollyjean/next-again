import Link from "next/link";
import { API_URL } from "@/lib/constant";

async function fetchAppName(id: string) {
    console.log('fetchAppName', id, new Date().toISOString());
    // TEMP: delay 5 seconds
    await new Promise(resolve => setTimeout(resolve, 5000));
    const response = await fetch(`${API_URL}/${id}`)
        .then(response => response.json())
        .catch(error => console.log('error', error));
    return response.title;
}

async function fetchAppVideo(id: string) {
    console.log('fetchAppVideo', id, new Date().toISOString());
    // TEMP: delay 5 seconds
    await new Promise(resolve => setTimeout(resolve, 5000));
    const response = await fetch(`${API_URL}/${id}/videos`)
        .then(response => response.json())
        .then(data => data[0])
        .catch(error => console.log('error', error));
    return response;
}

export async function generateMetadata(props: {
    params: Promise<{ id: string }>
}) {
    const { id } = await props.params;
    return {
        title: await fetchAppName(id),
    }
}

export default async function App(props:
    {
        params: Promise<{ id: string }>,
        searchParams: Promise<{ lang?: string }>
    }) {
    const { id } = await props.params;
    const searchParams = await props.searchParams;
    console.log('start fetching app name and video');
    // Promise.all is used to fetch multiple resources in parallel
    const [name, video] = await Promise.all([fetchAppName(id), fetchAppVideo(id)]);
    console.log('end fetching app name and video');
    const video_url = `https://www.youtube.com/embed/${video.key}`;
    return <section lang={searchParams.lang ? searchParams.lang : 'en'}>
        <h2>{name}</h2>
        <iframe src={video_url} />
    </section>
}