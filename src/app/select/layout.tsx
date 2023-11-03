import React, {PropsWithChildren} from "react";
import clsx from 'clsx';
import {Crown} from "@/components/icons";
import {useTranslations} from "@/lib/i18n/hooks";

import styles from './layout.module.scss'
import {CourseSelect} from "@/components/layouts/CourseSelect";
import {Typography} from "@/components/Typography/Typography";
import {CartButton} from "@/components/CartButton";


const SelectLayout: React.FC<PropsWithChildren> = ({children}) => {

    const t = useTranslations();

    return (
        <div className={clsx('vw-100 vh-100 m-0 p-0', styles.wrapper)}>
            <CourseSelect>
                <div className={clsx(styles.container, 'd-flex flex-column')}>
                    <div className={clsx('d-flex justify-content-between')}>
                        <div className='d-flex align-items-center'>
                            <Typography left={Crown} className={styles.logo} type='P4Medium'>
                                {t('Годовой курс')}
                            </Typography>
                        </div>
                        <CartButton />
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </CourseSelect>
        </div>
            
    )
}


export default SelectLayout;
