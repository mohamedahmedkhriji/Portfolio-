import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../context/LanguageProvider";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projectImages = {
  repset: new URL("../../assets/projects/repset logo .jpg", import.meta.url).href,
  madinah: new URL("../../assets/projects/madinnah innovators.png", import.meta.url)
    .href,
  clevory: new URL("../../assets/projects/claivory training.png", import.meta.url)
    .href,
  automation: new URL("../../assets/projects/autmation.png", import.meta.url).href,
};

const projectMeta = [
  {
    image: projectImages.repset,
    link: "https://repset.org",
  },
  {
    image: projectImages.madinah,
  },
  {
    image: projectImages.clevory,
  },
  {
    image: projectImages.automation,
  },
];

const Work = () => {
  const { t } = useLanguage();

  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          {t.work.titleStart} <span>{t.work.titleAccent}</span>
        </h2>
        <div className="work-flex">
          {t.work.projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>{t.work.toolsLabel}</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                image={projectMeta[index].image}
                alt={project.title}
                link={projectMeta[index].link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
