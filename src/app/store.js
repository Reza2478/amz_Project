import { configureStore } from "@reduxjs/toolkit";

//Reducers
import usersReducer from "../features/usersSlice";
import filterReducer from "../features/filterSlice";
import teamsReducer from "../features/teamsSlice";

const store =configureStore({
    reducer:{
        users:usersReducer,
        filter:filterReducer,
        teams:teamsReducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware()
})

export default store