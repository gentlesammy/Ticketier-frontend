
import { useState, useEffect } from "react";
import { Col, Container, Row,Breadcrumb, Button } from "react-bootstrap";
import { TicketsList } from "../../assets/data/dummydata/ticketsdata";
import SearchTicket from "../../components/SearchTicket/SearchTicket";
import TicketTable from "../../components/tickettable/TicketTable";
import "./ticketlist.css";

const TicketList = () => {
    const [str, setStr] = useState("");
    const [filteredTicket, setFilteredTicket] = useState([]);
    useEffect(() => {
        filterTickets();
      console.log(filteredTicket);
    }, [str]);
 
    const filterTickets = () => {
        const matches = TicketsList.filter((ticket) => {
            const subjectMatch = ticket.Subject
            .toLowerCase()
            .includes(str.toLowerCase());

            const nameMatch = ticket.User
            .toLowerCase()
            .includes(str.toLowerCase());
            return subjectMatch || nameMatch;
        });

        setFilteredTicket(matches);
    }

    return (
        <Container>
             <Row className="text-center heroSection">
                <Col>
                    <h1>All Tickets</h1>
                     <Breadcrumb className="text-center breadcrumb">
                        <Breadcrumb.Item href="/dashboard">Dashboard</Breadcrumb.Item>
                        <Breadcrumb.Item active>Tickets Listing</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Button variant="primary">Add New Ticket</Button>
                </Col>
                <Col className="text-right">
                    <SearchTicket setStr={setStr}/>
                </Col>
            </Row>
                <hr/>
            <Row className="my-5">
                <Col>
                    <TicketTable TicketsList={filteredTicket}/>
                </Col>
            </Row>
        </Container>  
    )
}

export default TicketList
