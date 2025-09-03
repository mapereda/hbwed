import React from "react";
import "./transporte.css";

const Transporte = () => {

  return (
    <div className="Transporte">
        <p className="texto">
            Habrá autobuses desde Madrid, Valdenuño Fernández y El Casar. Indícanos en la confirmación si quieres plaza para contar contigo.
        </p>

        <div>
            <h5>IDA</h5>
            <p className="texto">
                10:30h Valdenuño Fernández.
                <br />
                10:45h El Casar.
                <br />
                11:45h Cuatro Caminos, Madrid.
                <br />
            </p>

            <h5>VUELTA</h5>
            <p className="texto">
                23:00h Madrid.
                <br />
                23:00h Moncloa - El Casar - Valdenuño Fernández.
                <br />
            </p>

            <h5>TAXIS EL ESCORIAL</h5>
            <p className="texto">Lorem ipsum...</p>
        </div>
    </div>
  );
};

export default Transporte;
