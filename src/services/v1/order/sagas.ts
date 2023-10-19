import { takeEvery } from 'redux-saga/effects';


function* yieldCheck(...all: any[]): Generator<any, void, any> {
    console.log(yield all);
}


export const sagas = [
    takeEvery('SOME_ACTION', yieldCheck),
];
