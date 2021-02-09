import React from "react";

function Footer() {
  return (
    <footer
      id="sticky-footer"
      className="footer fixed-bottom bg-transparent text-light"
      style={{
        bottom: "0",
        height: "2.8rem",
        paddingTop: "0.5rem",
        paddingBottom: "1.5rem",
        fontSize: "1.3rem",
        background: "transparent",
      }}
    >
      <div className="container text-center">
        <small>Copyright © Pawan Singh</small>
      </div>
    </footer>
  );
}

export default Footer;
