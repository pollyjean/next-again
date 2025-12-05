export default function AboutUsLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return <section className="border border-gray-300 rounded p-2 m-2">
        {children}
        <em>copyright &copy; 2025</em>
    </section>
}