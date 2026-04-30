const Details = (props) => {
  function hidePopup() {
    document.getElementById(`popup-${props.offer.id}`).style.display = "none";
  }

  const p = props.offer.amount; // amount taken
  const r = props.offer.rate / 100;
  const n = props.offer.duration;

  // transform duration to months
  const months = n * 12;

  // monthly rate
  const monthlyRate = r / 12;

  // loan calculation (mensualité)
  const mensualite =
    (p * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));

  const total = mensualite * months;

  const interest = total - p;

  return (
    <>
      <div className="popup" id={`popup-${props.offer.id}`}>
        <div className="details">
          <p className="titleDetailes">{props.offer.bank}</p>
          <hr />

          <p className="PDettails">
            Duree: {props.offer.duration}{" "}
            {props.offer.duration > 1 ? "ans" : "an"}
          </p>

          <p className="PDettails">Total month: {months}</p>

          <p className="PDettails">Taux: {props.offer.rate}%</p>

          <p className="PDettails">
            Mensualité: ${Math.round(mensualite).toLocaleString()}
          </p>

          <p className="PDettails">
            Coût Total: ${Math.round(total).toLocaleString()}
          </p>

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

export default Details;