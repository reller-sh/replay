import React from "react";
import {StepInfo} from "@/components/StepInfo";

import {Typography} from "@/components/Typography/Typography";
import clsx from "clsx";

import styles from './page.module.scss'
import {client} from "@/lib/client/directus";
import {readItems} from "@directus/sdk";
import {translate} from "@/lib/i18n";
import {CartSelect} from "@/components/FormComponents/CartSelect";
import {SubjectList} from "@/app/select/first/components/SubjectList";


const SelectType: React.FC = async () => {

    const t = translate('')

    const examTypes = await client.request(readItems(
        'examTypes',
        { fields: ['icon', 'name', 'shortCode'] }
    ))


    return (
        <div className={clsx('d-flex flex-column', styles.container)}>
            <StepInfo />
            <div className={clsx('d-flex flex-column', styles.selectorsBlock)}>
                <Typography type='P2Bold'>
                    {t('Вид экзамена')}
                </Typography>
                <div className={clsx('d-flex flex-wrap', styles.selectorsList)}>
                    {examTypes.map(
                        item => (
                            <CartSelect {...item} id={item.shortCode} key={item.shortCode}/>
                        )
                    )}
                </div>
            </div>
            <div>
                <Typography type='P2Bold' color='GreyPrimary2'>
                    {t('Предметы')}
                </Typography>
                <div className={clsx('d-flex flex-wrap', styles.selectorsList)}>
                    <SubjectList />
                </div>
            </div>
        </div>
    )
}

export default SelectType;
