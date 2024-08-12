'use client';

import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { useAccount } from 'wagmi';
import { ConnectKitButton } from 'connectkit';

// Components
import { Button } from 'react-aria-components';

// Icons
import { WalletIcon } from '@/app/icons/wallet/wallet-icon';

export const Header = () => {
    const {
        address, isConnecting, isDisconnected,
    } = useAccount();

    console.log(address, isConnecting, isDisconnected, 'Header');
    return (
        <ul className="flex border-b-2 justify-between pt-4 px-3 items-center lg:flex-row">
            <li>
                <h1>CrowdFunding</h1>
            </li>

            <li>
                <ConnectKitButton.Custom>
                    {({
                        address,
                        chain,
                        ensName,
                        hide,
                        isConnected,
                        isConnecting,
                        show,
                    }) => (
                        <Button
                            className=""
                            type="button"
                            onPress={show}
                        >
                            { isConnected ? (
                                <h2 className=" max-w-28 text-ellipsis overflow-hidden sm:max-w-full">{address}</h2>
                            ) : (
                                <WalletIcon
                                    height="24px"
                                    width="24px"
                                />
                            )}
                        </Button>
                    )}
                </ConnectKitButton.Custom>
            </li>
        </ul>
    );
};
