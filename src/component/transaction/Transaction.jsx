import React from "react";
import "./transaction.scss";
import Group1 from "../../assets/images/Group1.png";
import Group2 from "../../assets/images/Group2.png";
import Group3 from "../../assets/images/Group3.png";

const Transaction = () => {
  return (
    <div className="transaction">
      <h3>Last Transaction</h3>
      <div className="box">
        <table className="table">
          <tr>
            <td>
              <div className="list">
                <img src={Group1} alt="" />
                <div>
                  <h5>Spotify Subscription</h5>
                  <span>25 Jan 2021</span>
                </div>
              </div>
            </td>
            <td>
              <p>Shopping</p>
            </td>
            <td>
              <p>1234 ****</p>
            </td>
            <td>
              <p>Pending</p>
            </td>
            <td>
              <p className="text-red">-$150</p>
            </td>
          </tr>
          <tr>
            <td>
              <div className="list">
                <img src={Group2} alt="" />
                <div>
                  <h5>Mobile Service</h5>
                  <span>25 Jan 2021</span>
                </div>
              </div>
            </td>
            <td>
              <p>Service</p>
            </td>
            <td>
              <p>1234 ****</p>
            </td>
            <td>
              <p>Completed</p>
            </td>
            <td>
              <p className="text-red">-$150</p>
            </td>
          </tr>
          <tr>
            <td>
              <div className="list">
                <img src={Group3} alt="" />
                <div>
                  <h5>Emilly Wilson</h5>
                  <span>25 Jan 2021</span>
                </div>
              </div>
            </td>
            <td>
              <p>Transfer</p>
            </td>
            <td>
              <p>1234 ****</p>
            </td>
            <td>
              <p>Completed</p>
            </td>
            <td>
              <p className="text-green">+$780</p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Transaction;
