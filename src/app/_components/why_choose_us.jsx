'use client'
import Slider from "react-slick";

const Why_choose_us = () => {

    const settings = {
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
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
    <section className="WhyChooseUsBg">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 mb-5 text-center">
          <h3 className="sec-title text-white">Why Choose Us</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 mb-4 DesktopViewUs">
          <div className="slick-slider ProgramSlider slick-initialized">
            <div className="slick-list">
              <div
                className="slick-track"
                style={{width:"1296px",opacity:'1',transform:'translate3d(0px, 0px, 0px)'}}

              >
              <Slider {...settings}>
                <div
                  data-index="0"
                  className="slick-slide slick-active slick-current"
                  tabindex="-1"
                  aria-hidden="false"
                  style={{outline:"none",width:"324px"}}
                  
                >
                  <div>
                    <div
                      tabindex="-1"
                      style={{width:"100%",display:"inline-block"}}

                    >
                      <div className="text-center cursor-pointer whyChooseBox">
                        <div className="eventGridFlex">
                          <img
                            src="/images/whychoose_icon1.png"
                            className="img-fluid ChooseUsIcon"
                            alt=""
                          />
                          <div className="text-white mt-4">
                            <h5 className="text-capitalize">
                              Sports venues at fingertips
                            </h5>
                            <small className="ps-3"
                              >Heard anything better than a selection of
                              sports venues that work with your
                              schedule?</small
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="1"
                  className="slick-slide slick-active"
                  tabindex="-1"
                  aria-hidden="false"
                  style={{outline:"none",width:"324px"}}

                >
                  <div>
                    <div
                      tabindex="-1"
                      style={{width:"100%",display:"inline-block"}}
                      
                    >
                      <div className="text-center cursor-pointer whyChooseBox">
                        <div className="eventGridFlex">
                          <img
                            src="/images/whychoose_icon2.png"
                            className="img-fluid ChooseUsIcon"
                            alt=""
                          />
                          <div className="text-white mt-4">
                            <h5 className="text-capitalize">
                              Assertive Coaching camps for persistence.
                            </h5>
                            <small className="ps-3"
                              >It may be difficult to locate quality
                              coaching academies in your area. As a
                              result,</small
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="2"
                  className="slick-slide slick-active"
                  tabindex="-1"
                  aria-hidden="false"
                  style={{outline:"none",width:"324px"}}

                >
                  <div>
                    <div
                      tabindex="-1"
                      style={{width:"100%",display:"inline-block"}}

                    >
                      <div className="text-center cursor-pointer whyChooseBox">
                        <div className="eventGridFlex">
                          <img
                            src="/images/whychoose_icon3.png"
                            className="img-fluid ChooseUsIcon"
                            alt=""
                          />
                          <div className="text-white mt-4">
                            <h5 className="text-capitalize">
                              The GAMEHUNT ACADEMY
                            </h5>
                            <small className="ps-3"
                              >The Gamehunt Academy is a one-stop shop for
                              schools and students seeking sports and life
                              skills.</small
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="3"
                  className="slick-slide slick-active"
                  tabindex="-1"
                  aria-hidden="false"
                  style={{outline:"none",width:"324px"}}

                >
                  <div>
                    <div
                      tabindex="-1"
                      style={{width:"100%",display:"inline-block"}}

                    >
                      <div className="text-center cursor-pointer whyChooseBox">
                        <div className="eventGridFlex">
                          <img
                            src="/images/whychoose_icon4.png"
                            className="img-fluid ChooseUsIcon"
                            alt=""
                          />
                          <div className="text-white mt-4">
                            <h5 className="text-capitalize">
                              Events &amp; Tournaments
                            </h5>
                            <small className="ps-3"
                              >The Gamehunt is d edicated to providing
                              numerous opportunities for our young athletes
                              to develop and showcase their skills at a
                              competitive level.</small
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-12 mobirlViewUs">
          <div className="row">
            <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-3">
              <div className="text-center cursor-pointer whyChooseBox">
                <div className="eventGridFlex">
                  <img
                    src="/images/whychoose_icon1.png"
                    className="img-fluid ChooseUsIcon"
                    alt=""
                  />
                  <div className="text-white mt-4">
                    <h5 className="text-capitalize">
                      Sports venues at fingertips
                    </h5>
                    <small className="ps-3"
                      >Heard anything better than a selection of sports
                      venues that work with your schedule?</small
                    >
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-3">
              <div className="text-center cursor-pointer whyChooseBox">
                <div className="eventGridFlex">
                  <img
                    src="/images/whychoose_icon2.png"
                    className="img-fluid ChooseUsIcon"
                    alt=""
                  />
                  <div className="text-white mt-4">
                    <h5 className="text-capitalize">
                      Assertive Coaching camps for persistence.
                    </h5>
                    <small className="ps-3"
                      >It may be difficult to locate quality coaching
                      academies in your area. As a result,</small
                    >
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-3">
              <div className="text-center cursor-pointer whyChooseBox">
                <div className="eventGridFlex">
                  <img
                    src="/images/whychoose_icon3.png"
                    className="img-fluid ChooseUsIcon"
                    alt=""
                  />
                  <div className="text-white mt-4">
                    <h5 className="text-capitalize">The GAMEHUNT ACADEMY</h5>
                    <small className="ps-3"
                      >The Gamehunt Academy is a one-stop shop for schools
                      and students seeking sports and life skills.</small
                    >
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-3">
              <div className="text-center cursor-pointer whyChooseBox">
                <div className="eventGridFlex">
                  <img
                    src="/images/whychoose_icon4.png"
                    className="img-fluid ChooseUsIcon"
                    alt=""
                  />
                  <div className="text-white mt-4">
                    <h5 className="text-capitalize">
                      Events &amp; Tournaments
                    </h5>
                    <small className="ps-3"
                      >The Gamehunt is dedicated to providing numerous
                      opportunities for our young athletes to develop and
                      showcase their skills at a competitive level.</small
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Why_choose_us
