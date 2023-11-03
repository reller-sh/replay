'use client'

import React from "react";
import {Typography} from "@/components/Typography/Typography";
import {useTranslations} from "@/lib/i18n/hooks";
import {usePathname} from "next/navigation";

import styles from './styles.module.scss'
import clsx from "clsx";
import {QuestionCircle} from "@/components/icons";


const pages = {
    '/select/first': {
        index: 1,
        title: 'Выбор предмета',
    },
    '/select/second': {
        index: 2,
        title: 'Стоимость обучения',
    },
    '/select/third': {
        index: 3,
        title: 'Корзина',
    },

}

export const StepInfo: React.FC = () => {

    const t = useTranslations('')

    const path = usePathname()

    const pageInfo = pages[path as keyof typeof pages]


    const countPages = Object.keys(pages).length

    return (
        <div className={clsx(styles.container, 'position-relative')}>
            <div className={clsx(styles.title, 'd-flex justify-content-between')}>
                <Typography type='P4Medium'>
                    {`${pageInfo.index}. ${t(pageInfo.title)}`}
                </Typography>
                <Typography
                    left={QuestionCircle}
                    type='P5Medium'
                    color='PurplePrimary3'
                >
                    {t('Помощь')}
                </Typography>
            </div>
            <div className={styles.progressbar} />
            <Typography color='OtherWhite' className={[styles.step, 'position-absolute']}>
                {`${pageInfo.index} / ${countPages}`}
            </Typography>
        </div>
    )
}