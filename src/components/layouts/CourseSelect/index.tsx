'use client'

import React, {PropsWithChildren} from "react";
import {useFormWithComponent} from "@/lib/hooks/useFormWithComponent";
import {actions} from "@/lib/redux";
import {useAppDispatch} from "@/lib/redux/hooks";


export const CourseSelect: React.FC<PropsWithChildren> = ({ children }) => {

    const dp = useAppDispatch();

    const { Form } = useFormWithComponent(all => {
        console.log(all)
        dp(actions.order.setStepInfo({ path: "/select/first", stepData: {} }))
    })
    return (
        <>
            <Form>
                {children}
            </Form>
        </>
    )
}
