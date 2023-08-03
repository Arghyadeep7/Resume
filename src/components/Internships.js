import { Row, Col, Card } from 'react-bootstrap';

const Internships = () => {
  return (
    <Row>
        <h3 className="mb-3">
            INTERNSHIPS
        </h3>

        <Col md={6} lg={3} className="mb-4">
            <Card >
                <Card.Body>
                    <Card.Title>Pro GenX</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Full Stack Developer Intern</Card.Subtitle>
                    <i>June 2023 - July 2023 (2 months)</i>
                    
                    <Card.Text className="mt-4">
                        Worked as a full stack developer intern on a big project wherein handled the backend authentication process alongside
                        integrating the front end.
                    </Card.Text>

                    <b>Tech Stack/Skills:</b>
                    <Card.Footer>
                        <ul>
                            <li>
                                React.js
                            </li>
                            <li>
                                Express.js
                            </li>
                            <li>
                                Node.js
                            </li>
                            <li>
                                MongoDB
                            </li>
                            <li>
                                Bootstrap
                            </li>
                        </ul>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </Col>

        
        <Col md={6} lg={3} className="mb-4">
            <Card >
                <Card.Body>
                    <Card.Title>CodeClause</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Web Developer Intern</Card.Subtitle>
                    <i>July 2023 (1 month)</i>
                    
                    <Card.Text className="mt-4">
                        Worked as a web developer intern on a chatting application.
                    </Card.Text>

                    <b>Tech Stack/Skills:</b>
                    <Card.Footer>
                        <ul>
                            <li>
                                React.js
                            </li>
                            <li>
                                Express.js
                            </li>
                            <li>
                                Node.js
                            </li>
                            <li>
                                Socket.io
                            </li>
                            <li>
                                Bootstrap
                            </li>
                        </ul>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </Col>

        <Col md={6} lg={3} className="mb-4">
            <Card >
                <Card.Body>
                    <Card.Title>Upskill - Uniconverge Technologies</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Python Developer Intern</Card.Subtitle>
                    <i>June 2023 - July 2023 (1.5 months)</i>
                    
                    <Card.Text className="mt-4">
                        Worked as a python developer intern on a few projects wherein worked with Numpy and Pandas.
                        <br/>
                        Also implemented SEO using Python.
                    </Card.Text>

                    <b>Tech Stack/Skills:</b>
                    <Card.Footer>
                        <ul>
                            <li>
                                Python
                            </li>
                            <li>
                                Numpy
                            </li>
                            <li>
                                Pandas
                            </li>
                        </ul>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </Col>

        <Col md={6} lg={3} className="mb-4">
            <Card >
                <Card.Body>
                    <Card.Title>LetsGrowMore</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Web Developer Intern</Card.Subtitle>
                    <i>June 2023 (1 month)</i>
                    
                    <Card.Text className="mt-4">
                        Worked as a web developer intern on a few small utility projects.
                    </Card.Text>

                    <b>Tech Stack/Skills:</b>
                    <Card.Footer>
                        <ul>
                            <li>
                                React.js
                            </li>
                            <li>
                                Bootstrap
                            </li>
                            <li>
                                Vanilla javascript
                            </li>
                        </ul>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </Col>

        

    </Row>
  )
}

export default Internships