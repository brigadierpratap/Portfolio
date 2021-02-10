import React from "react";
import { Col, Row } from "reactstrap";
import "./about.css";
function About() {
  return (
    <center style={{ marginBottom: "4rem" }}>
      <div class="row container-fluid mt-2 mb-2">
        <Col md="12">
          <hr style={{ backgroundColor: "white" }} />
          <center>
            {" "}
            <h1 className="text-light">My Skills</h1>{" "}
          </center>
          <hr style={{ backgroundColor: "white" }} />
        </Col>
        <Col xl="3" md="4" sm="6" className="my-2">
          <Row className="my-2">
            <Col xl="3" md="3" sm="3" xs="3">
              <span className="fa fa-linux fa-3x text-light"></span>
            </Col>
            <Col>
              <div
                class="progress my-2 "
                style={{ height: "1.8rem", borderRadius: "1rem" }}
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{
                    width: "75%",
                    fontSize: "1.1rem",
                    backgroundColor: "#e5bb12",
                  }}
                >
                  75%
                </div>
              </div>
              <div className="my-2 text-light">
                <h3>Linux Os</h3>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xl="3" md="4" sm="6" className="my-2">
          <Row className="my-2">
            <Col xl="3" md="3" sm="3" xs="3">
              <span className="fa fa-html5 fa-3x text-light"></span>
            </Col>
            <Col>
              <div
                class="progress my-2"
                style={{ height: "1.8rem", borderRadius: "1rem" }}
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{
                    width: "95%",
                    fontSize: "1.1rem",
                    backgroundColor: "#e97e2e",
                  }}
                >
                  95%
                </div>
              </div>
              <div className="my-2 text-light">
                <h3>HTML 5</h3>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xl="3" md="4" sm="6" className="my-2">
          <Row className="my-2">
            <Col xl="3" md="3" sm="3" xs="3">
              <span className="fa fa-css3 fa-3x text-light"></span>
            </Col>
            <Col>
              <div
                class="progress my-2"
                style={{ height: "1.8rem", borderRadius: "1rem" }}
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{
                    width: "85%",
                    fontSize: "1.1rem",
                    backgroundColor: "#59a090",
                  }}
                >
                  85%
                </div>
              </div>
              <div className="my-2 text-light">
                <h3>CSS 3</h3>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xl="3" md="4" sm="6" className="my-2">
          <Row className="my-2">
            <Col xl="3" md="3" sm="3" xs="3">
              <span className="fab fa-bootstrap fa-3x text-light"></span>
            </Col>
            <Col>
              <div
                class="progress my-2"
                style={{ height: "1.8rem", borderRadius: "1rem" }}
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{
                    width: "95%",
                    fontSize: "1.1rem",
                    backgroundColor: "#7c37cc",
                  }}
                >
                  95%
                </div>
              </div>
              <div className="my-2 text-light">
                <h3>Bootstrap</h3>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xl="3" md="4" sm="6" className="my-2">
          <Row className="my-2">
            <Col xl="3" md="3" sm="3" xs="3">
              <span className="fab fa-react fa-3x text-light"></span>
            </Col>
            <Col>
              <div
                class="progress my-2"
                style={{ height: "1.8rem", borderRadius: "1rem" }}
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{
                    width: "95%",
                    fontSize: "1.1rem",
                    backgroundColor: "#08a4b2",
                  }}
                >
                  95%
                </div>
              </div>
              <div className="my-2 text-light">
                <h3>React.js</h3>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xl="3" md="4" sm="6" className="my-2">
          <Row className="my-2">
            <Col xl="3" md="3" sm="3" xs="3">
              <span className="fab fa-node fa-3x text-light"></span>
            </Col>
            <Col>
              <div
                class="progress my-2"
                style={{ height: "1.8rem", borderRadius: "1rem" }}
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{
                    width: "95%",
                    fontSize: "1.1rem",
                    backgroundColor: "#99e54e",
                  }}
                >
                  95%
                </div>
              </div>
              <div className="my-2 text-light">
                <h3>Node.js</h3>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xl="3" md="4" sm="6" className="my-2">
          <Row className="my-2">
            <Col xl="3" md="3" sm="3" xs="3">
              <span className="fab fa-java fa-3x text-light"></span>
            </Col>
            <Col>
              <div
                class="progress my-2"
                style={{ height: "1.8rem", borderRadius: "1rem" }}
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{
                    width: "95%",
                    fontSize: "1.1rem",
                    backgroundColor: "#cc3d3d",
                  }}
                >
                  95%
                </div>
              </div>
              <div className="my-2 text-light">
                <h3>Java</h3>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xl="3" md="4" sm="6" className="my-2">
          <Row className="my-2">
            <Col xl="3" md="3" sm="3" xs="3">
              <span className="fab fa-envira fa-3x text-light"></span>
            </Col>
            <Col>
              <div
                class="progress my-2"
                style={{ height: "1.8rem", borderRadius: "1rem" }}
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{
                    width: "90%",
                    fontSize: "1.1rem",
                    backgroundColor: "#2e8c68",
                  }}
                >
                  90%
                </div>
              </div>
              <div className="my-2 text-light">
                <h3>MongoDB</h3>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xl="3" md="4" sm="6" className="my-2 mx-auto">
          <Row className="my-2">
            <Col xl="3" md="3" sm="3" xs="3">
              <span className="fab fa-cuttlefish fa-3x text-light"></span>
            </Col>
            <Col>
              <div
                class="progress my-2"
                style={{ height: "1.8rem", borderRadius: "1rem" }}
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="98"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{
                    width: "98%",
                    fontSize: "1.1rem",
                    backgroundColor: "#556d96",
                  }}
                >
                  98%
                </div>
              </div>
              <div className="my-2 text-light">
                <h3>C Programming</h3>
              </div>
            </Col>
          </Row>
        </Col>
      </div>
      <hr style={{ backgroundColor: "white" }} />
      <div class="row container-fluid">
        <div class="col-12">
          <center>
            {" "}
            <h1 className="text-light">Academia</h1>{" "}
          </center>
          <hr style={{ backgroundColor: "white" }} />
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
                    <span class="year">HSC</span>
                  </div>
                  <div class="timeline-content">
                    <h2 class="title">Saint John's Academy, Prayagraj</h2>
                    <p class="description" style={{ fontSize: "1.1rem" }}>
                      I have earned Higher Secondary Certificate from Saint
                      John's Academy with 88% in PCM(Physics, Chemistry, Maths)
                      and Computer Science.
                      <br />
                      Year of Passing -: 2017
                    </p>
                  </div>
                </div>
                <div class="timeline">
                  <div class="timeline-icon">
                    <span class="year">SSC</span>
                  </div>
                  <div class="timeline-content">
                    <h3 class="title">Saint John's Academy, Prayagraj</h3>
                    <p class="description" style={{ fontSize: "1.1rem" }}>
                      I have earned my Senior Secondary Certificate from Saint
                      John's Academy with 95% aggregate marks.
                      <br />
                      Year of Passing -: 2015
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
}

export default About;
