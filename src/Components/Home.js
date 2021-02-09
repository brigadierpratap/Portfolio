import React from "react";
import { Row, Col, Container } from "reactstrap";
import TypewriterEffect from "./Typewriter";
import image1 from "../assets/photo2.jpg";
function Home() {
  return (
    <Container
      fluid
      style={{
        fontSize: "1.3rem",
      }}
    >
      <Row>
        <Col md style={{ display: "inline-flex", justifyContent: "center" }}>
          <img
            className="img-fluid"
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              maxHeight: "70%",
              alignSelf: "center",
            }}
            src={image1}
            alt="pawan"
          />
        </Col>
        <Col
          md
          style={{
            verticalAlign: "middle",
            display: "flex",
            justifyContent: "center",
            marginBottom: "5rem",
          }}
        >
          <div className="my-auto text-light">
            Hello, I'm Pawan Singh!
            <TypewriterEffect />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
