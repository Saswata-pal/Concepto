export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-600">Welcome to Concepto - Your AI Learning Platform</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="font-semibold">Total Concepts</h2>
                    <p className="text-3xl font-bold text-blue-600">0</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="font-semibold">Audio Generated</h2>
                    <p className="text-3xl font-bold text-green-600">0</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="font-semibold">Visual Stories</h2>
                    <p className="text-3xl font-bold text-purple-600">0</p>
                </div>
            </div>
        </div>
    );
}
