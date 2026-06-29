import { PropsWithChildren } from "react";
import { useLanguage } from "../context/LanguageProvider";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const { t } = useLanguage();

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>{t.landing.greeting}</h2>
            <h1>
              KHRIJI
              <br />
              <span>MOHAMED AHMED</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>B2B SaaS</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">{t.landing.roleLine1}</div>
              <div className="landing-h2-2">{t.landing.roleLine2}</div>
            </h2>
            <h2>
              <div className="landing-h2-info">{t.landing.founder}</div>
              <div className="landing-h2-info-1">{t.landing.builder}</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
