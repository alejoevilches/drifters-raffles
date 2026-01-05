import type { Abi } from 'viem'
import raffleAbi from './abi/RaffleFactory.json'

export const raffleContract = {
  abi: raffleAbi.abi as Abi,
  address: '0x389Ad5Eff7d1BE513c8e2C96678078e3Fcfc8F10', // Sepolia
} as const