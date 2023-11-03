'use client'

import {useFormContext} from "react-hook-form";
import React from "react";
import {useAppDispatch} from "@/lib/redux/hooks";
import {actions} from "@/lib/redux";


export const SubjectList: React.FC = () => {

    const dp = useAppDispatch();
    const fm = useFormContext();

    const type = fm.watch('type')

    React.useEffect(() => {
        console.log(actions.order.loadSubjects(type))
        // console.log('dsd', actions.order.loadSubjects.toString())
        if (type)
            dp(actions.order.loadSubjects(type))
    }, [dp, type])

    return (
        <>
            {JSON.stringify(fm.watch('type'))}
        </>
    )
}