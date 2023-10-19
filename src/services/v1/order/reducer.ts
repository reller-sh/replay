import {createSlice, PayloadAction} from '@reduxjs/toolkit';


export interface SliceState {
    formState: {
        '/select/first': object
        '/select/second': object
        '/select/third': object
    }
}

const initialState: SliceState = {
    formState: {
        '/select/first': {},
        '/select/second': {},
        '/select/third': {},
    }
};


export const slice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setStepInfo: (state, action: PayloadAction<{path: keyof SliceState['formState']}>) =>  {
            console.log(action)
            state.formState[action.payload.path] = {
                abo: 'bus'
            }
        }
    },
});

