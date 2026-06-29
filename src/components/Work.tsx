import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../context/LanguageProvider";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const loadProjectImages = (modules: Record<string, string>) => {
  return Object.entries(modules)
    .sort(([first], [second]) => first.localeCompare(second))
    .map(([, image]) => image);
};

const projectMeta = [
  {
    images: loadProjectImages(
      import.meta.glob<string>("../../assets/project/repset/*.{png,jpg,jpeg,webp}", {
        eager: true,
        import: "default",
        query: "?url",
      })
    ),
    link: "https://repset.org",
    links: [
      { label: "repset.org", href: "https://repset.org/" },
      { label: "Instagram", href: "https://www.instagram.com/repset_app" },
      { label: "TikTok", href: "https://www.tiktok.com/@repset_app" },
    ],
  },
  {
    images: loadProjectImages(
      import.meta.glob<string>(
        "../../assets/project/madinnah innovators/*.{png,jpg,jpeg,webp}",
        {
          eager: true,
          import: "default",
          query: "?url",
        }
      )
    ),
  },
  {
    images: loadProjectImages(
      import.meta.glob<string>("../../assets/project/clevory/*.{png,jpg,jpeg,webp}", {
        eager: true,
        import: "default",
        query: "?url",
      })
    ),
  },
  {
    images: loadProjectImages(
      import.meta.glob<string>(
        "../../assets/project/automation/*.{png,jpg,jpeg,webp}",
        {
          eager: true,
          import: "default",
          query: "?url",
        }
      )
    ),
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
                <div className="work-card-top">
                  <span className="work-status">{project.status}</span>
                  <span className="work-number">0{index + 1}</span>
                </div>
                <div className="work-title">
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <p className="work-summary">{project.summary}</p>
                <div className="work-metrics">
                  {project.metrics.map((metric) => (
                    <div className="work-metric" key={`${project.title}-${metric.label}`}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>
                <div className="work-tags" aria-label={t.work.toolsLabel}>
                  {project.tags.map((tag) => (
                    <span key={`${project.title}-${tag}`}>{tag}</span>
                  ))}
                </div>
                {projectMeta[index].links && (
                  <div className="work-socials">
                    {projectMeta[index].links?.map((link) => (
                      <a
                        href={link.href}
                        key={link.href}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor="disable"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <WorkImage
                images={projectMeta[index].images}
                alt={project.title}
                link={projectMeta[index].link}
                links={projectMeta[index].links}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
