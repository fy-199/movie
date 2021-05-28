import React from "react";
import "./Parallax.css";
import { FaStar, FaStarHalf } from "react-icons/fa";
export const Parallax = () => {
  return (
    <div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div
            class="slick-bg1 d-block"
            alt="..."
            style={{
              backgroundImage: `url(
                "https://images2.alphacoders.com/851/thumb-1920-85182.jpg"
              )`,
            }}
          ></div>
          <div class="carousel-caption container-fluid d-block">
            <div className="row">
              <div className="col-4">
                <h5
                  className="animated fadeInLeft"
                  style={{ animationDelay: 0.6 + "s" }}
                >
                  Inception
                </h5>
                <div className="d-flex flex-wrap align-items-center fadeInLeft animated">
                  <div className="slider-ratting d-flex align-items-center me-4 mt-2 my-md-3">
                    <ul className="ratting-start p-0 m-0 list-inline d-flex align-items-center justify-content-left">
                      <li>
                        <FaStar className="fa" />
                      </li>
                      <li>
                        <FaStar className="fa" />
                      </li>
                      <li>
                        <FaStar className="fa" />
                      </li>
                      <li>
                        <FaStar className="fa" />
                      </li>
                      <li>
                        <FaStarHalf className="fa" />
                      </li>
                    </ul>
                    <span className="text-white ml-2">4.7(Imbd)</span>
                  </div>
                  <div className="d-flex align-items-center my-2">
                    <span className="badge badge-secondary p-2">+18</span>
                    <span className="ms-3">Movie</span>
                  </div>
                </div>
                <p
                  className="animated fadeInUp info-p"
                  style={{ animationDelay: 1.2 + "s" }}
                >
                  A thief who steals corporate secrets through the use of
                  dream-sharing technology is given the inverse task of planting
                  an idea into the mind of a C.E.O.
                </p>

                <div
                  className="d-flex align-items-center r-mb-23 fadeInUp animated "
                  style={{ animationDelay: 1.2 + "s" }}
                >
                  <a href="" className="play-now">
                    PLAY NOW
                  </a>
                  <a href="" className="more-details">
                    More Details
                  </a>
                </div>
              </div>
              <div className="col-8">
                <div class="parallax-img">
                  <a href="movie-details.html">
                    <img
                      src="https://images2.alphacoders.com/851/thumb-1920-85182.jpg"
                      class="img-fluid w-100"
                      alt="bailey"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
