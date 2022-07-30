import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import styles from "./Header.module.css";

const Header=()=>{
  return (
    <Navbar collapseOnSelect expand="lg" style={{fontWeight: 'bold', textShadow: '1px 1px'}}>
        <div style={{display:'flex'}}>
          <h2>ARGHYA DEEP PAL</h2>
          <a href="/assets/Resume.pdf" download style={{textDecoration: 'none', color: 'red'}}>
            <div className={styles.resume}>
              <i class="fas fa-file-download fa-2x"></i>
              <span>RESUME</span>
            </div>
          </a>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/home" style={{color: 'blue'}}>EDUCATION</Nav.Link>
            <Nav.Link href="/skills" style={{color: 'blue'}}>SKILLS</Nav.Link>
            <Nav.Link href="/certifications" style={{color: 'blue'}}>CERTIFICATIONS</Nav.Link>
            <Nav.Link href="/projects" style={{color: 'blue'}}>PROJECTS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;