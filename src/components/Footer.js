import React from "react";

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "white", padding: "20px" }}
    >
      <div>
        <a href="https://www.linkedin.com/in/arghya-deep-pal7/" style={{textDecoration: "none"}} target="_blank">
          <i class="fa-brands fa-linkedin fa-2x"></i>&nbsp;&nbsp;&nbsp;
        </a>
        <a href="mailto:ronipal07@gmail.com" style={{textDecoration: "none", color:"red"}} target="_blank">
          <i class="fa-solid fa-envelope fa-2x"></i>&nbsp;&nbsp;&nbsp;
        </a>
        <a href="https://github.com/Arghyadeep7" style={{textDecoration: "none", color:"black"}} target="_blank">
          <i class="fa-brands fa-github fa-2x"></i>
        </a>
        <div style={{fontSize: "20px", color:"black"}}>
          Made by <i style={{color:"red"}}>ARGHYA DEEP PAL</i><br/>
          Reach me at <a href="mailto:ronipal07@gmail.com" target="_blank">ronipal07@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
