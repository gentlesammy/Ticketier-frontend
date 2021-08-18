import "./ResetPassword.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";
import {useState} from "react";


const ResetPassword = ({setFormLoad}) => {
    const [email, setEmail] = useState("");
    const ResetPasswordHandler = (e) => {
        e.preventDefault();
        //TODO: handle form validation
        if(email===""){
            return alert("please enter your email");
        }
        console.log({email});
    }


   
    return (
        <Container>
            <Row>
                <Col>
                    <h3>RESET PASSWORD</h3>
                    <hr />
                    <Form onSubmit={ResetPasswordHandler} autoComplete="off">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Your Email" 
                                name="email" 
                                required
                                value={email}
                                onChange = {(e)=>{setEmail(e.target.value)}}
                                
                            />
                        </Form.Group>
        

                        <Button variant="danger" type="submit">
                            Reset Password
                        </Button>
                    </Form>
                    <hr/>
                </Col>
            </Row>

            <Row>
                <Col>
                    <a href="#" onClick = {() => {setFormLoad("login")}}>Login Here</a>
                </Col>
            </Row>
        </Container>
    )
}

export default ResetPassword
