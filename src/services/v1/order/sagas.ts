import {call, takeLatest} from 'redux-saga/effects';
import { actionCreator } from "@/lib/redux/actions";
import {client} from "@/lib/client/directus";
import {PayloadAction} from "@reduxjs/toolkit";


const action = actionCreator('order');

export const subActions = {
    loadSubjects: action<string>('loadSubjects'),
}

function* getSubjects({ payload }: PayloadAction<string>): Generator<any, void, any> {
    console.log('request', payload)


    const subjects = yield call(async () => (await client.subscribe('subjects', {
        event: 'update',
        query: { fields: ['*'] },
    })).subscription)

    while (true)
        console.log(yield subjects.next())
    // console.log(yield call(async () => subjects.next()))


    // while (true) {
    // console.log(yield subjects.next())
    // }
    // yield put(slice.actions.setSubjects(subjects))
}


export const sagas = [
    takeLatest(subActions.loadSubjects.type, getSubjects),
];
