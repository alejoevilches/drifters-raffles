import { useGetRaffles } from "@/app/hooks/useGetRaffles";
import useGetRafflesCollectionLength from "@/app/hooks/useGetRafflesCollectionLength";


export default function RafflesContainer() {
  const { length } = useGetRafflesCollectionLength();
  const { raffles } = useGetRaffles(length);
  console.log(raffles);
  return (
    <p>Holi</p>
  )
}