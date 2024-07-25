import React from 'react'

const Success_and_achievements = () => {
  return (
    <>
      <section className="mt-4 pt-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-3 col-lg-3 mb-5">
              <h3 className="sec-title Whatour">
                What our customer are saying
                <p className="quetePng">
                  <img src="/images/quete.png" className="mt-3" alt="" />
                </p>
              </h3>
            </div>
            <div
              className="col-sm-12 col-md-9 col-lg-9 mb-0 mb-md-5 pe-0 quetePngMobileFlex"
            >
              <img
                src="/images/quete.png"
                className="img-fluid quetePngMobile"
                alt=""
              />
              <div className="customersayingBg">
                <div
                  className="slick-slider CustomerSlider sportSlider slick-initialized"
                >
                  <div className="slick-list">
                    <div
                      className="slick-track"
                      style={{width:"1080px",opacity:'1',transform:'translate3d(0px, 0px, 0px)'}}
                    >
                      <div
                        data-index="0"
                        className="slick-slide slick-active slick-current"
                        tabindex="-1"
                        aria-hidden="false"
                        style={{outline:"none",width:"360px"}}
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style={{width:"100%",display:"inline-block"}}
                          >
                            <div className="customerSaingBox">
                              <div className="eventGridFlex">
                                <img
                                  src="/images/employe.png"
                                  className="img-fluid coachImgCenetr"
                                  alt=""
                                />
                              </div>
                              <h5 className="text-uppercase mt-1">
                                Arpit Narvekar
                              </h5>
                              <p className="mb-0 mb-md-2">
                                <img
                                  src="/images/quete_red.png"
                                  width="20px"
                                  alt=""
                                />
                              </p>
                              <p>
                                A step in the right direction, a much needed
                                platform with a lot of transparency and great
                                expertise to get our children ready to become
                                the next big Athletes and sports person.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="1"
                        className="slick-slide slick-active"
                        tabindex="-1"
                        aria-hidden="false"
                        style={{outline:"none",width:"360px"}}
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style={{width:"100%",display:"inline-block"}}
                          >
                            <div className="customerSaingBox">
                              <div className="eventGridFlex">
                                <img
                                  src="/images/employe.png"
                                  className="img-fluid coachImgCenetr"
                                  alt=""
                                />
                              </div>
                              <h5 className="text-uppercase mt-1">Sandeep Patil</h5>
                              <p className="mb-0 mb-md-2">
                                <img
                                  src="/images/quete_red.png"
                                  width="20px"
                                  alt=""
                                />
                              </p>
                              <p>
                                There was a need for such a platform that helps
                                my child grow physically and makes him mentally
                                strong.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="2"
                        className="slick-slide slick-active"
                        tabindex="-1"
                        aria-hidden="false"
                        style={{outline:"none",width:"360px"}}
                      >
                        <div>
                          <div
                            tabindex="-1"
                            style={{width:"100%",display:"inline-block"}}
                          >
                            <div className="customerSaingBox">
                              <div className="eventGridFlex">
                                <img
                                  src="/images/employe.png"
                                  className="img-fluid coachImgCenetr"
                                  alt=""
                                />
                              </div>
                              <h5 className="text-uppercase mt-1">Tamrika Tyagi</h5>
                              <p className="mb-0 mb-md-2">
                                <img
                                  src="/images/quete_red.png"
                                  width="20px"
                                  alt=""
                                />
                              </p>
                              <p>
                                Gamehunt Academy has taken away the worry of our
                                child's security when he goes for his training
                                outside school, very reliable and trustworthy.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="CounterBG">
        <div className="container">
          <div className="">
            <div className="counterGrid text-center align-items-center">
              <div className="d-flex gap-3 align-items-center">
                <img src="/images/Countusers.png" alt="" className="" />
                <div className="gapFlex">
                  <h2 className="mb-0 fw-bold"><span>2500</span></h2>
                  <h6><span className="numOfCounter">Users</span></h6>
                </div>
              </div>
              <div className="d-flex gap-3 align-items-center">
                <img src="/images/Countvenues.png" alt="" className="" />
                <div className="gapFlex">
                  <h2 className="mb-0 fw-bold"><span>489</span></h2>
                  <h6><span className="numOfCounter">Venues</span></h6>
                </div>
              </div>
              <div className="d-flex gap-3 align-items-center">
                <img src="/images/Countcoaches.png" alt="" className="" />
                <div className="gapFlex">
                  <h2 className="mb-0 fw-bold"><span>412</span></h2>
                  <h6><span className="numOfCounter">Coaches </span></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Success_and_achievements
