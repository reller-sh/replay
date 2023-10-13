import createSagaMiddleware, { Task } from 'redux-saga';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { configureStore } from '@reduxjs/toolkit';

import { extractReducers, extractSagas } from './utils';
import { createRootSaga } from './saga';
import { bindMiddleware } from './middleware';


const reducer = extractReducers('reducer');
const sagas = extractSagas();

const sagaMiddleware = createSagaMiddleware();


interface ToolkitStoreExtended extends ToolkitStore {
    sagaTask?: Task
}

export const makeStore = () => {
    const rootSaga = createRootSaga(sagas);

    const store: ToolkitStoreExtended = configureStore({
        reducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
        enhancers: [bindMiddleware([sagaMiddleware])],
    });


    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};
