import React, { useEffect, useRef, useState } from "react";
import {
  IonPage,
  IonContent,
  IonIcon,
  IonFab,
  IonFabButton
} from "@ionic/react";
import { arrowUp } from "ionicons/icons";

import ConfirmForm from "../components/ConfirmForm/ConfirmForm";
import HeaderCita from "../components/Headers/HeaderCita/HeaderCita";
import Transporte from "../components/Transporte/Transporte";
import Gift from "../components/Gift/Gift";
import HeaderThanks from "../components/Headers/HeaderThanks/HeaderThanks";
import Celebration from "../components/Celebracion/Celebration";
import Timeline from "../components/Timeline/Timeline";
import Accomodation from "../components/Accomodation/Accomodation";

const SECTIONS = [
  {id: "cita", label: "Cita"},
  {id: "celebración", label: "Celebración y Ceremonia"},
  { id: "programa", label: 'Programa del día' },
  { id: "transporte", label: "Transporte" },
  { id: "alojamiento", label: "Alojamiento" },
  { id: "confirmacion", label: "Confirmación" },
  { id: "regalo", label: "Regalo" },
  { id: "gracias", label: "Gracias" },
];

const HbWedView: React.FC = () => {
  const contentRef = useRef<HTMLIonContentElement | null>(null);
  const [showTop, setShowTop] = useState(false);

  const onScroll: any = async (ev: CustomEvent) => {
    const y = (ev.detail as any)?.scrollTop ?? 0;
    setShowTop(y > 220);
  };

  const scrollToSection = async (id: string) => {
    const el = document.getElementById(id);
    const content = await contentRef.current?.getScrollElement();
    if (el && content) {
      const y = el.offsetTop - 8;
      contentRef.current?.scrollToPoint(0, y, 500);
    }
  };

  const scrollToTop = () => {
    contentRef.current?.scrollToTop(500);
  };

  useEffect(() => {
    const c = contentRef.current;
    c?.getScrollElement().then((el) => {
      el?.addEventListener("scroll", () => {});
    });
  }, []);

  return (
    <IonPage>
      <IonContent
        ref={contentRef}
        fullscreen
        className="paper"
        scrollEvents={true}
        onIonScroll={onScroll}
      >
        {/* --- todo tu contenido actual --- */}
        <section className="CoverSection" id="top">
          <h1 className="TitlePortada">Elena y Daniel</h1>
          <img
            src="/assets/logo.png"
            alt="hbwed"
            className="Logo"
            loading="lazy"
          />
          <p>7.DICIEMBRE.2025</p>
          <p>Finca El Campillo</p>
        </section>

        <section id="cita" className="HeaderSection HeaderCitaSection">
          <HeaderCita/>
        </section>

        <section id="celebracion" className="Section CelebrationSection">
          <h2 className="TitleSection">CELEBRACIÓN Y CEREMONIA</h2>
          <Celebration/>
        </section>

        <section id="programa" className="HeaderSection TimelineSection">
          <Timeline/>
        </section>

        <section id="transporte" className="Section TransporteSection">
          <h2 className="TitleSection">TRANSPORTE</h2>
          <Transporte/>
        </section>

        <section id="alojamiento" className="Section AccommodationSection">
          <h2 className="TitleSection">ALOJAMIENTO</h2>
          <Accomodation/>
        </section>

        <section id="confirmacion" className="Section ConfirmSection">
          <h2 className="TitleSection">CONFIRMACIÓN</h2>
          <ConfirmForm/>
        </section>

        <section id="regalo" className="Section GiftSection">
          <h2 className="TitleSection">REGALO</h2>
          <Gift/>
        </section>

        <section id="gracias" className="HeaderSection HeaderThanksSection">
          <HeaderThanks/>
        </section>

        {showTop && (
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton color={"secondary"} onClick={scrollToTop} className="fab">
              <IonIcon icon={arrowUp} />
            </IonFabButton>
          </IonFab>
        )}
      </IonContent>
    </IonPage>
  );
};

export default HbWedView;
