import { useState, useEffect, useMemo } from 'react';
import { raffleContract } from '../contracts/raffle';
import { useReadContracts } from 'wagmi';

export function useGetRaffles(count: number) {
  const [raffles, setRaffles] = useState<any>();
  const gateway = "https://moccasin-improved-coyote-773.mypinata.cloud/";
  const calls = useMemo(() => {
    return Array.from({ length: count }).map((_, index) => ({
      ...raffleContract,
      functionName: 'getRaffle',
      args: [index]
    }));
  }, [count]);

  const { data: rawRaffles, error } = useReadContracts({
    contracts: calls
  });

  async function fetchRaffles() {
    console.log(rawRaffles);

    try {
      const results = await Promise.all(
        rawRaffles?.map(async (raffle) => {
          const uri = raffle?.result?.metadataURI;

          if (!uri || !uri.startsWith("ipfs://")) {
            return null;
          }

          const cid = uri.replace("ipfs://", "");
          const url = `${gateway}ipfs/${cid}`;

          const response = await fetch(url);
          if (!response.ok) return null;

          return await response.json();
        }) ?? []
      );

      return results.filter(Boolean);
    } catch (e) {
      throw new Error(String(e));
    }
  }

  useEffect(() => {
    const run = async () => {
      const data = await fetchRaffles();
      setRaffles(data)
    };
    run();
  }, [rawRaffles]);


  return { raffles }
}
