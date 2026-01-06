import { useGetRaffles } from "@/app/hooks/useGetRaffles"
import useGetRafflesData from "@/app/hooks/useGetRafflesData";

export default function RaffleCard() {
  const { raffles: rafflesData } = useGetRaffles();
  const { raffles } = useGetRafflesData(rafflesData);

  console.log(raffles);

  return (
    <p>Holi</p>
  )
}