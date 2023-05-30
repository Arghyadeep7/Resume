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
    <Navbar collapseOnSelect expand="lg" style={{fontWeight: 'bold', textShadow: '1px 1px', margin:"10px auto", backgroundColor:"white"}} sticky="top" >
      <div style={{display:'flex'}}>
        <Link to="/education" style={{textDecoration:"none", color:"black"}}>
          <h2 style={{marginTop:"5px"}}>ARGHYA DEEP PAL</h2>
        </Link>
        <a href="/assets/Arghya Deep Pal.pdf" download style={{textDecoration: 'none', color: 'red'}}>
          <div className={styles.resume}>
            <i class="fas fa-file-download fa-2x"></i>
            <span>RESUME</span>
          </div>
        </a>
      </div>
      {
        screenSize.width<950 &&
        <>
          <Button onClick={handleShow} variant="outline-dark" ><i class="fa-solid fa-bars fa-lg"></i></Button>
          <Offcanvas show={show} onHide={handleShow} style={{fontWeight: 'bold', textShadow: '1px 1px'}}>
            <Offcanvas.Header closeButton>
              <Link to="/education" style={{textDecoration:"none", color:"black"}} onClick={handleShow}>
                <h2><b>ARGHYA DEEP PAL</b></h2>
              </Link>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav.Link className="mb-3">
                <Link to="/education" style={{textDecoration:"none"}} onClick={handleShow}>
                  EDUCATION
                </Link>
              </Nav.Link>
              <Nav.Link className="mb-3">
                <Link to="/skills" style={{textDecoration:"none"}} onClick={handleShow}>
                  SKILLS
                </Link>
              </Nav.Link>
              <Nav.Link className="mb-3">
                <Link to="/certifications" style={{textDecoration:"none"}} onClick={handleShow}>
                  CERTIFICATIONS
                </Link>
              </Nav.Link>
              <Nav.Link className="mb-3">
                <Link to="/projects" style={{textDecoration:"none"}} onClick={handleShow}>
                  PROJECTS
                </Link>
              </Nav.Link>
              
              <NavDropdown title="CONTACT" id="navbarScrollingDropdown" >
                <NavDropdown.Item href="https://www.linkedin.com/in/arghya-deep-pal7" target="_blank" style={{color:"blue"}}>
                  <i class="fab fa-linkedin fa-lg"></i>&nbsp;&nbsp;LINKEDIN
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://github.com/Arghyadeep7" target="_blank" style={{color:"black"}}>
                  <i class="fab fa-github fa-lg"></i>&nbsp;&nbsp;GITHUB
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="mailto:ronipal07@gmail.com" target="_blank" style={{color:"red"}}>
                  <i class="fa-solid fa-envelope fa-lg"></i>&nbsp;&nbsp;MAIL ME
                </NavDropdown.Item>
              </NavDropdown>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      }
      {screenSize.width>=950 &&
        <>  
          <Nav className="me-auto"></Nav>
          <Nav.Link href="/education">
            <Link to="/education" style={{textDecoration:"none"}}>
              EDUCATION
            </Link>
          </Nav.Link>
          <Nav.Link href="/skills">
            <Link to="/skills" style={{textDecoration:"none"}}>
              SKILLS
            </Link>
          </Nav.Link>
          <Nav.Link href="/certifications">
            <Link to="/certifications" style={{textDecoration:"none"}}>
              CERTIFICATIONS
            </Link>
          </Nav.Link>
          <Nav.Link href="/projects">
            <Link to="/projects" style={{textDecoration:"none"}}>
              PROJECTS
            </Link>
          </Nav.Link>
          
          <NavDropdown title="CONTACT" id="navbarScrollingDropdown" align="end" >
            <NavDropdown.Item href="https://www.linkedin.com/in/arghya-deep-pal7" target="_blank" style={{color:"blue"}}>
              <i class="fab fa-linkedin fa-lg"></i>&nbsp;&nbsp;LINKEDIN
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="https://github.com/Arghyadeep7" target="_blank" style={{color:"black"}}>
              <i class="fab fa-github fa-lg"></i>&nbsp;&nbsp;GITHUB
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="mailto:ronipal07@gmail.com" target="_blank" style={{color:"red"}}>
              <i class="fa-solid fa-envelope fa-lg"></i>&nbsp;&nbsp;MAIL ME
            </NavDropdown.Item>
          </NavDropdown>
        </>
      }  
    </Navbar>
  );
};

export default Header;