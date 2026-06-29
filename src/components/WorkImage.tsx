import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  images: string[];
  alt?: string;
  link?: string;
  links?: {
    label: string;
    href: string;
  }[];
}

const WorkImage = (props: Props) => {
  const [isHovering, setIsHovering] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const images = props.images.length > 0 ? props.images : [];
  const primaryLink = props.link ?? props.links?.[0]?.href;

  useEffect(() => {
    if (!isHovering || images.length < 2) {
      setActiveImage(0);
      return;
    }

    const rotation = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, 950);

    return () => window.clearInterval(rotation);
  }, [images.length, isHovering]);

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={primaryLink}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        target="_blank"
        rel="noreferrer"
        data-cursor={"disable"}
      >
        {primaryLink && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        {images.map((image, index) => (
          <img
            className={index === activeImage ? "is-active" : ""}
            src={image}
            alt={props.alt}
            key={image}
          />
        ))}
      </a>
    </div>
  );
};

export default WorkImage;
