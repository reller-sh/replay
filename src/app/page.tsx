
import React from 'react';
import { actions } from '@/lib/redux';
import { Some } from '@/components/Some';
import { HydrationToStore } from '@/components/HydrationToStore';


const Home: React.FC = () => (
    <main>
        Page
        <HydrationToStore action={actions.check.increment()} />
        <Some />
    </main>
);
export default Home;
