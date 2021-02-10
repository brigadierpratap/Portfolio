import React from "react";
import "./about.css";
function About() {
  return (
    <>
      <div class="row container-fluid">
        <div class="col-12">
          <center>
            {" "}
            <h1 className="text-light">Academia</h1>{" "}
          </center>
          <div class="row">
            <div class="col-md-12">
              <div class="main-timeline5">
                <div class="timeline">
                  <div class="timeline-icon">
                    <span class="year">UG</span>
                  </div>
                  <div class="timeline-content">
                    <h2 class="title">
                      National Institute of Technology Patna
                    </h2>
                    <p class="description" style={{ fontSize: "1.1rem" }}>
                      I am pursuing B.tech in Electronics and Communication
                      Engineering.
                      <br />
                      Batch -: 2019-23
                    </p>
                  </div>
                </div>
                <div class="timeline">
                  <div class="timeline-icon">
                    <span class="year">Prog</span>
                  </div>
                  <div class="timeline-content">
                    <h3 class="title">Semstar Global School</h3>
                    <p class="description">
                      I have completed Intermediate from Semstar Global School
                      with 92.2% in PCM(Physics, Chemistry, Maths).
                    </p>
                  </div>
                </div>
                <div class="timeline">
                  <div class="timeline-icon">
                    <span class="year">DBMS</span>
                  </div>
                  <div class="timeline-content">
                    <h3 class="title">Shemford Futuristic School</h3>
                    <p class="description">
                      I have completed High school from Shemford School with 10
                      CGPA.
                    </p>
                  </div>
                </div>
                <div class="timeline">
                  <div class="timeline-icon">
                    <span class="year">UI/UX</span>
                  </div>
                  <div class="timeline-content">
                    <h3 class="title">Web Developer</h3>
                    <p class="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec lacinia mi ultrices, luctus nunc ut, commodo enim.
                      Vivamus sem erat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
