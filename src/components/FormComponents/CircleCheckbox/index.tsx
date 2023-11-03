'use client'

import React from "react";
import {useFormContext} from "react-hook-form";
import {motion} from "framer-motion";
import {Typography} from "@/components/Typography/Typography";


const Svg: React.FC<{ isActive: boolean }> = ({ isActive }) => (isActive ? (
    <svg
        key='inactive' width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='24' height='24' rx='12' fill='#8C71FE'/>
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M16.0626 7.88672L10.5339 13.4154L8.33859 11.2201L7.14844 12.4102L10.5339 15.7957L17.2527 9.07687L16.0626 7.88672Z'
            fill='white'
        />
    </svg>
) : (
    <svg
        key='active' width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <motion.path
            fillRule='evenodd' clipRule='evenodd'
            d='M17.0626 8.88672L11.5339 14.4154L9.33859 12.2201L8.14844 13.4102L11.5339 16.7957L18.2527 10.0769L17.0626 8.88672Z'
            fill='white'/>
                    
        <rect x='1' y='1' width='24' height='24' rx='12' stroke='#DEDEDE'/>
    </svg>
))


interface ICircleCheckbox {
    name: string
    value: string | number
}

export const CircleCheckbox: React.FC<ICircleCheckbox> = ({ name, value }) => {
    const {watch, register, setValue} = useFormContext();
    return (
        <Typography onClick={() => setValue(name, value)}>
            <Svg isActive={watch(name) === value}/>
            <input hidden {...register(name)} type='radio' />
        </Typography>
    );
}