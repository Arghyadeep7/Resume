import React from "react";
import Education from "./Education";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Projects from "./Projects";
import Contact from "./Contact";
import Profiles from "./Profiles";

import "./Main.css";

const Header = () => {

  return (
    <div>
      <div className="container-fluid small">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <div style={{ fontSize: "25px", color: "red" }}>
              ARGHYA DEEP PAL
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ backgroundColor: "white", color: "red" }}
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#education-sm">
                    <div className="h-text" style={{ fontSize: "20px" }}>
                      <i class="fa-regular fa-bookmark"></i> EDUCATION
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#skills-sm">
                    <div className="h-text" style={{ fontSize: "20px" }}>
                      <i class="fa-solid fa-laptop-code"></i> SKILLS
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#certifications-sm">
                    <div className="h-text" style={{ fontSize: "20px" }}>
                      <i class="fa-regular fa-file"></i> CERTIFICATIONS
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#projects-sm">
                    <div className="h-text" style={{ fontSize: "20px" }}>
                      <i class="fa-solid fa-list-check"></i> PROJECTS
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contact-sm">
                    <div className="h-text" style={{ fontSize: "20px" }}>
                      <i class="fa-solid fa-phone"></i> CONTACT
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          <div id="education-sm">
            <Education />
          </div>
          <div id="skills-sm">
            <Skills />
          </div>
          <div id="certifications-sm">
            <Certifications />
          </div>
          <div id="projects-sm">
            <Projects />
          </div>
          <div id="contact-sm">
            {/* <Profiles /> */}
            <Contact />
          </div>
          <div className="blink" style={{margin:"2% auto"}}>
            <a href="/assets/Arghya_Deep_Pal.pdf" style={{color:"red", textDecoration:"none"}} download>
              <i class="fa-solid fa-circle-arrow-down fa-2x"></i><br/>
              RESUME
            </a>
          </div>
        </div>
      </div>
      <div className="container large">
        <div style={{display: "flex", flexDirection:"row", justifyContent: "center"}}>
          <div className="header">
            ARGHYA DEEP PAL
          </div>
          <div className="blink fixed" >
            <a href="/assets/Arghya_Deep_Pal.pdf" style={{color:"red", textDecoration:"none"}} download>
              <i class="fa-solid fa-circle-arrow-down fa-2x"></i><br/>
              RESUME
            </a>
          </div>
        </div>
        <ul
          class="nav nav-tabs justify-content-center"
          id="myTab"
          role="tablist"
          style={{borderBottom: '3px solid white'}}
        >
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="false"
            >
              <div className="h-text">
                <i class="fa-solid fa-code"></i> HOME
              </div>
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="education-tab"
              data-bs-toggle="tab"
              data-bs-target="#education"
              type="button"
              role="tab"
              aria-controls="education"
              aria-selected="false"
               
            >
              <div className="h-text">
                <i class="fa-regular fa-bookmark"></i> EDUCATION
              </div>
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="skills-tab"
              data-bs-toggle="tab"
              data-bs-target="#skills"
              type="button"
              role="tab"
              aria-controls="skills"
              aria-selected="false"
               
            >
              <div className="h-text">
                <i class="fa-solid fa-laptop-code"></i> SKILLS
              </div>
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="certifications-tab"
              data-bs-toggle="tab"
              data-bs-target="#certifications"
              type="button"
              role="tab"
              aria-controls="certifications"
              aria-selected="false"
               
            >
              <div className="h-text">
                <i class="fa-regular fa-file"></i> CERTIFICATIONS
              </div>
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="projects-tab"
              data-bs-toggle="tab"
              data-bs-target="#projects"
              type="button"
              role="tab"
              aria-controls="projects"
              aria-selected="false"
               
            >
              <div className="h-text">
                <i class="fa-solid fa-list-check"></i> PROJECTS
              </div>
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <Education />
            <Skills />
            <Certifications />
            <Projects />
            {/* <Profiles /> */}
            <Contact />
          </div>
          <div
            class="tab-pane fade"
            id="education"
            role="tabpanel"
            aria-labelledby="education-tab"
          >
            <Education />
          </div>
          <div
            class="tab-pane fade"
            id="skills"
            role="tabpanel"
            aria-labelledby="skills-tab"
          >
            <Skills />
          </div>
          <div
            class="tab-pane fade"
            id="certifications"
            role="tabpanel"
            aria-labelledby="certifications-tab"
          >
            <Certifications />
          </div>
          <div
            class="tab-pane fade"
            id="projects"
            role="tabpanel"
            aria-labelledby="projects-tab"
          >
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
