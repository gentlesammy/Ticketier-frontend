import "./partials.css";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import {Link, useHistory} from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap";

const Header = () => {
    const history = useHistory();
    const logOutUser = () => {
        history.push("/"); 
    } 
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top" className="navbar_container">
            <Container>
                <Navbar.Brand href="#home">Ticketier</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to="/about">
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/features">
                        <Nav.Link>Features</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/pricing">
                        <Nav.Link>Pricing</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                </Nav>

                <Nav>
                    <NavDropdown title="User" id="collasible-nav-dropdown">
                        <LinkContainer to="/dashboard">
                            <NavDropdown.Item>Dashboard</NavDropdown.Item>
                        </LinkContainer>

                        <LinkContainer to="/tickets">
                            <NavDropdown.Item>Tickets</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/tickets/create">
                            <NavDropdown.Item>Add Ticket</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Divider />
                        <NavDropdown.Item  onClick={logOutUser}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>
    )
}

export default Header
