'use client'


import React, {PropsWithChildren} from "react";
import {useFormWithComponent} from "@/lib/hooks/useFormWithComponent";
import {usePathname} from "next/navigation";
import {actions} from "@/lib/redux";
import {useAppDispatch} from "@/lib/redux/hooks";


export const CourseSelect: React.FC<PropsWithChildren> = ({ children }) => {

    const dp = useAppDispatch();

    const { Form } = useFormWithComponent(all => {
        console.log(all)
        dp(actions.order.setStepInfo({ path: "/select/first" }))
    })

    const pathname = usePathname()
    console.log(pathname)
    return (
        <>
            <Form>
                {children}
            </Form>
        </>
    )
}
