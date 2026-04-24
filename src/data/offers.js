import cih from "../assets/cih-bank-logo-png_seeklogo-271012.png";
import bankOfAfrica from "../assets/Bank_of_Africa_Logo.png";
import awb from "../assets/Logo_AWB.svg.png";
import upez from "../assets/upezHON0_400x400.png";

export const offers = [
  {
    id: 1,
    bank: "Cih Bank",
    rate: 4.5,
    amount: 10000,
    duration: 1,
    pic: cih,
    isRecommended: false,
  },
  {
    id: 2,
    bank: "Banc Of Africa",
    rate: 5.3,
    amount: 20000,
    duration: 1,
    pic: bankOfAfrica,
    isRecommended: false,
  },
  {
    id: 3,
    bank: "Attijari Wafa Bank",
    rate: 2.4,
    amount: 50000,
    duration: 4,
    pic: awb,
    isRecommended: true,
  },
  {
    id: 4,
    bank: "Bank Al Magherib",
    rate: 3.7,
    amount: 70000,
    duration: 6,
    pic: upez,
    isRecommended: false,
  },
];
