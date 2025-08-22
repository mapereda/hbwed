import React, { useState } from "react";
import { IonInput, IonButton, IonItem, IonLabel, IonTextarea, IonSelect, IonSelectOption } from "@ionic/react";
import emailjs from "emailjs-com";
import "./confirmForm.css";

const ConfirmForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    bus: "",
    alergies: ""
  });

  const busOptions = [
    { value: "madrid", label: "Moncloa, Madrid" },
    { value: "valdenuno", label: "Valdenuño Fernández" },
    { value: "el-casar", label: "El Casar" },
    { value: "no-necesito-bus", label: "No necesito autobús" }
  ];

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
        <form onSubmit={sendEmail} className="ConfirmForm">
          <IonItem className="ItemForm">
            <IonInput label="Nombre y Apellidos" labelPlacement="stacked" className="InputForm" placeholder="Introduce tu nombre completo" 
              name="name"
              value={formData.name}
              onIonChange={handleChange}
            />
          </IonItem>

          <IonItem className="ItemForm">
            <IonSelect label="Transporte" labelPlacement="stacked" placeholder="Selecciona tu opción de transporte" value={formData.bus} onIonChange={((e) => setFormData(prev => ({
                ...prev,
                bus: e.detail.value
              })))}>
              {busOptions.map((option) => (
                <IonSelectOption key={option.value} value={option.value}>{option.label}</IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>

          <IonItem className="ItemForm">
            <IonTextarea 
              label="Alergias/Intolerancias" 
              labelPlacement="stacked" 
              className="TextareaForm" 
              autoGrow 
              rows={3} 
              placeholder="Si tienes alguna alergia o intolerancia, especifícala aquí..."
              name="alergies"
              value={formData.alergies}
              onIonChange={handleChange}
            ></IonTextarea>
          </IonItem>

          <IonButton color={"secondary"} expand="block" type="submit" className="ConfirmButton">
            Confirmar
          </IonButton>
        </form>
  );
};

export default ConfirmForm;
