import React from "react";
import "./profilecard.css";

const Profilecard = ({ image, name, designation, jobdesc, onSeeMoreClick }) => {
  return (
    <div className="main-card">
      <div className="card">
        <div className="my-img">
          <img className="card-pic" src={image} alt={name} />
        </div>
        <div className="card-body">
          <h5 className="card-text">{designation}</h5>
          <h2 className="card-title">{name}</h2>
          <p className="card-content">{jobdesc}</p>
          <button className="seemorebtn" onClick={onSeeMoreClick}>
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profilecard;
