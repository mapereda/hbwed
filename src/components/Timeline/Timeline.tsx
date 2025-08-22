import React from "react";
import "./Timeline.css";
import { IonIcon } from "@ionic/react";

const Timeline = () => {
  const events = [
    { icon: "bus-outline", title: "Ida", description: "10:30h Autobús desde Valdenuño Fernández con parada en El Casar a las 10:40h. | 11:00h Autobús desde Moncloa, Madrid." },
    { icon: "color-filter-outline", title: "Ceremonia", description: "13:00h Ceremonia en la Finca El Campillo." },
    { icon: "beer-outline", title: "Cocktail", description: "Lllega la hora del vermú." },
    { icon: "pizza-outline", title: "Banquete", description: "Pasamos a los salones para disfrutar de una exquisita comida." },
    { icon: "sparkles-outline", title: "A bailar", description: "Es la hora de darlo todo en la fiesta." },
    { icon: "", title: "Regreso", description: "23:00h Autobús de regreso desde la finca. Todos paran en Madrid." },
  ];

  return (
    <div className="timeline-container">
      <div className="timeline">
        {events.map((event, index) => (
          <div className="timeline-item" key={index}>
            <div className="TimelineDot">
              <IonIcon name={event.icon} />
            </div>
            <div className="timeline-content">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
