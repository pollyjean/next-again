'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from './appInfo.module.css';

interface IAppInfoProps {
    title: string;
    id: string;
    poster_path: string;
}

export default function AppInfo({ title, id, poster_path }: IAppInfoProps) {
    const router = useRouter();
    const onClick = () => router.push(`/app/${id}`);

    return <div className={styles.li}>
        <picture className={styles.picture} onClick={onClick}>
            <img className={styles.img} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
        </picture>
        <Link className={styles.link} href={`/app/${id}`} title={title}>{title}</Link>
    </div>;
}