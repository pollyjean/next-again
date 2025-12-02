import Link from 'next/link';
import { API_URL } from "@/lib/constant";

export const metadata = {
    title: 'Home'
}

async function getListApps(query: string, country?: string) {
    const response = await fetch(`${API_URL}?q=${query ? query : '*'}`)
        .then(response => response.json())
        .catch(error => console.log('error', error));
    return response;
}

export default async function Home() {
    const allApps = await getListApps('*');
    return <main>
        <header>
            <h1>{metadata.title}</h1>
        </header>
        <p>Home Page</p>
        <ul>
            {allApps.map((item: any) => (
                <li key={item.id}>
                    <Link href={`/app/${item.id}`}>{item.title}</Link>
                </li>
            ))}
        </ul>
    </main>
}