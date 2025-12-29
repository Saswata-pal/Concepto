export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-white shadow-sm border-b px-6 py-4">
                <h1 className="text-xl font-bold text-blue-600">Concepto</h1>
            </nav>
            <main className="p-6">{children}</main>
        </div>
    );
}
