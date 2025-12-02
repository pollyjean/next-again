export default async function MovieLoading(params: Promise<{ id: string }>) {
    const { id } = await params;
    return <section>Loading... {id}</section>
}