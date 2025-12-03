import { API_URL } from "@/lib/constant";

async function fetchAppVideo(id: string) {
    const response = await fetch(`${API_URL}/${id}/videos`)
        .then(response => response.json())
        .then(data => data[0])
        .catch(error => console.log('error', error));
    return response;
}

export default async function Video({ id }: { id: string }) {
    const video = await fetchAppVideo(id);
    const video_url = `https://www.youtube.com/embed/${video.key}`;
    return <iframe src={video_url} />;
}