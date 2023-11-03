import { createAction } from '@reduxjs/toolkit';


export const actionCreator = (namespace: string) => <Type>(action: string) =>
    createAction<Type>(`${namespace}/${action}`)
