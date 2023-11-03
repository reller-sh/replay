import {call, put, takeLatest} from 'redux-saga/effects';
import { actionCreator } from "@/lib/redux/actions";
import {client} from "@/lib/client/directus";
import {PayloadAction} from "@reduxjs/toolkit";
import { slice } from './reducer';
import {readItems} from "@directus/sdk";


const action = actionCreator('order');

export const subActions = {
    loadSubjects: action<string>('loadSubjects'),
}

function* getSubjects({ payload }: PayloadAction<string>): Generator<any, void, any> {
    console.log('request')
    const request = () => client.request(readItems('subjects', {
        fields: ['id', 'icon', 'name', 'examType'],
        filter: {
            _and: [{
                examType: {
                    shortCode: {
                        _eq: payload
                    }
                }
            }]
        }
        // deep: {
        //     examTypes: {
        //         _filter: {
        //             shortCode: {
        //                 _eq: payload,
        //             }
        //         }
        //     }
        // }
        // filter: {
        //     examType: {
        //         shortCode: {
        //             _eq: payload,
        //         }
        //     }
        // }
    }))

    const subjects = yield call(request)

    yield put(slice.actions.setSubjects(subjects))
}


export const sagas = [
    takeLatest(subActions.loadSubjects, getSubjects),
];
