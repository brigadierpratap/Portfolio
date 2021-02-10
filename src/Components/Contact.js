import React from "react";

import ContForm from "./ContForm";

function Contact() {
  return (
    <div className="py-4 my-4 ">
      <div
        className="container text-light border  mb-3 pb-5 mb-5"
        style={{ borderRadius: "2%" }}
      >
        <h4 className="pt-3">Contact me</h4>
        <hr style={{ backgroundColor: "white", width: "50%" }} />

        <ContForm />
        <hr style={{ backgroundColor: "white", width: "50%" }} />
        <div className="row">
          <div className="col-md-6 mx-auto">
            <address>
              <strong>Pawan Singh</strong>
              <br />
              National Institute of Technology Patna
              <br />
              Ashok Rajpath, Patna
              <br />
              BIHAR IN.
              <br />
              <strong>Phone :</strong>
              <a href="tel:+918707880499" style={{ color: "inherit" }}>
                +91 87077880499
              </a>
              <br />
              <strong>Email :</strong>
              <a
                href="mailto:pawans.ug19.ec@nitp.ac.in"
                style={{ color: "inherit" }}
              >
                pawans.ug19.ec@nitp.ac.in
              </a>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
