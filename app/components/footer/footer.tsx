'use client';

import React from 'react';
import Link from 'next/link';
import { useAccount } from 'wagmi';

// Icons
import { HomeIcon } from '@/app/icons/home/home-icon';

export const Footer = () => {
    const {
        address, isConnecting, isDisconnected,
    } = useAccount();

    console.log(address, isConnecting, isDisconnected);
    return (
        <ul className="flex border-t-2 justify-center h-10 gap-5 items-center lg:flex-row">
            <li>
                <Link
                    href="/"
                >
                    <HomeIcon
                        height="24px"
                        width="24px"
                    />
                </Link>
            </li>

            {/* TODO: Add more links here */}
        </ul>
    );
};
