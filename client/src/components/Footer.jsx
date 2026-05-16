import React from "react";

function Footer() {
  return (
    <footer
      className="text-white mt-5"
      style={{
        backgroundColor: "#111827",
        width: "100%",
        padding: "40px 20px",
      }}
    >
      <div className="container-fluid">

        <div className="row text-center text-md-start">

          {/* Left Side */}
          <div className="col-md-6 mb-4">
            <h3 className="fw-bold">Apna Dairy</h3>

            <p style={{ maxWidth: "400px" }}>
              Fresh and hygienic milk delivered directly
              from farm to your home daily.
            </p>
          </div>

          {/* Right Side */}
          <div className="col-md-6 text-md-end">

            <h4 className="fw-bold mb-3">Contact</h4>

            <p>
              Email:
              <a
                href="mailto:apnadairy@gmail.com"
                className="text-decoration-none text-white ms-2"
              >
                apnadairy@gmail.com
              </a>
            </p>

            <p>
              Phone:
              <a
                href="tel:+917668361560"
                className="text-decoration-none text-white ms-2"
              >
                +91 7668361560
              </a>
            </p>

            <p>
              Location:
              <a
                href="https://maps.google.com/?q=Mainpuri"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-white ms-2"
              >
                Mainpuri, UP
              </a>
            </p>

          </div>
        </div>

        <hr className="border-light" />

        <div className="text-center">
          © 2026 Apna Dairy | All Rights Reserved
        </div>

      </div>
    </footer>
  );
}

export default Footer;