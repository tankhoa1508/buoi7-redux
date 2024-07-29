import { createSlice } from "@reduxjs/toolkit";

const initialState={
    students:[
        {id:1, name:"le van meo", checked:true},
        {id:2, name:"le ga", checked:false},
        {id:3, name:"le tho", checked:true}
    ],
    checkAll:false
}
const listSlice=createSlice({
    name:"students",
    initialState,
    reducers:{
        addStudent(state,action) {
            state.students = [...state.students,{id:4, name:action.payload, checked:true}]
        },
        deleteStudent(state,action) {
            state.students = state.students.filter(item=>item.id !==action.payload)
        }
    }
})

export const {addStudent, deleteStudent} = listSlice.actions
export default listSlice.reducer;