import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AgentForm from './AgentForm';
import Modal from 'react-bootstrap/Modal';
import AgentTable from './AgentTable';
import { AgentContext } from '../Context/AgentContextProvider';
import { useContext, useEffect, useState } from 'react'


import '../CSS/AgentList.css'

const AgentList = () => {

    // States
    const [show, setShow] = useState(false);
    const { initialValue } = useContext(AgentContext);


    const handleClose = () => {
        setShow(false)
    }

    const handleOpen = () => {
        setShow(true)
    }

    function handleAddButton(){
        handleClose();
        createAgent(initialValue);
    }

    async function createAgent(data) {
        const res = await fetch("https://testing.esnep.com/happyhomes/api/admin/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Signature": "p0m76"
            },
            body: JSON.stringify({data})
        })
    }
    
    return (
        <div className="">
            <h2>Agent Table</h2>
            <Container >
                <Row className='justify-content-sm-end'>
                    <Col sm='auto'>
                        <Button onClick={handleOpen} variant="primary" size="md">Create Agent</Button>
                    </Col>
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Super Agent</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AgentForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleAddButton}>
                        Add Agent
                    </Button>
                </Modal.Footer>
            </Modal>

            <AgentTable/>
        </div>
    )
}
export default AgentList;