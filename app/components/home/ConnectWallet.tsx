"use client"

import { useConnect, useConnectors, useConnection } from 'wagmi'
import { Raffles } from './Raffles'

export default function ConnectWallet() {
  const { connect } = useConnect()
  const connectors = useConnectors()
  const { address } = useConnection()

  return (
    <>
      {address && <Raffles />}
      {!address && <section className='flex gap-4 pb-6'>
        {
          connectors.map((connector) => (
            <button
              key={connector.uid}
              onClick={() => connect({ connector })}
              className="text-sm bg-gray-300 p-2 rounded cursor-pointer"
            >
              {connector.name}
            </button>
          ))
        }
      </section>}
    </>
  )
}