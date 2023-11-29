import React, { useContext, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import MyVerticallyCenteredModal from './Updatetask';
import { Taskcontext } from '../context/Taskcontact';
const Todotable = () => {

    const { state, dispatch } = useContext(Taskcontext)
    const { taskList } = state

    const update = (task) => {
        setModalShow(true)
        dispatch({ type: 'SET_SELECTED_TASK', payload: task })
    }

    const deleted = (task) => {
        dispatch({ type: 'REMOVE_TASK', payload: task })
    }

    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Table striped bordered hover>
                <thead className='text-center'>
                    <tr>
                        <th>R.no</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        taskList && taskList.map((task, index) => {
                            return (
                                <tr className='text-center' key={task.id}>
                                    <td>{index + 1}</td>
                                    <td>{task.title}</td>
                                    <td>{task.dis}</td>
                                    <td>
                                        <Button variant="primary" className='mx-3' onClick={() => update(task)}><i className="bi bi-pencil-square"></i></Button>
                                        <Button variant="primary"><i className="bi bi-trash3" onClick={() => deleted(task)}></i></Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default Todotable