import { useReadContract } from 'wagmi'

export function Raffles() {
  const { data: rafflesLength, error, isPending } = useReadContract({
    functionName: 'getRaffleCollectionLength',
    address: '0x389Ad5Eff7d1BE513c8e2C96678078e3Fcfc8F10',
  })

  if (isPending) return <div>Loading...</div>

  if (error)
    return (
      <div>
        Error: {(error).shortMessage || error.message}
      </div>
    )

  return (
    <div>Balance: {rafflesLength?.toString()}</div>
  )
}