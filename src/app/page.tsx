import React from 'react';
import { asyncUntil } from '@/lib/utils/async';
import { actions } from '@/lib/redux';
import { Some } from '@/components/Some';
import { HydrationToStore } from '@/components/HydrationToStore';


const Home: React.FC = async () => {
    console.log(await asyncUntil(() => Math.random() === 1, 1, 2));


    return (
        <main>
            Page
            <HydrationToStore action={actions.again?.increment()} />
            <Some />
        </main>
    );
};

export default Home;
