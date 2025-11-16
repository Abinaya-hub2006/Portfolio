// Student Portfolio — React + Tailwind
// Full Updated Version (UI Improved + fixes)

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/* ------------------ Personal Data ------------------ */
const PROFILE = {
  name: "Abinaya",
  email: "abinayak829@gmail.com",
  resume: "/resume.pdf",
  avatar: "/abinaya.jpeg",
  bio:
    "An enthusiastic undergraduate in Artificial Intelligence and Data Science with a strong passion for innovation, problem solving, and developing intelligent solutions.",
  github: "https://github.com/Abinaya-hub2006",
  linkedin: "https://linkedin.com/in/abinaya-k-1aa99528b",
};

/* ------------------ Projects ------------------ */
const PROJECTS = [
  {
    id: 1,
    title: "Digital Sanitation Tracker",
    tech: ["React", "Node.js", "Express.js", "PostgreSQL", "Socket.IO"],
    desc:
      "A real-time sanitation tracker where organizations log issues which are routed to workers and monitored by admins. Includes Socket.IO live updates and REST APIs.",
    img: "https://placehold.co/900x600/7ab8ff/ffffff?text=Sanitation+Tracker",
    repo: "https://github.com/Abinaya-hub2006/Digital_sanitation_tracker",
  },
  {
    id: 2,
    title: "Alumni Database Management System",
    tech: ["Flask", "OracleDB"],
    desc:
      "A web-based alumni information system to manage alumni records, career progress, and event participation.",
    img: "https://placehold.co/900x600/7ab8ff/ffffff?text=Alumni+DB",
    repo: "#",
  },
  {
    id: 3,
    title: "Diet Monitoring System",
    tech: ["Flask", "ResNet18", "SVM", "OpenCV"],
    desc:
      "Hybrid CNN + ML system to detect food items, estimate portion size, and calculate calorie intake.",
    img: "https://placehold.co/900x600/7ab8ff/ffffff?text=Diet+Monitor",
    repo: "https://github.com/Abinaya-hub2006/DietMonitoringSystem",
  },
  {
    id: 4,
    title: "Quantum Enhanced Autonomous Vehicle System using Hybrid ML and RL (Q-Learning)",
    tech: ["Hybrid ML", "RL (Q-Learning)", "Simulation"],
    desc:
      "Research exploring quantum-inspired RL to improve autonomous driving decision-making and adaptability.",
    img: "https://placehold.co/900x600/7ab8ff/ffffff?text=Quantum+RL",
    repo: "https://github.com/Abinaya-hub2006/Autonomous-vehicle-simulation-using-ML-and-Rl",
  },
];

/* ------------------ Certifications ------------------ */
const CERTIFICATIONS = [
  {
    id: 1,
    title: "Design Thinking – A Primer",
    org: "NPTEL",
    link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/110/noc25-mg18/Course/NPTEL25MG18S55040643801230359.pdf",
    year: 2023,
  },
  {
    id: 2,
    title: "Artificial Intelligence Fundamentals",
    org: "IBM",
    link: "https://www.credly.com/badges/edb080ab-4215-4368-88ab-e3ce9ff1458a/whatsapp",
    year: 2023,
  },
];

const HACKATHONS = [
  {
    id: 1,
    title: "Fish Recognition with Chatbot Integration",
    role: "Finalist",
    year: 2024,
    project: "Agentic Hackathon",
  },
];

/* ------------------ Helpers ------------------ */
const glowBtn =
  "inline-block px-5 py-2 rounded-lg border border-slate-300 bg-white/80 backdrop-blur-sm text-base font-medium hover:scale-105 transition shadow";

const pageVariants = { initial: { opacity: 0, y: 8 }, in: { opacity: 1, y: 0 }, out: { opacity: 0, y: -8 } };
const pageTransition = { type: "tween", ease: "anticipate", duration: 0.45 };

/* ------------------ Loader ------------------ */
function Loader({ quote }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-300 to-blue-100 z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/90 p-8 rounded-2xl shadow-xl text-center max-w-lg"
      >
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Getting things ready...</h3>
        <p className="text-slate-700">{quote}</p>
      </motion.div>
    </div>
  );
}

/* ------------------ Container ------------------ */
function Container({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-blue-100 to-slate-200 text-slate-900">
      <div className="max-w-6xl mx-auto px-10 py-16 text-[18px] leading-relaxed">{children}</div>
    </div>
  );
}

/* ------------------ Top Navigation ------------------ */
function TopNav() {
  return (
    <header className="mb-12 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">Hi — I'm {PROFILE.name}</h1>

      <nav className="flex justify-center gap-6 flex-wrap text-lg">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/certifications">Certifications</NavLink>
        <NavLink to="/hackathons">Hackathons</NavLink>
        <NavLink to="/tech">Tech</NavLink>
        <NavLink to="/journey">Journey</NavLink>
        <NavLink to="/inspiration">Inspiration</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        <a href={PROFILE.resume} download className="px-4 py-2 border border-slate-400 rounded-lg bg-white/70 text-blue-700 font-medium">Resume</a>
      </nav>
    </header>
  );
}

function NavLink({ to, children }) {
  return (
    <Link to={to} className="text-slate-700 hover:text-blue-700 transition font-medium">
      {children}
    </Link>
  );
}

/* ------------------ Home ------------------ */
function Home() {
  return (
    <motion.section className="grid md:grid-cols-2 gap-12 items-center py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/70 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-slate-300"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-6">Hi I'm {PROFILE.name}</h2>

        <p className="text-slate-800 mb-4">{PROFILE.bio}</p>

        <p><b>Focus areas:</b> Full-stack development, DSA, AI/ML.</p>
        <p className="mt-2"><b>Goals:</b> Build impactful real-world projects.</p>

        <div className="mt-8 flex gap-6">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className={glowBtn}>GitHub</a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className={glowBtn}>LinkedIn</a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <div className="w-72 h-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-400 bg-white/50">
          <img src={PROFILE.avatar} alt="Avatar" className="w-full h-full object-cover rounded-2xl" />
        </div>
      </motion.div>
    </motion.section>
  );
}

/* ------------------ Projects ------------------ */
function Projects() {
  return (
    <PageWrapper>
      <section className="space-y-8 text-left">
        <h2 className="text-3xl font-bold text-blue-700">Selected Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS.map((p) => (
            <motion.article key={p.id} whileHover={{ scale: 1.03 }} className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-slate-300">
              <img src={p.img} className="w-full h-40 object-cover" alt={p.title} />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-slate-900">{p.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{p.tech.join(" • ")}</p>

                <p className="mt-3 text-slate-700 text-sm">{p.desc}</p>

                <div className="mt-4 flex items-center gap-3">
                  {p.repo && p.repo !== "#" ? (
                    <a href={p.repo} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md border text-sm">GitHub</a>
                  ) : (
                    <span className="text-sm text-slate-500">Repo not available</span>
                  )}

                  <Link to={`/projects/${p.id}`} className="ml-auto text-sm text-blue-700 underline">Details</Link>
                </div>

                <div className="mt-3 flex gap-2 flex-wrap">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-white/40 rounded-full border">{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}

/* ------------------ Project Detail ------------------ */
function ProjectDetail() {
  const { id } = useParams();
  const p = PROJECTS.find((x) => String(x.id) === String(id));
  const navigate = useNavigate();
  if (!p) return <div className="bg-white p-6 rounded-2xl shadow">Project not found.</div>;
  return (
    <PageWrapper>
      <motion.div className="bg-white/90 p-8 rounded-2xl shadow-xl border border-slate-300">
        <button onClick={() => navigate(-1)} className="mb-4 text-blue-700">← Back</button>
        <img src={p.img} className="w-full h-52 object-cover rounded-xl" alt={p.title} />

        <h2 className="text-3xl font-bold mt-4">{p.title}</h2>
        <p className="text-slate-600 mt-1">{p.tech.join(" • ")}</p>

        <p className="mt-4 text-slate-800">{p.desc}</p>

        <div className="mt-4">
          {p.repo && p.repo !== "#" && (
            <a href={p.repo} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border bg-white/70">View Repository on GitHub</a>
          )}
        </div>
      </motion.div>
    </PageWrapper>
  );
}

/* ------------------ Certifications ------------------ */
function Certifications() {
  return (
    <PageWrapper>
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-blue-700">Certifications</h2>

        {CERTIFICATIONS.map((c) => (
          <div key={c.id} className="bg-white/80 p-5 rounded-xl border border-slate-300 shadow hover:scale-[1.01] transition">
            <h3 className="font-semibold text-lg">{c.title}</h3>
            <p className="text-sm text-slate-600">{c.org} — <a className="text-blue-700 underline" href={c.link} target="_blank">View</a></p>
          </div>
        ))}
      </section>
    </PageWrapper>
  );
}

/* ------------------ Hackathons ------------------ */
function Hackathons() {
  return (
    <PageWrapper>
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-blue-700">Hackathons</h2>
        <p className="italic text-slate-700 text-lg">Yet to explore more 🚀</p>

        {HACKATHONS.map((h) => (
          <div key={h.id} className="bg-white/80 p-5 rounded-xl border border-slate-300 shadow">
            <h3 className="text-xl font-semibold">{h.title}</h3>
            <p className="text-slate-600">Role: {h.role} • {h.year}</p>

            <p className="mt-2 text-blue-700 font-medium">More hackathons coming soon 🚀</p>
          </div>
        ))}
      </section>
    </PageWrapper>
  );
}

/* ------------------ Inspiration ------------------ */
function Inspiration() {
  return (
    <PageWrapper>
      <section className="space-y-6 text-left">
        <h2 className="text-3xl font-bold text-blue-700">Inspiration & Motivation</h2>

        <div className="bg-white/70 p-8 rounded-2xl border border-slate-300 shadow-xl leading-relaxed text-lg">
          <p className="text-slate-700 mb-4">
            Great careers are built through consistent effort, curiosity, and a desire to create impact beyond personal comfort.
          </p>

          <p className="text-slate-700 mb-4">
            Chase purpose over applause. When your work helps others and solves real problems, meaning follows — and success becomes a byproduct.
          </p>

          <p className="text-slate-700 mb-4">
            Every project expands your capability, every challenge makes you resilient, and every small habit compounds into a career.
          </p>

          <h3 className="text-xl font-semibold text-blue-700 mt-6">Practical Career Growth Steps</h3>
          <ul className="list-disc list-inside mt-3 text-slate-700 text-base space-y-2">
            <li>Build small, consistent projects to sharpen skills and demonstrate progress.</li>
            <li>Participate in hackathons to test creativity and teamwork under pressure.</li>
            <li>Document your work — writing your process makes you memorable.</li>
            <li>Network with peers and mentors; opportunity follows relationships.</li>
            <li>Invest in fundamentals like DS&amp;A and system design.</li>
          </ul>

          <p className="text-blue-700 font-semibold text-lg mt-6">Keep moving. Keep building. Your future self is waiting.</p>
        </div>
      </section>
    </PageWrapper>
  );
}

/* ------------------ Tech ------------------ */
function Tech() {
  return (
    <PageWrapper>
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-blue-700">Technical Skillset</h2>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg text-slate-700">
          <li>⚛️ React</li>
          <li>🟩 Node.js</li>
          <li>🚂 Express.js</li>
          <li>🐍 Python</li>
          <li>💻 C / C++</li>
          <li>📸 OpenCV</li>
          <li>🤖 Machine Learning</li>
          <li>🗄️ SQL / OracleDB</li>
          <li>⚛️ QISKIT</li>
        </ul>
      </section>
    </PageWrapper>
  );
}

/* ------------------ Journey ------------------ */
function Journey() {
  return (
    <PageWrapper>
      <section className="space-y-10">
        <div className="bg-white/80 p-10 rounded-2xl shadow-lg border border-slate-300">
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">My Journey</h2>

          <div className="border-l-4 border-blue-600 pl-6 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-blue-700">2021 — SSLC Completion</h3>
              <p className="text-slate-700">Completed with <b>100%</b> at Dr. V.G.N. Matric Hr. Sec. School.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-700">2022 — HSC 1st Year</h3>
              <p className="text-slate-700">Scored <b>92.5%</b>, ranked Top 4 in school.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-700">2023 — HSC 2nd Year</h3>
              <p className="text-slate-700">Scored <b>98.5%</b>, School Topper — Computer Science & Maths Stream.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-700">2023 — Joined MIT</h3>
              <p className="text-slate-700">Started B.Tech in AI & DS at Madras Institute of Technology.</p>
            </div>
          </div>
        </div>

        {/* Coursework */}
        <div className="bg-white/80 p-8 rounded-2xl shadow border border-slate-300">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Coursework & Highlights</h2>
          <ul className="list-disc pl-5 text-slate-800 text-lg">
            <li>Data Structures & Algorithms</li>
            <li>Operating Systems</li>
            <li>Database Systems</li>
            <li>Machine Learning</li>
          </ul>
        </div>
      </section>
    </PageWrapper>
  );
}

/* ------------------ Contact ------------------ */
function Contact() {
  return (
    <PageWrapper>
      <section className="bg-white/80 p-10 rounded-2xl shadow border border-slate-300">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Contact</h2>

        <p className="text-lg text-slate-700 mb-4">
          Email: <a className="underline text-blue-700" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const d = new FormData(e.currentTarget);
            window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
              "Portfolio contact from " + d.get("name")
            )}&body=${encodeURIComponent(d.get("message"))}`;
          }}
          className="grid gap-4"
        >
          <input className="p-3 rounded-lg border" name="name" placeholder="Your name" required />
          <input className="p-3 rounded-lg border" name="email" placeholder="Your email" />
          <textarea className="p-3 rounded-lg border" name="message" rows="5" placeholder="Message" required />

          <button className="px-6 py-2 rounded-lg bg-blue-700 text-white font-medium text-lg">Send</button>
        </form>
      </section>
    </PageWrapper>
  );
}

/* ------------------ App ------------------ */
export default function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const quotes = [
    "Build something small every day.",
    "Ship fast, learn faster.",
    "Progress > perfection.",
  ];

  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 700);
  }, []);

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    setLoading(true);
    setTimeout(() => setLoading(false), 400);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader quote={quote} />}
      <Container>
        <TopNav />

        <AnimatePresence mode="wait">
          <Routes key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/hackathons" element={<Hackathons />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/inspiration" element={<Inspiration />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>

      </Container>
    </>
  );
}

/* ------------------ Page Wrapper ------------------ */
function PageWrapper({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
