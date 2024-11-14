import React from "react";
import "./mainBanner.scss";
import AppStore from "../../assets/images/app_store.png";
import GoogleStore from "../../assets/images/google_play.png";
import MobileApp from "../../assets/images/mobile_app.png";

const MainBanner = () => {
  return (
    <section className="mainBanner">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="left-wrap">
              <div className="inner-box">
                <h1>A Great App Makes Your Life Better</h1>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
                <h4>Download App Now</h4>
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);">
                    <img src={AppStore} alt="" />
                  </a>
                  <a href="javascript:void(0);">
                    <img src={GoogleStore} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-wrap">
              <img src={MobileApp} alt="" className="mobile" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
