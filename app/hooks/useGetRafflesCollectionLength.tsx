import { useReadContract } from "wagmi"
import { raffleContract } from "../contracts/raffle"

export default function useGetRafflesCollectionLength() {
  const { data: rafflesLength, isLoading, error } = useReadContract({
    ...raffleContract,
    functionName: 'getRaffleCollectionLength',
  })

  return { rafflesLength, isLoading, error }
}