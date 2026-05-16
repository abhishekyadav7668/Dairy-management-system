import React from "react";
import milkImg from "../assets/milk.avif";

function Home() {
  return (
    <div
      className="w-100"
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#ffeef2",
        overflow: "hidden",
        margin: "0",
        padding: "0",
      }}
    >
      <div
        className="row align-items-center mx-0"
        style={{
          minHeight: "90vh",
          padding: "40px",
        }}
      >
        {/* LEFT SIDE */}
        <div className="col-lg-6 ps-5">
          <h1
            className="fw-bold"
            style={{
              fontSize: "85px",
              lineHeight: "1.2",
              color: "#111",
            }}
          >
            Fresh & <br />
            Pure Milk <br />
            Delivered <br />
            Daily
          </h1>

          <p
            className="mt-4"
            style={{
              fontSize: "24px",
              color: "#555",
              maxWidth: "700px",
            }}
          >
            We provide fresh, hygienic and organic dairy products
            directly from farm to your home.
          </p>

          <div className="mt-5 d-flex gap-3">
            <button className="btn btn-primary btn-lg px-5 py-3">
              Order Now
            </button>

            <button className="btn btn-dark btn-lg px-5 py-3">
              Contact Us
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="col-lg-6 d-flex justify-content-center pe-5">
          <img
            src={milkImg}
            alt="Milk"
            style={{
              width: "650px",
              height: "450px",
              objectFit: "cover",
              borderRadius: "40px",
              border: "10px solid white",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;