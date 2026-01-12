"use client"

import { useGetRaffles } from "@/app/hooks/useGetRaffles";
import useGetRafflesCollectionLength from "@/app/hooks/useGetRafflesCollectionLength";
import RaffleCard from "./RaffleCard";
import RaffleLoader from "./RaffleLoader";

export default function RafflesContainer() {
  const { length } = useGetRafflesCollectionLength();
  const { raffles, isLoading, error } = useGetRaffles(length);

  if (isLoading) return <RaffleLoader />;

  if (error) return "Estamos teniendo problemas para mostrarte las raffles. Volvé a intentarlo más tarde."

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {raffles?.map((raffle, index) => {
        return (
          <RaffleCard key={index} raffle={raffle} raffleIndex={index} />
        )
      })}
    </section>
  )
}