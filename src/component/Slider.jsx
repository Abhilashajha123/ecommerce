import React from "react";
import download from "../images/download.jpg";
import a from "../images/a.jpg";
import b from "../images/b.jpg";
const Slider = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50"className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
