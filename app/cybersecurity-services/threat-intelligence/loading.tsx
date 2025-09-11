export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#1A1A1A] to-[#3A0000]">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-orange-500 rounded-full animate-spin animation-delay-150"></div>
        <div className="mt-4 text-white text-center font-medium">Loading Threat Intel...</div>
      </div>
    </div>
  )
}

