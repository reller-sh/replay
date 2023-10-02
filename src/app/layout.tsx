import React, { PropsWithChildren } from 'react';

import type { Metadata } from 'next';
import '@/styles/global.scss';


export const metadata: Metadata = {
    title: 'Replay app',
    description: 'Generate by me!',
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => (
    <html lang='en'>
        <body>{children}</body>
    </html>
);

export default RootLayout;
