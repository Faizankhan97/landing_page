import React from "react";
import Mail from "../../assets/images/mail.svg";
import Phone from "../../assets/images/phone.svg";
import Facbook from "../../assets/images/facebook.svg";
import Instagram from "../../assets/images/instagram.svg";
import Twitter from "../../assets/images/twitter.svg";
import Youtube from "../../assets/images/youtube.svg";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import "./header.scss";

const Header = () => {
  let navigate = useNavigate();
  return (
    <section className="navbar-wrap">
      <div className="top-header d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <a href="mailto:Info@youremail.com">
                <img src={Mail} alt="" /> Info@youremail.com
              </a>
              <a href="tel:4805550103">
                <img src={Phone} alt="" /> (480) 555-0103
              </a>
            </div>
            <div className="col-md-4">
              <ul>
                <li>
                  <a href="javascript:void(0);">
                    <img src={Facbook} />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <img src={Instagram} />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <img src={Twitter} />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <img src={Youtube} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="" />
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item d-block d-md-none">
                <a className="nav-link" href="#">
                  Screenshot
                </a>
              </li>
              <li className="nav-item d-block d-md-none">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right d-none d-lg-flex">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Screenshot
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <button
            className="dashboard"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Dashboard
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Header;
