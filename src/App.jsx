import { useState, useEffect, useRef } from "react";
import "./App.css";
import {
  GitFork, Link2, Mail, Phone, MapPin, ExternalLink,
  ChevronDown, Award, Briefcase, GraduationCap, Code2,
  Cloud, Shield, Terminal, Activity, Star, ArrowRight,
  Brain, Cpu, Download, Eye, FileText, X, BookOpen
} from "lucide-react";
const Github = GitFork;
const Linkedin = Link2;

/* ─── Intersection-observer reveal hook ─── */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(30px)",
      transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
    }}>{children}</div>
  );
}

function SectionHeader({ eyebrow, title }) {
  return (
    <div>
      <span style={{
        fontSize: "0.7rem", letterSpacing: "0.22em", color: "var(--accent)",
        fontWeight: 700, textTransform: "uppercase", fontFamily: "var(--font-display)"
      }}>{eyebrow}</span>
      <h2 style={{
        fontFamily: "var(--font-display)", fontWeight: 800,
        fontSize: "clamp(1.9rem,3.5vw,3rem)", letterSpacing: "-0.02em",
        marginTop: "0.5rem", color: "var(--text)"
      }}>{title}</h2>
      <div style={{
        width: "56px", height: "3px", marginTop: "1rem",
        background: "linear-gradient(90deg, var(--accent), var(--accent2))",
        borderRadius: "2px"
      }} />
    </div>
  );
}

/* ─────────── DATA ─────────── */
const skills = {
  "Machine Learning": {
    icon: Brain,
    items: ["Classification","Regression","Clustering","Feature Engineering","Ensemble Learning","XGBoost","AdaBoost","Bagging","Boosting"]
  },
  "Deep Learning": {
    icon: Cpu,
    items: ["CNN","ANN","RNN","LSTM","GRU","Transformer","TensorFlow","Keras"]
  },
  "LLM & AI": {
    icon: BookOpen,
    items: ["LangChain","RAG Pipelines","Prompt Engineering","Fine-Tuning","Model Optimization","Pretraining","LLM APIs"]
  },
  "Cloud & DevOps": {
    icon: Cloud,
    items: ["AWS EC2/RDS/VPC/ECS/EKS/S3","Docker","Kubernetes","Terraform","ArgoCD","GitHub Actions","CodePipeline","CodeDeploy"]
  },
  "Data & Libraries": {
    icon: Activity,
    items: ["Pandas","NumPy","Scikit-learn","Matplotlib","Seaborn","Jupyter"]
  },
  "Programming": {
    icon: Code2,
    items: ["Python","C","C++","JavaScript","React.js","HTML/CSS","MERN Stack"]
  },
};

const experience = [
  {
    title: "LLM Using Python Intern",
    company: "Vigor Edtech",
    period: "May 2026 – July 2026",
    tag: "AI / LLM",
    points: [
      "Built LLM-powered applications using Python, leveraging LangChain for AI pipeline construction.",
      "Worked on prompt engineering, fine-tuning workflows, and integrating LLM APIs into educational tools.",
      "Implemented RAG (Retrieval-Augmented Generation) pipelines and conversational AI features for the edtech platform.",
    ]
  },
  {
    title: "Python Intern",
    company: "Codec Technologies Pvt. Limited",
    period: "April 2025 – June 2025",
    tag: "Python / Backend",
    points: [
      "Online internship focused on Python programming with real-world projects involving data handling, scripting, and automation.",
      "Developed and deployed Python-based solutions applying core OOP, file I/O, and API integration concepts.",
      "Collaborated with the team to build utility scripts and pipelines for internal workflows.",
    ]
  },
  {
    title: "DevOps Intern",
    company: "Ingenious Tech-World",
    period: "June 2025 – July 2025",
    tag: "DevOps / AWS",
    points: [
      "Built & maintained CI/CD pipelines via GitHub Actions and AWS CodePipeline.",
      "Automated app deployment on EC2 using CodeDeploy; managed clusters on Amazon ECS.",
      "Integrated Sealed Secrets for Kubernetes; modular Terraform infra with Trivy & Snyk security scanning.",
    ]
  },
  {
    title: "AWS Intern",
    company: "Ingenious Tech-World",
    period: "June 2024 – July 2024",
    tag: "AWS / Cloud",
    points: [
      "Hands-on with EC2, S3, IAM, RDS, VPC, CloudWatch in production-grade environments.",
      "Deployed multi-tier applications using ALB and Auto Scaling Groups.",
      "Configured secure networking with VPCs, subnets, route tables, and security groups.",
    ]
  },
];

const projects = [
  {
    title: "Silicon Wafer Fault Detection",
    tag: "ML · UCI SECOM Dataset",
    date: "December 2025",
    desc: "End-to-end ML pipeline on the UCI SECOM semiconductor manufacturing dataset (1,567 samples, 591 features) to detect faulty wafers. Trained and compared 5 classifiers — Logistic Regression, SVM-RBF, Gaussian Naive Bayes, Random Forest, KNN (GridSearchCV k=2). SVM-RBF achieved 99.66% accuracy and perfect ROC AUC (1.0) with zero false negatives.",
    tech: ["Python","Scikit-learn","SVM-RBF","Random Forest","GridSearchCV","Pandas","NumPy"],
    accent: "#4da6ff"
  },
  {
    title: "AI FAQ Chatbot",
    tag: "Conversational AI · NLP",
    date: "May 2026",
    desc: "AI-powered FAQ chatbot leveraging NLP techniques for multi-turn conversations. Created a custom knowledge base for Q&A. Implemented intent recognition and context-aware response generation using LangChain for an interactive user experience.",
    tech: ["Python","LangChain","NLP","RAG","Intent Recognition","Custom KB"],
    accent: "#7ec8ff"
  },
  {
    title: "Customer Churn Prediction",
    tag: "Binary Classification · Tabular Data",
    date: "February 2026",
    desc: "Supervised learning pipeline to predict customer churn using feature engineering, encoding, and scaling on structured business data. Evaluated multiple classifiers and achieved best results using HistGradientBoosting. Generated actionable insights through feature importance analysis identifying top drivers of attrition.",
    tech: ["Python","Scikit-learn","HistGradientBoosting","Feature Engineering","Pandas","Matplotlib"],
    accent: "#4da6ff"
  },
  {
    title: "Scalable 2-Tier Web App on AWS",
    tag: "High Availability · Cloud",
    date: "2025",
    desc: "Provisioned separate VPCs with public/private subnets for frontend/backend isolation via OpenVPN. Configured ALB, Auto Scaling Groups & Route 53 for high availability and automatic failure recovery. Production-grade multi-tier architecture.",
    tech: ["AWS","VPC","ALB","Auto Scaling","RDS","OpenVPN","Route 53"],
    accent: "#7ec8ff"
  },
  {
    title: "End-to-End CI/CD Pipeline",
    tag: "Kubernetes · Terraform · DevSecOps",
    date: "2025",
    desc: "Automated infrastructure with modular Terraform IaC. Implemented Trivy & tfsec security gates blocking insecure container images. Managed Kubernetes secrets via Sealed Secrets; app served via Docker Hub, NGINX, and K8s manifests.",
    tech: ["Terraform","GitHub Actions","Docker","Kubernetes","Trivy","tfsec","AWS"],
    accent: "#4da6ff"
  },
  {
    title: "HomelyHub",
    tag: "Full-Stack · MERN",
    date: "2024",
    desc: "Airbnb-style property booking platform built with the MERN stack. Features full CRUD operations, user authentication, property listing, search/filter functionality, and booking management. Responsive design across all devices.",
    tech: ["MongoDB","Express.js","React.js","Node.js","REST API","JWT Auth"],
    accent: "#7ec8ff"
  },
];

const education = [
  { degree: "B.Tech — Computer Science & Engineering", school: "Silicon University, Bhubaneswar", year: "2023 – 2027", score: "CGPA: 9.49" },
  { degree: "Higher Secondary (Class XII)", school: "Saraswati Science HSS, Cuttack", year: "2022", score: "91.5%" },
  { degree: "Matriculation (Class X)", school: "Saraswati Sishu Vidya Mandir, Khordha", year: "2020", score: "82.67%" },
];

const achievements = [
  { icon: Star,  text: "Winner — Spec2Model ML Hackathon 2026, Silicon University" },
  { icon: Award, text: "2nd Place — WebTronics Event" },
  { icon: Terminal, text: "Solved 150+ DSA Problems across multiple platforms" },
  { icon: Award, text: "State Scholarship — Class V" },
  { icon: BookOpen, text: "The Joy of Computing Using Python — Elite + Silver (IIT Ropar, NPTEL)" },
  { icon: Brain,  text: "Deep Learning — Elite + Silver (IIT Ropar, NPTEL)" },
];

const techMarquee = [
  "Python","LangChain","TensorFlow","Keras","Scikit-learn","XGBoost","RAG",
  "AWS","Docker","Kubernetes","Terraform","GitHub Actions","React.js","MERN",
  "Pandas","NumPy","CNN","LSTM","Transformer","Prometheus","Grafana","NGINX"
];

/* ─────────── RESUME MODAL ─────────── */
function ResumeModal({ onClose }) {
  const pdfUrl = "/Asish_Sarangi_Resume_ML.pdf";
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "rgba(2,11,24,0.92)",
      backdropFilter: "blur(10px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      animation: "fadeUp 0.3s ease",
      padding: "1rem"
    }} onClick={onClose}>
      <div style={{
        background: "var(--surface3)",
        border: "1px solid var(--border2)",
        borderRadius: "20px",
        width: "min(960px, 95vw)",
        height: "min(88vh, 900px)",
        display: "flex", flexDirection: "column",
        overflow: "hidden",
        boxShadow: "0 40px 120px rgba(0,0,0,0.7), 0 0 60px rgba(77,166,255,0.1)"
      }} onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "1.2rem 1.8rem",
          borderBottom: "1px solid var(--border)",
          background: "rgba(4,20,42,0.9)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <FileText size={20} style={{ color: "var(--accent)" }} />
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.05rem", color: "var(--text)" }}>
              Asish Sarangi — Resume
            </span>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <a
              href={pdfUrl}
              download="Asish_Sarangi_Resume_ML.pdf"
              style={{
                display: "flex", alignItems: "center", gap: "7px",
                padding: "8px 18px", borderRadius: "8px",
                background: "linear-gradient(135deg, var(--accent3), var(--accent))",
                color: "#fff", textDecoration: "none",
                fontSize: "0.82rem", fontWeight: 700,
                fontFamily: "var(--font-display)",
                transition: "opacity 0.2s"
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              <Download size={14} /> Download
            </a>
            <button onClick={onClose} style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid var(--border)",
              borderRadius: "8px", padding: "7px",
              color: "var(--muted)", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s"
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,80,80,0.12)"; e.currentTarget.style.color = "#ff5555"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "var(--muted)"; }}
            >
              <X size={16} />
            </button>
          </div>
        </div>
        {/* PDF Viewer */}
        <div style={{ flex: 1, overflow: "hidden" }}>
          <iframe
            src={pdfUrl}
            title="Resume Preview"
            style={{ width: "100%", height: "100%", border: "none", background: "#fff" }}
          />
        </div>
      </div>
    </div>
  );
}

/* ─────────── NAVBAR ─────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["About","Skills","Experience","Projects","Education","Resume","Contact"];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      height: "72px", display: "flex", alignItems: "center",
      justifyContent: "space-between", padding: "0 5vw",
      background: scrolled ? "rgba(2,11,24,0.95)" : "rgba(2,11,24,0.7)",
      backdropFilter: "blur(18px)",
      borderBottom: "1px solid rgba(77,166,255,0.08)",
      transition: "all 0.3s ease",
    }}>
      {/* Animated top border */}
      <div style={{
        position: "absolute", top: 0, left: 0, width: "100%", height: "2px",
        background: "linear-gradient(90deg, var(--accent3), var(--accent), var(--accent2), var(--accent3))",
        backgroundSize: "300% 100%",
        animation: "navPulse 6s linear infinite",
      }} />

      {/* Logo */}
      <a href="#about" style={{
        textDecoration: "none", fontFamily: "var(--font-display)",
        fontSize: "clamp(1.05rem, 2vw, 1.4rem)", fontWeight: 800, color: "white",
        letterSpacing: "-0.01em", lineHeight: 1,
        display: "flex", alignItems: "center", whiteSpace: "nowrap",
        zIndex: 2
      }}>
        Asish&nbsp;Sarangi
        <span style={{
          background: "linear-gradient(135deg, var(--accent), var(--accent2))",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          marginLeft: "2px"
        }}>.</span>
      </a>

      {/* Desktop Links */}
      <div className="nav-links-desktop" style={{ display: "flex", alignItems: "center", gap: "2rem", lineHeight: 1 }}>
        {links.map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} className="nav-link" style={{
            textDecoration: "none", color: "var(--muted)",
            fontSize: "0.8rem", fontWeight: 600,
            letterSpacing: "0.1em", textTransform: "uppercase",
            fontFamily: "var(--font-display)",
            lineHeight: 1,
            display: "inline-flex", alignItems: "center",
            transition: "color 0.2s ease",
          }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
          >
            {link}
          </a>
        ))}
      </div>

      {/* Mobile Toggle */}
      <button
        className="nav-toggle"
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle navigation menu"
        style={{
          display: "none", background: "rgba(77,166,255,0.08)",
          border: "1px solid var(--border)", borderRadius: "8px",
          width: "40px", height: "40px", cursor: "pointer",
          color: "var(--accent)", alignItems: "center", justifyContent: "center",
          zIndex: 2, flexDirection: "column", gap: "4px"
        }}
      >
        <span style={{
          display: "block", width: "18px", height: "2px", background: "var(--accent)",
          transition: "transform 0.25s ease", transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none"
        }} />
        <span style={{
          display: "block", width: "18px", height: "2px", background: "var(--accent)",
          transition: "opacity 0.2s ease", opacity: menuOpen ? 0 : 1
        }} />
        <span style={{
          display: "block", width: "18px", height: "2px", background: "var(--accent)",
          transition: "transform 0.25s ease", transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none"
        }} />
      </button>

      {/* Mobile Menu Panel */}
      <div className="nav-mobile-panel" style={{
        position: "fixed", top: "72px", left: 0, right: 0,
        background: "rgba(2,11,24,0.97)", backdropFilter: "blur(18px)",
        borderBottom: "1px solid var(--border)",
        display: "flex", flexDirection: "column",
        padding: menuOpen ? "1rem 5vw 1.5rem" : "0 5vw",
        maxHeight: menuOpen ? "70vh" : "0",
        overflow: "hidden",
        opacity: menuOpen ? 1 : 0,
        transition: "all 0.3s ease",
        gap: "0.4rem"
      }}>
        {links.map(link => (
          <a key={link} href={`#${link.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            style={{
              textDecoration: "none", color: "var(--muted)",
              fontSize: "0.95rem", fontWeight: 600,
              letterSpacing: "0.06em", textTransform: "uppercase",
              fontFamily: "var(--font-display)",
              padding: "0.85rem 0.2rem",
              borderBottom: "1px solid var(--border)",
              transition: "color 0.2s ease",
            }}
          >
            {link}
          </a>
        ))}
      </div>

      <style>{`
        @media (max-width: 860px) {
          .nav-links-desktop { display: none !important; }
          .nav-toggle { display: flex !important; }
        }
        @media (min-width: 861px) {
          .nav-mobile-panel { display: none !important; }
        }
      `}</style>
    </nav>
  );
}

/* ─────────── HERO ─────────── */
function Hero() {
  const [typed, setTyped] = useState("");
  const roles = [
    "ML/DL Engineer","LLM Architect","CS Student · 9.49 CGPA",
    "DevOps & Cloud Engineer","Python Developer","AI Builder"
  ];
  const [ri, setRi] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const cur = roles[ri];
    let t;
    if (!deleting && typed.length < cur.length)
      t = setTimeout(() => setTyped(cur.slice(0, typed.length + 1)), 75);
    else if (!deleting && typed.length === cur.length)
      t = setTimeout(() => setDeleting(true), 1800);
    else if (deleting && typed.length > 0)
      t = setTimeout(() => setTyped(typed.slice(0, -1)), 38);
    else { setDeleting(false); setRi((ri + 1) % roles.length); }
    return () => clearTimeout(t);
  }, [typed, deleting, ri]);

  return (
    <section id="about" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "0 5vw", position: "relative", overflow: "hidden"
    }}>
      {/* BG orbs */}
      <div style={{
        position: "absolute", width: "700px", height: "700px", borderRadius: "50%",
        left: "-250px", top: "-250px",
        background: "radial-gradient(circle, rgba(13,52,120,0.4) 0%, transparent 70%)", zIndex: 0
      }} />
      <div style={{
        position: "absolute", width: "500px", height: "500px", borderRadius: "50%",
        right: "-100px", bottom: "-100px",
        background: "radial-gradient(circle, rgba(8,38,90,0.35) 0%, transparent 70%)", zIndex: 0
      }} />

      <div style={{
        display: "flex", gap: "6vw", alignItems: "center",
        maxWidth: "1200px", width: "100%", margin: "0 auto",
        paddingTop: "72px", zIndex: 1, position: "relative", flexWrap: "wrap"
      }}>
        {/* Text */}
        <div style={{ flex: "1 1 420px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(77,166,255,0.08)", border: "1px solid rgba(77,166,255,0.22)",
            borderRadius: "100px", padding: "6px 18px", marginBottom: "1.5rem",
            animation: "fadeUp 0.7s ease forwards"
          }}>
            <div style={{
              width: "7px", height: "7px", borderRadius: "50%",
              background: "var(--accent)", animation: "pulse-glow 2s ease infinite"
            }} />
            <span style={{ fontSize: "0.75rem", color: "var(--accent)", letterSpacing: "0.1em", fontWeight: 600, fontFamily: "var(--font-display)" }}>
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
            lineHeight: 1.05, letterSpacing: "-0.03em",
            animation: "fadeUp 0.7s ease 0.1s both"
          }}>
            Asish<br />
            <span style={{
              background: "linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
            }}>Sarangi</span>
          </h1>

          <div style={{
            marginTop: "1rem", marginBottom: "1.5rem",
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1rem,2vw,1.35rem)", color: "var(--muted)",
            fontWeight: 600, animation: "fadeUp 0.7s ease 0.2s both", minHeight: "2rem"
          }}>
            {typed}
            <span style={{ animation: "blink 1s step-end infinite", color: "var(--accent)" }}>|</span>
          </div>

          <p style={{
            color: "var(--muted)", fontSize: "1rem", maxWidth: "520px",
            lineHeight: 1.8, animation: "fadeUp 0.7s ease 0.3s both",
            fontFamily: "var(--font-display)"
          }}>
            B.Tech CSE student at Silicon University with a{" "}
            <strong style={{ color: "var(--text)" }}>9.49 CGPA</strong>.
            Specializing in <strong style={{ color: "var(--accent)" }}>Machine Learning</strong> &{" "}
            <strong style={{ color: "var(--accent2)" }}>LLM Engineering</strong>, with hands-on
            DevOps/Cloud experience. Building intelligent systems that ship.
          </p>

          <div style={{
            display: "flex", gap: "1rem", marginTop: "2rem",
            flexWrap: "wrap", animation: "fadeUp 0.7s ease 0.4s both"
          }}>
            <a href="#projects" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "linear-gradient(135deg, var(--accent3), var(--accent))",
              color: "#fff", fontWeight: 700, padding: "12px 28px",
              borderRadius: "8px", fontSize: "0.9rem", textDecoration: "none",
              fontFamily: "var(--font-display)",
              transition: "transform 0.2s, box-shadow 0.2s"
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(77,166,255,0.35)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a href="#resume" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "transparent", color: "var(--text)", fontWeight: 600,
              padding: "12px 28px", borderRadius: "8px", fontSize: "0.9rem",
              textDecoration: "none", fontFamily: "var(--font-display)",
              border: "1px solid var(--border2)", transition: "all 0.2s"
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.background = "rgba(77,166,255,0.06)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border2)"; e.currentTarget.style.background = "transparent"; }}
            >
              <FileText size={16} /> View Resume
            </a>
          </div>

          <div style={{ display: "flex", gap: "0.9rem", marginTop: "2rem", animation: "fadeUp 0.7s ease 0.5s both" }}>
            {[
              { icon: Github, href: "https://github.com/asish915", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/asish-sarangi-8a33322a6/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:asishsarangi2005@gmail.com", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label} style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: "42px", height: "42px", borderRadius: "10px",
                background: "var(--surface2)", border: "1px solid var(--border)",
                color: "var(--muted)", textDecoration: "none", transition: "all 0.2s"
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(77,166,255,0.1)"; e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--surface2)"; e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)"; }}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div style={{ flex: "0 0 auto", animation: "float 5s ease-in-out infinite" }}>
          <div style={{ position: "relative", width: "clamp(200px,26vw,300px)", aspectRatio: "1" }}>
            <div style={{
              position: "absolute", inset: "-14px", borderRadius: "50%",
              border: "2px dashed rgba(77,166,255,0.3)",
              animation: "spin 22s linear infinite"
            }} />
            <div style={{
              position: "absolute", inset: "-28px", borderRadius: "50%",
              border: "1px dashed rgba(77,166,255,0.12)",
              animation: "spin 35s linear infinite reverse"
            }} />
            <div style={{
              width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden",
              border: "3px solid rgba(77,166,255,0.35)",
              boxShadow: "0 0 60px rgba(77,166,255,0.15), 0 0 120px rgba(13,52,120,0.2)"
            }}>
              <img src="/asish.jpg" alt="Asish Sarangi"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
            </div>
            <div style={{
              position: "absolute", bottom: "10px", right: "-20px",
              background: "var(--surface3)", border: "1px solid var(--border2)",
              borderRadius: "12px", padding: "10px 16px",
              backdropFilter: "blur(12px)", boxShadow: "0 8px 32px rgba(0,0,0,0.5)"
            }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1rem", color: "var(--accent)" }}>
                ML Engineer
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
        color: "var(--muted)", fontSize: "0.68rem", letterSpacing: "0.14em",
        animation: "fadeUp 1s ease 1s both"
      }}>
        <span style={{ fontFamily: "var(--font-display)" }}>SCROLL</span>
        <ChevronDown size={14} style={{ animation: "float 2s ease-in-out infinite" }} />
      </div>
    </section>
  );
}

/* ─────────── STATS ─────────── */
function Stats() {
  const stats = [
    { value: "9.49", label: "CGPA" },
    { value: "150+", label: "DSA Solved" },
    { value: "4", label: "Internships" },
    { value: "6+", label: "ML Projects" },
  ];
  return (
    <section style={{ padding: "2rem 5vw" }}>
      <div style={{
        maxWidth: "1100px", margin: "0 auto",
        display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "1rem"
      }}>
        {stats.map(s => (
          <div key={s.label} style={{
            background: "var(--surface)", border: "1px solid var(--border)",
            borderRadius: "18px", padding: "1.8rem", textAlign: "center",
            transition: "all 0.25s",
            boxShadow: "inset 0 1px 0 rgba(77,166,255,0.08)"
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border2)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = ""; }}
          >
            <div style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", fontWeight: 800, color: "var(--accent)" }}>{s.value}</div>
            <div style={{ color: "var(--muted)", fontSize: "0.85rem", marginTop: "4px", fontFamily: "var(--font-display)" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────── MARQUEE ─────────── */
function TechMarquee() {
  const items = [...techMarquee, ...techMarquee];
  return (
    <div style={{
      overflow: "hidden",
      borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)",
      padding: "14px 0", background: "rgba(4,16,36,0.8)"
    }}>
      <div style={{ display: "flex", gap: "3rem", animation: "marquee 30s linear infinite", width: "max-content" }}>
        {items.map((t, i) => (
          <span key={i} style={{
            fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em",
            color: i % 4 === 0 ? "var(--accent)" : i % 4 === 2 ? "var(--accent2)" : "var(--muted)",
            textTransform: "uppercase", whiteSpace: "nowrap",
            fontFamily: "var(--font-display)"
          }}>
            {t} <span style={{ opacity: 0.25, margin: "0 0.4rem" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────── SKILLS ─────────── */
function Skills() {
  return (
    <section id="skills" style={{ padding: "7rem 5vw" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Reveal><SectionHeader eyebrow="What I Know" title="Skills & Technologies" /></Reveal>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "1.5rem", marginTop: "3rem"
        }}>
          {Object.entries(skills).map(([cat, { icon: Icon, items }], i) => (
            <Reveal key={cat} delay={i * 80}>
              <div className="card-hover" style={{
                background: "var(--surface)", border: "1px solid var(--border)",
                borderRadius: "18px", padding: "2rem", height: "100%"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.4rem" }}>
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "12px",
                    background: "rgba(77,166,255,0.1)", border: "1px solid rgba(77,166,255,0.18)",
                    display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)"
                  }}>
                    <Icon size={20} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem" }}>{cat}</h3>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                  {items.map(item => (
                    <span key={item} style={{
                      fontSize: "0.75rem", padding: "4px 11px", borderRadius: "7px",
                      background: "rgba(77,166,255,0.07)", color: "var(--muted)",
                      border: "1px solid rgba(77,166,255,0.14)",
                      fontWeight: 500, fontFamily: "var(--font-display)"
                    }}>{item}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── EXPERIENCE ─────────── */
function Experience() {
  return (
    <section id="experience" style={{ padding: "7rem 5vw", background: "var(--surface)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Reveal><SectionHeader eyebrow="Career" title="Work Experience" /></Reveal>
        <div style={{ marginTop: "3rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
          {experience.map((exp, i) => (
            <Reveal key={i} delay={i * 100}>
              <div style={{
                background: "var(--bg)", border: "1px solid var(--border)",
                borderRadius: "18px", padding: "2rem",
                transition: "border-color 0.2s",
                position: "relative", overflow: "hidden"
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "var(--border2)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
              >
                {/* Left accent bar */}
                <div style={{
                  position: "absolute", left: 0, top: 0, bottom: 0, width: "3px",
                  background: "linear-gradient(180deg, var(--accent3), var(--accent))",
                  borderRadius: "2px 0 0 2px"
                }} />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 2.5fr", gap: "2rem", flexWrap: "wrap" }}>
                  <div style={{ borderRight: "1px solid var(--border)", paddingRight: "2rem" }}>
                    <span style={{
                      display: "inline-block",
                      background: "rgba(77,166,255,0.1)", color: "var(--accent)",
                      borderRadius: "6px", padding: "4px 10px",
                      fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em",
                      marginBottom: "0.8rem", fontFamily: "var(--font-display)"
                    }}>{exp.tag}</span>
                    <div style={{
                      fontSize: "0.72rem", color: "var(--muted2)",
                      fontFamily: "var(--font-display)", marginBottom: "0.6rem"
                    }}>{exp.period}</div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.05rem", marginBottom: "4px" }}>{exp.title}</h3>
                    <p style={{ color: "var(--muted)", fontSize: "0.85rem", fontFamily: "var(--font-display)" }}>{exp.company}</p>
                  </div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                    {exp.points.map((p, j) => (
                      <li key={j} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                        <span style={{ color: "var(--accent)", marginTop: "5px", flexShrink: 0, fontSize: "0.7rem" }}>▸</span>
                        <span style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.65, fontFamily: "var(--font-display)" }}>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── PROJECTS ─────────── */
function Projects() {
  return (
    <section id="projects" style={{ padding: "7rem 5vw" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Reveal><SectionHeader eyebrow="What I've Built" title="Featured Projects" /></Reveal>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
          gap: "2rem", marginTop: "3rem"
        }}>
          {projects.map((p, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="card-hover" style={{
                background: "var(--surface)", border: "1px solid var(--border)",
                borderRadius: "20px", padding: "2rem",
                height: "100%", display: "flex", flexDirection: "column", gap: "1.1rem"
              }}>
                {/* top gradient bar */}
                <div style={{
                  height: "3px", borderRadius: "2px",
                  background: `linear-gradient(90deg, ${p.accent}, var(--accent2))`
                }} />
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", flexWrap: "wrap-reverse" }}>
                    <span style={{
                      fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em",
                      color: "var(--accent)", textTransform: "uppercase",
                      fontFamily: "var(--font-display)", lineHeight: 1.5
                    }}>{p.tag}</span>
                    <span style={{
                      fontSize: "0.68rem", color: "var(--muted2)",
                      fontFamily: "var(--font-display)", whiteSpace: "nowrap"
                    }}>{p.date}</span>
                  </div>
                  <h3 style={{
                    fontFamily: "var(--font-display)", fontWeight: 800,
                    fontSize: "1.1rem", marginTop: "6px", color: "var(--text)"
                  }}>{p.title}</h3>
                </div>
                <p style={{
                  color: "var(--muted)", fontSize: "0.87rem",
                  lineHeight: 1.75, flex: 1, fontFamily: "var(--font-display)"
                }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {p.tech.map(t => (
                    <span key={t} style={{
                      fontSize: "0.7rem", padding: "3px 10px", borderRadius: "100px",
                      background: "rgba(77,166,255,0.07)", border: "1px solid rgba(77,166,255,0.18)",
                      color: "var(--accent2)", fontWeight: 600, fontFamily: "var(--font-display)"
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── EDUCATION ─────────── */
function Education() {
  return (
    <section id="education" style={{ padding: "7rem 5vw", background: "var(--surface)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Reveal><SectionHeader eyebrow="Academic Background" title="Education" /></Reveal>
        <div style={{ marginTop: "3rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {education.map((e, i) => (
            <Reveal key={i} delay={i * 80}>
              <div style={{
                display: "flex", alignItems: "center", gap: "2rem",
                background: "var(--bg)", border: "1px solid var(--border)",
                borderRadius: "16px", padding: "1.5rem 2rem",
                transition: "border-color 0.2s", flexWrap: "wrap"
              }}
                onMouseEnter={el => el.currentTarget.style.borderColor = "var(--border2)"}
                onMouseLeave={el => el.currentTarget.style.borderColor = "var(--border)"}
              >
                <div style={{
                  width: "48px", height: "48px", borderRadius: "12px", flexShrink: 0,
                  background: "rgba(77,166,255,0.08)", border: "1px solid rgba(77,166,255,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)"
                }}>
                  <GraduationCap size={22} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.95rem" }}>{e.degree}</div>
                  <div style={{ color: "var(--muted)", fontSize: "0.82rem", marginTop: "2px", fontFamily: "var(--font-display)" }}>{e.school}</div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: "0.78rem", color: "var(--muted)", marginBottom: "4px", fontFamily: "var(--font-display)" }}>{e.year}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.05rem", color: "var(--accent)" }}>{e.score}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Achievements */}
        <Reveal delay={300}>
          <div style={{ marginTop: "4rem" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.3rem", marginBottom: "1.5rem" }}>
              Achievements & Certifications
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1rem" }}>
              {achievements.map(({ icon: Icon, text }, i) => (
                <div key={i} style={{
                  display: "flex", gap: "12px", alignItems: "flex-start",
                  background: "var(--bg)", border: "1px solid var(--border)",
                  borderRadius: "12px", padding: "1rem 1.2rem",
                  transition: "border-color 0.2s"
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "var(--border2)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
                >
                  <Icon size={16} style={{ color: "var(--accent)", flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.5, fontFamily: "var(--font-display)" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────── RESUME SECTION ─────────── */
function ResumeSection() {
  const [showModal, setShowModal] = useState(false);
  const pdfUrl = "/Asish_Sarangi_Resume_ML.pdf";

  return (
    <section id="resume" style={{ padding: "7rem 5vw" }}>
      {showModal && <ResumeModal onClose={() => setShowModal(false)} />}
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <Reveal><SectionHeader eyebrow="My Resume" title="Curriculum Vitae" /></Reveal>
        <Reveal delay={150}>
          <div style={{
            marginTop: "3rem",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.35)"
          }}>
            {/* Preview thumbnail area */}
            <div style={{
              position: "relative",
              background: "linear-gradient(135deg, rgba(4,16,36,0.95), rgba(8,28,60,0.95))",
              padding: "4rem 3rem",
              textAlign: "center",
              borderBottom: "1px solid var(--border)"
            }}>
              {/* Decorative pattern */}
              <div style={{
                position: "absolute", inset: 0, opacity: 0.04,
                backgroundImage: "linear-gradient(rgba(77,166,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(77,166,255,0.5) 1px, transparent 1px)",
                backgroundSize: "30px 30px", pointerEvents: "none"
              }} />

              {/* Document icon graphic */}
              <div style={{
                width: "100px", height: "130px", margin: "0 auto 2rem",
                background: "var(--surface3)",
                border: "1.5px solid var(--border2)",
                borderRadius: "12px",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: "8px",
                boxShadow: "0 8px 40px rgba(77,166,255,0.15)",
                position: "relative",
                transition: "transform 0.3s ease",
              }}>
                <div style={{
                  position: "absolute", top: "-1px", right: "-1px",
                  width: "28px", height: "28px",
                  background: "var(--bg)",
                  borderBottom: "1.5px solid var(--border2)",
                  borderLeft: "1.5px solid var(--border2)",
                  borderRadius: "0 12px 0 8px"
                }} />
                <FileText size={32} style={{ color: "var(--accent)" }} />
                <div style={{ fontFamily: "var(--font-display)", fontSize: "0.65rem", color: "var(--muted)", letterSpacing: "0.08em" }}>PDF</div>
                {[0,1,2,3].map(j => (
                  <div key={j} style={{
                    width: "56px", height: "4px", borderRadius: "2px",
                    background: "rgba(77,166,255,0.15)"
                  }} />
                ))}
              </div>

              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                Asish Sarangi
              </h3>
              <p style={{ color: "var(--muted)", fontFamily: "var(--font-display)", fontSize: "0.9rem", marginBottom: "0.3rem" }}>
                ML/DL Engineer · LLM Architect · DevOps
              </p>
              <p style={{ color: "var(--muted2)", fontFamily: "var(--font-display)", fontSize: "0.8rem" }}>
                Silicon University · B.Tech CSE · CGPA 9.49
              </p>
            </div>

            {/* Action buttons */}
            <div style={{
              padding: "2rem 3rem",
              display: "flex", gap: "1.2rem", flexWrap: "wrap",
              justifyContent: "center", alignItems: "center",
              background: "rgba(4,16,36,0.5)"
            }}>
              <button onClick={() => setShowModal(true)} style={{
                display: "flex", alignItems: "center", gap: "10px",
                padding: "14px 32px", borderRadius: "10px",
                background: "rgba(77,166,255,0.1)",
                border: "1.5px solid var(--border2)",
                color: "var(--accent)", cursor: "pointer",
                fontSize: "0.9rem", fontWeight: 700,
                fontFamily: "var(--font-display)",
                transition: "all 0.25s ease",
                letterSpacing: "0.03em"
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(77,166,255,0.18)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 28px rgba(77,166,255,0.2)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(77,166,255,0.1)";
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <Eye size={18} /> Preview Online
              </button>

              <a href={pdfUrl} download="Asish_Sarangi_Resume_ML.pdf" style={{
                display: "flex", alignItems: "center", gap: "10px",
                padding: "14px 32px", borderRadius: "10px",
                background: "linear-gradient(135deg, var(--accent3), var(--accent))",
                border: "none", color: "#fff", cursor: "pointer",
                fontSize: "0.9rem", fontWeight: 700,
                fontFamily: "var(--font-display)",
                textDecoration: "none",
                transition: "all 0.25s ease",
                letterSpacing: "0.03em"
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(77,166,255,0.4)";
                  e.currentTarget.style.opacity = "0.92";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow = "";
                  e.currentTarget.style.opacity = "1";
                }}
              >
                <Download size={18} /> Download PDF
              </a>
            </div>

            {/* Info bar */}
            <div style={{
              borderTop: "1px solid var(--border)",
              padding: "1rem 3rem",
              display: "flex", justifyContent: "center", gap: "3rem", flexWrap: "wrap",
              background: "rgba(2,8,18,0.5)"
            }}>
              {[
                { label: "Format", value: "PDF" },
                { label: "Updated", value: "June 2026" },
                { label: "Focus", value: "ML / AI / DevOps" }
              ].map(({ label, value }) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "0.68rem", color: "var(--muted2)", letterSpacing: "0.1em", fontFamily: "var(--font-display)", textTransform: "uppercase" }}>{label}</div>
                  <div style={{ fontSize: "0.85rem", color: "var(--accent)", fontWeight: 700, fontFamily: "var(--font-display)", marginTop: "2px" }}>{value}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────── CONTACT ─────────── */
function Contact() {
  return (
    <section id="contact" style={{ padding: "7rem 5vw", background: "var(--surface)" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <Reveal>
          <span style={{
            fontSize: "0.72rem", letterSpacing: "0.2em", color: "var(--accent)",
            fontWeight: 700, textTransform: "uppercase", fontFamily: "var(--font-display)"
          }}>Get In Touch</span>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing: "-0.02em",
            marginTop: "0.75rem", marginBottom: "1.5rem"
          }}>
            Let's Build Something<br />
            <span style={{
              background: "linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
            }}>Together</span>
          </h2>
          <p style={{
            color: "var(--muted)", fontSize: "1rem", lineHeight: 1.8,
            maxWidth: "480px", margin: "0 auto 2.5rem",
            fontFamily: "var(--font-display)"
          }}>
            Always open to discussing ML opportunities, AI projects, or just a chat about emerging tech.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div style={{ display: "flex", justifyContent: "center", gap: "1.2rem", flexWrap: "wrap" }}>
            {[
              { icon: Mail, label: "asishsarangi2005@gmail.com", href: "mailto:asishsarangi2005@gmail.com" },
              { icon: Phone, label: "+91 7894847104", href: "tel:+917894847104" },
              { icon: MapPin, label: "Bhubaneswar, Odisha", href: "#" }
            ].map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} style={{
                display: "flex", alignItems: "center", gap: "10px",
                background: "var(--bg)", border: "1px solid var(--border)",
                borderRadius: "12px", padding: "14px 22px",
                textDecoration: "none", color: "var(--muted)",
                fontSize: "0.88rem", fontFamily: "var(--font-display)",
                transition: "all 0.2s"
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border2)"; e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.background = "rgba(77,166,255,0.05)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.background = "var(--bg)"; }}
              >
                <Icon size={16} style={{ color: "var(--accent)" }} />{label}
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "2.5rem" }}>
            {[
              { icon: Github, href: "https://github.com/asish915", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/asish-sarangi-8a33322a6/", label: "LinkedIn" }
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
                display: "flex", alignItems: "center", gap: "8px",
                padding: "12px 24px", borderRadius: "10px",
                background: "var(--surface2)", border: "1px solid var(--border)",
                color: "var(--muted)", textDecoration: "none",
                fontSize: "0.88rem", fontWeight: 600,
                fontFamily: "var(--font-display)", transition: "all 0.2s"
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(77,166,255,0.1)"; e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--surface2)"; e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)"; }}
              >
                <Icon size={16} /> {label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────── FOOTER ─────────── */
function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      padding: "3.5rem 5vw",
      textAlign: "center",
      background: "radial-gradient(circle at center, rgba(8,28,70,0.25), transparent 70%)"
    }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--text)", marginBottom: "0.8rem" }}>
          Asish Sarangi
        </p>
        <p style={{ color: "var(--muted)", fontSize: "0.85rem", fontFamily: "var(--font-display)", marginBottom: "1.5rem" }}>
          ML/DL Engineer · LLM Architect · DevOps · Bhubaneswar, India
        </p>
        <p style={{ color: "var(--muted2)", fontSize: "0.78rem", fontFamily: "var(--font-display)" }}>
          © {new Date().getFullYear()} Asish Sarangi — Built with React & Vite
        </p>
      </div>
    </footer>
  );
}

/* ─────────── LANDING PAGE ─────────── */
function LandingPage({ onEnter }) {
  const [exiting, setExiting] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleEnter = () => {
    setExiting(true);
    setTimeout(onEnter, 850);
  };

  const words = ["SUCCESS", "HAS", "NO", "SHORTCUT"];

  return (
    <div className={`landing ${ready ? "landing-ready" : ""} ${exiting ? "landing-exit" : ""}`}>
      {/* Animated grid */}
      <div className="landing-grid" />

      {/* Glow orbs */}
      <div className="landing-orb landing-orb-1" />
      <div className="landing-orb landing-orb-2" />
      <div className="landing-orb landing-orb-3" />

      {/* Scan line */}
      <div className="landing-scanline" />

      {/* Corner brackets */}
      <div className="landing-corner landing-corner-tl" />
      <div className="landing-corner landing-corner-tr" />
      <div className="landing-corner landing-corner-bl" />
      <div className="landing-corner landing-corner-br" />

      <div className="landing-content">
        <div className="landing-eyebrow">
          <span className="landing-dot" />
          ASISH SARANGI &nbsp;·&nbsp; ML / DL ENGINEER
        </div>

        <h1 className="landing-quote">
          {words.map((w, i) => (
            <span key={w} className="landing-word-wrap">
              <span
                className={`landing-word${i === words.length - 1 ? " landing-word-highlight" : ""}`}
                style={{ animationDelay: `${0.35 + i * 0.16}s` }}
              >
                {w}
              </span>
            </span>
          ))}
        </h1>

        <p className="landing-sub">
          Portfolio of a Machine Learning Engineer &amp; LLM Architect
        </p>

        <button className="landing-enter" onClick={handleEnter}>
          <span className="landing-enter-ring" />
          <span className="landing-enter-label">Enter Portfolio</span>
          <ArrowRight size={18} className="landing-enter-arrow" />
        </button>

        <div className="landing-hint">CLICK TO CONTINUE</div>
      </div>
    </div>
  );
}


export default function App() {
  const [entered, setEntered] = useState(false);

  if (!entered) {
    return <LandingPage onEnter={() => setEntered(true)} />;
  }

  return (
    <div className="portfolio-enter">
      <Navbar />
      <Hero />
      <Stats />
      <TechMarquee />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <ResumeSection />
      <Contact />
      <Footer />
    </div>
  );
}
