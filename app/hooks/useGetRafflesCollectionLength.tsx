import { useReadContract } from "wagmi"
import { raffleContract } from "../contracts/raffle"

export default function useGetRafflesCollectionLength() {

  const { data, isLoading, error } = useReadContract({
    ...raffleContract,
    functionName: 'getRaffleCollectionLength',
  })

  const length = data ? Number(data) : 0;
  console.log('length', length)
  return { length, isLoading, error }
}