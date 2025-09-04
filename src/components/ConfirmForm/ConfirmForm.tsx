import React, { useState } from "react";
import { IonInput, IonButton, IonItem, IonLabel, IonSelect, IonSelectOption, IonRadioGroup, IonRadio, IonTextarea, IonToast, IonLoading } from "@ionic/react";
import emailjs from "emailjs-com";
import "./confirmForm.css";

const ConfirmForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    companionName: "",
    allergy: "",
    usaTransporte: "",
    bus: ""
  });

  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const busOptions = [
    { value: "madrid", label: "Cuatro Caminos, Madrid" },
    { value: "valdenuno", label: "Valdenuño Fernández" },
    { value: "el-casar", label: "El Casar" },
  ];

  const handleChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_t5uztoq",
        "template_it54idq",
        formData,
        "ti8wyB4s-TJNWLkkx"
      )
      .then(
        (result) => {
          setLoading(false);
          setToastMessage("¡Confirmación enviada con éxito! ¡Mil gracias por acompañarnosen este día tan especial!");
          setShowToast(true);
          setFormData({
            name: "",
            companionName: "",
            allergy: "",
            usaTransporte: "",
            bus: ""
          });
        },
        (error) => {
          setLoading(false);
          setToastMessage("Upss.. Algo ha ido mal al enviar la confirmación. Por favor, inténtalo de nuevo.");
          setShowToast(true);
        }
      );
  };

  return (
        <form onSubmit={sendEmail} className="ConfirmForm">
          <IonItem className="ItemForm">
            <IonInput label="Nombre y apellidos" labelPlacement="stacked" className="InputForm" placeholder="Introduce tu nombre completo" 
              type="text" name="name"
              value={formData.name}
              onIonChange={(e) => handleChange("name", e.detail.value ?? "")}
            />
          </IonItem>

          <IonItem className="ItemForm">
            <IonInput label="Nombre y apellidos acompañante" labelPlacement="stacked" className="InputForm" placeholder="Introduce el nombre completo de tu acompañante" 
              type="text" name="companionName"
              value={formData.companionName}
              onIonChange={(e) => handleChange("companionName", e.detail.value ?? "")}
            />
          </IonItem>

          <IonItem className="ItemForm">
            <IonInput label="Alergias e intolerancias" labelPlacement="stacked" className="InputForm" placeholder="Dinos si tienes alguna alergia o intolerancia" 
              name="allergy"
              type="text"
              value={formData.allergy}
              onIonChange={(e) => handleChange("allergy", e.detail.value ?? "")}
            />
          </IonItem>

          <IonItem className="ItemForm">
            <IonRadioGroup className="RadioGroup"
              value={formData.usaTransporte}
              onIonChange={(e) => handleChange("usaTransporte", e.detail.value ?? "")}
            >
              <IonItem lines="none"><IonLabel>¿Necesitas autobús?</IonLabel></IonItem>
              <IonItem lines="none"><p className="InfoText">Habrá servicio de autobús, si lo vas a necesitar selecciona la opción que prefieras</p></IonItem>
              <IonItem lines="none">
                <IonLabel>Sí</IonLabel>
                <IonRadio slot="start" value="si" />
              </IonItem>
              <IonItem lines="none">
                <IonLabel>No</IonLabel>
                <IonRadio slot="start" value="no" />
              </IonItem>
            </IonRadioGroup>
          </IonItem>

          {formData.usaTransporte === 'si' && (
            <IonItem className="ItemForm">
              <IonSelect
                label="Transporte"
                labelPlacement="stacked"
                placeholder="Selecciona tu opción de transporte"
                value={formData.bus}
                onIonChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    bus: e.detail.value,
                  }))
                }
              >
                {busOptions.map((option) => (
                  <IonSelectOption key={option.value} value={option.value}>
                    {option.label}
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>
          )}

          <IonButton color={"dark"} expand="block" type="submit" className="ConfirmButton" disabled={loading}>
            Confirmar
          </IonButton>

          {/* Toast */}
          <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message={toastMessage}
            duration={3000}
            color={"dark"}
          />

          {/* Loading */}
          <IonLoading
            isOpen={loading}
            message={"Enviando confirmación..."}
          />
        </form>
  );
};

export default ConfirmForm;
