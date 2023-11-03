import React, {PropsWithChildren} from 'react';
import fp from 'lodash/fp';
import {IBreakpoints, IColors} from "@/styles/styles";
import clsx, {ClassValue} from "clsx";

import styles from './styles.module.scss'


type FontTypes = 'HeaderH1'
    | 'H2Bold'
    | 'H2'
    | 'H3Bold'
    | 'Subtitle1'
    | 'Subtitle1Medium'
    | 'Subtitle2'
    | 'Subtitle2Medium'
    | 'Subtitle3'
    | 'Subtitle3Medium'
    | 'P1Bold'
    | 'P1Medium'
    | 'P1'
    | 'P2Bold'
    | 'P2Medium'
    | 'P2'
    | 'P3Bold'
    | 'P3Medium'
    | 'P3'
    | 'P4Bold'
    | 'P4Medium'
    | 'P4'
    | 'P5Bold'
    | 'P5Medium'
    | 'P5'
    | 'P6Bold'
    | 'P6Medium'
    | 'P6'
    | 'P7Bold'
    | 'P7Medium'
    | 'P9'


interface ITypography {
    onClick?: React.ButtonHTMLAttributes<HTMLDivElement>['onClick']
    type?: FontTypes
    otherTypes?: `${IBreakpoints}${FontTypes}`[]
    color?: IColors
    left?: React.FC
    right?: React.FC
    className?: ClassValue
    classNameCenter?: ClassValue
    noInline?: boolean
    align?: 'start' | 'center' | 'end'
    passRef?: React.MutableRefObject<any>
}

export const Typography: React.FC<PropsWithChildren<ITypography>> = (
    {
        children,
        onClick,
        type = 'P1',
        otherTypes = [],
        color = 'OtherBlack',
        left,
        right,
        className,
        classNameCenter,
        noInline,
        align = 'center',
        passRef = null,
    }
) => (
    <div
        ref={passRef}
        role={onClick ? 'button' : 'text'}
        tabIndex={onClick ? 0 : undefined}
        onClick={onClick}
        onKeyDown={onClick as any}
        className={clsx(
            `d${(noInline ? '' : '-inline')}-flex align-items-${align}`,
            styles.base,
            styles[`xs${type}`],
            styles[`${color}Color`],
            fp.values(fp.pick(otherTypes, styles)),
            className
        )}
    >
        {left && (
            <div className='d-flex'>
                {fp.isUndefined(left) || left({color})}
            </div>
        )}
        {(left || right || classNameCenter) ? (
            <div className={classNameCenter ? clsx(classNameCenter) : undefined}>
                {children}
            </div>
        ) : children}
        {right && (
            <div className='d-flex'>
                {fp.isUndefined(right) || right({color})}
            </div>
        )}
    </div>
);

