import { TbCertificate } from "react-icons/tb";
import { certifications } from "../data/certifications";
import { useLanguage } from "../context/LanguageProvider";
import HoverLinks from "./HoverLinks";
import "./styles/CertificationsMenu.css";

type CertificationsMenuProps = {
  buttonClassName?: string;
};

const CertificationsMenu = ({
  buttonClassName = "",
}: CertificationsMenuProps) => {
  const { t } = useLanguage();

  return (
    <div className="certifications-control">
      <button
        className={`resume-button ${buttonClassName}`.trim()}
        type="button"
        aria-label={t.social.certifications}
        data-cursor="disable"
      >
        <HoverLinks text={t.social.certifications} />
        <span>
          <TbCertificate />
        </span>
      </button>
      <div className="certifications-menu" role="menu">
        {certifications.map((certification) => (
          <a
            className="certification-link"
            href={certification.url}
            target="_blank"
            rel="noreferrer"
            role="menuitem"
            key={certification.url}
          >
            {certification.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default CertificationsMenu;
