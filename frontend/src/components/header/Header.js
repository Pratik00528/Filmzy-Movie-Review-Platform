import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'
import { Container, Navbar, NavLink, Nav, NavbarCollapse } from 'react-bootstrap'


const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expands="lg">
            <Container fluid>
                <Navbar.Brand href="/" style={{ "color": "gold" }}>
                    <FontAwesomeIcon icon={faCameraRetro} /> Filmzy
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbarScroll' />
                <Navbar.Collapse id='navbarScroll'>
                    <Nav className='me-auto my-2 my-lg-0'
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className='nav-link' href="/">Home</NavLink>
                        <NavLink className='nav-link' href="/watchlist">Watchlist</NavLink>
                    </Nav>
                    <Button variant="outline-info" className="me-2">Login</Button>
                    <Button variant="outline-info" className="me-2">Register</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header