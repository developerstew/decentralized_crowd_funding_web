'use client';

import React, { ReactNode } from 'react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConnectKitProvider } from 'connectkit';

import { config as wagmiConfig } from '../../../wagmi-config';

const queryClient = new QueryClient();

type WagmiProviderProps = {
    children: ReactNode,
};

export const Web3Provider = ({ children }: WagmiProviderProps) => (
    <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
            <ConnectKitProvider>{children}</ConnectKitProvider>
        </QueryClientProvider>
    </WagmiProvider>
);
