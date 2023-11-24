import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const Todoform = () => {
    const [title, setTitle] = useState("")
    const [dis, setDis] = useState("")
    const addtask = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <section className='my-5'>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Task Title</Form.Label>
                        <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Your Title" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Task Discription</Form.Label>
                        <Form.Control type="text" value={dis} onChange={(e) => setDis(e.target.value)} placeholder="Enter Title Discription" />
                    </Form.Group>
                    <div className='text-end'>
                        <Button variant='primary' type='submit' onClick={(e) => addtask(e)}>Add Task</Button>
                    </div>
                </Form>
            </section>
        </>
    )
}

export default Todoform