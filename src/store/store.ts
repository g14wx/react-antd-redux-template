import {configureStore, ThunkAction, UnknownAction} from '@reduxjs/toolkit'
import counterSlice from "../features/counter/state/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice
    }
})

export default store;

// Get the type of our store variable
export type AppStore = typeof store.dispatch
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    UnknownAction
>