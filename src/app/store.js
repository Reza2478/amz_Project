import { configureStore } from "@reduxjs/toolkit";

//Reducers
import usersReducer from "../features/usersSlice";
import filterReducer from "../features/filterSlice";
import formReducer from '../features/formSlice' 

const store =configureStore({
    reducer:{
        users:usersReducer,
        filter:filterReducer,
        form:formReducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware()
})

export default store