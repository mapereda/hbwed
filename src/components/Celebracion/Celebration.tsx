import "./celebration.css";

const Celebration: React.FC = () => {
  return (
    <div className="card Celebration">
      <span className="texto">
              La ceremonia tendrá lugar el domingo siete de diciembre de dos mil veinticinco, en la finca El Campillo, a la una de la tarde.
      </span>
      <span className="texto">La recepción de invitados comenzará a las doce y media.</span>

      <div className="card">
        <p className="texto">Dirección: Finca El Campillo, 1.8, M-600, 28200 San Lorenzo de El Escorial, Madrid</p>
        <div className="mapa-placeholder">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.9762178677506!2d-4.095837124461307!3d40.6304064426075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd410c8288c26bc7%3A0x865d3b0dd729ba6f!2sFinca%20El%20Campillo!5e0!3m2!1ses!2ses!4v1755679547065!5m2!1ses!2ses" width="100%" height="100%" style={{border: "0",}} loading="lazy" ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Celebration;
