import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeAVG, rechecked } from '../redux/studentSlice';

export default function Exam5() {
    const student = useSelector(state=>state.student.student)
    const checked = useSelector(state=>state.student.checked)
    const dispatch = useDispatch();
  return (
    <div>
        <h1>student's name: {student.name}</h1>
        <h1>math: {student.math}</h1>
        <h1>pro: {student.pro}</h1>
        <h1>avg: {student.dtb}</h1>
        <h1>Check: {checked?"true":"false"}</h1>
        <button onClick={()=>dispatch(rechecked())}>rechecked</button>
        <button onClick={()=>dispatch(changeAVG())}>AVG</button>
    </div>
  )
}
