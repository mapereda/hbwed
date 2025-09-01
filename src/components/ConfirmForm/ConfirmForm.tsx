import React, { useState } from "react";
import { IonInput, IonButton, IonItem, IonLabel, IonTextarea, IonSelect, IonSelectOption, IonCheckbox, IonRadioGroup, IonRadio } from "@ionic/react";
import emailjs from "emailjs-com";
import "./confirmForm.css";

const ConfirmForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    companionName: "",
    alergies: "",
    usaTransporte: "", // ← nombre correcto aquí
    bus: ""
  });


  const busOptions = [
    { value: "madrid", label: "Cuatro Caminos, Madrid" },
    { value: "valdenuno", label: "Valdenuño Fernández" },
    { value: "el-casar", label: "El Casar" },
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
            <IonInput label="Nombre y apellidos" labelPlacement="stacked" className="InputForm" placeholder="Introduce tu nombre completo" 
              name="name"
              value={formData.name}
              onIonChange={handleChange}
            />
          </IonItem>

          <IonItem className="ItemForm">
            <IonInput label="Nombre y apellidos Acompañante" labelPlacement="stacked" className="InputForm" placeholder="Introduce el nombre completo de tu acompañante" 
              name="companionName"
              value={formData.companionName}
              onIonChange={handleChange}
            />
          </IonItem>

          <IonItem className="ItemForm">
            <IonInput label="Alergias e Intolerancias" labelPlacement="stacked" className="InputForm" placeholder="Indícanos si tienes alguna aleria o intolerancia" 
              name="alergies"
              value={formData.alergies}
              onIonChange={handleChange}
            />
          </IonItem>

          <IonItem className="ItemForm">
            <IonRadioGroup className="RadioGroup"
              value={formData.usaTransporte}
              onIonChange={(e) =>
                handleChange({
                  target: {
                    name: 'usaTransporte',
                    value: e.detail.value,
                  }
                })
              }
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

          <IonButton color={"dark"} expand="block" type="submit" className="ConfirmButton">
            Confirmar
          </IonButton>
        </form>
  );
};

export default ConfirmForm;
