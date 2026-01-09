import type { Abi } from 'viem'
import raffleAbi from './abi/RaffleFactory.json'

export const raffleContract = {
  abi: raffleAbi.abi as Abi,
  address: '0x8cdBE6D4DfDd1F179261b49800b3F62a2f9e0C78', // Sepolia
} as const