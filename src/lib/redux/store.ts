import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import { extractReducers, extractSagas } from './utils';
import { createRootSaga } from './saga';
import { bindMiddleware } from './middleware';


const reducer = extractReducers('reducer');
const sagas = extractSagas();

const sagaMiddleware = createSagaMiddleware();


// interface ToolkitStoreExtended extends ToolkitStore {
//     sagaTask?: Task
// }

export const makeStore = () => {
    const rootSaga = createRootSaga(sagas);

    const store = configureStore({
        reducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
        enhancers: [bindMiddleware([sagaMiddleware])],
    });


    (store as any).sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};
