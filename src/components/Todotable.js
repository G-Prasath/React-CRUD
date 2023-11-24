import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import MyVerticallyCenteredModal from './Updatetask';

const Todotable = () => {
    const update = () => {
        setModalShow(true)
    }

    const deleted = () => {
        console.log("del");
    }
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Table striped bordered hover>
                <thead className='text-center'>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='text-center'>
                        <td>1</td>
                        <td>Don</td>
                        <td>Don</td>
                        <td>
                            <Button variant="primary" className='mx-3' onClick={() => update()}><i className="bi bi-pencil-square"></i></Button>
                            <Button variant="primary"><i className="bi bi-trash3" onClick={() => deleted()}></i></Button>
                        </td>
                    </tr>
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