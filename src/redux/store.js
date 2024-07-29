import { configureStore } from '@reduxjs/toolkit';
import countSlice from './countSlice'; //countSlice là tên tự đặt
import useReducer from './userSlice';
import studentSlice from './studentSlice';
import listSlice from './listSlice';


const store = configureStore({
    reducer:{
        count:countSlice,
        user:useReducer,
        student:studentSlice,
        studens:listSlice
    }
})
export default store