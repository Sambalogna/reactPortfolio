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
                            <a href="https://sfzmango.github.io/date-night-and-chill/"><Button variant="primary">Visit Date Night</Button></a>
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
                            <a href="https://subscribe-o-matic.herokuapp.com/"><Button variant="primary">Visit Subscribe-o-matic</Button></a>
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
                            <a href="https://sambalogna.github.io/weatherDashboard/"><Button variant="primary">Visit Weather Dashboard</Button></a>
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
                            <a href="https://sambalogna.github.io/RandomPassword/"><Button variant="primary">Visit Random password</Button></a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    )
}
export default Project