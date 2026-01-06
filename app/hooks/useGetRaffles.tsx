import { useState, useEffect } from 'react';
import { raffleContract } from '../contracts/raffle';
import { useReadContracts } from 'wagmi';
import useGetRafflesCollectionLength from './useGetRafflesCollectionLength';

export function useGetRaffles() {
  const { rafflesLength } = useGetRafflesCollectionLength()

  let count = Number(rafflesLength);

  const contracts = Array.from({ length: count }).map((_, index) => ({
    ...raffleContract,
    functionName: 'getRaffle',
    args: [index],
  }))

  const { data, isLoading, error } = useReadContracts({ contracts })

  return {
    raffles: data ?? [],
    isLoading,
    error
  }

}