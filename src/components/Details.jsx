const Details = (props) => {
  function hidePopup() {
    document.getElementById(`popup-${props.offer.id}`).style.display = "none";
  }
  const p = props.offer.amount;//amount taked 
  const r = props.offer.rate / 100;
  const n = props.offer.duration;

  //transform dur to months chehAL MN CHEHAR KHAS YKHLAS F 5ANS
  const months = n * 12;

  //calcule rate 
  //lfaida fkola chehar
  // const monthlyRate = r / 100 / 12;


  const totalpaid  = p * Math.pow(1+r,n)

  //monthly pqid
  const mensualite = totalpaid / months
    // (p * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));


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
            Coût Total: ${Math.round(totalpaid).toLocaleString()}
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
