import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeAge, changeName } from '../redux/userSlice'

export default function Exam4() {
    const dispatch = useDispatch();
    const user = useSelector(state=>state.user.user)
  return (
    <div>
        <h1>user's name: {user.name}</h1>
        <h1>user's age: {user.age}</h1>
        <button onClick={()=>dispatch(changeAge(1))}>changeAge</button>
        <button onClick={()=>dispatch(changeName("Le Than"))}>changeName</button>
    </div>
  )
}
