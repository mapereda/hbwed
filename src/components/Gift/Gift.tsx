import { useRef, useState } from "react";
import { IonButton, IonIcon, IonToast } from "@ionic/react";
import { clipboardOutline, checkmarkOutline, copyOutline } from "ionicons/icons";
import "./gift.css";


const Gift: React.FC = () => {
  const bankAccountRef = useRef<HTMLDivElement>(null);
  const [showToast, setShowToast] = useState(false);
  const [copied, setCopied] = useState(false); // Para cambiar el botón

  const handleCopy = () => {
    if (bankAccountRef.current) {
      const text = bankAccountRef.current.textContent || "";
      navigator.clipboard.writeText(text).then(() => {
        setShowToast(true);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Volver al estado original
      }).catch((err) => {
        console.error("Error al copiar: ", err);
      });
    }
  };
  
  return (
    <div className="Gift">
      <p className="texto">
        El mejor regalo es que nos acompañéis en este día tan importante para nosotros, pero si queréis tener un detalle os dejamos el siguiente número de cuenta:
      </p>
      <div className="BankContent">
        <span className="Label">Cuenta bancaria</span>
        <div className="BankAccountContent">
          <div ref={bankAccountRef} className="BankAccount">ESXX XXXX XXXX XXXX XXXX XXXX</div>
          <IonButton fill="clear" size="small" onClick={handleCopy} className="CopyButton">
            <IonIcon color="dark"
            icon={copied ? checkmarkOutline : copyOutline}
          />
          </IonButton>
        </div>        
      </div>
      
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

      {/* Ionic Toast */}
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message="¡Número copiado! ¡Sois los mejores!"
        duration={2000}
        color="dark"
      />
    </div>
  );
};

export default Gift;
