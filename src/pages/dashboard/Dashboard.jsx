import "./dashboard.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import TicketTable from "../../components/tickettable/TicketTable";
import {TicketsList} from "../../assets/data/dummydata/ticketsdata";
import { Breadcrumb } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const Dashboard = () => {
    const history = useHistory();
    const addNewTicketHandler = () => {
        history.push("/tickets/create");
    }
   
    return (
        <Container>
            <Row>
                <Col className="text-center dashboard_hero">
                    <h1 className="mt-5">Dashboard</h1>
                    {/* <Breadcrumb className="text-center">
                        <Breadcrumb.Item href="">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <Button variant="primary" className="py-2 px-5" onClick={addNewTicketHandler}>Add New Ticket</Button>
                    <div className="ticket_info_box">
                        <div className="total_tickets tbox">
                            <h5 className="desc">Total Tickets Now :</h5>
                            <h5 className="val">30</h5>
                        </div>
                        <div className="pending_tickets tbox">
                            <h5 className="desc">Pending Tickets :</h5>
                            <h5 className="val">20</h5>
                        </div>
                    </div>

                </Col>
            </Row>

            <Row className="recent_ticket_title">
                <h3>RECENT TICKETS</h3>
            </Row>
            <Row className="recent_ticket_table">
                <TicketTable TicketsList={TicketsList}/>
            </Row>
        </Container>
    )
}

export default Dashboard
