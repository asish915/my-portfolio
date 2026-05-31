import { useState, useEffect, useRef } from "react";
import {
  GitFork, Link2, Mail, Phone, MapPin, ExternalLink,
  ChevronDown, Award, Briefcase, GraduationCap, Code2,
  Cloud, Shield, Terminal, Activity, Star, ArrowRight
} from "lucide-react";
import { SpeedInsights } from '@vercel/speed-insights/react';
const Github = GitFork;
const Linkedin = Link2;

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
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
      transform: inView ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    }}>{children}</div>
  );
}

function SectionHeader({ eyebrow, title }) {
  return (
    <div>
      <span style={{ fontSize:"0.72rem",letterSpacing:"0.18em",color:"var(--accent)",fontWeight:700,textTransform:"uppercase" }}>{eyebrow}</span>
      <h2 style={{ fontFamily:"var(--font-display)",fontWeight:800,fontSize:"clamp(1.8rem,3.5vw,2.8rem)",letterSpacing:"-0.03em",marginTop:"0.5rem" }}>{title}</h2>
    </div>
  );
}

const skills = {
  "Cloud & DevOps": { icon: Cloud, items: ["AWS EC2/RDS/VPC/ECS/EKS/S3","Docker","Kubernetes","Terraform","ArgoCD"] },
  "CI/CD & Security": { icon: Shield, items: ["GitHub Actions","CodePipeline","CodeBuild","CodeDeploy","Sealed Secrets","Trivy","tfsec","Snyk"] },
  "Dev & Programming": { icon: Code2, items: ["C/C++","Python","JavaScript","React.js","MERN Stack","HTML/CSS"] },
  "Monitoring": { icon: Activity, items: ["Prometheus","Grafana"] },
};

const experience = [
  { title:"DevOps Intern", company:"Ingenious Tech-World", period:"June 2025 – July 2025",
    points:["Built & maintained CI/CD pipelines via GitHub Actions and AWS CodePipeline","Automated app deployment on EC2 using CodeDeploy","Integrated Sealed Secrets for K8s secrets; managed clusters on Amazon ECS","Modular Terraform infra with Trivy & Snyk security scanning"] },
  { title:"AWS Intern", company:"Ingenious Tech-World", period:"June 2024 – July 2024",
    points:["Hands-on with EC2, S3, IAM, RDS, VPC, CloudWatch","Deployed multi-tier apps using ALB and Auto Scaling","Secure networking with VPCs, subnets, route tables & security groups"] },
];

const projects = [
  { title:"Scalable 2-Tier Web App on AWS", tag:"High Availability Architecture",
    desc:"Provisioned separate VPCs with public/private subnets for frontend/backend isolation via OpenVPN. Configured ALB, Auto Scaling Groups & Route 53 for high availability and automatic failure recovery.",
    tech:["AWS","VPC","ALB","Auto Scaling","RDS","OpenVPN","Route 53"] },
  { title:"End-to-End CI/CD Pipeline", tag:"AWS + Kubernetes + GitHub Actions",
    desc:"Automated infra with modular Terraform IaC. Implemented Trivy & tfsec security gates blocking insecure images. Managed K8s secrets via Sealed Secrets; app served via Docker Hub, NGINX & K8s manifests.",
    tech:["Terraform","GitHub Actions","Docker","Kubernetes","Trivy","tfsec","AWS"] },
];

const education = [
  { degree:"B.Tech — Computer Science & Engineering", school:"Silicon University, Bhubaneswar", year:"2023 – 2027", score:"CGPA: 9.49" },
  { degree:"Higher Secondary (Class XII)", school:"Saraswati Science HSS, Cuttack", year:"2022", score:"91.5%" },
  { degree:"Matriculation (Class X)", school:"Saraswati Sishu Vidya Mandir, Phulnakhara", year:"2020", score:"82.67%" },
];

const achievements = [
  { icon: Star, text:"Winner — Spec2Model ML Hackathon 2026" },
  { icon: Award, text:"2nd Place — WebTronics Event" },
  { icon: Terminal, text:"Solved 150+ DSA Problems across platforms" },
  { icon: Award, text:"State Scholarship — Class V" },
];

const techMarquee = ["AWS","Docker","Kubernetes","Terraform","GitHub Actions","ArgoCD","React.js","Python","Prometheus","Grafana","Sealed Secrets","Trivy","NGINX","EC2","EKS","S3","VPC","RDS"];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = ["About","Skills","Experience","Projects","Education","Contact"];
  return (
    <nav style={{ position:"fixed",top:0,left:0,right:0,zIndex:100,padding:"0 5vw",
      background: scrolled?"rgba(6,6,8,0.9)":"transparent",
      backdropFilter: scrolled?"blur(12px)":"none",
      borderBottom: scrolled?"1px solid rgba(255,255,255,0.06)":"none",
      transition:"all 0.3s ease",display:"flex",alignItems:"center",justifyContent:"space-between",height:"64px" }}>
      <span style={{ fontFamily:"var(--font-display)",fontWeight:800,fontSize:"1.15rem",letterSpacing:"-0.03em" }}>
        AS<span style={{ color:"var(--accent)" }}>.</span>
      </span>
      <div style={{ display:"flex",gap:"2rem",alignItems:"center" }}>
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} style={{ fontSize:"0.8rem",fontWeight:500,letterSpacing:"0.08em",color:"var(--muted)",textDecoration:"none",textTransform:"uppercase",transition:"color 0.2s" }}
            onMouseEnter={e=>e.target.style.color="var(--accent)"} onMouseLeave={e=>e.target.style.color="var(--muted)"}>{l}</a>
        ))}
      </div>
    </nav>
  );
}

function Hero() {
  const [typed, setTyped] = useState("");
  const roles = ["CS Student at Silicon University","DevOps Engineer","Cloud Architect","AWS Specialist","ML/DL Enthusiast"];
  const [ri, setRi] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const cur = roles[ri];
    let t;
    if (!deleting && typed.length < cur.length) t = setTimeout(() => setTyped(cur.slice(0,typed.length+1)), 80);
    else if (!deleting && typed.length === cur.length) t = setTimeout(() => setDeleting(true), 1800);
    else if (deleting && typed.length > 0) t = setTimeout(() => setTyped(typed.slice(0,-1)), 40);
    else { setDeleting(false); setRi((ri+1)%roles.length); }
    return () => clearTimeout(t);
  }, [typed, deleting, ri]);

  return (
    <section id="about" style={{ minHeight:"100vh",display:"flex",alignItems:"center",padding:"0 5vw",position:"relative",overflow:"hidden" }}>
      <div style={{ position:"absolute",inset:0,zIndex:0,
        backgroundImage:"linear-gradient(rgba(0,229,160,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,160,0.03) 1px,transparent 1px)",
        backgroundSize:"60px 60px" }} />
      <div style={{ position:"absolute",width:"600px",height:"600px",borderRadius:"50%",left:"-200px",top:"-200px",
        background:"radial-gradient(circle,rgba(0,229,160,0.07) 0%,transparent 70%)",zIndex:0 }} />
      <div style={{ position:"absolute",width:"500px",height:"500px",borderRadius:"50%",right:"-100px",bottom:"-100px",
        background:"radial-gradient(circle,rgba(0,112,243,0.07) 0%,transparent 70%)",zIndex:0 }} />

      <div style={{ display:"flex",gap:"6vw",alignItems:"center",maxWidth:"1200px",width:"100%",margin:"0 auto",
        paddingTop:"64px",zIndex:1,position:"relative",flexWrap:"wrap" }}>
        <div style={{ flex:"1 1 400px" }}>
          <div style={{ display:"inline-flex",alignItems:"center",gap:"8px",
            background:"rgba(0,229,160,0.08)",border:"1px solid rgba(0,229,160,0.2)",
            borderRadius:"100px",padding:"6px 16px",marginBottom:"1.5rem",
            animation:"fadeUp 0.7s ease forwards" }}>
            <div style={{ width:"7px",height:"7px",borderRadius:"50%",background:"var(--accent)",animation:"pulse-glow 2s ease infinite" }} />
            <span style={{ fontSize:"0.78rem",color:"var(--accent)",letterSpacing:"0.08em",fontWeight:500 }}>AVAILABLE FOR OPPORTUNITIES</span>
          </div>
          <h1 style={{ fontFamily:"var(--font-display)",fontWeight:800,fontSize:"clamp(2.8rem,6vw,5.5rem)",
            lineHeight:1.05,letterSpacing:"-0.04em",animation:"fadeUp 0.7s ease 0.1s both" }}>
            Asish<br />
            <span style={{ background:"linear-gradient(135deg,var(--accent) 0%,var(--accent2) 100%)",
              WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent" }}>Sarangi</span>
          </h1>
          <div style={{ marginTop:"1rem",marginBottom:"1.5rem",fontFamily:"var(--font-display)",
            fontSize:"clamp(1rem,2vw,1.4rem)",color:"var(--muted)",fontWeight:600,
            animation:"fadeUp 0.7s ease 0.2s both",minHeight:"2rem" }}>
            {typed}<span style={{ animation:"blink 1s step-end infinite",color:"var(--accent)" }}>|</span>
          </div>
          <p style={{ color:"var(--muted)",fontSize:"1rem",maxWidth:"520px",lineHeight:1.7,animation:"fadeUp 0.7s ease 0.3s both" }}>
            B.Tech CSE student at Silicon University with a <strong style={{ color:"var(--text)" }}>9.49 CGPA</strong>.
            Passionate about building resilient cloud infrastructure, automating everything,
            and shipping production-ready systems.
          </p>
          <div style={{ display:"flex",gap:"1rem",marginTop:"2rem",flexWrap:"wrap",animation:"fadeUp 0.7s ease 0.4s both" }}>
            <a href="#projects" style={{ display:"inline-flex",alignItems:"center",gap:"8px",background:"var(--accent)",
              color:"#000",fontWeight:700,padding:"12px 28px",borderRadius:"8px",fontSize:"0.9rem",
              textDecoration:"none",letterSpacing:"0.02em",transition:"transform 0.2s,box-shadow 0.2s" }}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 8px 30px rgba(0,229,160,0.4)"}}
              onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow=""}}>
              View Projects <ArrowRight size={16} />
            </a>
            <a href="#contact" style={{ display:"inline-flex",alignItems:"center",gap:"8px",background:"transparent",
              color:"var(--text)",fontWeight:600,padding:"12px 28px",borderRadius:"8px",fontSize:"0.9rem",
              textDecoration:"none",border:"1px solid var(--border)",transition:"border-color 0.2s" }}
              onMouseEnter={e=>e.currentTarget.style.borderColor="var(--accent)"}
              onMouseLeave={e=>e.currentTarget.style.borderColor="var(--border)"}>
              Contact Me
            </a>
          </div>
          <div style={{ display:"flex",gap:"1rem",marginTop:"2rem",animation:"fadeUp 0.7s ease 0.5s both" }}>
            {[{icon:Github,href:"https://github.com/asish915",label:"GitHub"},
              {icon:Linkedin,href:"https://www.linkedin.com/in/asish-sarangi-8a33322a6/",label:"LinkedIn"},
              {icon:Mail,href:"mailto:asishsarangi2005@gmail.com",label:"Email"}].map(({icon:Icon,href,label})=>(
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label} style={{
                display:"flex",alignItems:"center",justifyContent:"center",width:"40px",height:"40px",
                borderRadius:"10px",background:"var(--surface2)",border:"1px solid var(--border)",
                color:"var(--muted)",textDecoration:"none",transition:"all 0.2s" }}
                onMouseEnter={e=>{e.currentTarget.style.background="rgba(0,229,160,0.1)";e.currentTarget.style.borderColor="var(--accent)";e.currentTarget.style.color="var(--accent)"}}
                onMouseLeave={e=>{e.currentTarget.style.background="var(--surface2)";e.currentTarget.style.borderColor="var(--border)";e.currentTarget.style.color="var(--muted)"}}>
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div style={{ flex:"0 0 auto",animation:"float 5s ease-in-out infinite" }}>
          <div style={{ position:"relative",width:"clamp(220px,28vw,320px)",aspectRatio:"1" }}>
            <div style={{ position:"absolute",inset:"-12px",borderRadius:"50%",
              border:"2px dashed rgba(0,229,160,0.25)",animation:"spin 20s linear infinite" }} />
            <div style={{ position:"absolute",inset:"-24px",borderRadius:"50%",
              border:"1px dashed rgba(0,112,243,0.15)",animation:"spin 30s linear infinite reverse" }} />
            <div style={{ width:"100%",height:"100%",borderRadius:"50%",overflow:"hidden",
              border:"3px solid rgba(0,229,160,0.4)",
              boxShadow:"0 0 60px rgba(0,229,160,0.15),0 0 120px rgba(0,112,243,0.1)" }}>
              <img src="/asish.jpg" alt="Asish Sarangi"
                style={{ width:"100%",height:"100%",objectFit:"cover",objectPosition:"center top" }} />
            </div>
            <div style={{ position:"absolute",bottom:"10px",right:"-20px",
              background:"var(--surface2)",border:"1px solid var(--border)",
              borderRadius:"12px",padding:"10px 16px",backdropFilter:"blur(12px)",
              display:"flex",alignItems:"center",gap:"8px",boxShadow:"0 8px 32px rgba(0,0,0,0.4)" }}>
              <div style={{ fontSize:"1.2rem" }}>🎓</div>
              <div>
                <div style={{ fontSize:"0.65rem",color:"var(--muted)",lineHeight:1 }}>CGPA</div>
                <div style={{ fontFamily:"var(--font-display)",fontWeight:800,fontSize:"1rem",color:"var(--accent)" }}>9.49</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position:"absolute",bottom:"2rem",left:"50%",transform:"translateX(-50%)",
        display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",
        color:"var(--muted)",fontSize:"0.7rem",letterSpacing:"0.1em",animation:"fadeIn 1s ease 1s both" }}>
        <span>SCROLL</span>
        <ChevronDown size={14} style={{ animation:"float 2s ease-in-out infinite" }} />
      </div>
    </section>
  );
}

function TechMarquee() {
  const items = [...techMarquee,...techMarquee];
  return (
    <div style={{ overflow:"hidden",borderTop:"1px solid var(--border)",borderBottom:"1px solid var(--border)",
      padding:"16px 0",background:"var(--surface)" }}>
      <div style={{ display:"flex",gap:"3rem",animation:"marquee 25s linear infinite",width:"max-content" }}>
        {items.map((t,i)=>(
          <span key={i} style={{ fontSize:"0.78rem",fontWeight:600,letterSpacing:"0.12em",
            color:i%3===0?"var(--accent)":"var(--muted)",textTransform:"uppercase",whiteSpace:"nowrap" }}>
            {t} <span style={{ opacity:0.3,margin:"0 0.5rem" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" style={{ padding:"7rem 5vw" }}>
      <div style={{ maxWidth:"1200px",margin:"0 auto" }}>
        <Reveal><SectionHeader eyebrow="What I Know" title="Skills & Technologies" /></Reveal>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"1.5rem",marginTop:"3rem" }}>
          {Object.entries(skills).map(([cat,{icon:Icon,items}],i)=>(
            <Reveal key={cat} delay={i*80}>
              <div style={{ background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"16px",
                padding:"1.8rem",transition:"border-color 0.2s,transform 0.2s",cursor:"default",height:"100%" }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(0,229,160,0.3)";e.currentTarget.style.transform="translateY(-4px)"}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--border)";e.currentTarget.style.transform=""}}>
                <div style={{ display:"flex",alignItems:"center",gap:"12px",marginBottom:"1.2rem" }}>
                  <div style={{ width:"40px",height:"40px",borderRadius:"10px",background:"rgba(0,229,160,0.1)",
                    display:"flex",alignItems:"center",justifyContent:"center",color:"var(--accent)" }}>
                    <Icon size={20} />
                  </div>
                  <h3 style={{ fontFamily:"var(--font-display)",fontWeight:700,fontSize:"0.95rem" }}>{cat}</h3>
                </div>
                <div style={{ display:"flex",flexWrap:"wrap",gap:"8px" }}>
                  {items.map(item=>(
                    <span key={item} style={{ fontSize:"0.75rem",padding:"4px 10px",borderRadius:"6px",
                      background:"var(--surface2)",color:"var(--muted)",border:"1px solid var(--border)",fontWeight:500 }}>{item}</span>
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

function Experience() {
  return (
    <section id="experience" style={{ padding:"7rem 5vw",background:"var(--surface)" }}>
      <div style={{ maxWidth:"1200px",margin:"0 auto" }}>
        <Reveal><SectionHeader eyebrow="Career" title="Work Experience" /></Reveal>
        <div style={{ marginTop:"3rem",display:"flex",flexDirection:"column",gap:"2rem" }}>
          {experience.map((exp,i)=>(
            <Reveal key={i} delay={i*100}>
              <div style={{ background:"var(--bg)",border:"1px solid var(--border)",borderRadius:"16px",padding:"2rem",
                transition:"border-color 0.2s" }}
                onMouseEnter={e=>e.currentTarget.style.borderColor="rgba(0,229,160,0.3)"}
                onMouseLeave={e=>e.currentTarget.style.borderColor="var(--border)"}>
                <div style={{ display:"grid",gridTemplateColumns:"1fr 3fr",gap:"2rem",flexWrap:"wrap" }}>
                  <div style={{ borderRight:"1px solid var(--border)",paddingRight:"2rem" }}>
                    <div style={{ display:"inline-block",background:"rgba(0,229,160,0.1)",color:"var(--accent)",
                      borderRadius:"8px",padding:"6px 12px",fontSize:"0.72rem",fontWeight:700,letterSpacing:"0.06em",marginBottom:"1rem" }}>
                      {exp.period}
                    </div>
                    <h3 style={{ fontFamily:"var(--font-display)",fontWeight:700,fontSize:"1.1rem",marginBottom:"4px" }}>{exp.title}</h3>
                    <p style={{ color:"var(--muted)",fontSize:"0.85rem" }}>{exp.company}</p>
                  </div>
                  <ul style={{ listStyle:"none",display:"flex",flexDirection:"column",gap:"10px" }}>
                    {exp.points.map((p,j)=>(
                      <li key={j} style={{ display:"flex",gap:"10px",alignItems:"flex-start" }}>
                        <span style={{ color:"var(--accent)",marginTop:"4px",flexShrink:0 }}>▸</span>
                        <span style={{ color:"var(--muted)",fontSize:"0.9rem",lineHeight:1.6 }}>{p}</span>
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

function Projects() {
  return (
    <section id="projects" style={{ padding:"7rem 5vw" }}>
      <div style={{ maxWidth:"1200px",margin:"0 auto" }}>
        <Reveal><SectionHeader eyebrow="What I've Built" title="Featured Projects" /></Reveal>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(340px,1fr))",gap:"2rem",marginTop:"3rem" }}>
          {projects.map((p,i)=>(
            <Reveal key={i} delay={i*120}>
              <div style={{ background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"20px",
                padding:"2rem",height:"100%",display:"flex",flexDirection:"column",gap:"1.2rem",transition:"all 0.25s" }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(0,229,160,0.35)";e.currentTarget.style.transform="translateY(-6px)";e.currentTarget.style.boxShadow="0 20px 60px rgba(0,229,160,0.08)"}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--border)";e.currentTarget.style.transform="";e.currentTarget.style.boxShadow=""}}>
                <div style={{ height:"4px",borderRadius:"2px",background:"linear-gradient(90deg,var(--accent),var(--accent2))" }} />
                <div>
                  <span style={{ fontSize:"0.72rem",fontWeight:700,letterSpacing:"0.1em",color:"var(--accent)",textTransform:"uppercase" }}>{p.tag}</span>
                  <h3 style={{ fontFamily:"var(--font-display)",fontWeight:700,fontSize:"1.15rem",marginTop:"6px" }}>{p.title}</h3>
                </div>
                <p style={{ color:"var(--muted)",fontSize:"0.88rem",lineHeight:1.7,flex:1 }}>{p.desc}</p>
                <div style={{ display:"flex",flexWrap:"wrap",gap:"6px" }}>
                  {p.tech.map(t=>(
                    <span key={t} style={{ fontSize:"0.72rem",padding:"3px 10px",borderRadius:"100px",
                      background:"rgba(0,112,243,0.08)",border:"1px solid rgba(0,112,243,0.2)",color:"#6eb3ff",fontWeight:600 }}>{t}</span>
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

function Education() {
  return (
    <section id="education" style={{ padding:"7rem 5vw",background:"var(--surface)" }}>
      <div style={{ maxWidth:"1200px",margin:"0 auto" }}>
        <Reveal><SectionHeader eyebrow="Academic Background" title="Education" /></Reveal>
        <div style={{ marginTop:"3rem",display:"flex",flexDirection:"column",gap:"1.5rem" }}>
          {education.map((e,i)=>(
            <Reveal key={i} delay={i*80}>
              <div style={{ display:"flex",alignItems:"center",gap:"2rem",background:"var(--bg)",
                border:"1px solid var(--border)",borderRadius:"16px",padding:"1.5rem 2rem",
                transition:"border-color 0.2s",flexWrap:"wrap" }}
                onMouseEnter={el=>el.currentTarget.style.borderColor="rgba(0,229,160,0.3)"}
                onMouseLeave={el=>el.currentTarget.style.borderColor="var(--border)"}>
                <div style={{ width:"48px",height:"48px",borderRadius:"12px",flexShrink:0,
                  background:"rgba(0,229,160,0.08)",border:"1px solid rgba(0,229,160,0.15)",
                  display:"flex",alignItems:"center",justifyContent:"center",color:"var(--accent)" }}>
                  <GraduationCap size={22} />
                </div>
                <div style={{ flex:1 }}>
                  <div style={{ fontFamily:"var(--font-display)",fontWeight:700,fontSize:"0.95rem" }}>{e.degree}</div>
                  <div style={{ color:"var(--muted)",fontSize:"0.82rem",marginTop:"2px" }}>{e.school}</div>
                </div>
                <div style={{ textAlign:"right",flexShrink:0 }}>
                  <div style={{ fontSize:"0.78rem",color:"var(--muted)",marginBottom:"4px" }}>{e.year}</div>
                  <div style={{ fontFamily:"var(--font-display)",fontWeight:800,fontSize:"1rem",color:"var(--accent)" }}>{e.score}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300}>
          <div style={{ marginTop:"4rem" }}>
            <h3 style={{ fontFamily:"var(--font-display)",fontWeight:700,fontSize:"1.3rem",marginBottom:"1.5rem" }}>Achievements</h3>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:"1rem" }}>
              {achievements.map(({icon:Icon,text},i)=>(
                <div key={i} style={{ display:"flex",gap:"12px",alignItems:"flex-start",background:"var(--bg)",
                  border:"1px solid var(--border)",borderRadius:"12px",padding:"1rem 1.2rem" }}>
                  <Icon size={16} style={{ color:"var(--accent)",flexShrink:0,marginTop:"2px" }} />
                  <span style={{ fontSize:"0.85rem",color:"var(--muted)",lineHeight:1.4 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" style={{ padding:"7rem 5vw" }}>
      <div style={{ maxWidth:"800px",margin:"0 auto",textAlign:"center" }}>
        <Reveal>
          <span style={{ fontSize:"0.75rem",letterSpacing:"0.15em",color:"var(--accent)",fontWeight:700,textTransform:"uppercase" }}>Get In Touch</span>
          <h2 style={{ fontFamily:"var(--font-display)",fontWeight:800,fontSize:"clamp(2rem,4vw,3.5rem)",
            letterSpacing:"-0.03em",marginTop:"0.75rem",marginBottom:"1.5rem" }}>
            Let's Build Something<br />
            <span style={{ background:"linear-gradient(135deg,var(--accent) 0%,var(--accent2) 100%)",
              WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent" }}>Together</span>
          </h2>
          <p style={{ color:"var(--muted)",fontSize:"1rem",lineHeight:1.7,maxWidth:"500px",margin:"0 auto 2.5rem" }}>
            Always open to discussing new opportunities, interesting projects, or just a chat about tech.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div style={{ display:"flex",justifyContent:"center",gap:"1.5rem",flexWrap:"wrap" }}>
            {[{icon:Mail,label:"asishsarangi2005@gmail.com",href:"mailto:asishsarangi2005@gmail.com"},
              {icon:Phone,label:"+91 7894847104",href:"tel:+917894847104"},
              {icon:MapPin,label:"Bhubaneswar, Odisha",href:"#"}].map(({icon:Icon,label,href})=>(
              <a key={label} href={href} style={{ display:"flex",alignItems:"center",gap:"10px",
                background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"12px",
                padding:"14px 20px",textDecoration:"none",color:"var(--muted)",fontSize:"0.88rem",transition:"all 0.2s" }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(0,229,160,0.4)";e.currentTarget.style.color="var(--text)"}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--border)";e.currentTarget.style.color="var(--muted)"}}>
                <Icon size={16} style={{ color:"var(--accent)" }} />{label}
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div style={{ display:"flex",justifyContent:"center",gap:"1rem",marginTop:"2.5rem" }}>
            {[{icon:Github,href:"https://github.com/asish915",label:"GitHub"},
              {icon:Linkedin,href:"https://www.linkedin.com/in/asish-sarangi-8a33322a6/",label:"LinkedIn"}].map(({icon:Icon,href,label})=>(
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
                display:"flex",alignItems:"center",gap:"8px",padding:"12px 24px",borderRadius:"10px",
                background:"var(--surface2)",border:"1px solid var(--border)",color:"var(--muted)",
                textDecoration:"none",fontSize:"0.88rem",fontWeight:600,transition:"all 0.2s" }}
                onMouseEnter={e=>{e.currentTarget.style.background="rgba(0,229,160,0.1)";e.currentTarget.style.borderColor="var(--accent)";e.currentTarget.style.color="var(--accent)"}}
                onMouseLeave={e=>{e.currentTarget.style.background="var(--surface2)";e.currentTarget.style.borderColor="var(--border)";e.currentTarget.style.color="var(--muted)"}}>
                <Icon size={16} /> {label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop:"1px solid var(--border)",padding:"2rem 5vw",
      display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem" }}>
      <span style={{ fontFamily:"var(--font-display)",fontWeight:800,fontSize:"1rem" }}>
        AS<span style={{ color:"var(--accent)" }}>.</span>
      </span>
      <span style={{ color:"var(--muted)",fontSize:"0.8rem" }}>
        © {new Date().getFullYear()} Asish Sarangi — Built with React & Vite
      </span>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechMarquee />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      <SpeedInsights />
    </>
  );
}
