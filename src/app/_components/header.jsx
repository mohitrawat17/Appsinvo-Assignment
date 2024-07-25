"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const bannerImages = [
    "/images/UserHomeBanner.png",
    "/images/UserHomeBanner2.png",
  ];

  const [imgIndex, setImgIndex] = useState(0);

  const handleNavigation = (direction) => {
    if (direction) {
      setImgIndex((prev) => (prev + 1) % bannerImages.length);
    } else {
      // PREV
      if (imgIndex === 0) {
        setImgIndex(bannerImages.length - 1);
      } else {
        setImgIndex((prev) => (prev -= 1));
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => handleNavigation(true), 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bgImageset" id="home">
      <nav className="navbar navbar-expand-lg navbar-dark undefined" id="mainNav">
        <div className="container position-relative">
          <button className="navbar-toggler" type="button">
            <i className="fa fa-bars"></i>
          </button>
          <Link className="navbar-brand" href="/">
            <img src="/images/logo.png" alt="Game Hunt" title="Game Hunt" />
          </Link>
          <div className="nav-item get-in-touch loginBtnMobileBlock">
            <span
              className="nav-link login-b cursor-pointer"
              data-bs-toggle="modal"
              data-bs-target="#LoginModal"
            >
              <img src="/images/userLogin.png" alt="" />
              <img src="/images/userLogin.png" alt="" /> Login | Signup
            </span>
          </div>
          <div className="collapse navbar-collapse homePAgeMenu">
            <form className="createEventForm nav-link locationFormDesk">
              <div className="position-relative">
                <div className="">
                  <input
                    placeholder="Current Location"
                    className="form-control CurrentLocation"
                    name="location"
                    defaultValue="Agra, Uttar Pradesh"
                  />
                </div>
                <img
                  src="/images/address.png"
                  className="input-img loactun"
                  alt=""
                />
                <img
                  src="/images/my_location_regular_icon.png"
                  className="input-img loactunRight"
                  alt=""
                />
              </div>
            </form>
            <ul className="navbar-nav py-4 py-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  gamehunt academy
                </a>
              </li>
              <li
                className="nav-item profile-drop cursor-pointer position-relative"
                data-bs-toggle="modal"
                data-bs-target="#PartnerModal"
              >
                <span className="nav-link">partners</span>
              </li>
              <li className="nav-item get-in-touch loginBtnDstBlock">
                <span
                  className="nav-link login-b cursor-pointer"
                  data-bs-toggle="modal"
                  data-bs-target="#LoginModal"
                >
                  <img src="/images/userLogin.png" alt="" />
                  <img src="/images/userLogin.png" alt="" /> Login | Signup
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <form className="createEventForm nav-link locationFormMobile">
        <div className="position-relative">
          <div className="">
            <input
              placeholder="Current Location"
              className="form-control CurrentLocation pac-target-input"
              name="location"
              value="Agra, Uttar Pradesh"
              autocomplete="off"
            />
          </div>
          <img src="/images/address.png" className="input-img loactun" alt="" />
          <img
            src="/images/my_location_regular_icon.png"
            className="input-img loactunRight"
            alt=""
          />
        </div>
      </form>
      <div className="d-none">
        <i className="fa fa-question-circle-o" aria-hidden="true"></i> Help
      </div>
      <header>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            {bannerImages.map((data, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                class={imgIndex === index ? "active" : ""}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={bannerImages[imgIndex]}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            onClick={() => handleNavigation(0)}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            onClick={() => handleNavigation(1)}
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
