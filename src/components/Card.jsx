import Dettails from "../components/dettails";

const Card = (props) => {
  // create function for click event
  function showPopup() {
    document.getElementById(`popup-${props.id}`).style.display = "block";
  }

  return (
    <div className="card">
      <img src={props.pic} alt="" />

      <div className="offer-card-details">
        <p className="P">Bank : {props.bank}</p>
        <p className="P">Amount : {props.amount}</p>
        <p className="P">Rate : {props.rate}</p>
      </div>
      {/* add click event to shoz details */}
      <button onClick={showPopup} className="button">view more</button>
      <Dettails offer={props} />
    </div>
  );
};

export default Card;
