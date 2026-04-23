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
          duration={offer.duration}
          rate={offer.rate}
          pic={offer.pic}
          id={offer.id}
        />
      ))}
    </div>
  );
};

export default List;
