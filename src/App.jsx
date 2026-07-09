import { useRef, useState, useEffect } from "react";
import "./App.css";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp,
  FaDownload,
  FaBars,
  FaTimes,
  FaExternalLinkAlt,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ─── Données ────────────────────────────────────────────────────────────────
const TECHS = [
  { img: `${import.meta.env.BASE_URL}html.png`, name: "HTML" },
  { img: `${import.meta.env.BASE_URL}css.png`, name: "CSS" },
  { img: `${import.meta.env.BASE_URL}js.png`, name: "JavaScript" },
  { img: `${import.meta.env.BASE_URL}react.png`, name: "React JS" },
  { img: `${import.meta.env.BASE_URL}react.png`, name: "React Native" },
  { img: `${import.meta.env.BASE_URL}node.png`, name: "Node.js" },
  { img: `${import.meta.env.BASE_URL}php.png`, name: "PHP" },
  { img: `${import.meta.env.BASE_URL}sql.jpg`, name: "SQL" },
];

const SKILLS_COLS = [
  {
    title: "Langages",
    items: ["JavaScript", "PHP", "SQL", "Node.js"],
  },
  {
    title: "Frameworks & Librairies",
    items: ["React.js", "React Native", "Express.js", "Bootstrap", "Tailwind"],
  },
  {
    title: "Base de données & Outils",
    items: ["MySQL", "PostgreSQL", "Git & GitHub", "VS Code", "Figma"],
  },
  {
    title: "Autres compétences",
    items: ["Analyse de données", "Design UX/UI", "Gestion de projet Agile"],
  },
];

const PROJECTS = [
  {
    id: 1,
    title: "OCX – Web",
    desc: "Application web de courses intra permettant aux clients de demander l'enlèvement de leurs colis et de suivre leurs expéditions en temps réel. Les agents reçoivent des notifications par e-mail pour être informés des nouvelles demandes, puis prennent en charge les colis et mettent à jour leur statut tout au long de la livraison.",
    badge: "Web",
    category: "web",
    color: "#1a2a3d",
    img: `${import.meta.env.BASE_URL}intra.PNG`,
  },
  {
    id: 2,
    title: "OCX – Web",
    desc: "Application web responsive dédiée aux agents pour la gestion des colis. Elle permet d'enregistrer, de trier, de suivre et de mettre à jour les informations relatives aux colis tout au long de leur traitement.",
    badge: "Web",
    category: "web",
    color: "#2a1a3d",
    img: `${import.meta.env.BASE_URL}suivi.PNG`,
  },
  {
    id: 3,
    title: "Safenet – Web",
    desc: "Application web dédiée au traitement et à l'analyse des données, permettant de calculer les consommations et leur montant total, de détecter les variations (données perdues, nouvelles et modifiées).",
    badge: "Web",
    category: "web",
    color: "#1a3d2a",
    img: `${import.meta.env.BASE_URL}safenet.PNG`,
  },
  {
    id: 4,
    title: "OCX – Mobile",
    desc: "Application mobile dédiée aux coursiers, permettant de recevoir les nouvelles courses, de consulter les livraisons assignées et d'assurer leur suivi en temps réel.",
    badge: "Mobile",
    category: "mobile",
    color: "#2d4a22",
    img: `${import.meta.env.BASE_URL}Mintra.jpg`,
  },
  {
    id: 5,
    title: "MIHARO – Web ",
    desc: "Application web dédiée à l'agriculture, regroupant la vente de produits agricoles, la location de matériel et des formations pour favoriser les échanges et le développement du secteur.",
    badge: "Web",
    category: "web",
    color: "#1a2e45",
    img: `${import.meta.env.BASE_URL}miharo.PNG`,
  },
  {
    id: 6,
    title: "OCX – Mobile",
    desc: "Application mobile dédiée aux agents, permettant de scanner les colis et de mettre à jour leur statut en temps réel.",
    badge: "Mobile",
    category: "mobile",
    color: "#3d2a1a",
    img: `${import.meta.env.BASE_URL}mobile.jpg`,
  },
];

const EXPERIENCES = [
  {
    year: "Depuis 2024",
    title: "Ingénieure en développement informatique – MAGY, Antananarivo",
    desc: "Développement d'applications web et mobiles, gestion de projets, échanges avec les clients et mise en production des solutions.",
  },
  {
    year: "2023",
    title: "Stage – HAISOA SARLU, Antananarivo",
    desc: "Conception et réalisation de l'application MIHARO : plateforme de mise en ligne des produits et matériaux agricoles avec React JS et Node.js.",
  },
  {
    year: "2021 - 2023",
    title: "Développeuse Web (Freelance) –  SUD-CONSULTING, Antananarivo",
    desc: "Conception et intégration d'interfaces utilisateur responsives avec HTML et CSS.s",
  },
  {
    year: "2021",
    title: "Stage – VIVA Évènement, Toamasina",
    desc: "Conception et réalisation d'un site web pour publier les nouvelles et diffuser en direct les évènements VIVA, développé en PHP.",
  },
  {
    year: "2019",
    title: "Stage – DRENETP Atsimo Andrefana",
    desc: "Conception et réalisation d'une application web de gestion des notes du CEPE, développée en PHP.",
  },
];

const DIPLOMAS = [
  {
    year: "2023",
    title: "Master professionnel en Informatique Générale",
    school: "École Nationale de l'Informatique à Fianarantsoa",
  },
  {
    year: "2021",
    title: "Licence professionnelle en Informatique Générale",
    school: "École Nationale de l'Informatique à Fianarantsoa",
  },
  {
    year: "2017",
    title: "Baccalauréat Série D",
    school: "Notre Dame de Nazareth à Tuléar",
  },
];

// ─── COMPOSANT PRINCIPAL ─────────────────────────────────────────────────────
export default function App() {
  const form = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("tous");
  const [showTop, setShowTop] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 400);
      const sections = [
        "accueil",
        "apropos",
        "competences",
        "projets",
        "experiences",
        "contact",
      ];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_zzoyvnh", "template_0gzh3zk", form.current, {
        publicKey: "R-03LjkpUJpidtfS5",
      })
      .then(
        () => {
          form.current.reset();
          toast.success("✅ Message envoyé avec succès !");
        },
        () => {
          toast.error("❌ Erreur lors de l'envoi. Réessayez.");
        },
      );
  };

  const navLinks = [
    { href: "#accueil", label: "Accueil", id: "accueil" },
    { href: "#apropos", label: "À propos", id: "apropos" },
    { href: "#competences", label: "Compétences", id: "competences" },
    { href: "#projets", label: "Projets", id: "projets" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  const filteredProjects =
    activeFilter === "tous"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <>
      <ToastContainer position="bottom-right" />

      {/* NAV */}
      <nav>
        <span className="nav-logo">
          {/* Olinah<span>.</span> */}
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Olinah"
            className="nav-logo img"
          />
        </span>
        <ul className="nav-links">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={l.href}
                className={activeSection === l.id ? "active" : ""}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          className="nav-cv"
          href={`${import.meta.env.BASE_URL}cv.pdf`}
          target="_blank"
          rel="noreferrer"
          download
        >
          <FaDownload size={12} /> Télécharger CV
        </a>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map((l) => (
          <a key={l.id} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
        <a
          href={`${import.meta.env.BASE_URL}cv.pdf`}
          download
          rel="noreferrer"
          className="nav-cv"
          style={{ alignSelf: "flex-start" }}
        >
          <FaDownload size={12} /> Télécharger CV
        </a>
      </div>

      {/* HERO */}
      <section id="accueil">
        <div className="hero-content">
          <p className="hero-label">Bonjour, je suis</p>
          <h1 className="hero-name">TODISOA Harivelo Olinah</h1>
          <p className="hero-title">Développeuse Web &amp; Mobile</p>
          <p className="hero-desc">
            Je conçois et développe des applications web et mobiles modernes,
            performantes et centrées sur l'utilisateur.
          </p>
          <div className="hero-btns">
            <a href="#projets" className="btn-primary">
              Voir mes projets
            </a>
            <a href="#contact" className="btn-outline">
              Me contacter
            </a>
          </div>
          <div className="hero-socials">
            <a
              href="https://linkedin.com/in/harivelo-olinah"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Olinah8/"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              <FaGithub />
            </a>
            <a href="mailto:olinahharivelo@gmail.com" className="social-btn">
              <FaEnvelope />
            </a>
            <a
              href="https://wa.me/261324186289"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div className="hero-img-wrap">
          <img
            src={`${import.meta.env.BASE_URL}oli.png`}
            alt="Olinah"
            className="hero-img"
          />
          <div className="hero-blob" />
        </div>
      </section>

      {/* STATS BAND */}
      <div className="stats-band">
        <div className="stats-text">
          <h3>
            Développeuse passionnée par les nouvelles technologies, avec une
            solide expérience dans la conception et le développement
            d'applications web et mobiles. J'aime relever les défis et
            transformer les idées en solutions innovantes et utiles.
          </h3>
        </div>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-num">2+</span>
            <span className="stat-label">
              Années
              <br />
              d'expérience
            </span>
          </div>
          <div className="stat-item">
            <span className="stat-num">10+</span>
            <span className="stat-label">
              Projets
              <br />
              réalisés
            </span>
          </div>
          <div className="stat-item">
            <span className="stat-num">😊</span>
            <span className="stat-label">
              Clients
              <br />
              Satisfaits
            </span>
          </div>
        </div>
      </div>

      {/* COMPÉTENCES */}
      <section id="competences">
        <h2 className="section-title">Technologies que j'utilise</h2>
        <span className="underline-orange" />
        <p className="section-sub" style={{ marginTop: ".75rem" }}>
          Mon stack technique
        </p>
        <div className="tech-grid">
          {TECHS.map((t) => (
            <div key={t.name} className="tech-item">
              <div className="tech-icon">
                <img src={t.img} alt={t.name} />
              </div>
              <span className="tech-name">{t.name}</span>
            </div>
          ))}
        </div>

        <h2 className="section-title">Mes Compétences</h2>
        <span className="underline-orange" />
        <p className="section-sub" style={{ marginTop: ".75rem" }}>
          Compétences techniques détaillées
        </p>
        <div className="skills-cols">
          {SKILLS_COLS.map((col) => (
            <div key={col.title} className="skill-col">
              <h4>{col.title}</h4>
              <ul className="skill-list">
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="cta-band">
          <div>
            <p>Vous avez un projet en tête ?</p>
            <p>
              Discutons de vos idées et créons quelque chose d'extraordinaire.
            </p>
          </div>
          <a href="#contact" className="btn-primary">
            Me contacter
          </a>
        </div>
      </section>

      {/* PROJETS */}
      <section id="projets">
        <h2 className="section-title">Mes Projets</h2>
        <span className="underline-orange" />
        <p className="section-sub" style={{ marginTop: ".75rem" }}>
          Quelques réalisations récentes
        </p>
        <div className="filter-tabs">
          {["tous", "web", "mobile"].map((f) => (
            <button
              key={f}
              className={`filter-tab ${activeFilter === f ? "active" : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f === "tous" ? "Tous" : f === "web" ? "Web" : "Mobile"}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filteredProjects.map((p) => (
            <div key={p.id} className="project-card">
              <div
                className="project-thumb"
                style={{
                  background: `linear-gradient(135deg, ${p.color}, #0d1b2a)`,
                }}
              >
                {p.img ? (
                  <img
                    src={p.img}
                    alt={p.title}
                    className={`project-thumb-img ${p.category === "mobile" ? "mobile" : ""}`}
                  />
                ) : (
                  <span style={{ fontSize: "3rem" }}>💻</span>
                )}
                <span className="project-badge">{p.badge}</span>
              </div>
              <div className="project-body">
                <p className="project-title">{p.title}</p>
                <p className="project-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* À PROPOS */}
      <section id="apropos">
        <div className="apropos-inner">
          <div className="apropos-img-wrap">
            <img
              src={`${import.meta.env.BASE_URL}image.png`}
              alt="Olinah"
              className="apropos-img"
            />
          </div>
          <div className="apropos-text">
            <h2>Qui suis-je ?</h2>
            <p>
              Je suis <strong>TODISOA Harivelo Olinah</strong>, développeuse web
              et mobile passionnée, spécialisée dans la conception et le
              développement d'applications modernes, performantes et intuitives.
            </p>
            <p>
              Mon objectif est d'apporter des solutions numériques innovantes et
              adaptées aux besoins des utilisateurs et des entreprises.
            </p>
            <div className="apropos-info">
              <div className="info-row">
                <FaEnvelope size={14} /> olinahharivelo@gmail.com
              </div>
              <div className="info-row">
                <FaPhone size={14} /> +261 34 74 32 233
              </div>
              <div className="info-row">
                <FaMapMarkerAlt size={14} /> Antananarivo, Madagascar
              </div>
              <div className="info-row">
                <FaLinkedin size={14} /> linkedin.com/in/harivelo-olinah
              </div>
            </div>
            <p className="parcours-title">Mon parcours</p>
            <div className="timeline">
              {DIPLOMAS.map((d) => (
                <div key={d.year} className="tl-item">
                  <span className="tl-dot" />
                  <p className="tl-year">{d.year}</p>
                  <p className="tl-diploma">{d.title}</p>
                  <p className="tl-school">{d.school}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPÉRIENCES */}
      <section id="experiences">
        <h2 className="section-title">Expériences professionnelles</h2>
        <span className="underline-orange" />
        <p className="section-sub" style={{ marginTop: ".75rem" }}>
          Mon parcours professionnel
        </p>
        <div className="exp-list">
          {EXPERIENCES.map((e) => (
            <div key={e.year} className="exp-card">
              <span className="exp-year-badge">{e.year}</span>
              <div className="exp-content">
                <h4>{e.title}</h4>
                <p>{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <h2 className="section-title">Me contacter</h2>
        <span className="underline-orange" />
        <p className="section-sub" style={{ marginTop: ".75rem" }}>
          Restons en contact !
        </p>
        <div className="contact-inner">
          <div className="contact-left">
            <h3>Vous avez un projet ou une question ?</h3>
            <p>
              N'hésitez pas à me contacter. Je réponds généralement sous 24h.
            </p>
            <div className="contact-detail">
              <FaPhone size={14} /> +261 34 74 32 233
            </div>
            <div className="contact-detail">
              <FaEnvelope size={14} />{" "}
              <a href="mailto:olinahharivelo@gmail.com">
                olinahharivelo@gmail.com
              </a>
            </div>
            <div className="contact-detail">
              <FaMapMarkerAlt size={14} /> Antananarivo, Madagascar
            </div>
            <div className="contact-detail">
              <FaLinkedin size={14} />{" "}
              <a
                href="https://linkedin.com/in/harivelo-olinah"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/harivelo-olinah
              </a>
            </div>
            <div className="contact-socials">
              <a
                href="https://linkedin.com/in/harivelo-olinah"
                target="_blank"
                rel="noreferrer"
                className="contact-social"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Olinah8/"
                target="_blank"
                rel="noreferrer"
                className="contact-social"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:olinahharivelo@gmail.com"
                className="contact-social"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://wa.me/261324186289"
                target="_blank"
                rel="noreferrer"
                className="contact-social"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-row">
              <div className="field-wrap">
                <label>Nom</label>
                <input
                  type="text"
                  name="nom"
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div className="field-wrap">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="votre@email.com"
                  required
                  pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                  title="Veuillez entrer une adresse email valide"
                />
              </div>
            </div>
            <div className="field-wrap">
              <label>Sujet</label>
              <input
                type="text"
                name="sujet"
                placeholder="Sujet de votre message"
              />
            </div>
            <div className="field-wrap">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Votre message..."
                required
              />
            </div>
            <button type="submit" className="btn-send">
              Envoyer le message →
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <span className="footer-logo">
            {/* Olinah<span>.</span> */}
            <img
              src={`${import.meta.env.BASE_URL}logo1.png`}
              alt="Olinah"
              className="footer-logo img"
            />
          </span>
          <span className="footer-copy">
            © 2024 Olinah. Tous droits réservés.
          </span>
          <button
            className="footer-top-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <FaArrowUp size={14} />
          </button>
        </div>
      </footer>

      {/* BACK TO TOP */}
      {showTop && (
        <button
          className="back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FaArrowUp size={14} />
        </button>
      )}
    </>
  );
}
