import "./login.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";
import {useState} from "react";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const LoginHandler = (e) => {
        //TODO: handle form validation
        e.preventDefault();
        console.log({email, password});
    }


   
    return (
        <Container>
            <Row>
                <Col>
                    <h3>CLIENT LOGIN</h3>
                    <hr />
                    <Form onSubmit={LoginHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" 
                                name="email" 
                                required
                                value={email}
                                onChange = {(e)=>{setEmail(e.target.value)}}
                                
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" 
                                name="password"
                                required
                                value={password}
                                onChange = {(e)=>{setPassword(e.target.value)}}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                    <hr/>
                </Col>
            </Row>

            <Row>
                <Col>
                    <a href="#">Forget Password? Click Here</a>
                </Col>
            </Row>
        </Container>
    )
}

export default Login
