import Link from "next/link";
import styles from './appInfo.module.css';

interface IAppInfoProps {
    title: string;
    id: string;
    poster_path: string;
}

export default async function AppInfo({ title, id, poster_path }: IAppInfoProps) {
    return <li className={styles.li}>
        <picture className={styles.picture}>
            <img className={styles.img} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
        </picture>
        <Link className={styles.link} href={`/app/${id}`}>{title}</Link>
    </li>;
}