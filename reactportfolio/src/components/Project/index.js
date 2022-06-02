import React from "react";
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import dnc from '../../assets/date-night.PNG'
import subscriber from '../../assets/subscribe-o-matic.gif'
import weather from '../../assets/sanfran_search.PNG'
import passgen from '../../assets/random_password.PNG'
function Project(props) {
    return (
        <Container>
            <Row className="justify-content-center projectRow">
                <Col md={6}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={dnc}/>
                        <Card.Body>
                            <Card.Title>Date Night</Card.Title>
                            <Card.Text>
                            Create a random date with randomly selected data ideas.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={subscriber} />
                        <Card.Body>
                            <Card.Title>Subscribe-o-matic</Card.Title>
                            <Card.Text>
                            Subscribe to a team and recieve an email.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={weather} />
                        <Card.Body>
                            <Card.Title>Weather Search</Card.Title>
                            <Card.Text>
                            Check the weather by search!
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={passgen} />
                        <Card.Body>
                            <Card.Title>Generate Password</Card.Title>
                            <Card.Text>
                            A simple web app to generate a password to your specifications
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    )
}
export default Project