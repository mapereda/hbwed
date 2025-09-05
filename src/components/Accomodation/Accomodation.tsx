import HotelButton from "../HotelButton/HotelButton";
import "./accomodation.css";

const Accomodation: React.FC = () => {
  return (
    <div className="Accomodation">
        <p>Si quieres alojarte en El Escorial, te dejamos estas sugerencias.</p>
        <HotelButton/>
    </div>
  );
};

export default Accomodation;