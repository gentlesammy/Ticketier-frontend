import "./partials.css";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top" className="navbar_container">
            <Container>
                <Navbar.Brand href="#home">Ticketier</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    
                    
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">LogOut</Nav.Link>
                    <NavDropdown title="User" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Dashboard</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Tickets</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Credits</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>
    )
}

export default Header
