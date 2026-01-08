import { useGetRaffles } from "@/app/hooks/useGetRaffles";
import useGetRafflesCollectionLength from "@/app/hooks/useGetRafflesCollectionLength";


export default function RafflesContainer() {
  const { length } = useGetRafflesCollectionLength();
  const { raffles, isLoading } = useGetRaffles(length);

  if (isLoading) return "Loading...";

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {raffles?.map((raffle) => (
        <div
          key={raffle.model}
          className="group bg-gray-900 border border-gray-800 rounded-xl p-4 flex flex-col gap-4
                 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gray-700"
        >
          <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center">
            <img
              src={raffle.image}
              alt={raffle.model}
              className="w-80 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col gap-1 text-center">
            <span className="text-xs uppercase tracking-wide text-gray-400">
              {raffle.brand}
            </span>
            <h2 className="text-lg font-semibold text-gray-100">
              {raffle.model}
            </h2>
          </div>

          {/* Descripción */}
          <p className="text-sm text-gray-400 text-center line-clamp-2">
            {raffle.description}
          </p>

          {/* Precio */}
          <div className="flex items-center justify-between mt-2">
            <span className="text-xl font-bold text-gray-100">
              ${raffle.price}
            </span>

            <button
              className="px-4 py-2 text-sm font-medium rounded-md
                     bg-gray-100 text-gray-900
                     hover:bg-gray-200 transition-colors"
            >
              Ver más
            </button>
          </div>
        </div>
      ))}
    </section>
  )
}