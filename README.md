# Drifters Raffles

Flagship Web3 raffle platform for **Drifters**, a Buenos Aires sneaker store. Drifters Raffles lets the community connect a wallet, browse raffles sourced from on-chain data + IPFS metadata, and enter transparently via a smart contract on Sepolia.

## ✨ Why this project
Drifters Raffles is built to make high-demand sneaker raffles fair, verifiable, and community-first. The front-end surfaces live raffle inventory, the contract guarantees the rules, and IPFS keeps metadata immutable.

## ✅ Core features
- **Wallet-first UX** — connect with injected wallets to unlock raffles.
- **On-chain raffle discovery** — reads the raffle count + individual raffle data directly from the contract.
- **IPFS-backed metadata** — product details and imagery are fetched via IPFS gateway.
- **One-click entry** — users enter raffles through a contract call with clear participation status.
- **Transparent randomness** — the contract ABI indicates Chainlink VRF usage for winner selection.

## 🧱 Tech stack
- **Next.js 16** (App Router)
- **React 19**
- **Wagmi + Viem** for blockchain interactions
- **TanStack Query** for data fetching patterns
- **Tailwind CSS** for styling

## 🧠 How it works
1. **Connect wallet** using injected providers.
2. **Load raffle count** from the contract.
3. **Fetch raffle data** for each index.
4. **Resolve metadata** from IPFS (via Pinata gateway).
5. **Enter raffle** with a contract call, while showing participation state.

## 🔗 Smart contract
- **Network:** Sepolia
- **ABI:** `app/contracts/abi/RaffleFactory.json`
- **Contract config:** `app/contracts/raffle.ts`

If you deploy a new contract, update the address in `app/contracts/raffle.ts` and ensure the ABI matches.

## 📦 Project structure
```
app/
  components/        # UI sections and cards
  contracts/         # ABI + contract config
  hooks/             # Wagmi hooks for chain data
  types/             # Raffle and on-chain types
config/
  wagmi.ts           # Chain + connector setup
```

## 🚀 Getting started

### Requirements
- **Node.js 18+**
- **npm** (or your preferred package manager)

### Install
```bash
npm install
```

### Run locally
```bash
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000).

### Build & start
```bash
npm run build
npm run start
```

### Lint
```bash
npm run lint
```

## 🧩 Configuration
- **Chain & connectors:** `config/wagmi.ts`
- **Contract address:** `app/contracts/raffle.ts`
- **IPFS gateway:** `app/hooks/useGetRaffles.tsx`

To point at a new IPFS gateway, update the `gateway` value inside `useGetRaffles`.

## 🗺️ Roadmap ideas
- Multi-network support (mainnet + L2)
- Admin dashboard for creating raffles
- Winner reveal UI + transaction history
- Localization improvements (Spanish/English toggle)

## 🤝 Contributing
Pull requests are welcome. If you want to propose a major change, open an issue first so we can align on the vision.

---

**Drifters Raffles** — transparent sneaker raffles, powered by blockchain.
