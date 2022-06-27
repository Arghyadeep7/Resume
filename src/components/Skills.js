import React from "react";
import {Carousel} from "react-bootstrap";

const Skills = () => {
  return (
    <div style={{margin:"5% auto"}}>
      <h1>SKILLS</h1>
      <Carousel>
        <Carousel.Item style={{border:"7px solid red"}}>
        <div style={{ padding:"20px", paddingBottom:"0", margin:"3% auto", marginTop:"0"}}>
          <div className="row justify-content-center">
            <h3 style={{marginBottom:"30px"}}>Programming Languages</h3>
          </div>
          <div className="row">
            <div className="col-3">
              <img src="/assets/Cpp.png" alt="C++" style={{width:"50%", height:"60%"}} /><br/>C++
            </div>
            <div className="col-3">
              <img src="/assets/C.png" alt="C" style={{width:"50%", height:"60%"}}/><br/>C
            </div>
            <div className="col-3">
              <img src="/assets/Python.png" alt="Python" style={{width:"50%", height:"60%"}}/><br/>Python
            </div>
            <div className="col-3">
              <img src="/assets/Java.png" alt="Java" style={{width:"50%", height:"60%"}}/><br/>Java
            </div>
            <div className="col-3">
              <img src="/assets/Javascript.png" alt="Javascript" style={{width:"50%", height:"60%"}}/><br/>Javascript
            </div>
          </div>
        </div>
        </Carousel.Item>
        <Carousel.Item style={{border:"7px solid red"}}>
        <div style={{ padding:"20px", paddingBottom:"0", margin:"3% auto", marginTop:"0"}}>
          <div className="row justify-content-center">
            <h3 style={{marginBottom:"30px"}}>Front-End Technologies</h3>
          </div>
          <div className="row">
            <div className="col-3">
              <img src="/assets/Reactjs.png" alt="Reactjs" style={{width:"50%", height:"60%"}} /><br/>Reactjs
            </div>
            <div className="col-3">
              <img src="/assets/Nextjs.png" alt="Nextjs" style={{width:"50%", height:"60%"}}/><br/>Nextjs
            </div>
            <div className="col-3">
              <img src="/assets/Bootstrap.png" alt="Bootstrap" style={{width:"50%", height:"60%"}}/><br/>Bootstrap
            </div>
            <div className="col-3">
              <img src="/assets/jQuery.png" alt="jQuery" style={{width:"50%", height:"60%"}}/><br/>jQuery
            </div>
            <div className="col-3">
              <img src="/assets/Html.png" alt="HTML" style={{width:"50%", height:"60%"}}/><br/>HTML
            </div>
            <div className="col-3">
              <img src="/assets/css.png" alt="CSS" style={{width:"50%", height:"60%"}}/><br/>CSS
            </div>
            <div className="col-3">
              <img src="/assets/Javascript.png" alt="Javascript" style={{width:"50%", height:"60%"}}/><br/>Javascript
            </div>
          </div>
        </div>
        </Carousel.Item>
        <Carousel.Item style={{border:"7px solid red"}}>
        <div style={{ padding:"20px", paddingBottom:"0", margin:"3% auto", marginTop:"0"}}>
          <div className="row justify-content-center">
            <h3 style={{marginBottom:"30px"}}>Back-End Technologies</h3>
          </div>
          <div className="row">
            <div className="col-3">
              <img src="/assets/Nodejs.jpg" alt="Nodejs" style={{width:"50%", height:"60%"}} /><br/>Nodejs
            </div>
            <div className="col-3">
              <img src="/assets/Expressjs.png" alt="Expressjs" style={{width:"50%", height:"60%"}}/><br/>Expressjs
            </div>
            <div className="col-3">
              <img src="/assets/mongoDB.jpg" alt="mongoDB" style={{width:"50%", height:"60%"}}/><br/>mongoDB
            </div>
            <div className="col-3">
              <img src="/assets/Firebase.jpg" alt="Firebase" style={{width:"50%", height:"60%"}}/><br/>Firebase
            </div>
            <div className="col-3">
              <img src="/assets/sql.jpg" alt="SQL" style={{width:"50%", height:"60%"}}/><br/>SQL
            </div>
          </div>
        </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Skills;
