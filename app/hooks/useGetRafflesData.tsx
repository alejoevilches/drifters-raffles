import { useEffect, useState } from "react"
import { resolveIpfsUri } from "@/lib/ipfs"

export default function useGetRafflesData(raffles: any[]) {
  const [data, setData] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!raffles || raffles.length === 0) {
      setData([])
      return
    }

    let cancelled = false

    async function load() {
      try {
        setIsLoading(true)
        setError(null)

        const results = await Promise.all(
          raffles.map(async (raffle) => {
            const url = resolveIpfsUri(raffle.result.metadataURI)
            if (!url) return { ...raffle, metadata: null }

            const res = await fetch(url)
            const metadata = await res.json()

            return {
              ...raffle,
              metadata,
            }
          })
        )

        if (!cancelled) {
          setData(results)
        }
      } catch (err: any) {
        if (!cancelled) {
          setError(err)
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false)
        }
      }
    }

    load()

    return () => {
      cancelled = true
    }
  }, [raffles])

  return {
    raffles: data,
    isLoading,
    error,
  }
}