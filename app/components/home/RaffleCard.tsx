"use client"

import { raffleContract } from "@/app/contracts/raffle"
import { useReadContract, useConnection, useWriteContract } from "wagmi"
import { useState } from "react"

export default function RaffleCard({ raffle, raffleIndex }: { raffle: any, raffleIndex: number }) {
  const { address } = useConnection();
  const writeContract = useWriteContract();
  const { data, error } = useReadContract({
    ...raffleContract,
    functionName: "hasParticipated",
    args: [raffleIndex, address]
  })

  const participated = data === true;

  const handleEnterRaffle = async (raffleId: number) => {
    try {
      writeContract.mutate({
        ...raffleContract,
        functionName: "addParticipant",
        args: [address, raffleId]
      })
    } catch (e) {
      console.error(e);
    }
  }

  return (
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

      <p className="text-sm text-gray-400 text-center line-clamp-2">
        {raffle.description}
      </p>

      <div className="flex items-center justify-between mt-2">
        <span className="text-xl font-bold text-gray-100">
          ${raffle.price}
        </span>
        <button className="px-4 py-2 text-sm font-medium rounded-md bg-gray-100 text-gray-900 transition-all duration-200 hover:bg-gray-200 hover:scale-[1.02]
        active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={participated}
          onClick={() => handleEnterRaffle(raffleIndex)}>
          {participated ? "Ya estas inscripto" : "Entrar a la raffle"}
        </button>
      </div>
    </div>
  )
}