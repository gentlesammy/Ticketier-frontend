import "./addticket.css";
import {useState} from 'react'
import { Form, Container, Row, Col, FloatingLabel, Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTicket = () => {
    const [subject, setSubject] = useState("");
    const [senderName, setSenderName] = useState("");
    const [message, setMessage] = useState("");
    const [issuedDate, setIssuedDate] = useState("");
    const errorNot = (msg) => toast.error(msg);

    //onsubmit
    const handleSubmit = (e) => {
        e.preventDefault();
        // validation of data
        if(subject === "" || senderName==="" || message ==="" || issuedDate === ""){
            console.log("hahah");
            return errorNot("all fields are required");
        }
        if(senderName.length < 5){
            return errorNot("The length of your Sender's name is too short, Write User's fullname");
        }

        if(message.length < 10){
            return errorNot("The length of your message is too short, be expansive");
        }
        const data = {
            subject,
            senderName,
            message,
            issuedDate
        }
        console.log(data);


    }



    return (
            <Container className="ticket_form_container">
                <Row>
                    <Col>
                        <ToastContainer 
                            position="top-center"
                            autoClose={3000}
                            draggable
                            pauseOnHover

                        
                        />
                        <h4 className="text-center my-3">Enter Ticket Detail</h4>
                        <Form className="my-3" onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="text" placeholder="Enter Ticket Subject"  name="subject"
                                    onChange= {(e)=> {setSubject(e.target.value)}}
                                    value={subject}
                                />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label className="text-black">
                                    Date Found
                                </Form.Label>
                                <Form.Control
                                    type="date"
                                    onChange = {(e) => {setIssuedDate(e.target.value)}}
                                    placehold="Date Found"
                                    value={issuedDate}
                                />

                            </Form.Group>

                            <Form.Group className="my-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="text" placeholder="Enter Sender's Name"  name="sendername"
                                    onChange= {(e)=> {setSenderName(e.target.value)}}
                                    value={senderName}
                                />
                            </Form.Group>

                            <FloatingLabel controlId="floatingTextarea2" label="Ticket Message">
                                <Form.Control
                                as="textarea"
                                placeholder="Ticket Message"
                                style={{ height: '150px' }}
                                onChange= {(e)=> {setMessage(e.target.value)}}
                                value={message}
                                />
                            </FloatingLabel>

                            <Button variant="primary" type="submit" className="mt-4">
                                Create Ticket
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
    )
}

export default AddTicket
