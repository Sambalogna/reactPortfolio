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
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={subscriber} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={weather} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={passgen} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>


        // <div className="container">
        //     <div className="row justify-content-center">
        //         <div className="card text-white bg-dark Col-md-4 border-dark" style="width: 18rem;">
        //             <img src="/assets/" className="card-img-top" alt="projects" height="200px" width="200px" />
        //             <div className="card-body">
        //             <h5 className="card-title"></h5>
        //             <p className="card-text">Hello</p>
        //             <a href="{{projectURL}}" className="btn btn-primary">Visit </a>
        //             </div>
        //         </div>
        //     </div>
        // </div>

    )
}
export default Project