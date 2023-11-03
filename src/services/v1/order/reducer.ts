import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Nullable} from "@/lib/utils/types";
import {Subjects} from "@/lib/client/types";


// USE -- unified state exam
// MSE -- main state exam
interface CourseEntity {
    '/select/first'?: {
        type?: 'USE' | 'MSE'
        subjectId?: string
    }
    '/select/second'?: {
        studyFormat?: string
        tutorType?: string
        packageVolume?: string
    }
    '/select/third'?: {
        promoCode?: string
    }
}

export interface SliceState {
    formState: {
        courses: CourseEntity[]
        paymentMethod: Nullable<string>
        fullName: Nullable<string>
        phoneNumber: Nullable<string>
        phoneNumberCountry: Nullable<string>
        accepted: Nullable<string>
    }
    subjects: Subjects[]
}


const initialState: SliceState = {
    formState: {
        courses: [],
        paymentMethod: null,
        fullName: null,
        phoneNumber: null,
        phoneNumberCountry: null,
        accepted: null,
    },
    subjects: []
};


type PayloadSetStepInfo<Obj extends object, Key extends keyof Obj = keyof Obj> =
    PayloadAction<{
        path: Key
        stepData: Obj[Key]
        index?: number
    }>

export const slice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setStepInfo: (state, action: PayloadSetStepInfo<CourseEntity>) => {
            const {stepData, path, index} = action.payload

            if (path === '/select/first') {
                if (!index) {
                    state.formState.courses.push(
                        { [path]: stepData as CourseEntity['/select/first'] }
                    )
                } else
                    state.formState.courses[index][path] = stepData as CourseEntity['/select/first']
            }
            if (!index)
                state.formState.courses[state.formState.courses.length - 1][path] = stepData
            else
                state.formState.courses[index][path] = stepData
        },
        setSubjects: (state, action: PayloadAction<Subjects[]>) => {
            state.subjects = action.payload
        },
    },
});

