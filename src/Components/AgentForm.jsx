import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AgentContext } from '../Context/AgentContextProvider';
import { useContext, useEffect, useState } from 'react'


const AgentForm = () => {

    const { initialValue, setInitialValue } = useContext(AgentContext);

    return (
        <Form>
            <Container>
                <Row >
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Agent Code" onChange={(e)=>setInitialValue({AgentCode: e.target.value})}/></Col>
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="FullName" onChange={(e)=>setInitialValue({FullName: e.target.value})}/></Col>
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="UserName" onChange={(e)=>setInitialValue({UserName: e.target.value})}/></Col>
                </Row>

                <Row >
                    <Col className='mb-2' md={4}><Form.Control type="password" placeholder="Password" onChange={(e)=>setInitialValue({Password: e.target.value})}/></Col>
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Address" onChange={(e)=>setInitialValue({Address: e.target.value})}/></Col>
                    <Col className='mb-2' md={4}><Form.Select aria-label="Default select example" onChange={(e)=>setInitialValue({District: e.target.value})}>
                        <option>District</option>
                        <option value="Kathmandu">Kathmandu</option>
                        <option value="Bhaktapur">Bhaktapur</option>
                        <option value="Lalitpur">Lalitpur</option>
                    </Form.Select></Col>
                </Row>

                <Row >
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Academic" onChange={(e)=>setInitialValue({Academic: e.target.value})}/></Col>
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Professional" onChange={(e)=>setInitialValue({Professional: e.target.value})}/></Col>
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Work Experience" onChange={(e)=>setInitialValue({WorkExp: e.target.value})}/></Col>
                </Row>

                <Row >
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Response Time" onChange={(e)=>setInitialValue({ResponseTime: e.target.value})}/></Col>
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Response Time" onChange={(e)=>setInitialValue({ResponseTime: e.target.value})}/></Col>
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Product Category" onChange={(e)=>setInitialValue({ProductCat: e.target.value})}/></Col>
                </Row>

                <Row >
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Product Type" onChange={(e)=>setInitialValue({ProductType: e.target.value})}/></Col>
                    <Col className='mb-2' md={4}><Form.Control type="number" placeholder="Contact" onChange={(e)=>setInitialValue({Contact: e.target.value})}/></Col>
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Star Grading" onChange={(e)=>setInitialValue({StarGrading: e.target.value})}/></Col>
                </Row>

                <Row >
                    <Col className='mb-2' md={4}><Form.Control as="textarea" rows={3} placeholder="Statement" onChange={(e)=>setInitialValue({Statement: e.target.value})}/></Col>
                    <Col className='mb-2' md={4}><Form.Control type="file" onChange={(e)=>setInitialValue({Image: e.target.value})}/></Col>
                </Row>

            </Container>
        </Form>
    )
}

export default AgentForm;