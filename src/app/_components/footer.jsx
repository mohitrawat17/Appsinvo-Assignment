import React from 'react'

const Footer = () => {
  return (
    <footer className="footer position-relative">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="widget">
            <h3>Useful Links</h3>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <ul className="footer-li">
                  <li><a href="/">home</a></li>
                  <li><a href="/faq">faq</a></li>
                  <li><a href="/about-us">about us</a></li>
                  <li><a href="/privacy-policy">privacy policy</a></li>
                  <li><a href="/contact-us">contact us</a></li>
                  <li>
                    <a href="/terms-conditions">terms &amp; conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="widget getAppFla">
            <h3>Get Mobile App</h3>
            <p>
              <img
                src="/images/Googleplay.png"
                alt=""
                className="mt-2 me-2 appIconImg"
              /><img
                src="/images/Appstore.png"
                alt=""
                className="mt-2 appIconImg"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-sm-12 col-md-6 col-lg-6 mb-2 text-center text-md-start fw-bold"
          >
            © GameHunt 2022. All rights reserved
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
            <div
              className="linkSocial d-md-flex d-grid align-items-center justify-content-center justify-content-md-end gap-2"
            >
              <span>Follow Us:</span>
              <ul className="Social-Links">
                <li>
                  <a
                    href="https://www.facebook.com/gamehuntofficial"
                    target="_blank"
                    ><img
                      src="/images/facebook.png"
                      className="img-fluid"
                      alt=""
                  /></a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/gamehunt_india"
                    target="_blank"
                    ><img
                      src="/images/Twitter.png"
                      className="img-fluid"
                      alt=""
                  /></a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/gamehuntofficial"
                    target="_blank"
                    ><img
                      src="/images/linkedin.png"
                      className="img-fluid"
                      alt=""
                  /></a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/gamehuntofficial/"
                    target="_blank"
                    ><img
                      src="/images/Instagram.png"
                      className="img-fluid"
                      alt=""
                  /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
