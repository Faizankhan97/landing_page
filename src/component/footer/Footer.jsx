import React from "react";
import "./footer.scss";
import Facbook from "../../assets/images/facebook.svg";
import Instagram from "../../assets/images/instagram.svg";
import Twitter from "../../assets/images/twitter.svg";
import Youtube from "../../assets/images/youtube.svg";
import Arrow from "../../assets/images/form-arrow.svg";
import CopyRight from "../../assets/images/copyright.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>Logo</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              </p>
              <ul className="social_link">
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
            <div className="col-md-4">
              <h5>quick link</h5>
              <ul className="link">
                <li>
                  <a href="javascript:void(0);">About</a>
                </li>
                <li>
                  <a href="javascript:void(0);">Features</a>
                </li>
                <li>
                  <a href="javascript:void(0);">Screenshot</a>
                </li>
                <li>
                  <a href="javascript:void(0);">Blog</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>news letter</h5>
              <p>Subscribe our newsletter to get our latest update & news</p>
              <form>
                <input type="text" placeholder="Your email address" />
                <button type="submit">
                  <img src={Arrow} alt="" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>
                  <img src={CopyRight} alt="" />
                  Copyright 2021 .Ojjomedia. All Right Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
