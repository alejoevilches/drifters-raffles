const IPFS_GATEWAY =
  'https://moccasin-improved-coyote-773.mypinata.cloud/ipfs/'

export function resolveIpfsUri(uri?: string) {
  if (!uri) return null
  if (!uri.startsWith('ipfs://')) return uri

  return uri.replace('ipfs://', IPFS_GATEWAY)
}