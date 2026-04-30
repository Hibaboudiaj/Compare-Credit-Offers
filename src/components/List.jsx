import React from "react";
import { offers } from "../data/offers";
import Card from "./Card";

const List = () => {
  return (
    <div className="cards-list">
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer} />
      ))}
    </div>
  );
};

export default List;

//kaydoz 3la kola offer f array o kaysayb card lkol offer