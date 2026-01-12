"use client"

import { useGetRaffles } from "@/app/hooks/useGetRaffles";
import useGetRafflesCollectionLength from "@/app/hooks/useGetRafflesCollectionLength";
import RaffleCard from "./RaffleCard";

export default function RafflesContainer() {
  const { length } = useGetRafflesCollectionLength();
  const { raffles, isLoading } = useGetRaffles(length);



  if (isLoading) return "Loading...";

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