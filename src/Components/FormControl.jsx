import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useContext, useState } from 'react';
import { AgentContext } from '../Context/AgentContextProvider';

export default function FormControl({ agent }) {

    const {updateAgent, setUpdateAgent} = useContext(AgentContext);
    return (
        <Form>
            <Container>
                <Row >
                    <Col className='mb-2' md={4}>
                        <Form.Control type="text" placeholder="Agent Code" value={agent.FiscallID} onChange={(e)=>setUpdateAgent({...updateAgent, AgentID: e.target.value})}/>
                    </Col>
                    <Col className='mb-2' md={4}>
                        <Form.Control type="text" placeholder="FullName" value={agent.FullName} onChange={(e)=>setUpdateAgent({...updateAgent, FullName: e.target.value})}/>
                    </Col>
                    <Col className='mb-2' md={4}>
                        <Form.Control type="text" placeholder="UserName" value={agent.UserName} onChange={(e)=>setUpdateAgent({...updateAgent, FullName: e.target.value})}/>
                    </Col>
                </Row>

                <Row >
                    <Col className='mb-2' md={4}>
                        <Form.Control type="password" placeholder="Password" value={""} />
                    </Col>
                    <Col className='mb-2' md={4}>
                        <Form.Control type="text" placeholder="Address" value={""} onChange={(e)=>setUpdateAgent({...updateAgent, Address: e.target.value})}/>
                    </Col>
                    <Col className='mb-2' md={4}>
                        <Form.Select aria-label="Default select example " onChange={(e)=>setUpdateAgent({...updateAgent, District: e.target.value})}>
                            <option>District</option>
                            <option value="Kathmandu">Kathmandu</option>
                            <option value="Bhaktapur">Bhaktapur</option>
                            <option value="Lalitpur">Lalitpur</option>
                        </Form.Select>
                    </Col>
                </Row>

                <Row >
                    <Col className='mb-2' md={4}>
                        <Form.Control type="text" placeholder="Academic" value={""} onChange={(e)=>setUpdateAgent({...updateAgent, Academic: e.target.value})}/>
                    </Col>
                    <Col className='mb-2' md={4}>
                        <Form.Control type="text" placeholder="Professional" value={""} onChange={(e)=>setUpdateAgent({...updateAgent, Professional: e.target.value})}/>
                    </Col>
                    <Col className='mb-2' md={4}>
                        <Form.Control type="text" placeholder="Work Experience" value={""} onChange={(e)=>setUpdateAgent({...updateAgent, WorkExp: e.target.value})}/>
                    </Col>
                </Row>

                <Row >
                    <Col className='mb-2' md={4}>
                        <Form.Control type="text" placeholder="Response Time" value={""} onChange={(e)=>setUpdateAgent({...updateAgent, ResponseTime: e.target.value})}/>
                    </Col>
                    <Col className='mb-2' md={4}>
                        <Form.Control type="text" placeholder="Response Time" value={""} />
                    </Col>
                    <Col className='mb-2' md={4}>
                        <Form.Control type="text" placeholder="Product Category" value={""} onChange={(e)=>setUpdateAgent({...updateAgent, ProductCat: e.target.value})}/>
                    </Col>
                </Row>

                <Row >
                    <Col className='mb-2' md={4}>
                        <Form.Control type="text" placeholder="Product Type" value={""} onChange={(e)=>setUpdateAgent({...updateAgent, ProductType: e.target.value})}/>
                    </Col>
                    <Col className='mb-2' md={4}>
                        <Form.Control type="number" placeholder="Contact" value={""} onChange={(e)=>setUpdateAgent({...updateAgent, Contact: e.target.value})}/>
                    </Col>
                    <Col className='mb-2' md={4}>
                        <Form.Control type="text" placeholder="Star Grading" value={""} onChange={(e)=>setUpdateAgent({...updateAgent, StarGrading: e.target.value})}/>
                    </Col>
                </Row>

                <Row >
                    <Col className='mb-2' md={4}>
                        <Form.Control as="textarea" rows={3} placeholder="Statement" value={""} onChange={(e)=>setUpdateAgent({...updateAgent, Statement: e.target.value})}/>
                    </Col>
                    <Col className='mb-2' md={4}>
                        <Form.Control type="file" value={""} onChange={(e)=>setUpdateAgent({...updateAgent, Image: e.target.value})}/>
                    </Col>
                </Row>

            </Container>
        </Form>

    )
}