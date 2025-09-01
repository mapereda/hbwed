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
          <section className="portada" id="top">
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
          <section id="cita" className="Header">
            <HeaderCita/>
          </section>

          {/* SECCIÓN: CELEBRACION Y CEREMONIA */}
          <section id="celebracion" className="seccion CelebracionCeremoniaSection">
            <h2 className="TitleSection">CELEBRACIÓN Y CEREMONIA</h2>
            <span className="texto">
              La ceremonia tendrá lugar el domingo siete de diciembre de dos mil veinticinco, en la finca El Campillo, a la una de la tarde.
            </span>
            <span className="texto">La recepción de invitados comenzará a las doce y media.</span>

            <div className="card">
              <p className="texto">Dirección: Finca El Campillo, 1.8, M-600, 28200 San Lorenzo de El Escorial, Madrid</p>
              <div className="mapa-placeholder">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.9762178677506!2d-4.095837124461307!3d40.6304064426075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd410c8288c26bc7%3A0x865d3b0dd729ba6f!2sFinca%20El%20Campillo!5e0!3m2!1ses!2ses!4v1755679547065!5m2!1ses!2ses" width="100%" height="100%" style={{border: "0",}} loading="lazy" ></iframe>
              </div>
            </div>
          </section>

          {/* SECCIÓN: PROGRAMA DE DIA - TIMELINE */}
          <section id="programa" className="Header">
            <p>imagen timeline</p>
          </section>

          {/* SECCIÓN: TRANSPORTE */}
          <section id="transporte" className="seccion">
            <h2 className="TitleSection">TRANSPORTE</h2>
            <Transporte/>
          </section>

          {/* SECCIÓN: ALOJAMIENTO */}
          <section id="alojamiento" className="seccion">
            <h2 className="TitleSection">ALOJAMIENTO</h2>
            <p>Si quieres alojarte en El Escorial, te dejamos estas sugerencias.</p>
            <HotelButton/>
          </section>

          {/* SECCIÓN: CONFIRMACIÓN */}
          <section id="confirmacion" className="seccion ConfirmSection">
            <h2 className="TitleSection">CONFIRMACIÓN</h2>
            <ConfirmForm></ConfirmForm>
          </section>

          {/* SECCIÓN: REGALO */}
          <section id="regalo" className="seccion">
            <h2 className="TitleSection">REGALO</h2>
            <Gift/>
          </section>

          {/* SECCIÓN: GRACIAS */}
          <section id="gracias" className="Header">
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

