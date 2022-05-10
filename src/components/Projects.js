import React from "react";

const Projects = () => {
  return (
    <div style={{ margin: "5% auto"}}>
      <h1>PROJECTS</h1>
      <div className="container-fluid" style={{color: "black"}}>
        <div className="row">
          <div className="col-sm-6 mb-3">
            <div class="card" style={{border:"5px solid red"}}>
              <img src="/assets/Portfolio.png" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Resume</h5>
                <p class="card-text" style={{textAlign: "left"}}>
                  Tech Used :
                  <ul>
                    <li>React.js</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>Reactstrap</li>
                  </ul>
                  <a href="https://arghya-deep-pal-resume.vercel.app/" target="_blank">Website Link</a><br />
                  Repository Link : Private
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mb-3">
            <div class="card" style={{border:"5px solid red"}}>
              <img src="/assets/Simon_Game.png" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Simon Game</h5>
                <p class="card-text" style={{textAlign: "left"}}>
                  Tech Used :
                  <ul>
                    <li>Vanilla Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                  <a href="https://arghyadeep7.github.io/The-Simon-Game/" target="_blank">Website Link</a><br />
                  <a href="https://github.com/Arghyadeep7/The-Simon-Game" target="_blank">Repository Link</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 mb-3">
            <div class="card" style={{border:"5px solid red"}}>
              <img src="/assets/Expenses.png" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Expenses Tracker</h5>
                <p class="card-text" style={{textAlign: "left"}}>
                  Tech Used :
                  <ul>
                    <li>React.js</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                  <a href="https://react-expenses-app7.herokuapp.com/" target="_blank">Website Link</a><br />
                  <a href="https://github.com/Arghyadeep7/Expenses" target="_blank">Repository Link</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mb-3">
            <div class="card" style={{border:"5px solid red"}}>
              <img src="/assets/To-Do-List.png" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">To Do List</h5>
                <p class="card-text" style={{textAlign: "left"}}>
                  Tech Used :
                  <ul>
                    <li>Javascript</li>
                    <li>EJS</li>
                    <li>CSS</li>
                    <li>Expressjs</li>
                    <li>MongoDB</li>
                  </ul>
                  <a href="https://stark-waters-06833.herokuapp.com/" target="_blank">Website Link</a><br />
                  <a href="https://github.com/Arghyadeep7/To-Do-List" target="_blank">Repository Link</a>
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
