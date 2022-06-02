import React from "react";
import {Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-scroll'


function Navigation(props) {
    return (
        <Navbar bg="myNavBg" variant="dark" expand="sm">

            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
                    {/* <Nav.Link href="About">About</Nav.Link> */}
                    <Link to="Project"><Nav.Link href="#Project">
                        Projects
                    </Nav.Link></Link>
                    <Link to="Footer"><Nav.Link href="#Footer">
                        Contact
                    </Nav.Link></Link>

                </Nav>
            </Navbar.Collapse>
            
        </Navbar>
        
    )
}
export default Navigation