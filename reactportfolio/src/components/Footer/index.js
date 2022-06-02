import React from "react";
import '../../App.css'
import { Container, Navbar, Row, Col} from 'react-bootstrap'

function Footer(props) {
    return (
        <Navbar bg="dark" variant="dark" fixed="bottom"> 
            <Container>
                <Row>
                    <Col></Col>
                    <Col className="justify-content-md-center">
                    <ul className="list-unstyled footerList">
                        <li><a href="https://github.com/Sambalogna"className="footerContent">Github</a></li>
                        <li><a href="https://www.linkedin.com/in/samuel-lazaro-mandel/"className="footerContent">LinkedIn</a></li>
                        <li><a href=""className="footerContent">Resume</a></li>
                    </ul>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </Navbar>
        
    )
}
export default Footer