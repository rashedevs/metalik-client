import React from "react";
import two from "../../assets/carousel/two.jpg";
import first from "../../assets/carousel/first.jpg";
import three from "../../assets/carousel/three.jpg";
import last from "../../assets/carousel/last.jpg";

const Gallary = () => {
  return (
    <div className="my-12">
      <h3 className="text-accent text-xl font-bold text-center uppercase my-12">
        Gallery
      </h3>
      <div className="carousel w-100 mx-12 rounded">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={first} className="w-full h-80" alt="" /> /
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={two} className="w-full h-80" alt="" /> /
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={three} className="w-full h-80" alt="" /> /
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={last} className="w-full h-80" alt="" /> /
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
