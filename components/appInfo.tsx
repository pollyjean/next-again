import { API_URL } from "@/lib/constant";

async function fetchAppInfo(id: string) {
    const response = await fetch(`${API_URL}/${id}`)
        .then(response => response.json())
        .catch(error => console.log('error', error));
    return response.title;
}

export default async function AppInfo({ id }: { id: string }) {
    const info = await fetchAppInfo(id);
    return <h2>{info}</h2>;
}