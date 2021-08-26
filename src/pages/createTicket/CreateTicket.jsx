import "./createticket.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Breadcrumb } from "react-bootstrap";
import AddTicket from "../../components/ticketform/AddTicket";
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom";

const CreateTicket = () => {
    return (
        <Container>
            <Row className="text-center heroSection">
                <Col>
                    <h1>ADD NEW TICKET</h1>
                     <Breadcrumb className="text-center breadcrumb">
                        <Breadcrumb.Item><Link to="/dashboard">Dashboard</Link></Breadcrumb.Item>
                        <Breadcrumb.Item active>Create Ticket</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>

            <Row className="py-4">
                <Col className="text-center card_container">
                
                    <Card style={{ width: '20rem' }} className="cardy">
                        <Card.Body>
                           <AddTicket/> 
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default CreateTicket
