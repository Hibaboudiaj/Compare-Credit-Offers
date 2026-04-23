import { offers } from "../data/offers";

const Dettails = (props) => {
  function hidePopup() {
    document.getElementById(`popup-${props.offer.id}`).style.display = "none";
  }

  // Calculate loan details
  const p = props.offer.amount;
  const r = props.offer.rate;
  const n = props.offer.duration;

  const months = n * 12;
  const monthlyRate = r / 100 / 12;

  const mensualite =
    (p * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));

  const total = mensualite * months;
  const interest = total - p;

  return (
    <>
      <div className="popup" id={`popup-${props.offer.id}`}>
        <div className="details">
          <p className="P">
            Duree: {props.offer.duration}{" "}
            {props.offer.duration > 1 ? "ans" : "an"}
          </p>
          <p className="P">Total month: {months}</p>

          <p className="P">Taux: {props.offer.rate}%</p>
          <p className="P">
            Mensualité: ${Math.round(mensualite).toLocaleString()}
          </p>
          <p className="P">Coût Total: ${Math.round(total).toLocaleString()}</p>
          <p className="P">
            Intérêts: ${Math.round(interest).toLocaleString()}
          </p>
          <button className="hide-btn" onClick={hidePopup}>
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Dettails;
