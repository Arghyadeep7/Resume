import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import styles from "./Header.module.css";

const Header=()=>{

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  const [screenSize, getDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const setDimension = () => {
    getDimension({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', setDimension);
    
    return(() => {
      window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])

  console.log(screenSize.width);

  return (
    <>
        <Navbar className="d-flex justify-content-between" sticky="top" bg="mb-2 mt-2" style={{backgroundColor: "white"}}>

            <div className="d-flex">
                <h2 className={styles.header}>ARGHYA DEEP PAL</h2>
                <a href="/assets/Arghya Deep Pal.pdf" download style={{textDecoration: 'none', color: 'red'}}>
                    <div className={styles.resume}>
                        <i class="fas fa-file-download fa-2x"></i>
                        <span>RESUME</span>
                    </div>
                </a>
            </div>

            {
                screenSize.width>=1200 &&
                <>
                    <div>
                        <Link to="/education" className={styles.tab}>EDUCATION</Link>
                        <Link to="/internships" className={styles.tab}>INTERNSHIPS</Link>
                        <Link to="/projects" className={styles.tab}>PROJECTS</Link>
                        <Link to="/skills" className={styles.tab}>SKILLS</Link>
                        <Link to="/certifications" className={styles.tab}>CERTIFICATIONS</Link>
                    </div>

                    <NavDropdown title="CONTACT" id="navbarScrollingDropdown" className={styles.tab} style={{marginRight: "0"}}>
                        <NavDropdown.Item href="https://www.linkedin.com/in/arghya-deep-pal7" target="_blank" style={{color:"blue"}}>
                            <i class="fab fa-linkedin fa-lg"></i>&nbsp;&nbsp;LINKEDIN
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="https://github.com/Arghyadeep7" target="_blank" style={{color:"black"}}>
                            <i class="fab fa-github fa-lg"></i>&nbsp;&nbsp;GITHUB
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="mailto:arghyadeep100@gmail.com" target="_blank" style={{color:"red"}}>
                            <i class="fa-solid fa-envelope fa-lg"></i>&nbsp;&nbsp;MAIL ME
                        </NavDropdown.Item>
                    </NavDropdown>
                </>
            }

            {
                screenSize.width<1200 && 
                <>
                    <Button onClick={handleShow} variant="outline-dark" ><i class="fa-solid fa-bars fa-lg"></i></Button>
                    <Offcanvas show={show} onHide={handleShow}>
                        <Offcanvas.Header closeButton>
                            <Link to="/education" className={styles.header} onClick={handleShow}>
                                <h2>ARGHYA DEEP PAL</h2>
                            </Link>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            
                            <Link to="/education" className={styles.tab} onClick={handleShow}>EDUCATION</Link>
                            <br />
                            <br />

                            <Link to="/internships" className={styles.tab} onClick={handleShow}>INTERNSHIPS</Link>
                            <br />
                            <br />

                            <Link to="/projects" className={styles.tab} onClick={handleShow}>PROJECTS</Link>
                            <br />
                            <br />

                            <Link to="/skills" className={styles.tab} onClick={handleShow}>SKILLS</Link>
                            <br />
                            <br />

                            <Link to="/certifications" className={styles.tab} onClick={handleShow}>CERTIFICATIONS</Link>
                            <br />
                            <br />


                            <div className="mt-5">
                                <b >Connect with me:</b>
                                <hr />

                                <a href="https://www.linkedin.com/in/arghya-deep-pal7" target="_blank" style={{color:"blue", textDecoration: "none"}}>
                                    <b>
                                        <i class="fab fa-linkedin fa-lg"></i>&nbsp;&nbsp;LINKEDIN
                                    </b>
                                </a>
                                <br />
                                <br />
                                
                                <a href="https://github.com/Arghyadeep7" target="_blank" style={{color:"black", textDecoration: "none"}}>
                                    <b>
                                        <i class="fab fa-github fa-lg"></i>&nbsp;&nbsp;GITHUB
                                    </b>
                                </a>
                                <br />
                                <br />

                                <a href="mailto:ronipal07@gmail.com" target="_blank" style={{color:"red", textDecoration: "none"}}>
                                    <b>
                                        <i class="fa-solid fa-envelope fa-lg"></i>&nbsp;&nbsp;MAIL ME
                                    </b>
                                </a>
                                <br />
                                <br />
                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>
                </>
            }

        </Navbar>
    </>
  );
};

export default Header;