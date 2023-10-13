'use client';

import React from 'react';

import { useAppSelector } from '@/lib/redux/hooks';


export const Some: React.FC = () => {
    const t = useAppSelector(s => s.check.value);
    return (
        <div>
            some component
            {t}
        </div>
    );
};
