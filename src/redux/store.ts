import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./reducers/homeSlice";
import splashSlice from "./reducers/splashSlice";
import productDetailsSlice from "./reducers/productDetailsSlice";

const store = configureStore({
    reducer:{
        splash:splashSlice,
        home:homeSlice,
        singleProduct:productDetailsSlice
    }
})
export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch