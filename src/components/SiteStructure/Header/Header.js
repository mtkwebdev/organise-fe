import React from 'react'
import { Container, Navbar, Nav, NavbarBrand } from 'react-bootstrap'

function Header() {
    return (
        <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavbarBrand>Tahsin</NavbarBrand>
                <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/signup">Signup</Nav.Link>    
                        <Nav.Link href="/planner">Project Planner</Nav.Link>    
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default Header
