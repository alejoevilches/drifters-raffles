import { raffleContract } from '@/app/contracts/raffle'
import { useReadContract } from 'wagmi'
import RaffleCard from './RaffleCard'

export function Raffles() {
  const { data: rafflesLength, error, isPending } = useReadContract({
    ...raffleContract,
    functionName: 'getRaffleCollectionLength',
  })

  if (isPending) return <div>Loading...</div>

  if (error)
    return (
      <div>
        Error: {(error).shortMessage || error.message}
      </div>
    )

  let count = Number(rafflesLength);

  return (
    <section>
      <h2 className="text-center text-3xl">Estas son las raffles disponibles</h2>
      <div>
        {Array.from({ length: count }).map((_, index) => (
          <RaffleCard key={index} raffleId={index} />
        ))}
      </div>
    </section>
  )
}