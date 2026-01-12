"use client"

import { raffleContract } from "@/app/contracts/raffle";
import { useState } from "react";
import { useGetRaffles } from "@/app/hooks/useGetRaffles";
import useGetRafflesCollectionLength from "@/app/hooks/useGetRafflesCollectionLength";
import { useWriteContract, useConnection, useSwitchChain } from 'wagmi'
import RaffleCard from "./RaffleCard";

export default function RafflesContainer() {
  const [joined, setJoined] = useState(false)
  const { length } = useGetRafflesCollectionLength();
  const { raffles, isLoading } = useGetRaffles(length);
  const writeContract = useWriteContract();
  const { address } = useConnection()
  const { switchChainAsync } = useSwitchChain();


  if (isLoading) return "Loading...";

  const handleEnterRaffle = async (raffleId: number) => {
    await switchChainAsync({ chainId: 11155111 });
    try {
      writeContract.mutate({
        ...raffleContract,
        functionName: "addParticipant",
        args: [address, raffleId]
      })
      setJoined(true);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {raffles?.map((raffle, index) => {
        return (
          <RaffleCard key={index} raffle={raffle} />
        )
      })}
    </section>
  )
}