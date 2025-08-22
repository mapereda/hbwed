import React, { useState } from "react";
import { IonInput, IonButton, IonItem, IonLabel, IonTextarea } from "@ionic/react";
import emailjs from "emailjs-com";

const ConfirmForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    bus: "",
    alergies: ""
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_t5uztoq",    // <--- cámbialo
        "template_it54idq",   // <--- cámbialo
        formData,
        "ti8wyB4s-TJNWLkkx"     // <--- cámbialo
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("¡Mensaje enviado con éxito!");
        },
        (error) => {
          console.log(error.text);
          alert("Hubo un error, inténtalo de nuevo.");
        }
      );
  };

  return (
        <form onSubmit={sendEmail} className="form">
          <IonItem className="ItemForm">
            <IonLabel className="LabelForm" position="stacked">Nombre y Apellidos</IonLabel>
            <IonInput className="InputForm" placeholder="Ej: Elena García Faucha" 
              name="name"
              value={formData.name}
              onIonChange={handleChange}
            />
          </IonItem>

          <IonItem className="ItemForm">
            <IonLabel className="LabelForm" position="stacked">Autobús</IonLabel>
            <IonInput placeholder="Ej: Autobús Madrid"
              name="bus"
              value={formData.bus}
              onIonChange={handleChange}
            />
          </IonItem>

          <IonItem className="ItemForm">
            <IonLabel className="LabelForm" position="stacked">Alergias/Intolerancias</IonLabel>
            <IonTextarea className="TextareaForm" autoGrow rows={3} placeholder="Dinos tus alergios o intolerancias"
              name="alergies"
              value={formData.alergies}
              onIonChange={handleChange}
            ></IonTextarea>
          </IonItem>

          <IonButton expand="block" type="submit" className="ion-margin-top">
            Confirmar
          </IonButton>
        </form>
  );
};

export default ConfirmForm;
