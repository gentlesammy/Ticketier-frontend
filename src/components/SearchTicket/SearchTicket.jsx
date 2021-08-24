import { Col, Form, Row, Column, Container } from 'react-bootstrap';
import {FaSearch} from "react-icons/fa"
import './searchticket.css';

const SearchTicket = ({setStr}) => {
    const onChangeHandler = (e) => {
        setStr(e.target.value);
    }
    return (
        <Form className="searchTicket_container" >
            <Container>
                <Row className="row">
                    <Col className="SearcIcon" md={1} xs={3} ><FaSearch/></Col>
                    <Col md={11} xs={9} >
                        <Form.Control placeholder="Search For Ticket"
                                type="text"
                                onChange={onChangeHandler}
                        />
                    </Col>
                </Row>
            </Container>
        </Form>
    )
}

export default SearchTicket
