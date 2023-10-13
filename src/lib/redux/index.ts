import { configureStore } from '@reduxjs/toolkit';

import { extractReducers } from './store';


const reducer = extractReducers('reducer');

export const actions = extractReducers('actions');

export const store = configureStore({
    reducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

