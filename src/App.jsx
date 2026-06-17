import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  Download,
  Hammer,
  Home,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Save,
  Search,
  ShieldCheck,
  Upload,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, Route, Routes, useParams } from "react-router-dom";
import { categories, heroVideo, initialContent } from "./data/siteContent.js";

const STORAGE_KEY = "tbhd-content-v1";

function useSiteContent() {
  const [content, setContent] = useState(initialContent);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return;
    try {
      setContent(JSON.parse(saved));
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const saveContent = (nextContent) => {
    setContent(nextContent);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextContent, null, 2));
  };

  const resetContent = () => {
    setContent(initialContent);
    window.localStorage.removeItem(STORAGE_KEY);
  };

  return { content, saveContent, resetContent };
}

function Seo({ content, title }) {
  useEffect(() => {
    document.title = title ? `${title} | ${content.brand.name}` : content.seo.title;
    setMeta("description", content.seo.description);
    setMeta("keywords", content.seo.keywords);
    setMetaProperty("og:title", document.title);
    setMetaProperty("og:description", content.seo.description);
    setMetaProperty("og:type", "website");
  }, [content, title]);

  return null;
}

function setMeta(name, value) {
  let node = document.querySelector(`meta[name="${name}"]`);
  if (!node) {
    node = document.createElement("meta");
    node.setAttribute("name", name);
    document.head.appendChild(node);
  }
  node.setAttribute("content", value);
}

function setMetaProperty(property, value) {
  let node = document.querySelector(`meta[property="${property}"]`);
  if (!node) {
    node = document.createElement("meta");
    node.setAttribute("property", property);
    document.head.appendChild(node);
  }
  node.setAttribute("content", value);
}

function Layout({ content, children }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <header className="site-header">
        <Link to="/" className="brand" onClick={close} aria-label={`${content.brand.name} home`}>
          <span>{content.brand.shortName}</span>
          <strong>{content.brand.name}</strong>
        </Link>
        <button className="icon-button menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`site-nav ${open ? "open" : ""}`}>
          <NavLink to="/" onClick={close}>Home</NavLink>
          <NavLink to="/services" onClick={close}>Services</NavLink>
          <NavLink to="/projects" onClick={close}>Projects</NavLink>
          <NavLink to="/about" onClick={close}>About</NavLink>
          <NavLink to="/contact" onClick={close}>Contact</NavLink>
          <NavLink to="/admin" onClick={close}>Admin</NavLink>
        </nav>
      </header>
      <main>{children}</main>
      <a className="whatsapp" href={`https://wa.me/${content.brand.whatsapp}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <MessageCircle size={24} />
      </a>
      <Footer content={content} />
    </>
  );
}

function Footer({ content }) {
  return (
    <footer className="footer">
      <div>
        <p className="eyebrow">{content.brand.tagline}</p>
        <h2>One accountable team for planning, execution, interiors, and finishing.</h2>
      </div>
      <div className="footer-grid">
        <div>
          <p>{content.brand.description}</p>
        </div>
        <div className="footer-links">
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <a href={`mailto:${content.brand.email}`}>{content.brand.email}</a>
        </div>
      </div>
    </footer>
  );
}

function HomePage({ content }) {
  return (
    <Layout content={content}>
      <Seo content={content} />
      <section className="hero">
        <video src={heroVideo} autoPlay muted loop playsInline />
        <div className="hero-shade" />
        <div className="hero-copy reveal">
          <p className="eyebrow">{content.hero.eyebrow}</p>
          <h1>{content.hero.title}</h1>
          <p>{content.hero.body}</p>
          <div className="hero-actions">
            <Link className="button" to="/contact">
              {content.hero.primaryCta} <ArrowRight size={18} />
            </Link>
            <Link className="button ghost" to="/services">
              {content.hero.secondaryCta}
            </Link>
          </div>
        </div>
        <div className="hero-metrics">
          {content.stats.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section intro-grid">
        <div>
          <p className="eyebrow">Custom Website Draft</p>
          <h2>Built to replace WordPress with structured content, faster pages, and cleaner campaign tracking.</h2>
        </div>
        <div className="intro-panel">
          <p>
            This React build separates content from layout so WordPress pages, testimonials, team details, services, project images, and SEO fields can be imported into one editable model.
          </p>
          <div className="check-list">
            {["WordPress export ready", "Admin JSON editor", "SEO metadata hooks", "Hostinger static deployment"].map((item) => (
              <span key={item}><Check size={16} /> {item}</span>
            ))}
          </div>
        </div>
      </section>

      <ServicePreview content={content} />
      <ProcessSection content={content} />
      <ProjectPreview content={content} />
      <Testimonials content={content} />
    </Layout>
  );
}

function ServicePreview({ content }) {
  return (
    <section className="section">
      <SectionHeading eyebrow="Services" title="Construction and interiors handled as one connected workflow." link="/services" linkText="All Services" />
      <div className="service-grid">
        {content.services.map((service, index) => (
          <article className="service-card" key={service.title} style={{ "--delay": `${index * 80}ms` }}>
            <img src={service.image} alt="" />
            <div>
              <p className="eyebrow">0{index + 1}</p>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProcessSection({ content }) {
  return (
    <section className="section process-section">
      <div>
        <p className="eyebrow">Execution System</p>
        <h2>Clear scope before site speed.</h2>
      </div>
      <div className="process-list">
        {content.process.map((step, index) => (
          <article key={step.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectPreview({ content }) {
  return (
    <section className="section">
      <SectionHeading eyebrow="Projects" title="Representative construction, interior, renovation, and commercial work." link="/projects" linkText="View Projects" />
      <ProjectGrid projects={content.projects.slice(0, 4)} />
    </section>
  );
}

function Testimonials({ content }) {
  return (
    <section className="section testimonials">
      <div>
        <p className="eyebrow">Client Voice</p>
        <h2>What customers should feel at every stage: clarity, control, and confidence.</h2>
      </div>
      <div className="testimonial-grid">
        {content.testimonials.map((item) => (
          <article key={`${item.name}-${item.location}`}>
            <p>"{item.quote}"</p>
            <span>{item.name} / {item.location}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function ServicesPage({ content }) {
  return (
    <Layout content={content}>
      <Seo content={content} title="Services" />
      <PageHero eyebrow="Services" title="Plan, build, renovate, and furnish with one team." />
      <section className="section service-detail-grid">
        {content.services.map((service) => (
          <article key={service.title} className="service-detail">
            <img src={service.image} alt="" />
            <div>
              <h2>{service.title}</h2>
              <p>{service.summary}</p>
              <ul>
                {service.points.map((point) => (
                  <li key={point}><Check size={16} /> {point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </Layout>
  );
}

function ProjectsPage({ content }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const activeCategories = ["All", ...new Set(content.projects.map((project) => project.category))];
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return content.projects.filter((project) => {
      const matchCategory = category === "All" || project.category === category;
      const haystack = `${project.title} ${project.category} ${project.location} ${project.summary}`.toLowerCase();
      return matchCategory && (!normalized || haystack.includes(normalized));
    });
  }, [category, content.projects, query]);

  return (
    <Layout content={content}>
      <Seo content={content} title="Projects" />
      <PageHero eyebrow="Projects" title="A portfolio structure ready for real WordPress project imports." />
      <section className="section">
        <div className="work-controls">
          <div className="tabs" aria-label="Project categories">
            {(activeCategories.length > 1 ? activeCategories : categories).map((item) => (
              <button key={item} className={item === category ? "active" : ""} type="button" onClick={() => setCategory(item)}>
                {item}
              </button>
            ))}
          </div>
          <label className="search-field">
            <Search size={18} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects" />
          </label>
        </div>
        <ProjectGrid projects={filtered} />
        {filtered.length === 0 && <p className="empty-state">No projects match this filter.</p>}
      </section>
    </Layout>
  );
}

function ProjectGrid({ projects }) {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <Link className="project-card" to={`/projects/${project.slug}`} key={project.slug}>
          <img src={project.cover} alt="" />
          <div>
            <p className="eyebrow">{project.category}</p>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <span>{project.location} / {project.year}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

function ProjectDetailPage({ content }) {
  const { slug } = useParams();
  const project = content.projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <Layout content={content}>
        <Seo content={content} title="Project Not Found" />
        <NotFound />
      </Layout>
    );
  }

  return (
    <Layout content={content}>
      <Seo content={content} title={project.title} />
      <section className="project-hero">
        <img src={project.cover} alt="" />
        <div>
          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
        </div>
      </section>
      <section className="project-detail-layout">
        <article className="project-story">
          <h2>{project.summary}</h2>
          <p>
            This detail page is connected to the content model and can be populated from the current WordPress project pages once the server export is available.
          </p>
          <div className="image-stack">
            {project.gallery.map((image, index) => (
              <img src={image} alt={`${project.title} view ${index + 1}`} key={image} />
            ))}
          </div>
        </article>
        <aside className="project-facts">
          {[
            ["Category", project.category],
            ["Location", project.location],
            ["Area", project.area],
            ["Year", project.year],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="eyebrow">{label}</p>
              <p>{value}</p>
            </div>
          ))}
        </aside>
      </section>
    </Layout>
  );
}

function AboutPage({ content }) {
  return (
    <Layout content={content}>
      <Seo content={content} title="About" />
      <PageHero eyebrow="About" title="A design-build website for AP and Telangana customers." />
      <section className="section about-grid">
        <div>
          <p className="eyebrow">Company</p>
          <h2>{content.brand.name}</h2>
        </div>
        <div>
          <p>{content.brand.description}</p>
          <p>
            The custom build is prepared for WordPress migration: pages, services, team members, testimonials, FAQs, project galleries, contact details, and SEO fields have dedicated structured homes.
          </p>
        </div>
      </section>
      <section className="section team">
        {content.team.map((member) => (
          <article key={member.name}>
            <img src={member.image} alt="" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </article>
        ))}
      </section>
      <section className="section faq">
        <p className="eyebrow">FAQ</p>
        <h2>Common project questions</h2>
        <div className="faq-list">
          {content.faqs.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </Layout>
  );
}

function ContactPage({ content }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout content={content}>
      <Seo content={content} title="Contact" />
      <section className="contact section page-offset">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Start a site visit or design discussion.</h1>
          <div className="contact-list">
            <a href={`mailto:${content.brand.email}`}><Mail size={18} /> {content.brand.email}</a>
            <a href={`tel:${content.brand.phone.replaceAll(" ", "")}`}><Phone size={18} /> {content.brand.phone}</a>
            <p><MapPin size={18} /> {content.brand.serviceArea}</p>
          </div>
        </div>
        <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
          <input aria-label="Name" name="name" placeholder="Name" required />
          <input aria-label="Phone" name="phone" placeholder="Phone" required />
          <input aria-label="Location" name="location" placeholder="Project location" />
          <select aria-label="Service" name="service" defaultValue="">
            <option value="" disabled>Service needed</option>
            {content.services.map((service) => (
              <option key={service.title}>{service.title}</option>
            ))}
          </select>
          <textarea aria-label="Message" name="message" rows="6" placeholder="Tell us about the plot, property, budget, or timeline" />
          <button className="button" type="submit">Send Enquiry</button>
          {submitted && <p className="form-note">Enquiry captured in the browser draft. The PHP/DB endpoint can be connected after Hostinger access is available.</p>}
        </form>
      </section>
    </Layout>
  );
}

function AdminPage({ content, saveContent, resetContent }) {
  const [draft, setDraft] = useState(JSON.stringify(content, null, 2));
  const [status, setStatus] = useState("");

  useEffect(() => {
    setDraft(JSON.stringify(content, null, 2));
  }, [content]);

  const save = () => {
    try {
      const parsed = JSON.parse(draft);
      saveContent(parsed);
      setStatus("Saved to browser storage. Export this JSON for the backend/content repository.");
    } catch (error) {
      setStatus(`Invalid JSON: ${error.message}`);
    }
  };

  const download = () => {
    const blob = new Blob([draft], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "tbhd-content.json";
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const importJson = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setDraft(String(reader.result));
    reader.readAsText(file);
  };

  return (
    <Layout content={content}>
      <Seo content={content} title="Admin" />
      <section className="admin-shell page-offset">
        <div className="admin-sidebar">
          <p className="eyebrow">Admin Tools</p>
          <h1>Content control panel</h1>
          <p>
            Edit the structured site content here, save locally for preview, and export JSON for the custom backend. This becomes the migration target for WordPress data.
          </p>
          <div className="admin-actions">
            <button className="button" type="button" onClick={save}><Save size={18} /> Save Draft</button>
            <button className="button ghost" type="button" onClick={download}><Download size={18} /> Export JSON</button>
            <label className="button ghost file-button">
              <Upload size={18} /> Import JSON
              <input type="file" accept="application/json" onChange={importJson} />
            </label>
            <button className="button ghost" type="button" onClick={resetContent}>Reset Seed</button>
          </div>
          {status && <p className="admin-status">{status}</p>}
          <div className="admin-kpis">
            <span><Building2 size={18} /> {content.services.length} services</span>
            <span><Layers3 size={18} /> {content.projects.length} projects</span>
            <span><BarChart3 size={18} /> SEO fields</span>
            <span><ShieldCheck size={18} /> Backend-ready JSON</span>
          </div>
        </div>
        <textarea className="json-editor" value={draft} onChange={(event) => setDraft(event.target.value)} spellCheck="false" />
      </section>
    </Layout>
  );
}

function SectionHeading({ eyebrow, title, link, linkText }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {link && <Link className="text-link" to={link}>{linkText} <ArrowRight size={18} /></Link>}
    </div>
  );
}

function PageHero({ eyebrow, title }) {
  return (
    <section className="page-hero">
      <div className="blueprint-grid" />
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
      </div>
      <Hammer className="page-hero-icon" size={120} strokeWidth={1} />
    </section>
  );
}

function NotFound() {
  return (
    <section className="not-found">
      <Home size={40} />
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <Link className="button" to="/">Go Home</Link>
    </section>
  );
}

export default function App() {
  const { content, saveContent, resetContent } = useSiteContent();

  return (
    <Routes>
      <Route path="/" element={<HomePage content={content} />} />
      <Route path="/services" element={<ServicesPage content={content} />} />
      <Route path="/projects" element={<ProjectsPage content={content} />} />
      <Route path="/projects/:slug" element={<ProjectDetailPage content={content} />} />
      <Route path="/about" element={<AboutPage content={content} />} />
      <Route path="/contact" element={<ContactPage content={content} />} />
      <Route path="/admin" element={<AdminPage content={content} saveContent={saveContent} resetContent={resetContent} />} />
      <Route path="*" element={<Layout content={content}><NotFound /></Layout>} />
    </Routes>
  );
}
