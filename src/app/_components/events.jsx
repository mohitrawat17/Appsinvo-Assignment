import React from 'react'

const Events = () => {
  return (
    <section class="pt-4" id="Offerevents">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12 mb-3 text-center">
          <h3 class="sec-title">Offers and Sport Events</h3>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-12 mb-3 text-center">
          <ul
            class="nav nav-pills mb-3 justify-content-center tabsnew lineAlign"
            id="pills-tab"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active text-capitalize d-grid"
                type="button"
                id="pills-offer-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-offer"
              >
                offers
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link text-capitalize d-grid"
                type="button"
                id="pills-events-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-events"
              >
                events
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-offer"
              role="tabpanel"
              aria-labelledby="pills-offer-tab"
            >
              <div id="dynamicDots" class="position-relative">
                <div class="slider EventNewsSlider sportSlider">
                  <div>
                    <div
                      tabindex="-1"
                      style="width: 100%; display: inline-block"
                    >
                      <div class="">
                        <div class="eventGridFlex">
                          <img
                            src="assets/img/offerImage1.png"
                            class="img-fluid eventTabImg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      tabindex="-1"
                      style="width: 100%; display: inline-block"
                    >
                      <div class="">
                        <div class="eventGridFlex">
                          <img
                            src="assets/img/offerImage2.png"
                            class="img-fluid eventTabImg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      tabindex="-1"
                      style="width: 100%; display: inline-block"
                    >
                      <div class="">
                        <div class="eventGridFlex">
                          <img
                            src="assets/img/offerImage3.png"
                            class="img-fluid eventTabImg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      tabindex="-1"
                      style="width: 100%; display: inline-block"
                    >
                      <div class="">
                        <div class="eventGridFlex">
                          <img
                            src="assets/img/offerImage1.png"
                            class="img-fluid eventTabImg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      tabindex="-1"
                      style="width: 100%; display: inline-block"
                    >
                      <div class="">
                        <div class="eventGridFlex">
                          <img
                            src="assets/img/offerImage2.png"
                            class="img-fluid eventTabImg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      tabindex="-1"
                      style="width: 100%; display: inline-block"
                    >
                      <div class="">
                        <div class="eventGridFlex">
                          <img
                            src="assets/img/offerImage3.png"
                            class="img-fluid eventTabImg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-events"
              role="tabpanel"
              aria-labelledby="pills-events-tab"
            >
              <div id="dynamicDots" class="position-relative">
                <div class="slider EventNewsSlider sportSlider">
                  <div class="">
                    <div class="AlreadyEvent">
                      <div class="AlreadyEventBox">
                        <img
                          src="assets/img/dummyImage.png"
                          alt=""
                          class="eventImg"
                        />

                        <a href="#" class="text-dark">
                          <h6 class="mb-0 nameAddressEllip">
                            void acadamy
                          </h6>
                          <p class="mb-0 nameAddressEllip">Kandivali</p>
                        </a>
                        <span class="position-relative Sidetag">
                          <img src="assets/img/Sidetag.png" alt="" />
                          <span class="SidetagText">
                            Booked User: 11/20
                          </span>
                        </span>
                      </div>
                      <div class="eventCreateDetail">
                        <div class="row px-1 align-items-center">
                          <div
                            class="col-sm-12 col-md-6 col-lg-4 eventCreater vercalLIne"
                          >
                            <img
                              src="assets/img/employe.png"
                              class="rounded-circle eventCreaterIcon"
                              alt=""
                            />
                            <span>
                              <p class="mb-0">Created by</p>
                              <p class="mb-0 fw-bold">lav kush</p>
                            </span>
                          </div>
                          <div
                            class="col-sm-12 col-md-6 col-lg-4 vercalLIne"
                          >
                            <span>
                              <p class="mb-0">Available Sports</p>
                              <p class="mb-0 fw-bold">Cricket</p>
                            </span>
                          </div>
                          <div class="col-sm-12 col-md-6 col-lg-4">
                            <span>
                              <p class="mb-0">Date & Time</p>
                              <p class="mb-0 fw-bold">Dec 20, 2022</p>
                              <p class="mb-0 fw-bold">10:00am - 11:00pm</p>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="paymentJoin">
                        <span>
                          <p class="mb-0">Payment required</p>
                          <p class="mb-0 theme-color fw-bold">
                            <i class="fa fa-inr"></i> 35 /-
                          </p>
                        </span>
                        <button class="joinUsBtn">Join Us</button>
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <div class="AlreadyEvent">
                      <div class="AlreadyEventBox">
                        <img
                          src="assets/img/dummyImage.png"
                          alt=""
                          class="eventImg"
                        />

                        <a href="#" class="text-dark">
                          <h6 class="mb-0 nameAddressEllip">
                            void acadamy
                          </h6>
                          <p class="mb-0 nameAddressEllip">Kandivali</p>
                        </a>
                        <span class="position-relative Sidetag">
                          <img src="assets/img/Sidetag.png" alt="" />
                          <span class="SidetagText">
                            Booked User: 11/20
                          </span>
                        </span>
                      </div>
                      <div class="eventCreateDetail">
                        <div class="row px-1 align-items-center">
                          <div
                            class="col-sm-12 col-md-6 col-lg-4 eventCreater vercalLIne"
                          >
                            <img
                              src="assets/img/employe.png"
                              class="rounded-circle eventCreaterIcon"
                              alt=""
                            />
                            <span>
                              <p class="mb-0">Created by</p>
                              <p class="mb-0 fw-bold">lav kush</p>
                            </span>
                          </div>
                          <div
                            class="col-sm-12 col-md-6 col-lg-4 vercalLIne"
                          >
                            <span>
                              <p class="mb-0">Available Sports</p>
                              <p class="mb-0 fw-bold">Cricket</p>
                            </span>
                          </div>
                          <div class="col-sm-12 col-md-6 col-lg-4">
                            <span>
                              <p class="mb-0">Date & Time</p>
                              <p class="mb-0 fw-bold">Dec 20, 2022</p>
                              <p class="mb-0 fw-bold">10:00am - 11:00pm</p>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="paymentJoin">
                        <span>
                          <p class="mb-0">Payment required</p>
                          <p class="mb-0 theme-color fw-bold">
                            <i class="fa fa-inr"></i> 35 /-
                          </p>
                        </span>
                        <button class="joinUsBtn">Join Us</button>
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <div class="AlreadyEvent">
                      <div class="AlreadyEventBox">
                        <img
                          src="assets/img/dummyImage.png"
                          alt=""
                          class="eventImg"
                        />

                        <a href="#" class="text-dark">
                          <h6 class="mb-0 nameAddressEllip">
                            void acadamy
                          </h6>
                          <p class="mb-0 nameAddressEllip">Kandivali</p>
                        </a>
                        <span class="position-relative Sidetag">
                          <img src="assets/img/Sidetag.png" alt="" />
                          <span class="SidetagText">
                            Booked User: 11/20
                          </span>
                        </span>
                      </div>
                      <div class="eventCreateDetail">
                        <div class="row px-1 align-items-center">
                          <div
                            class="col-sm-12 col-md-6 col-lg-4 eventCreater vercalLIne"
                          >
                            <img
                              src="assets/img/employe.png"
                              class="rounded-circle eventCreaterIcon"
                              alt=""
                            />
                            <span>
                              <p class="mb-0">Created by</p>
                              <p class="mb-0 fw-bold">lav kush</p>
                            </span>
                          </div>
                          <div
                            class="col-sm-12 col-md-6 col-lg-4 vercalLIne"
                          >
                            <span>
                              <p class="mb-0">Available Sports</p>
                              <p class="mb-0 fw-bold">Cricket</p>
                            </span>
                          </div>
                          <div class="col-sm-12 col-md-6 col-lg-4">
                            <span>
                              <p class="mb-0">Date & Time</p>
                              <p class="mb-0 fw-bold">Dec 20, 2022</p>
                              <p class="mb-0 fw-bold">10:00am - 11:00pm</p>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="paymentJoin">
                        <span>
                          <p class="mb-0">Payment required</p>
                          <p class="mb-0 theme-color fw-bold">
                            <i class="fa fa-inr"></i> 35 /-
                          </p>
                        </span>
                        <button class="joinUsBtn">Join Us</button>
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <div class="AlreadyEvent">
                      <div class="AlreadyEventBox">
                        <img
                          src="assets/img/dummyImage.png"
                          alt=""
                          class="eventImg"
                        />

                        <a href="#" class="text-dark">
                          <h6 class="mb-0 nameAddressEllip">
                            void acadamy
                          </h6>
                          <p class="mb-0 nameAddressEllip">Kandivali</p>
                        </a>
                        <span class="position-relative Sidetag">
                          <img src="assets/img/Sidetag.png" alt="" />
                          <span class="SidetagText">
                            Booked User: 11/20
                          </span>
                        </span>
                      </div>
                      <div class="eventCreateDetail">
                        <div class="row px-1 align-items-center">
                          <div
                            class="col-sm-12 col-md-6 col-lg-4 eventCreater vercalLIne"
                          >
                            <img
                              src="assets/img/employe.png"
                              class="rounded-circle eventCreaterIcon"
                              alt=""
                            />
                            <span>
                              <p class="mb-0">Created by</p>
                              <p class="mb-0 fw-bold">lav kush</p>
                            </span>
                          </div>
                          <div
                            class="col-sm-12 col-md-6 col-lg-4 vercalLIne"
                          >
                            <span>
                              <p class="mb-0">Available Sports</p>
                              <p class="mb-0 fw-bold">Cricket</p>
                            </span>
                          </div>
                          <div class="col-sm-12 col-md-6 col-lg-4">
                            <span>
                              <p class="mb-0">Date & Time</p>
                              <p class="mb-0 fw-bold">Dec 20, 2022</p>
                              <p class="mb-0 fw-bold">10:00am - 11:00pm</p>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="paymentJoin">
                        <span>
                          <p class="mb-0">Payment required</p>
                          <p class="mb-0 theme-color fw-bold">
                            <i class="fa fa-inr"></i> 35 /-
                          </p>
                        </span>
                        <button class="joinUsBtn">Join Us</button>
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
  )
}

export default Events
