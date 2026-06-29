import { useCallback, useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLanguage } from "../context/LanguageProvider";
import { useLoading } from "../context/LoadingProvider";

import Marquee from "react-fast-marquee";

const logoItems = [
  { name: "Agile", file: "agile.png" },
  { name: "Anaconda", file: "anaconda.png" },
  { name: "Angular", file: "angular.png" },
  { name: "Firebase", file: "firebase.webp" },
  { name: "Flutter", file: "flutter.jpg" },
  { name: "Jira", file: "jira.jpg" },
  { name: "MongoDB", file: "mongo.jpg" },
  { name: "MySQL", file: "mysql.jpg" },
  { name: "Node.js", file: "node.jpg" },
  { name: "Power BI", file: "powerbi.jpg" },
  { name: "Python", file: "python.png" },
  { name: "React", file: "react.png" },
].map((logo) => ({
  ...logo,
  src: new URL(`../../assets/logos/${logo.file}`, import.meta.url).href,
}));

const marqueeLogos = [...logoItems, ...logoItems];

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading, setLoading } = useLoading();
  const { t } = useLanguage();
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  const enterSite = useCallback(async () => {
    if (clicked) return;

    setLoaded(true);
    setIsLoaded(true);
    setClicked(true);

    const module = await import("./utils/initialFX");
    if (module.initialFX) {
      module.initialFX();
    }

    window.setTimeout(() => {
      setIsLoading(false);
    }, 180);
  }, [clicked, setIsLoading]);

  useEffect(() => {
    const maxWait = window.setTimeout(() => {
      setLoading(100);
    }, 650);

    return () => window.clearTimeout(maxWait);
  }, [setLoading]);

  useEffect(() => {
    if (percent < 100 || loaded) return;

    const showComplete = window.setTimeout(() => {
      setLoaded(true);
    }, 80);
    const finish = window.setTimeout(() => {
      setIsLoaded(true);
    }, 220);

    return () => {
      window.clearTimeout(showComplete);
      window.clearTimeout(finish);
    };
  }, [percent, loaded]);

  useEffect(() => {
    if (isLoaded) {
      enterSite();
    }
  }, [isLoaded, enterSite]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <>
      <div className="loading-header">
        <div className={`loaderGame ${clicked && "loader-out"}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>
      <div className="loading-screen">
        <div className="brand-section-area logo-strip">
          <div className="marquee-wrap">
            <Marquee className="marquee-text" speed={42} gradient={false}>
              {marqueeLogos.map((logo, index) => (
                <div className="brand-single-box" key={`${logo.name}-${index}`}>
                  <img className="logo-icon mx-6" src={logo.src} alt={logo.name} />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
        <div
          className={`loading-wrap ${clicked && "loading-clicked"}`}
          onMouseMove={(e) => handleMouseMove(e)}
          onClick={enterSite}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              enterSite();
            }
          }}
          role="button"
          tabIndex={0}
          aria-label={t.common.welcome}
        >
          <div className="loading-hover"></div>
          <div className={`loading-button ${loaded && "loading-complete"}`}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  {t.common.loading} <span>{percent}%</span>
                </div>
              </div>
              <div className="loading-box"></div>
            </div>
            <div className="loading-content2">
              <span>{t.common.welcome}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;

  let interval = setInterval(() => {
    if (percent <= 50) {
      const rand = Math.round(Math.random() * 5);
      percent = percent + rand;
      setLoading(percent);
    } else {
      clearInterval(interval);
      interval = setInterval(() => {
        percent = percent + Math.round(Math.random());
        setLoading(percent);
        if (percent > 91) {
          clearInterval(interval);
        }
      }, 250);
    }
  }, 100);

  function clear() {
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 2);
    });
  }
  return { loaded, percent, clear };
};
