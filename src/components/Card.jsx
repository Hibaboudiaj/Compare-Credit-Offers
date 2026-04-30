import Details from "./Details";
import recomandedBadg from "../assets/badge.png";

const Card = ({
  offer: { id, bank, rate, amount, duration, pic, isRecommended },
}) => {
  function showPopup() {
    document.getElementById(`popup-${id}`).style.display = "block";
  }
  return (
    <div className="card">
      {isRecommended === true ? (
        <img id="badgeImg" src={recomandedBadg} alt="u" />
      ) : null}
      <img src={pic} alt="" className="card-image" />

      <div className="offer-card-details">
        <p className="P">Bank : {bank}</p>
        <p className="P">Amount : {amount}</p>
        <p className="P">Duration : {duration}</p>
        <p className="P">Rate : {rate}</p>
      </div>
      
      <button onClick={showPopup} className="button">
        view more
      </button>
      <Details
  offer={{ id, bank, rate, amount, duration, pic, isRecommended }}
/>
    </div>
  );
};

export default Card;
