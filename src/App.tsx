import React, { useEffect, useRef, useState } from "react";
import {
  IonApp,
  IonPage,
  IonContent,
  IonIcon,
  IonFab,
  IonFabButton
} from "@ionic/react";
import { arrowUp } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import "./App.css";
import ConfirmForm from "./components/ConfirmForm/ConfirmForm";
import HeaderCita from "./components/Headers/HeaderCita/HeaderCita";
import Transporte from "./components/Transporte/Transporte";
import HotelButton from "./components/HotelButton/HotelButton";
import Gift from "./components/Gift/Gift";
import HeaderThanks from "./components/Headers/HeaderThanks/HeaderThanks";
import Celebration from "./components/Celebracion/Celebration";
import Timeline from "./components/Timeline/Timeline";
import Accomodation from "./components/Accomodation/Accomodation";

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

const App: React.FC = () => {
  const contentRef = useRef<HTMLIonContentElement | null>(null);
  const [showTop, setShowTop] = useState(false);

  // Mostrar/ocultar botón “arriba”
  const onScroll: any = async (ev: CustomEvent) => {
    const y = (ev.detail as any)?.scrollTop ?? 0;
    setShowTop(y > 220);
  };

  // Scroll suave dentro de IonContent
  const scrollToSection = async (id: string) => {
    const el = document.getElementById(id);
    const content = await contentRef.current?.getScrollElement();
    if (el && content) {
      const y = el.offsetTop - 8; // pequeño margen
      contentRef.current?.scrollToPoint(0, y, 500);
    }
  };

  const scrollToTop = () => {
    contentRef.current?.scrollToTop(500);
  };

  useEffect(() => {
    // iOS momentum fix: asegura que el primer scroll dispare evento
    const c = contentRef.current;
    c?.getScrollElement().then((el) => {
      el?.addEventListener("scroll", () => {});
    });
  }, []);

  return (
    <IonApp>
      <IonPage>
        <IonContent
          ref={contentRef}
          fullscreen
          className="paper"
          scrollEvents={true}
          onIonScroll={onScroll}
        >
          {/* PORTADA */}
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
            {/*<nav className="menu-portada">
              {SECTIONS.map((s) => (
                <button
                  key={s.id}
                  className="link-menu"
                  onClick={() => scrollToSection(s.id)}
                >
                  {s.label}
                </button>
              ))}
            </nav>*/}
          </section>

          {/* SECCIÓN: HEADER CITA */}
          <section id="cita" className="HeaderSection HeaderCitaSection">
            <HeaderCita/>
          </section>

          {/* SECCIÓN: CELEBRACION Y CEREMONIA */}
          <section id="celebracion" className="Section CelebrationSection">
            <h2 className="TitleSection">CELEBRACIÓN Y CEREMONIA</h2>
            <Celebration/>
          </section>

          {/* SECCIÓN: PROGRAMA DE DIA - TIMELINE */}
          <section id="programa" className="HeaderSection TimelineSection">
            <Timeline/>
          </section>

          {/* SECCIÓN: TRANSPORTE */}
          <section id="transporte" className="Section TransporteSection">
            <h2 className="TitleSection">TRANSPORTE</h2>
            <Transporte/>
          </section>

          {/* SECCIÓN: ALOJAMIENTO */}
          <section id="alojamiento" className="Section AccommodationSection">
            <h2 className="TitleSection">ALOJAMIENTO</h2>
            <Accomodation/>
          </section>

          {/* SECCIÓN: CONFIRMACIÓN */}
          <section id="confirmacion" className="Section ConfirmSection">
            <h2 className="TitleSection">CONFIRMACIÓN</h2>
            <ConfirmForm></ConfirmForm>
          </section>

          {/* SECCIÓN: REGALO */}
          <section id="regalo" className="Section GiftSection">
            <h2 className="TitleSection">REGALO</h2>
            <Gift/>
          </section>

          {/* SECCIÓN: GRACIAS */}
          <section id="gracias" className="HeaderSection HeaderThanksSection">
            <HeaderThanks/>
          </section>

          {/* BOTÓN FLOTANTE ARRIBA */}
          {showTop && (
            <IonFab vertical="bottom" horizontal="end" slot="fixed">
              <IonFabButton color={"secondary"} onClick={scrollToTop} className="fab">
                <IonIcon icon={arrowUp} />
              </IonFabButton>
            </IonFab>
          )}
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default App;

