import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useLanguage } from "../context/LanguageProvider";
import { languages } from "../data/translations";
import CertificationsMenu from "./CertificationsMenu";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const flags = {
  en: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'%3e%3cmask id='a'%3e%3ccircle cx='256' cy='256' r='256' fill='%23fff'/%3e%3c/mask%3e%3cg mask='url(%23a)'%3e%3cpath fill='%23eee' d='M256 0h256v64l-32 32 32 32v64l-32 32 32 32v64l-32 32 32 32v64l-256 32L0 448v-64l32-32-32-32v-64z'/%3e%3cpath fill='%23d80027' d='M224 64h288v64H224Zm0 128h288v64H256ZM0 320h512v64H0Zm0 128h512v64H0Z'/%3e%3cpath fill='%230052b4' d='M0 0h256v256H0Z'/%3e%3cpath fill='%23eee' d='m187 243 57-41h-70l57 41-22-67zm-81 0 57-41H93l57 41-22-67zm-81 0 57-41H12l57 41-22-67zm162-81 57-41h-70l57 41-22-67zm-81 0 57-41H93l57 41-22-67zm-81 0 57-41H12l57 41-22-67Zm162-82 57-41h-70l57 41-22-67Zm-81 0 57-41H93l57 41-22-67zm-81 0 57-41H12l57 41-22-67Z'/%3e%3c/g%3e%3c/svg%3e",
  fr: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'%3e%3cmask id='a'%3e%3ccircle cx='256' cy='256' r='256' fill='%23fff'/%3e%3c/mask%3e%3cg mask='url(%23a)'%3e%3cpath fill='%23eee' d='M0 0h512v512H0z'/%3e%3cpath fill='%230052b4' d='M0 0h171v512H0z'/%3e%3cpath fill='%23d80027' d='M341 0h171v512H341z'/%3e%3c/g%3e%3c/svg%3e",
  de: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'%3e%3cmask id='a'%3e%3ccircle cx='256' cy='256' r='256' fill='%23fff'/%3e%3c/mask%3e%3cg mask='url(%23a)'%3e%3cpath fill='%23000' d='M0 0h512v170.7H0z'/%3e%3cpath fill='%23d80027' d='M0 170.7h512v170.6H0z'/%3e%3cpath fill='%23ffda44' d='M0 341.3h512V512H0z'/%3e%3c/g%3e%3c/svg%3e",
};

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const selectedLanguage = languages.find((item) => item.code === language) ?? languages[0];

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    const links = document.querySelectorAll(".header > ul a[data-href]");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          const elem = e.currentTarget as HTMLAnchorElement;
          const section = elem.getAttribute("data-href");
          if (section) {
            smoother.scrollTo(section, true, "top top");
          }
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);

  function selectLanguage(language: (typeof languages)[number]) {
    setLanguage(language.code);
    setIsLanguageMenuOpen(false);
  }

  return (
    <>
      <div className="header">
        <div className="language-selector">
          <button
            className="language-button"
            type="button"
            data-cursor="disable"
            aria-label={t.nav.chooseLanguage}
            aria-expanded={isLanguageMenuOpen}
            onClick={() => setIsLanguageMenuOpen((isOpen) => !isOpen)}
          >
            <img
              loading="lazy"
              src={flags[selectedLanguage.code]}
              alt={`${selectedLanguage.label} flag`}
              className="flag-icon"
            />
          </button>
          {isLanguageMenuOpen && (
            <ul className="language-menu">
              {languages.map((language) => (
                <li key={language.code}>
                  <button
                    type="button"
                    data-cursor="disable"
                    onClick={() => selectLanguage(language)}
                  >
                    <img
                      loading="lazy"
                      src={flags[language.code]}
                      alt={`${language.label} flag`}
                      className="flag-icon"
                    />
                    {language.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text={t.nav.about} />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text={t.nav.work} />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text={t.nav.contact} />
            </a>
          </li>
        </ul>
        <CertificationsMenu buttonClassName="nav-resume-button" />
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
