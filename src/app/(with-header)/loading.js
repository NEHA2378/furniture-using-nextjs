export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <div className="border border-gray-200 p-4">
            <div className="animate-pulse space-y-2">
                <div className="bg-gray-200 h-48" />
                <div className="flex-1 space-y-2">
                    <div className="h-16 bg-gray-200 full" />
                    <div className="space-x-2 flex">
                        <div className="h-8 bg-gray-200 w-full" />
                        <div className="h-8 bg-gray-200 w-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}
