import React, { useContext } from 'react'
import { Taskcontext } from '../context/Taskcontact'

const Navbar = () => {
  const {state} = useContext(Taskcontext)
  return (
    <>
        <h1 className='text-center my-4 text-primary'>Project Managment</h1>
        <p className='text-center lead'>{`Currently ${state.taskList.length} Task(s) Pending`}</p>
    </>
  )
}

export default Navbar