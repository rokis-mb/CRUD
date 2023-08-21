import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AgentContext } from '../Context/AgentContextProvider';
import { useContext } from 'react'


const CreateAgentForm = () => {

    const {setAgent } = useContext(AgentContext);

    return (
        <Form>
            <Container>
                <Row >
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Agent Code" onChange={(e)=>setAgent({AgentCode: e.target.value})}/></Col>
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="FullName" onChange={(e)=>setAgent({FullName: e.target.value})}/></Col>
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="UserName" onChange={(e)=>setAgent({UserName: e.target.value})}/></Col>
                </Row>

                <Row >
                    <Col className='mb-2' md={4}><Form.Control type="password" placeholder="Password" onChange={(e)=>setAgent({Password: e.target.value})}/></Col>
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Address" onChange={(e)=>setAgent({Address: e.target.value})}/></Col>
                    <Col className='mb-2' md={4}><Form.Select aria-label="Default select example" onChange={(e)=>setAgent({District: e.target.value})}>
                        <option>District</option>
                        <option value="Kathmandu">Kathmandu</option>
                        <option value="Bhaktapur">Bhaktapur</option>
                        <option value="Lalitpur">Lalitpur</option>
                    </Form.Select></Col>
                </Row>

                <Row >
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Academic" onChange={(e)=>setAgent({Academic: e.target.value})}/></Col>
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Professional" onChange={(e)=>setAgent({Professional: e.target.value})}/></Col>
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Work Experience" onChange={(e)=>setAgent({WorkExp: e.target.value})}/></Col>
                </Row>

                <Row >
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Response Time" onChange={(e)=>setAgent({ResponseTime: e.target.value})}/></Col>
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Product Category" onChange={(e)=>setAgent({ProductCat: e.target.value})}/></Col>
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Product Type" onChange={(e)=>setAgent({ProductType: e.target.value})}/></Col>
                </Row>

                <Row >
                    <Col className='mb-2' md={4}><Form.Control type="number" placeholder="Contact" onChange={(e)=>setAgent({Contact: e.target.value})}/></Col>
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Star Grading" onChange={(e)=>setAgent({StarGrading: e.target.value})}/></Col>
                    <Col className='mb-2' md={4}><Form.Control as="textarea" rows={3} placeholder="Statement" onChange={(e)=>setAgent({Statement: e.target.value})}/></Col>
                </Row>

                <Row >
                    <Col className='mb-2' md={4}><Form.Control type="file" onChange={(e)=>setAgent({Image: e.target.value})}/></Col>
                    <Col className='mb-2' md={4}><Form.Select aria-label="Default select example" onChange={(e)=>setAgent({AllowApp: e.target.value})}>
                        <option>AllowApp?</option>
                        <option value="Y">Allow</option>
                        <option value="N">Disallow</option>
                    </Form.Select></Col>
                </Row>

            </Container>
        </Form>
    )
}

export default CreateAgentForm;