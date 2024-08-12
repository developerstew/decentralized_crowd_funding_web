import {
    createConfig,
    http,
} from 'wagmi';
import { sepolia } from 'wagmi/chains';

import { ConnectKitProvider, getDefaultConfig } from 'connectkit';

declare module 'wagmi' {
    interface Register {
        config: typeof config,
    }
}

export const config = createConfig(
    getDefaultConfig({
        appName: 'Your App Name',
        chains: [sepolia],
        transports: {
            [sepolia.id]: http(
                // If not work maybe use NextPublic
                `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
            ),
        },
        walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID,
    }),
);
