import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LoadingStatus} from "@/lib/utils/types";


export interface AuthSliceState {
    token?: string
    profile?: object
    status: LoadingStatus
}

const initialState: AuthSliceState = {
    status: LoadingStatus.NEVER
};


export const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setProfileLock: (state, action: PayloadAction<LoadingStatus>) => {
            state.status = action.payload;
        },
    },
});

