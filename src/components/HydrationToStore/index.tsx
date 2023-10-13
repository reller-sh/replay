'use client';

import { AnyAction } from 'redux';
import { useDispatch } from 'react-redux';
import React, { PropsWithChildren, useEffect } from 'react';


interface IHydrationToStore {
    action?: AnyAction
}

export const HydrationToStore: React.FC<PropsWithChildren<IHydrationToStore>> = (
    { children, action },
) => {
    const dp = useDispatch();

    useEffect(() => {
        if (action)
            dp(action);
    }, [action, dp]);

    return children;
};


