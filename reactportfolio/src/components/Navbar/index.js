import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar} from 'react-bootstrap'

function Nav(props) {
    return (
        <Navbar bg="myNavBg" variant="dark" fixed="top">
            <Navbar.Brand>
                Logo
            </Navbar.Brand>
        </Navbar>
        
    )
}
export default Nav