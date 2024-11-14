import React from "react";
import "./infoDetail.scss";
import Mail from "../../assets/images/mail.svg";
import Phone from "../../assets/images/phone.svg";

const InfoDetail = () => {
  return (
    <section className="info-detail">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="inner-box">
              <div className="row">
                <div className="col-md-6">
                  <div className="info info-border">
                    <span>
                      <img src={Mail} alt="" />
                    </span>
                    <a href="mailto:info@youremail.com">info@youremail.com</a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info">
                    <span>
                      <img src={Phone} alt="" />
                    </span>
                    <a href="tel:8803216559985">+880 321 655 9985</a>
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

export default InfoDetail;
