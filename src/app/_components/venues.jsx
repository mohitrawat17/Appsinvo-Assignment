"use client";
import React, { useContext } from "react";
import Sports_data from "./sports_data";
import Link from "next/link";
import { DataContext } from "../assets/globalContext";
import Slider from "react-slick";

const Venues = () => {
  const { data } = useContext(DataContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // adjust the breakpoint as needed
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // adjust the breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="mt-4 pt-4" id="ourprograms">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 mb-3 text-center">
            <h3 className="sec-title">Venues Near Me</h3>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 mb-3 position-relative">
            <Sports_data />
            <div className="tab-content" id="pills-tabContent">
              <div className="slider programIMages sportSlider">
                <Slider {...settings}>
                  {data?.venueData &&
                    data?.venueData.length > 0 &&
                    data?.venueData.map((data) => {
                      return (
                        <div
                          key={data?._id}
                          className="bg-white p-2 text-capitalize programs-colles vanuesNearMeBox"
                        >
                          <div className="position-relative">
                            <Link className="text-dark" href="#">
                              <img
                                src={data?.image[0]?.image}
                                className="img-fluid tabImage"
                                alt=""
                              />
                            </Link>
                            <div className="venueBoxIcons">
                              <span className="votesRatingBg">
                                {parseInt(data?.rating)?.toFixed(0)}
                                {/* <img
                                      src="/images/star.png"
                                      alt=""
                                      className="start"
                                    /> */}
                              </span>
                              {data?.review} votes{" "}
                            </div>
                            <img
                              src="/images/Favoriteunselected.png"
                              alt=""
                              className="d-none"
                            />
                          </div>
                          <div className="text-start mt-3">
                            <div className="eventCreater">
                              <span>
                                <p className="mb-0 fw-bold ellips1Line w-100 text-dark">
                                  {data?.name}
                                </p>
                                <p className="text-dark ellips1Line w-100">
                                  {data?.sports[0]?.sport}
                                </p>
                              </span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center gap-2 mb-2">
                              <span className="ellips1Line w-100 text-dark">
                                {data?.address}
                              </span>
                              <a
                                href={
                                  "https://www.google.com/maps/place/" +
                                  data?.address
                                }
                                target="_blank"
                                className="clubKMS box-shadow"
                              >
                                <img
                                  src="/images/map_pins_icon.png"
                                  alt=""
                                  className="map_pins_icon"
                                />
                                1032.13Km
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </Slider>
              </div>
              <Link className="viewAll theme-color" href="#">
                View All
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venues;
