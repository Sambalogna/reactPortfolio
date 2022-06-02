import React from "react";
import {Card, Container, Row, Col} from 'react-bootstrap'
function Project(props) {
    return (
<Container>
    <Row>
    <Col>
        <Card style={{ width: '18rem' }} className="projectCard">
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>
    </Col>
    <Col>
        <Card style={{ width: '18rem' }} className="projectCard">
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>
    </Col>
    <Col>
        <Card style={{ width: '18rem' }} className="projectCard">
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>
    </Col>
    <Col>
        <Card style={{ width: '18rem' }} className="projectCard">
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>
    </Col>
    </Row>
</Container>


        // <div className="container">
        //     <div className="row justify-content-center">
        //         <div className="card text-white bg-dark col-md-4 border-dark" style="width: 18rem;">
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