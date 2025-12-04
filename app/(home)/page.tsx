import Link from 'next/link';
import { API_URL } from "@/lib/constant";
import AppInfo from '@/components/appInfo';
import styles from './home.module.css';

export const metadata = {
    title: 'Home'
}

async function getListApps() {
    const response = await fetch(API_URL)
        .then(response => response.json())
        .catch(error => console.log('error', error));
    return response;
}

export default async function Home() {
    const allApps = await getListApps();
    return <main>
        <ul className={styles.ul}>
            {allApps.map((item: any) => (
                <li key={item.id}>
                    <AppInfo {...item} />
                </li>
            ))}
        </ul>
    </main>
}