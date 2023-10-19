'use client'

import React from "react";
import {useFormContext} from "react-hook-form";


const SelectType: React.FC = () => {

    const fm = useFormContext();
    return <div>
        select type
        <input {...fm.register('abo.ba')} />
        <button type='submit'>
            submit
        </button>
    </div>
}

export default SelectType;
