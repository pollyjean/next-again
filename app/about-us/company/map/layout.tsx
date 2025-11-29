export default function MapLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return <section className="border border-gray-300 rounded p-2 m-2">
        <p className="font-bold">nested layout example</p>
        {children}
        <address>
            <p>Address: 123 Main St</p>
        </address>
    </section>
}