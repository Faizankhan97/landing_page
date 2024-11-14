import React, { useState } from "react";
import "./card.scss";
import ClipCard from "../../assets/images/chip_card.png";
import Visa from "../../assets/images/visa_logo.png";

const Card = () => {
  return (
    <div className="cards">
      <h3>My Card</h3>
      <div className="box">
        <img src={ClipCard} alt="" className="chip" />
        <div className="row">
          <div className="col-12">
            <h5>Balance</h5>
            <p>$5,756</p>
          </div>
          <div className="col-6">
            <h6>CARD HOLDER</h6>
            <span>Eddy Cusuma</span>
          </div>
          <div className="col-6">
            <h6>VALID THRU</h6>
            <span>12/22</span>
          </div>
          <div className="col-12">
            <div className="box-blue">
              <h4>3778 **** **** 1234</h4>
              <img src={Visa} alt="" className="visa" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
