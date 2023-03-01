import React from 'react';
import "./YuklashCard.css"
const YuklashCard = (props) => {
  return (
    <div>
      <div className="YCard d-md-flex justify-content-around">
        <div className="Icon">
            {props.icon}
        </div>
        <div className="YText">
            <p>{props.title}</p>
        </div>
      </div>
    </div>
  );
}

export default YuklashCard;
