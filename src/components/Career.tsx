import { useLanguage } from "../context/LanguageProvider";
import "./styles/Career.css";

const Career = () => {
  const { t } = useLanguage();

  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          {t.career.titleLine1} <span>&</span>
          <br /> {t.career.titleLine2}
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {t.career.items.map((item) => (
            <div className="career-info-box" key={`${item.company}-${item.year}`}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.role}</h4>
                  <h5>{item.company}</h5>
                </div>
                <h3>{item.year}</h3>
              </div>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
