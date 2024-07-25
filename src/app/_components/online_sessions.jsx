'use client'
import React, { useContext } from "react";
import { DataContext } from "../assets/globalContext";
import Slider from "react-slick";

const Online_sessions = () => {
  const { data } = useContext(DataContext);

  const settings = {
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
    <section className="mt-4 pt-4">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 mb-2 mb-md-5 text-center">
            <h3 className="sec-title">Online Session</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 mb-4">
            <div className="slick-slider EventNewsSlider sportSlider slick-initialized">
              <div className="slick-list">
                <div
                  className="slick-track"
                style={{width:"1296",opacity:'1',transform:'translate3d(0px, 0px, 0px)'}}

                >
                  <Slider {...settings}>
                    {data?.onlineSession &&
                      data?.onlineSession.length > 0 &&
                      data?.onlineSession.map((data) => {
                        return (
                          <div
                          key={data?._id}
                            data-index="0"
                            className="slick-slide slick-active slick-current"
                            tabindex="-1"
                            aria-hidden="false"
                            style={{outline:"none",width:"432px"}}

                          >
                            <div>
                              <div
                                tabindex="-1"
                                style={{width:"100%",display:"inline-block"}}

                              >
                                <a
                                  href={data?.link}
                                  target="_blank"
                                  className="text-dark"
                                >
                                  <div className="">
                                    <div className="eventGridFlex position-relative">
                                      <iframe
                                        src={data?.link}
                                        title="Use this three-letter word to Stop Trash-Talking to yourself! - Coach Amreen"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen=""
                                      ></iframe>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Online_sessions;
