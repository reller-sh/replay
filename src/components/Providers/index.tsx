'use client';

import { Provider } from 'react-redux';

import React, { PropsWithChildren } from 'react';
import { store } from '@/lib/redux';


export const Providers: React.FC<PropsWithChildren> = ({ children }) => (
    <Provider store={store}>
        {children}
    </Provider>
);
