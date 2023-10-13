
import { extractReducers } from './utils';
import { makeStore } from './store';


export const store = makeStore();

export const actions = extractReducers('actions');

export type RootStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

