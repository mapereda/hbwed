import React, { useEffect, useRef, useState } from "react";
import {
  IonApp,
  IonPage,
  IonContent,
  IonIcon,
  IonFab,
  IonFabButton,
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

const SECTIONS = [
  { id: "confirmacion", label: "Confirmación" },
  { id: "diab", label: 'Día "B"' },
  { id: "transporte", label: "Transporte" },
  { id: "alojamiento", label: "Alojamiento" },
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

            <nav className="menu-portada">
              {SECTIONS.map((s) => (
                <button
                  key={s.id}
                  className="link-menu"
                  onClick={() => scrollToSection(s.id)}
                >
                  {s.label}
                </button>
              ))}
            </nav>
          </section>

          {/* SECCIÓN: CONFIRMACIÓN */}
          <section id="confirmacion" className="seccion">
            <h2 className="TitleSection">CONFIRMACIÓN</h2>
            <p className="InfoText">Por favor, envía una confirmación por persona.</p>
            <ConfirmForm></ConfirmForm>
          </section>

          {/* SECCIÓN: DÍA B */}
          <section id="diab" className="seccion">
            <h2 className="TitleSection">DÍA "B"</h2>
            <div className="timeline">
              <div className="t-item">
                <div className="t-dot" />
                <div className="t-text">
                  12:00 — Ceremonia (Iglesia / lugar)
                </div>
              </div>
              <div className="t-item">
                <div className="t-dot" />
                <div className="t-text">14:00 — Cóctel</div>
              </div>
              <div className="t-item">
                <div className="t-dot" />
                <div className="t-text">15:00 — Banquete</div>
              </div>
              <div className="t-item">
                <div className="t-dot" />
                <div className="t-text">20:00 — Fiesta</div>
              </div>
            </div>
          </section>

          {/* SECCIÓN: TRANSPORTE */}
          <section id="transporte" className="seccion">
            <h2 className="TitleSection">TRANSPORTE</h2>
            <p className="texto">
              Habrá autobuses desde Madrid, Valdenuño Fernández y El Casar. Indícanos en la confirmación si
              quieres plaza para contar contigo.
            </p>

            <div className="card">
              <h3 className="sub">Autobús</h3>
              <h5>Ida</h5>
              <p className="texto">
                10:30 — <em>Valdenuño Fernández, con parada en El Casar a las 10:40.</em>
                <br />
                11:00 — <em>Moncloa, Madrid.</em>
                <br />
              </p>

              <h5>Regreso</h5>
              <p className="texto">
                23:00 — <em>Regreso a Madrid, El Casar y Valdenuño Fernández.</em>
                <br />
              </p>

              <h3 className="sub">Dirección</h3>
              <p className="texto">Finca El Ccampillo, El Escorial</p>
              {/* Puedes incrustar un mapa estático si quieres */}
              <div className="mapa-placeholder">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.9762178677506!2d-4.095837124461307!3d40.6304064426075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd410c8288c26bc7%3A0x865d3b0dd729ba6f!2sFinca%20El%20Campillo!5e0!3m2!1ses!2ses!4v1755679547065!5m2!1ses!2ses" width="100%" height="100%" style={{border: "0",}} loading="lazy" ></iframe>
              </div>
            </div>
          </section>

          {/* SECCIÓN: ALOJAMIENTO */}
          <section id="alojamiento" className="seccion">
            <h2 className="TitleSection">ALOJAMIENTO</h2>
            <div className="lista-hoteles">
              {["Hotel 1", "Hotel 2", "Hotel 3", "Hotel 4"].map((h) => (
                <div className="hotel card" key={h}>
                  <h3 className="sub">{h}</h3>
                  <p className="texto">
                    Dirección del hotel, distancia a la finca y
                    teléfono de contacto.
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SECCIÓN: REGALO */}
          <section id="regalo" className="seccion">
            <h2 className="TitleSection">REGALO</h2>
            <div className="card">
              <p className="texto">
                Si queréis tener un detalle, os dejamos nuestro número de
                cuenta. ¡Gracias!
              </p>
              <div className="iban">ESXX XXXX XXXX XXXX XXXX XXXX</div>
              <div className="cuentas">
                <div>
                  <strong>Daniel</strong>
                  <br />
                  6XX XX XX XX
                </div>
                <div>
                  <strong>Elena</strong>
                  <br />
                  6XX XX XX XX
                </div>
              </div>
            </div>
          </section>

          {/* SECCIÓN: GRACIAS */}
          <section id="gracias" className="seccion seccion-gracias">
            <h2 className="TitleSection">GRACIAS</h2>
            <p className="texto peque">
              Gracias por acompañarnos. Nos hace mucha ilusión compartir este
              día con vosotros.
            </p>
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

