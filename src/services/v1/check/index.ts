import { checkSlice } from '@/services/v1/check/reducer';

import { sagas } from './sagas';


export const check = {
    slice: checkSlice,
    sagas,
};
