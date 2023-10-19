import React, {PropsWithChildren} from "react";
import clsx from 'clsx';
import {Crown} from "@/components/icons";
import {useTranslations} from "@/lib/i18n/hooks";

import styles from './layout.module.scss'
import {CourseSelect} from "@/components/layouts/CourseSelect";


const SelectLayout: React.FC<PropsWithChildren> = ({children}) => {

    const t = useTranslations();

    return (
        <CourseSelect>
            <div className={clsx(styles.container, 'd-flex flex-column')}>
                <div className={clsx(styles.header, 'd-flex justify-content-between')}>
                    <div className='d-flex align-items-center'>
                        <div>
                            <Crown/>
                        </div>
                        <div>
                            {t('Годовой курс')}
                        </div>
                    </div>
                    <div>
                        {t('Корзина')}
                    </div>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </CourseSelect>
    )
}


export default SelectLayout;
