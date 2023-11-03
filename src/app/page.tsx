'use client'

import React from 'react';
import {useAppDispatch} from "@/lib/redux/hooks";
import {actions} from "@/lib/redux";


const Home: React.FC = () => {

    const dp = useAppDispatch()
    React.useEffect(() => {
        console.log('render')
        // dp(actions.order.loadSubjects('USE'))
        dp(actions.order.loadSubjects('USE'))
    }, [dp])

    return (
        <main>
            empty
        </main>
    );
};

export default Home;
