import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { useLanguage } from "../context/LanguageProvider";
import "./styles/Contact.css";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>{t.contact.title}</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>{t.contact.email}</h4>
            <p>
              <a href="mailto:khrijimohamedahmed@gmail.com" data-cursor="disable">
                khrijimohamedahmed@gmail.com
              </a>
            </p>
            <h4>{t.contact.phone}</h4>
            <p>
              <a href="tel:+21654651449" data-cursor="disable">
                +216 54 651 449
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>{t.contact.social}</h4>
            <a
              href="https://github.com/mohamedahmedkhriji"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://linkedin.com/in/KhrijiMohamedAhmed"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://repset.org"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Repset <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              {t.contact.locationLine1} <br /> {t.contact.basedIn}{" "}
              <span>{t.contact.location}</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
