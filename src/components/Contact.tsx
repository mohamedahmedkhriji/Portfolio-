import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:khrijimohamedahmed@gmail.com" data-cursor="disable">
                khrijimohamedahmed@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+21654651449" data-cursor="disable">
                +216 54 651 449
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
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
              B2B SaaS Product Manager <br /> based in <span>Ariana, Tunis</span>
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
