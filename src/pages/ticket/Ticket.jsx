import { useState } from "react";
import { Container, Row, Col, Breadcrumb, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { TicketsList } from "../../assets/data/dummydata/ticketsdata";
import MessageHistory from "../../components/messageHistory/MessageHistory";
import Reply from "../../components/replyTicket/Reply";
import "./ticket.css";

const Ticket = () => {
    
    const {id} = useParams();
    
    const [reply, setReply] = useState("");
    const ticket = TicketsList[id];
    const handlyReplySumit = ()=> {
        console.log(reply);
    }
    return (
        <Container className="ticket_main_container">
             <Row className="text-center heroSection">
                <Col>
                    <h1>Ticket Detail</h1>
                     <Breadcrumb className="text-center breadcrumb">
                        <Breadcrumb.Item><Link to="/dashboard">Dashboard</Link></Breadcrumb.Item>
                        <Breadcrumb.Item active>Ticket</Breadcrumb.Item>
                    </Breadcrumb>
                    
                </Col>

            </Row>

            <Row className="ticket_main_info">
                <Col xs={12}  md={8}>
                    <div className="ticket_subject">
                        <p>Subject : <span>{ticket.Subject}</span></p>
                    </div>
                    <div className="ticket_date">
                        <p>Date In : <span>{ticket.date}</span></p>
                    </div>
                    <div className="ticket_status">
                        <p>Status : <span>{ticket.Status}</span></p>
                    </div>
                </Col>

                <Col className="text-right mr-auto">
                    <Button variant="danger">Close Ticket</Button>
                </Col>

            </Row>
            <hr/>
            <Row>
                <Col>
                    <MessageHistory msg={ticket.history}/>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Reply setReply={setReply} reply={reply} handlyReplySumit={handlyReplySumit}/>
            </Row>
        </Container>
    )
}

export default Ticket
