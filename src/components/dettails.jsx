import { offers } from "../data/offers";

const Dettails = (props) => {
  function hidePopup() {
    document.getElementById(`popup-${props.offer.id}`).style.display = "none";
  }

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
          <p className="PDettails">
            Duree: {props.offer.duration}{" "}
            {props.offer.duration > 1}
          </p>
          <p className="PDettails">Total month: {months}</p>

          <p className="PDettails">Taux: {props.offer.rate}%</p>
          <p className="PDettails">
            Mensualité: ${Math.round(mensualite).toLocaleString()}
          </p>
          <p className="PDettails">Coût Total: ${Math.round(total).toLocaleString()}</p>
          <p className="PDettails">
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
