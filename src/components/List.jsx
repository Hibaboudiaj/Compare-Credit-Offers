import React from "react";
import { offers } from "../data/offers";
import Card from "./Card";
const List = () => {
  return (
    <div className="cards-list">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          bank={offer.bank}
          amount={offer.amount}
          rate={offer.rate}
        />
      ))}
    </div>
  );
};

export default List;
