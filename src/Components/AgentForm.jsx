import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const AgentForm = () => {
    return (
        <Form>
            <Container>
                <Row >
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Agent Code" /></Col>
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="FullName" /></Col>
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="UserName" /></Col>
                </Row>

                <Row >
                    <Col className='mb-2' md={4}><Form.Control type="password" placeholder="Password" /></Col>
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Address" /></Col>
                    <Col className='mb-2' md={4}><Form.Select aria-label="Default select example">
                        <option>District</option>
                        <option value="Kathmandu">Kathmandu</option>
                        <option value="Bhaktapur">Bhaktapur</option>
                        <option value="Lalitpur">Lalitpur</option>
                    </Form.Select></Col>
                </Row>

                <Row >
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Academic" /></Col>
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Professional" /></Col>
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Work Experience" /></Col>
                </Row>

                <Row >
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Response Time" /></Col>
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Response Time" /></Col>
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Product Category" /></Col>
                </Row>

                <Row >
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Product Type" /></Col>
                    <Col className='mb-2' md={4}><Form.Control type="number" placeholder="Contact" /></Col>
                    <Col className='mb-2' md={4}><Form.Control type="text" placeholder="Star Grading" /></Col>
                </Row>

                <Row >
                    <Col className='mb-2' md={4}><Form.Control as="textarea" rows={3} placeholder="Statement" /></Col>
                    <Col className='mb-2' md={4}><Form.Control type="file" /></Col>
                </Row>

            </Container>
        </Form>
    )
}

export default AgentForm;