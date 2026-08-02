"use client"
import dynamic from 'next/dynamic';
import type { IconProps } from '@iconify/react';

const IconifyClient = dynamic(
    () => import('@iconify/react').then((mod) => mod.Icon),
    { ssr: false }
);

export const Icon = (props: IconProps) => {
    return <IconifyClient {...props} />;
};