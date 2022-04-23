import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div style={{ margin: "5% auto", color: "black" }}>
      <h1 style={{color:"white"}}>EDUCATION</h1>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={{ textAlign: "center" }}
            >
              <h2>B.Tech. in Computer Science & Engineering [Ongoing]</h2>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <h3>Heritage Institute Of Technology</h3>
              <h4>2020 - 2024</h4>
              <h5>Current CGPA - 9.67</h5>
              <h6>
                <i class="fa-solid fa-location-dot"></i> Kolkata, West Bengal
              </h6>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <h2>A.I.S.S.C.E. - (Class-XII) , Computer Science</h2>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <h3>B. D. Memorial International</h3>
              <h4>Year of Exam - 2020</h4>
              <h5>Grade - 97.8% </h5>
              <a href="https://drive.google.com/file/d/1OVwQA4-MfK_NxKgnU8JZGDCleL3p3c6H/view" target="_blank">School Topper in Class-XII!</a><br/>
              <h6>
                <i class="fa-solid fa-location-dot"></i> Kolkata, West Bengal
              </h6>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <h2>A.I.S.S.E. - (Class-X)</h2>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <h3>B. D. Memorial International</h3>
              <h4>Year of Exam - 2018</h4>
              <h5>Grade - 94.6% </h5>
              <h6>
                <i class="fa-solid fa-location-dot"></i> Kolkata, West Bengal
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
