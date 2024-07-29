import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {countDown, countUp} from '../redux/countSlice'

export default function Exam3() {
    const dispath = useDispatch()
    const count = useSelector ((state)=>state.count.value)
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>dispath(countDown())}>Count down</button>
        <button onClick={()=>dispath(countUp())}>Count up</button>
    </div>
  )
}
