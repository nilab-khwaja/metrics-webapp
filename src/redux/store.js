import { configureStore } from "@reduxjs/toolkit";  
import makeupReducer from "./makeupSlice";

const store = configureStore({
    reducer: {
        makeups:makeupReducer,
    }, 
});

export default store