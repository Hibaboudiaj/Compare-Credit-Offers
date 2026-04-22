import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <p>{props.bank}</p>
      <p>{props.amount}</p>
      <p>{props.rate}</p>
    </div>
  );
};

export default Card;
