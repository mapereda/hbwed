import { IonButton } from '@ionic/react';
import "./hotelButton.css";

const HotelButton: React.FC = () => {
  const handleOpenPdf = () => {
    const pdfUrl = 'https://drive.google.com/uc?export=view&id=1s1CUEMb1sRVB_tkg4yoQMCZOos08mQe1';
    window.open(pdfUrl, '_blank');
  };

  return (
    <IonButton className='HotelButton' onClick={handleOpenPdf} expand="block" color="secondary">
      Ver alojamientos
    </IonButton>
  );
};

export default HotelButton;
