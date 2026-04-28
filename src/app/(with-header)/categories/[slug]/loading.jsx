export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center">
      
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-gray-300 border-t-yellow-600 rounded-full animate-spin"></div>

      <p className="mt-4 text-gray-600 font-medium">
        Loading your experience...
      </p>

    </div>
  );
}