export default function ContentPage({ params }: { params: { contentId: string } }) {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Content: {params.contentId}</h1>
            <p className="text-gray-600">View and explore content details</p>
        </div>
    );
}
