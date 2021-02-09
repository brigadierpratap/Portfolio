import React from "react";
import { Col, Container, Row } from "reactstrap";
import ContForm from "./ContForm";

function Contact() {
  return (
    <div className="py-5 my-5 ">
      <div
        className="container text-light border  mb-3 pb-5 mb-5"
        style={{ borderRadius: "2%" }}
      >
        <h4 className="pt-3">Contact me</h4>
        <hr style={{ backgroundColor: "white", width: "50%" }} />
        <ContForm />
      </div>
    </div>
  );
}

export default Contact;
