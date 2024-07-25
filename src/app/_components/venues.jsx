"use client";
import React, { useContext } from "react";
import Sports_data from "./sports_data";
import Link from "next/link";
import { DataContext } from "../assets/globalContext";
import Slider from "react-slick";

const Venues = () => {
  const { data } = useContext(DataContext);

  console.log(data?.coachesData);

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
        breakpoint: 768, // adjust the breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section class="mt-4 pt-4" id="ourprograms">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12 mb-3 text-center">
            <h3 class="sec-title">Venues Near Me</h3>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-12 mb-3 position-relative">
            <Sports_data />
            <div class="tab-content" id="pills-tabContent">
              <div class="slider programIMages sportSlider">
                <Slider {...settings}>
                  {data?.venueData &&
                    data?.venueData.length > 0 &&
                    data?.venueData.map((data) => {
                      return (
                        <div
                          key={data?._id}
                          class="bg-white p-2 text-capitalize programs-colles vanuesNearMeBox"
                        >
                          <div class="position-relative">
                            <Link class="text-dark" href="#">
                              <img
                                src={data?.image[0]?.image}
                                class="img-fluid tabImage"
                                alt=""
                              />
                            </Link>
                            <div class="venueBoxIcons">
                              <span class="votesRatingBg">
                                {parseInt(data?.rating)?.toFixed(0)}
                                {/* <img
                                      src="/images/star.png"
                                      alt=""
                                      class="start"
                                    /> */}
                              </span>
                              {data?.review} votes{" "}
                            </div>
                            <img
                              src="/images/Favoriteunselected.png"
                              alt=""
                              class="d-none"
                            />
                          </div>
                          <div class="text-start mt-3">
                            <div class="eventCreater">
                              <span>
                                <p class="mb-0 fw-bold ellips1Line w-100 text-dark">
                                  {data?.name}
                                </p>
                                <p class="text-dark ellips1Line w-100">
                                  {data?.sports[0]?.sport}
                                </p>
                              </span>
                            </div>
                            <div class="d-flex justify-content-between align-items-center gap-2 mb-2">
                              <span class="ellips1Line w-100 text-dark">
                                {data?.address}
                              </span>
                              <a
                                href={
                                  "https://www.google.com/maps/place/" +
                                  data?.address
                                }
                                target="_blank"
                                class="clubKMS box-shadow"
                              >
                                <img
                                  src="/images/map_pins_icon.png"
                                  alt=""
                                  class="map_pins_icon"
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
              <Link class="viewAll theme-color" href="#">
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
