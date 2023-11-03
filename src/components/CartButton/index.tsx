'use client'

import React from "react";
import Link from "next/link";
import {Typography} from "@/components/Typography/Typography";
import {useTranslations} from "@/lib/i18n/hooks";

import styles from './styles.module.scss'
import {Cart} from "@/components/icons";
import {useAppSelector} from "@/lib/redux/hooks";


export const CartButton: React.FC = () => {
    const t = useTranslations('');

    const items = useAppSelector(s => s.order.formState.courses.length)

    return (
        <Link href='/select/third' className='position-relative'>
            <Typography
                className={[styles.counter, 'position-absolute top-0 start-100 translate-middle']}
                classNameCenter='mx-auto align-self-center'
                type='P6Medium'
                color='OtherWhite'
            >
                {items}
            </Typography>
            <Typography
                left={Cart}
                className={[styles.container]}
                color='PurplePrimary3'
            >
                {t('Корзина')}
            </Typography>
        </Link>
    );
}