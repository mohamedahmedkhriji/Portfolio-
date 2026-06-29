import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer Intern</h4>
                <h5>ZEENOVI</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Built and shipped Clevory, a cross-platform e-learning app for
              university and corporate training, owning content delivery and
              authentication flows from spec to production release.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT Project Manager and CEO</h4>
                <h5>Madinah Innovators</h5>
              </div>
              <h3>2024-2026</h3>
            </div>
            <p>
              Founded and ran a 6-person software delivery studio, serving 10+
              B2B accounts across 6 countries while improving on-time delivery
              from 60% to 80% and reducing cycle time from 10 to 7 weeks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder and Product Manager</h4>
                <h5>Repset</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Built and deployed a live B2B SaaS platform for gym management
              and member scheduling solo in under 3 months, signing 3 gym
              partnerships and reaching 50+ active users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
