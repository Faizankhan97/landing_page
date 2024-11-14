import React, { useState } from "react";
import "./detail.scss";
import data from "../../../public/bd";

const Detail = () => {
  const [isdata, setIsData] = useState(data);
  return (
    <div className="details">
      <div className="row">
        {isdata.map((item) => (
          <div key={item.id} className="col-3">
            <div className="box">
              <h5>{item?.name}</h5>
              <h3>{item?.value}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
