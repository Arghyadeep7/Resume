import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Tab from "react-bootstrap/Tab";

const Certifications = () => {
  return (
    <Row >
      <h3>CERTIFICATIONS</h3>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#coursera">
        <Row>
          <Col md={4} style={{ marginBottom: "20px" }}>
            <ListGroup style={{ border: "3px solid black", borderRadius: "0" }}>
              <ListGroup.Item action href="#coursera">
                <h4>
                  <i class="fas fa-copyright"></i>&nbsp;COURSERA
                </h4>
              </ListGroup.Item>
              <ListGroup.Item action href="#udemy">
                <h4>
                  <i class="fab fa-umbraco"></i>&nbsp;UDEMY
                </h4>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={8}>
            <Tab.Content
              style={{
                height: "400px",
                overflow: "scroll",
                border: "3px solid black",
              }}
            >
              <Tab.Pane eventKey="#coursera">
                <ListGroup>
                  <ListGroup.Item>
                    <a
                      href="https://www.coursera.org/account/accomplishments/certificate/AJRCZKGUPTY8"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <h5>Prepare Data for Exploration - Google</h5>
                      <h6>
                        Issued <i>NOV 2022</i>
                      </h6>
                    </a>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <a
                      href="https://www.coursera.org/account/accomplishments/certificate/KVXQSQX8PHF7"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <h5>Python for Data Science, AI & Development - IBM</h5>
                      <h6>
                        Issued <i>OCT 2022</i>
                      </h6>
                    </a>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <a
                      href="https://www.coursera.org/account/accomplishments/certificate/6JSZ4EUE4D5X"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <h5>
                        Ask Questions to make Data-Driven Decisions - Google
                      </h5>
                      <h6>
                        Issued <i>JUL 2022</i>
                      </h6>
                    </a>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <a
                      href="https://www.coursera.org/account/accomplishments/certificate/WF6989UWSRXV"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <h5>Foundations: Data, Data, Everywhere - Google</h5>
                      <h6>
                        Issued <i>JUN 2022</i>
                      </h6>
                    </a>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <a
                      href="https://www.coursera.org/account/accomplishments/certificate/M7XKHCZ345W2"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <h5>Data Science Methodology - IBM</h5>
                      <h6>
                        Issued <i>JUN 2022</i>
                      </h6>
                    </a>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <a
                      href="https://www.coursera.org/account/accomplishments/certificate/8YBE75WQJS5Z"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <h5>Tools for Data Science - IBM</h5>
                      <h6>
                        Issued <i>JUN 2022</i>
                      </h6>
                    </a>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <a
                      href="https://www.coursera.org/account/accomplishments/certificate/95B9947SM8V3"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <h5>What is Data Science? - IBM</h5>
                      <h6>
                        Issued <i>MAY 2022</i>
                      </h6>
                    </a>
                  </ListGroup.Item>

                  <ListGroup.Item variant="primary">
                    <a
                      href="https://www.coursera.org/account/accomplishments/specialization/certificate/QZHU3SGKZE4P"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <h5>
                        Full-Stack Web Development with React [SPECIALIZATION]
                      </h5>
                      <h6>
                        Issued <i>MAY 2022</i>
                      </h6>
                    </a>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <a
                      href="https://www.coursera.org/account/accomplishments/certificate/PWJJ7W4W6BEV"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <h5>
                        Server-side Development with Node.js, Express.js &
                        MongoDb
                      </h5>
                      <h6>
                        Issued <i>MAY 2022</i>
                      </h6>
                    </a>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <a
                      href="https://www.coursera.org/account/accomplishments/certificate/7B4PJZGCEQJX"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <h5>Front-end Web Development with React.js</h5>
                      <h6>
                        Issued <i>MAR 2022</i>
                      </h6>
                    </a>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <a
                      href="https://www.coursera.org/account/accomplishments/certificate/C24KMVPFLVPB"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <h5>
                        Front-End Web UI Frameworks and Tools : Bootstrap 4
                      </h5>
                      <h6>
                        Issued <i>AUG 2021</i>
                      </h6>
                    </a>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <a
                      href="https://www.coursera.org/account/accomplishments/certificate/VM2EZNJVATPJ"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <h5>HTML, CSS and Javascript for Web Developers</h5>
                      <h6>
                        Issued <i>JUL 2022</i>
                      </h6>
                    </a>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <a
                      href="https://www.coursera.org/account/accomplishments/certificate/J427MF47RQZS"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <h5>Crash Course on Python - Google</h5>
                      <h6>
                        Issued <i>JUN 2021</i>
                      </h6>
                    </a>
                  </ListGroup.Item>
                </ListGroup>
              </Tab.Pane>

              <Tab.Pane eventKey="#udemy">
                <ListGroup>
                  <ListGroup.Item>
                    <a
                      href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-311503e7-2abb-4bd3-b67d-9f4189ddf3d3.pdf"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <h5>React - The Complete Guide</h5>
                      <h6>
                        Issued <i>FEB 2022</i>
                      </h6>
                    </a>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <a
                      href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-3e652598-678d-4e96-b24e-bc56547afe97.pdf"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <h5>The Complete Web Development Bootcamp</h5>
                      <h6>
                        Issued <i>JAN 2022</i>
                      </h6>
                    </a>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <a
                      href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-2d0e6d45-4b5e-40bb-b6dd-bdd64ce65c10.pdf"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <h5>jQuery - Ultimate Course</h5>
                      <h6>
                        Issued <i>AUG 2021</i>
                      </h6>
                    </a>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <a
                      href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-b39cba76-3353-4de0-b7a9-53a8763866ac.pdf"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <h5>JavaScript - Ultimate Course</h5>
                      <h6>
                        Issued <i>JUL 2021</i>
                      </h6>
                    </a>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <a
                      href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-bde16ae6-7ace-450f-9039-b9dd4c508361.pdf"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <h5>Bootstrap4 - Ultimate Course</h5>
                      <h6>
                        Issued <i>JUL 2021</i>
                      </h6>
                    </a>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <a
                      href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-e54c2c4d-ef88-44f8-9722-35c96cabbf24.pdf"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <h5>CSS3 - Ultimate Course</h5>
                      <h6>
                        Issued <i>JUN 2021</i>
                      </h6>
                    </a>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <a
                      href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-f7330e31-ad6b-46c7-afb5-4377605ab3f8.pdf"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <h5>HTML5 - Ultimate Course</h5>
                      <h6>
                        Issued <i>JUN 2021</i>
                      </h6>
                    </a>
                  </ListGroup.Item>
                </ListGroup>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Row>
  );
};

export default Certifications;
