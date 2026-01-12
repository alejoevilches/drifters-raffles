"use client";

import { useState, useEffect, useMemo } from "react";
import { useReadContracts } from "wagmi";
import { raffleContract } from "../contracts/raffle";

type WagmiResult<T> =
  | { status: "success"; result: T }
  | { status: "failure"; error: Error };

export function useGetRaffles(count: number) {
  const [raffles, setRaffles] = useState<Raffle[]>([]);
  const gateway = "https://moccasin-improved-coyote-773.mypinata.cloud/";

  const calls = useMemo(
    () =>
      Array.from({ length: count }).map((_, index) => ({
        ...raffleContract,
        functionName: "getRaffle",
        args: [index],
      })),
    [count]
  );

  const {
    data: rawRaffles,
    isLoading,
    error,
  } = useReadContracts({
    contracts: calls,
  });

  async function fetchRaffles(
    data?: WagmiResult<RaffleOnchain>[]
  ): Promise<Raffle[]> {
    if (!data) return [];

    const results = await Promise.all(
      data.map(async (raffle) => {
        if (raffle.status !== "success") return null;

        const uri = raffle.result.metadataURI;

        if (!uri || !uri.startsWith("ipfs://")) return null;

        const cid = uri.replace("ipfs://", "");
        const url = `${gateway}ipfs/${cid}`;

        const response = await fetch(url);
        if (!response.ok) return null;

        return (await response.json()) as Raffle;
      })
    );

    return results.filter(
      (r): r is Raffle => r !== null
    );
  }

  useEffect(() => {
    if (!rawRaffles) return;

    fetchRaffles(rawRaffles as WagmiResult<RaffleOnchain>[]).then(
      setRaffles
    );
  }, [rawRaffles]);

  return { raffles, isLoading, error };
}