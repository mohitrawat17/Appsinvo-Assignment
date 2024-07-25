"use client";
import React, { useContext, useState } from "react";
import { DataContext } from "../assets/globalContext";
import Slider from "react-slick";

const Events = () => {
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

  const settings1 = {
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

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <section className="pt-4" id="Offerevents">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 mb-3 text-center">
            <h3 className="sec-title">Offers and Sport Events</h3>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 mb-3 text-center">
            <ul
              className="nav nav-pills mb-3 justify-content-center tabsnew lineAlign"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  class={`nav-link text-capitalize d-grid ${
                    selectedTab ? "" : "active"
                  }`}
                  type="button"
                  id="pills-offer-tab"
                  onClick={() => setSelectedTab(0)}
                >
                  offers
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  class={`nav-link text-capitalize d-grid ${
                    selectedTab ? "active" : ""
                  }`}
                  type="button"
                  id="pills-events-tab"
                  onClick={() => setSelectedTab(1)}
                >
                  events
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                class={`tab-pane fade ${
                  selectedTab === 0 ? "show active" : ""
                }`}
                id="pills-offer"
                role="tabpanel"
                aria-labelledby="pills-offer-tab"
              >
                <div id="dynamicDots" className="position-relative">
                  <div className="slider EventNewsSlider sportSlider">
                    <Slider {...settings}>
                      {data?.offers &&
                        data?.offers.length > 0 &&
                        data?.offers.map((data) => {
                          return (
                            <div key={data?._id}>
                              <div
                                tabindex="-1"
                                style={{
                                  width: "100%",
                                  display: "inline-block",
                                }}
                              >
                                <div className="">
                                  <div className="eventGridFlex">
                                    <img
                                      src={data?.image}
                                      className="img-fluid eventTabImg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </Slider>
                  </div>
                </div>
              </div>
              <div
                class={`tab-pane fade ${
                  selectedTab === 1 ? "show active" : ""
                }`}
                id="pills-events"
                role="tabpanel"
                aria-labelledby="pills-events-tab"
              >
                <div id="dynamicDots" className="position-relative">
                  <div className="slider EventNewsSlider sportSlider">
                    <Slider {...settings1}>
                      <div className="">
                        <div className="AlreadyEvent">
                          <div className="AlreadyEventBox">
                            <img
                              src="/images/dummyImage.png"
                              alt=""
                              className="eventImg"
                            />

                            <a href="#" className="text-dark">
                              <h6 className="mb-0 nameAddressEllip">
                                void acadamy
                              </h6>
                              <p className="mb-0 nameAddressEllip">Kandivali</p>
                            </a>
                            <span className="position-relative Sidetag">
                              <img src="/images/Sidetag.png" alt="" />
                              <span className="SidetagText">
                                Booked User: 11/20
                              </span>
                            </span>
                          </div>
                          <div className="eventCreateDetail">
                            <div className="row px-1 align-items-center">
                              <div className="col-sm-12 col-md-6 col-lg-4 eventCreater vercalLIne">
                                <img
                                  src="/images/employe.png"
                                  className="rounded-circle eventCreaterIcon"
                                  alt=""
                                />
                                <span>
                                  <p className="mb-0">Created by</p>
                                  <p className="mb-0 fw-bold">lav kush</p>
                                </span>
                              </div>
                              <div className="col-sm-12 col-md-6 col-lg-4 vercalLIne">
                                <span>
                                  <p className="mb-0">Available Sports</p>
                                  <p className="mb-0 fw-bold">Cricket</p>
                                </span>
                              </div>
                              <div className="col-sm-12 col-md-6 col-lg-4">
                                <span>
                                  <p className="mb-0">Date & Time</p>
                                  <p className="mb-0 fw-bold">Dec 20, 2022</p>
                                  <p className="mb-0 fw-bold">10:00am - 11:00pm</p>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="paymentJoin">
                            <span>
                              <p className="mb-0">Payment required</p>
                              <p className="mb-0 theme-color fw-bold">
                                <i className="fa fa-inr"></i> 35 /-
                              </p>
                            </span>
                            <button className="joinUsBtn">Join Us</button>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="AlreadyEvent">
                          <div className="AlreadyEventBox">
                            <img
                              src="/images/dummyImage.png"
                              alt=""
                              className="eventImg"
                            />

                            <a href="#" className="text-dark">
                              <h6 className="mb-0 nameAddressEllip">
                                void acadamy
                              </h6>
                              <p className="mb-0 nameAddressEllip">Kandivali</p>
                            </a>
                            <span className="position-relative Sidetag">
                              <img src="/images/Sidetag.png" alt="" />
                              <span className="SidetagText">
                                Booked User: 11/20
                              </span>
                            </span>
                          </div>
                          <div className="eventCreateDetail">
                            <div className="row px-1 align-items-center">
                              <div className="col-sm-12 col-md-6 col-lg-4 eventCreater vercalLIne">
                                <img
                                  src="/images/employe.png"
                                  className="rounded-circle eventCreaterIcon"
                                  alt=""
                                />
                                <span>
                                  <p className="mb-0">Created by</p>
                                  <p className="mb-0 fw-bold">lav kush</p>
                                </span>
                              </div>
                              <div className="col-sm-12 col-md-6 col-lg-4 vercalLIne">
                                <span>
                                  <p className="mb-0">Available Sports</p>
                                  <p className="mb-0 fw-bold">Cricket</p>
                                </span>
                              </div>
                              <div className="col-sm-12 col-md-6 col-lg-4">
                                <span>
                                  <p className="mb-0">Date & Time</p>
                                  <p className="mb-0 fw-bold">Dec 20, 2022</p>
                                  <p className="mb-0 fw-bold">10:00am - 11:00pm</p>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="paymentJoin">
                            <span>
                              <p className="mb-0">Payment required</p>
                              <p className="mb-0 theme-color fw-bold">
                                <i className="fa fa-inr"></i> 35 /-
                              </p>
                            </span>
                            <button className="joinUsBtn">Join Us</button>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="AlreadyEvent">
                          <div className="AlreadyEventBox">
                            <img
                              src="/images/dummyImage.png"
                              alt=""
                              className="eventImg"
                            />

                            <a href="#" className="text-dark">
                              <h6 className="mb-0 nameAddressEllip">
                                void acadamy
                              </h6>
                              <p className="mb-0 nameAddressEllip">Kandivali</p>
                            </a>
                            <span className="position-relative Sidetag">
                              <img src="/images/Sidetag.png" alt="" />
                              <span className="SidetagText">
                                Booked User: 11/20
                              </span>
                            </span>
                          </div>
                          <div className="eventCreateDetail">
                            <div className="row px-1 align-items-center">
                              <div className="col-sm-12 col-md-6 col-lg-4 eventCreater vercalLIne">
                                <img
                                  src="/images/employe.png"
                                  className="rounded-circle eventCreaterIcon"
                                  alt=""
                                />
                                <span>
                                  <p className="mb-0">Created by</p>
                                  <p className="mb-0 fw-bold">lav kush</p>
                                </span>
                              </div>
                              <div className="col-sm-12 col-md-6 col-lg-4 vercalLIne">
                                <span>
                                  <p className="mb-0">Available Sports</p>
                                  <p className="mb-0 fw-bold">Cricket</p>
                                </span>
                              </div>
                              <div className="col-sm-12 col-md-6 col-lg-4">
                                <span>
                                  <p className="mb-0">Date & Time</p>
                                  <p className="mb-0 fw-bold">Dec 20, 2022</p>
                                  <p className="mb-0 fw-bold">10:00am - 11:00pm</p>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="paymentJoin">
                            <span>
                              <p className="mb-0">Payment required</p>
                              <p className="mb-0 theme-color fw-bold">
                                <i className="fa fa-inr"></i> 35 /-
                              </p>
                            </span>
                            <button className="joinUsBtn">Join Us</button>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="AlreadyEvent">
                          <div className="AlreadyEventBox">
                            <img
                              src="/images/dummyImage.png"
                              alt=""
                              className="eventImg"
                            />

                            <a href="#" className="text-dark">
                              <h6 className="mb-0 nameAddressEllip">
                                void acadamy
                              </h6>
                              <p className="mb-0 nameAddressEllip">Kandivali</p>
                            </a>
                            <span className="position-relative Sidetag">
                              <img src="/images/Sidetag.png" alt="" />
                              <span className="SidetagText">
                                Booked User: 11/20
                              </span>
                            </span>
                          </div>
                          <div className="eventCreateDetail">
                            <div className="row px-1 align-items-center">
                              <div className="col-sm-12 col-md-6 col-lg-4 eventCreater vercalLIne">
                                <img
                                  src="/images/employe.png"
                                  className="rounded-circle eventCreaterIcon"
                                  alt=""
                                />
                                <span>
                                  <p className="mb-0">Created by</p>
                                  <p className="mb-0 fw-bold">lav kush</p>
                                </span>
                              </div>
                              <div className="col-sm-12 col-md-6 col-lg-4 vercalLIne">
                                <span>
                                  <p className="mb-0">Available Sports</p>
                                  <p className="mb-0 fw-bold">Cricket</p>
                                </span>
                              </div>
                              <div className="col-sm-12 col-md-6 col-lg-4">
                                <span>
                                  <p className="mb-0">Date & Time</p>
                                  <p className="mb-0 fw-bold">Dec 20, 2022</p>
                                  <p className="mb-0 fw-bold">10:00am - 11:00pm</p>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="paymentJoin">
                            <span>
                              <p className="mb-0">Payment required</p>
                              <p className="mb-0 theme-color fw-bold">
                                <i className="fa fa-inr"></i> 35 /-
                              </p>
                            </span>
                            <button className="joinUsBtn">Join Us</button>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
