import Link from "next/link";

export default async function App(props:
    {
        params: Promise<{ id: string }>,
        searchParams: Promise<{ lang?: string }>
    }) {
    const params = await props.params;
    const searchParams = await props.searchParams;
    return <section lang={searchParams.lang ? searchParams.lang : 'en'}>
        App {params.id}
        <Link href={`/app/${params.id}`}
            className="hover:underline"> App {params.id} <span className="text-gray-400">{searchParams.lang ? `(${searchParams.lang})` : ''}</span></Link>
    </section>
}