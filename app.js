const ThemeToggle = ({ theme, setTheme }) => (
  <label className="switch" aria-label="Toggle dark mode">
    <input
      type="checkbox"
      checked={theme === "dark"}
      onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
    />
    <span className="slider"></span>
  </label>
);

const Header = ({ theme, setTheme }) => (
  <header>
    <div className="header-left">
      <span className="brand">Rahul Chawla</span>
      <ThemeToggle theme={theme} setTheme={setTheme} />
    </div>
    <nav>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
);

const Hero = () => (
  <section className="hero">
    <div className="hero-bg-circle"></div>
    <div className="hero-inner">
      <span className="hero-tag">Data Analyst · ML · Web Dev</span>
      <h1>
        I turn raw data into<br />
        <em>meaningful decisions.</em>
      </h1>
      <p className="hero-sub">Building dashboards, models, and digital products — where analysis meets craft.</p>
      <a href="Rahul_Chawla_Resume.pdf" download className="hero-cta">
        Download Resume ↓
      </a>
    </div>
  </section>
);

const Divider = () => <hr className="divider" />;

const About = () => (
  <div id="about" className="section-wrap">
    <p className="section-label">01 — About</p>
    <div className="about-grid">
      <div className="about-text">
        <h2 className="section-title">Data-driven by mind,<br />creative by nature.</h2>
        <p>
          I'm a data professional who believes great insights need both rigorous analysis and elegant presentation.
          I combine analytical thinking with modern tools — from SQL and Python to Power BI and React — to turn
          raw numbers into business value people can actually act on.
        </p>
        <a href="Rahul Chawla Data Analyst Resume.pdf" download className="dl-btn">
          Download Resume ↗
        </a>
      </div>
      <div className="about-stat-box">
        <div className="stat-card">
          <div className="stat-num">5+</div>
          <div className="stat-label">Projects built</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">3+</div>
          <div className="stat-label">Tech domains</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">ML</div>
          <div className="stat-label">Specialization</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">BI</div>
          <div className="stat-label">Core tool</div>
        </div>
      </div>
    </div>
  </div>
);

const Skills = () => {
  const skills = [
    { icon: "📊", title: "Data & Visualization", desc: "Power BI, Excel, Data Cleaning & Transformation" },
    { icon: "💻", title: "Programming & DB", desc: "Python, SQL, Jupyter Notebooks" },
    { icon: "🤖", title: "Machine Learning", desc: "Generative AI, Predictive Modeling, Scikit-learn" },
    { icon: "🌐", title: "Web Development", desc: "HTML, CSS, ReactJS, Git, GitHub" },
    { icon: "🛠️", title: "Tools & Workflow", desc: "Jupyter, PowerPoint, Version Control" },
  ];
  return (
    <>
      <Divider />
      <div id="skills" className="section-wrap">
        <p className="section-label">02 — Skills</p>
        <h2 className="section-title">Tools I work with.</h2>
        <div className="skills-grid">
          {skills.map((s, i) => (
            <div key={i} className="skill-card">
              <span className="skill-icon">{s.icon}</span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const Projects = () => {
  const projects = [
    { title: "Gen-AI Indian Budget Assistant", type: "AI / NLP", link: "https://github.com/Rahulbuilds007/Budget_assistant" },
    { title: "Credit Card Fraud Detection", type: "Machine Learning", link: "https://github.com/Rahulbuilds007/credit-card-fraud-detection" },
    { title: "Facebook Ad Dashboard", type: "Power BI", link: "https://github.com/Rahulbuilds007/facebook-ads-performance-dashboard" },
    { title: "Sales Data Analysis", type: "Excel", link: "https://github.com/Rahulbuilds007/Sales-Analytics-Excel-Project" },
    { title: "Social Media Analysis", type: "SQL", link: "https://github.com/Rahulbuilds007/social-media-sql-analysis" },
    { title: "Portfolio Website", type: "Web Dev", link: "https://github.com/Rahulbuilds007/portfolio007" },
  ];
  return (
    <>
      <Divider />
      <div id="projects" className="section-wrap">
        <p className="section-label">03 — Projects</p>
        <h2 className="section-title">Featured work.</h2>
        <div className="projects-list">
          {projects.map((p, i) => (
            <a key={i} className="project-row" href={p.link} target="_blank" rel="noopener noreferrer">
              <span className="project-num">0{i + 1}</span>
              <div className="project-info">
                <h3>{p.title}</h3>
                <span className="project-type">{p.type}</span>
              </div>
              <span className="project-arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

const Experience = () => {
  const items = [
    "Developed a Gen-AI tool to interpret Indian budget documents using large language models.",
    "Built BI dashboards for Facebook Ads analytics using Power BI.",
    "Conducted sales forecasting and KPI analysis in Excel for business decision-making.",
    "Implemented ML models for fraud detection and weather prediction.",
    "Deployed personal projects and dashboards via GitHub and React.",
  ];
  return (
    <>
      <Divider />
      <div id="experience" className="section-wrap">
        <p className="section-label">04 — Experience</p>
        <h2 className="section-title">What I've built & delivered.</h2>
        <div className="exp-list">
          {items.map((item, i) => (
            <div key={i} className="exp-item">
              <div className="exp-dot"></div>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const Contact = () => (
  <>
    <Divider />
    <div id="contact" className="section-wrap">
      <p className="section-label">05 — Contact</p>
      <div className="contact-grid">
        <div className="contact-text">
          <h2 className="section-title">Let's work together.</h2>
          <p>
            Open to full-time opportunities, freelance projects, or just a good conversation about data.
            I'd love to hear what you're building.
          </p>
          <a href="https://www.linkedin.com/in/rahul-chawla-95a292257/" target="_blank" rel="noopener noreferrer" className="contact-cta">
            Connect on LinkedIn ↗
          </a>
        </div>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/rahul-chawla-95a292257/" target="_blank" rel="noopener noreferrer" className="contact-link-row">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
            <span className="contact-link-label">LinkedIn</span>
            <span className="contact-link-sub">Connect</span>
          </a>
          <a href="https://github.com/Rahulbuilds007" target="_blank" rel="noopener noreferrer" className="contact-link-row">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
            <span className="contact-link-label">GitHub</span>
            <span className="contact-link-sub">Rahulbuilds007</span>
          </a>
          <a href="mailto:chawla2004rahul@gmail.com" className="contact-link-row">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Gmail" />
            <span className="contact-link-label">Email</span>
            <span className="contact-link-sub">chawla2004rahul@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  </>
);

const Footer = () => (
  <footer>
    <p>© {new Date().getFullYear()} Rahul Chawla — Compiled with care.</p>
    <div className="footer-links">
      <a href="https://www.linkedin.com/in/rahul-chawla-95a292257/" target="_blank" aria-label="LinkedIn">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
      </a>
      <a href="https://github.com/Rahulbuilds007" target="_blank" aria-label="GitHub">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
      </a>
      <a href="mailto:chawla2004rahul@gmail.com" aria-label="Gmail">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Gmail" />
      </a>
    </div>
  </footer>
);

const App = () => {
  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  React.useEffect(() => {
    const els = document.querySelectorAll(".section-wrap");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
      { threshold: 0.08 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);