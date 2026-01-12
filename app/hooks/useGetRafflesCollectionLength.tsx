import { useReadContract } from "wagmi"
import { raffleContract } from "../contracts/raffle"

export default function useGetRafflesCollectionLength() {

  const { data, isLoading, error } = useReadContract({
    ...raffleContract,
    chainId: 11155111,
    functionName: 'getRaffleCollectionLength',
  })

  const length = data ? Number(data) : 0;
  console.log('length', length)
  return { length, isLoading, error }
}