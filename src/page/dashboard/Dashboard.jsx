import React from "react";
import "./dashboard.scss";
import Logo from "../../assets/images/Logo.png";
import Transfer from "../../assets/images/transfer.png";
import Account from "../../assets/images/user.png";
import EconomicInvestment from "../../assets/images/economic-investment.png";
import Home from "../../assets/images/home.png";
import CreditCard from "../../assets/images/credit-card.png";
import Loan from "../../assets/images/loan.png";
import Service from "../../assets/images/service.png";
import Econometrics from "../../assets/images/econometrics.png";
import Settings from "../../assets/images/settings.png";
import Profile from "../../assets/images/pexels-christina.png";
import Dropdown from "react-bootstrap/Dropdown";
import Detail from "../../component/detail/Detail";
import Transaction from "../../component/transaction/Transaction";
import Card from "../../component/card/Card";

const Dashboard = () => {
  return (
    <div className="mains">
      <div className="left-wrap">
        <a href="javascript:void(0);" className="logo">
          <img src={Logo} alt="" />
        </a>
        <ul className="link">
          <li>
            <a href="javascript:void(0);">
              <img src={Home} alt="" /> Dashboard
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <img src={Transfer} alt="" />
              Transactions
            </a>
          </li>
          <li className="active">
            <a href="javascript:void(0);">
              <img src={Account} alt="" />
              Accounts
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <img src={EconomicInvestment} alt="" />
              Investments
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <img src={CreditCard} alt="" />
              Credit Cards
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <img src={Loan} alt="" />
              Loans
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <img src={Service} alt="" />
              Services
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <img src={Econometrics} alt="" />
              My Privileges
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <img src={Settings} alt="" />
              Setting
            </a>
          </li>
        </ul>
      </div>
      <div className="right-wrap">
        <header>
          <div className="row align-items-center">
            <div className="col-8">
              <h2>Accounts</h2>
            </div>
            <div className="col-4">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  <img src={Profile} alt="" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </header>
        <section className="bottom-wrap">
          <div className="conatiner">
            <div className="row">
              <div className="col-12">
                <Detail />
              </div>
              <div className="col-8">
                <Transaction />
              </div>
              <div className="col-4">
                <Card />
              </div>
              <div className="col-8">{/* <CreditOverview /> */}</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
