import React from "react";
import {Nav, Navbar} from 'react-bootstrap'

function Navigation(props) {
    return (
        <Navbar bg="myNavBg" variant="dark" fixed="top" expand="md">

            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link href="About">About</Nav.Link>
                    <Nav.Link href="Project">Projects</Nav.Link>
                    <Nav.Link href="Footer">Contact</Nav.Link>

                </Nav>
            </Navbar.Collapse>
            
        </Navbar>
        
    )
}
export default Navigation