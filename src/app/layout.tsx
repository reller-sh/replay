import React, { PropsWithChildren } from 'react';
import { Providers } from '@/components/Providers';

import '@/styles/global.scss';


const RootLayout: React.FC<PropsWithChildren> = ({ children }) => (
    <html lang='en'>
        <Providers>
            <body>{children}</body>
        </Providers>
    </html>
);

export default RootLayout;
