export default function RaffleLoader() {
  return (
    <div className="flex flex-col items-center justify-center py-12 gap-4">
      {/* Pulse */}
      <div className="relative flex items-center justify-center">
        <div className="absolute h-16 w-16 rounded-full bg-gray-300/20 animate-ping" />
        <div className="h-10 w-10 rounded-full bg-gray-400/80" />
      </div>
      <p className="text-sm text-gray-500 tracking-wide">
        Sincronizando con la blockchain…
      </p>
    </div>
  );
}