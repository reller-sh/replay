
import React from "react";
import {ExamTypes} from "@/lib/client/types";
import {Typography} from "@/components/Typography/Typography";

import clsx from "clsx";

import styles from './styles.module.scss'
import {CircleCheckbox} from "@/components/FormComponents/CircleCheckbox";


interface ICartSelect extends Pick<ExamTypes, 'name' | 'icon'> {
    id: string
}

export const CartSelect: React.FC<ICartSelect> = ({
    name,
    icon,
    id,
}) => (
    <div className={clsx(
        'd-flex justify-content-between align-items-center',
        styles.container
    )}>
        <div className={clsx('d-flex justify-content-center align-items-center', styles.emojiContainer)}>
            {icon}
        </div>
        <Typography type='P4Medium' className='me-auto'>
            {name}
        </Typography>
        <div>
            <CircleCheckbox value={id} name='type' />
        </div>
    </div>
)