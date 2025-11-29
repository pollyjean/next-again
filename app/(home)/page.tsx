import Link from "next/link";

export const metadata = {
    title: 'Banana',
}

export default async function Banana() {
    return <section>Banana

        <ul className="flex justify-around">
            <li><Link href="/app/1">Apple</Link></li>
            <li><Link href="/app/1?lang=ko">Apple (ko)</Link></li>
            <li><Link href="/app/1?lang=en">Apple (en)</Link></li>
            <li><Link href="/app/1?lang=ja">Apple (ja)</Link></li>
            <li><Link href="/app/1?lang=fr">Apple (fr)</Link></li>
            <li><Link href="/app/1?lang=zh">Apple (zh)</Link></li>
        </ul>
    </section>
}