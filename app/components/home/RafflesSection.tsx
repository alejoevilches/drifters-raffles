import { raffleContract } from '@/app/contracts/raffle'
import { useReadContract } from 'wagmi'
import RafflesContainer from './RafflesContainer'
import { useGetRaffles } from '@/app/hooks/useGetRaffles'

export function Raffles() {
  return (
    <section>
      <h2 className="text-center text-3xl">Estas son las raffles disponibles</h2>
      <div>
        <RafflesContainer />
      </div>
    </section>
  )
}