import { ForkEffect, all, cancel, take } from 'redux-saga/effects';

import type { RootStore } from '.';


const ABORT_SAGAS_HMR = 'ABORT_SAGAS_HMR';

export const createRootSaga = (sagas: (ForkEffect[] | undefined)[] = []) => {
    if (process.env.NODE_ENV === 'development') {
        return function* main() {
            yield all(sagas);

            yield take(ABORT_SAGAS_HMR);
            yield cancel();
        };
    }

    return function* main() {
        try {
            yield all(sagas);
        } catch (e) {
            console.warn(e);
        }
    };
};

export const abortSagas = (store: RootStore) => store.dispatch({ type: ABORT_SAGAS_HMR });
