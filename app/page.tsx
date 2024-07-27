import { Web3 } from 'web3';
import Image from "next/image";

// Providers
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'

import { config as wagmiConfig } from '../wagmi-config'

const queryClient = new QueryClient()

// RPC endpoint 
const web3 = new Web3(`https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`); 

export default function Home() {
  return (
    <WagmiProvider config={wagmiConfig}>
       <QueryClientProvider client={queryClient}>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <p>Awe</p>
        </main>
       </QueryClientProvider>
    </WagmiProvider>
  );
}
