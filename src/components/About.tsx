import { useLanguage } from "../context/LanguageProvider";
import "./styles/About.css";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">{t.about.title}</h3>
        <p className="para">{t.about.body}</p>
      </div>
    </div>
  );
};

export default About;
