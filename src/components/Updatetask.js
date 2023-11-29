import { useContext, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Taskcontext } from '../context/Taskcontact';


const MyVerticallyCenteredModal = (props) => {
    const { state, dispatch } = useContext(Taskcontext)
    const { selectTask } = state
    const [title, setTitle] = useState("")
    const [dis, setDis] = useState("")
    const [id, setId] = useState(0)

    useEffect(() => {
        if (Object.keys(selectTask).length !== 0) {
            setTitle(selectTask.title)
            setDis(selectTask.dis)
            setId(selectTask.id)
        }
    }, [selectTask])

    const updateTask = () => {
        props.onHide()
        dispatch({type: 'UPDATE_TASK', payload:{title, dis, id}})
    }
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Task
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Task Title</Form.Label>
                            <Form.Control 
                            type="text" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter Your Title" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Task Discription</Form.Label>
                            <Form.Control 
                            type="text" 
                            value={dis}
                            onChange={(e) => setDis(e.target.value)} 
                            placeholder="Enter Title Discription" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <div className='text-end'>
                        <Button variant='primary' type='submit' onClick={() => updateTask()}>Update Task</Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default MyVerticallyCenteredModal