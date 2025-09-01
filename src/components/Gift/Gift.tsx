import "./gift.css";

const Gift: React.FC = () => {
  return (
    <div className="card Gift">
      <p className="texto">
        El mejor regalo es que nos acompañéis en este día tan importante para nosotros, pero si queréis tener un detalle os dejamos el siguiente número de cuenta:
      </p>
      <div className="BankAccount">ESXX XXXX XXXX XXXX XXXX XXXX</div>
      <div className="PhonesContent">
        <div className="Phone">
          <span className="PhoneName">Daniel</span>
          <span className="PhoneNumber">675 324 397</span>
        </div>
        <div className="Phone">
          <span className="PhoneName">Elena</span>
          <span className="PhoneNumber">677 190 353</span>
        </div>
      </div>
    </div>
  );
};

export default Gift;
