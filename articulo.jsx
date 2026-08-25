import React, { useState } from "react";
import { Menu, X, ArrowUpRight, Link2, Repeat2 } from "lucide-react";

const FONT_IMPORT = `
@import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

.font-display { font-family: 'Newsreader', Georgia, serif; }
.font-body { font-family: 'IBM Plex Sans', system-ui, sans-serif; }
.font-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }

.dotframe { position: relative; }
.dotframe::before {
  content: '';
  position: absolute;
  top: -14px; left: -14px; right: -22px; bottom: -22px;
  background-image: radial-gradient(circle, #5577B8 1.6px, transparent 1.6px);
  background-size: 13px 13px;
  opacity: 0.55;
  z-index: 0;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.dotframe:hover::before { transform: translate(6px, 6px); }
.dotframe > img { position: relative; z-index: 1; }

.link-underline {
  background-image: linear-gradient(#5577B8, #5577B8);
  background-size: 0% 1px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.3s ease;
}
.link-underline:hover { background-size: 100% 1px; }

.article-link {
  color: #5577B8;
  text-decoration: underline;
  text-decoration-color: #A9BEE0;
  text-underline-offset: 3px;
  transition: text-decoration-color 0.2s ease;
}
.article-link:hover { text-decoration-color: #5577B8; }

.article-body p { margin-bottom: 1.5em; }

.dot-bullet { list-style: none; padding-left: 0; }
.dot-bullet li {
  position: relative;
  padding-left: 26px;
  margin-bottom: 1.6em;
}
.dot-bullet li::before {
  content: '';
  position: absolute;
  left: 4px;
  top: 0.65em;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #5577B8;
}

.focus-ring:focus-visible {
  outline: 2px solid #5577B8;
  outline-offset: 3px;
}
`;

const NAV_LINKS = ["Tecnología", "Sociedad", "Cultura", "Bitácora"];

const LATEST = [
  {
    tag: "Privacidad",
    title: "Brasil gives parents social media controls for their kids. Should the US?",
    img: "https://images.unsplash.com/photo-1504159506876-f8338247a14a?q=80&w=800&auto=format&fit=crop",
  },
  {
    tag: "Inteligencia Artificial",
    title: "Kaiser Permanente nurses say technology is making their jobs — and patient care — worse",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
  },
  {
    tag: "Hello World",
    title: "Californians can protect their personal data with one click. Help us test if it works",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
  },
];

const ARTICLE_IMAGE = "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop";
const AUTHOR_IMAGE = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=160&auto=format&fit=crop";

function Masthead({ menuOpen, setMenuOpen }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur" style={{ backgroundColor: "#FAFAF8F0", borderBottom: "1px solid #E4E1D8" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="font-display italic text-2xl tracking-tight focus-ring rounded-sm">
          Señal
        </a>
        <nav className="hidden md:flex items-center gap-8 font-mono text-[13px] uppercase tracking-wider">
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" className="link-underline pb-0.5 focus-ring rounded-sm">
              {link}
            </a>
          ))}
          <a href="#" className="focus-ring px-4 py-2 rounded-sm border transition-colors" style={{ borderColor: "#5577B8", color: "#5577B8" }}>
            Suscríbete
          </a>
        </nav>
        <button className="md:hidden focus-ring rounded-sm p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden px-6 pb-5 flex flex-col gap-4 font-mono text-sm uppercase tracking-wider" style={{ borderTop: "1px solid #E4E1D8" }}>
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" className="pt-4 focus-ring rounded-sm">
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default function SenalArticulo() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-body min-h-screen" style={{ backgroundColor: "#FAFAF8", color: "#172033" }}>
      <style>{FONT_IMPORT}</style>
      <Masthead menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main>
        {/* Article header — centered reading column */}
        <article className="max-w-[680px] mx-auto px-6 pt-14 md:pt-20 pb-10">
          <p className="font-mono text-[13px] uppercase tracking-[0.15em] mb-4 text-center" style={{ color: "#5577B8" }}>
            Hello World
          </p>

          <h1 className="font-display text-[34px] sm:text-[42px] leading-[1.12] text-center mb-6">
            I Went to the Real ‘Cop Con.’ Here’s The Tech Police Are Testing.
          </h1>

          <p className="font-body text-lg text-center mb-8" style={{ color: "#45506B" }}>
            Nearly 700 vendors showcased police tech from tracking devices disguised as Newtonian cigarettes to window-breaking drones.
          </p>

          <div className="flex items-center justify-center gap-3 font-mono text-[13px] mb-12" style={{ color: "#45506B" }}>
            <div className="w-8 h-8 rounded-full" style={{ backgroundColor: "#DCE7F7" }} />
            <span>
              Por <span style={{ color: "#172033" }}>Renata Cordero</span>
            </span>
            <span>·</span>
            <span>4 de noviembre, 2023</span>
          </div>

          <div className="dotframe">
            <img
              src={ARTICLE_IMAGE}
              alt="Pasillo de una feria comercial con pantallas y expositores"
              className="w-full h-[220px] sm:h-[320px] object-cover"
            />
          </div>
          <p className="font-mono text-xs mt-3 text-center" style={{ color: "#8A8577" }}>
            Foto de archivo — Señal
          </p>
        </article>

        {/* Article body */}
        <section className="max-w-[680px] mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-[130px_1fr] gap-6 items-start mb-10">
            <div className="font-mono text-[11px] uppercase tracking-wider" style={{ color: "#8A8577" }}>
              Comparte este artículo
              <div className="flex sm:flex-col gap-2 mt-3">
                <button className="focus-ring font-mono text-[11px] px-3 py-1.5 rounded-sm border" style={{ borderColor: "#172033" }}>Copiar enlace</button>
                <button className="focus-ring font-mono text-[11px] px-3 py-1.5 rounded-sm border" style={{ borderColor: "#172033" }}>Republicar</button>
              </div>
            </div>
            <form className="border p-4" style={{ borderColor: "#F05A78", backgroundColor: "#FFF8F8" }} onSubmit={(event) => event.preventDefault()}>
              <p className="font-mono text-xs uppercase tracking-wider mb-2" style={{ color: "#F05A78" }}>Suscríbete a Señal</p>
              <p className="font-body text-sm leading-relaxed mb-3" style={{ color: "#45506B" }}>
                Recibe nuestro periodismo sobre tecnología, poder y las decisiones que casi nadie ve.
              </p>
              <div className="flex gap-2">
                <input aria-label="Tu correo electrónico" type="email" placeholder="Tu correo electrónico" className="min-w-0 flex-1 border px-2 py-2 font-mono text-xs focus-ring" style={{ borderColor: "#B9B5AA", backgroundColor: "#FAFAF8" }} />
                <button type="submit" className="focus-ring px-3 py-2 font-mono text-xs text-white" style={{ backgroundColor: "#F05A78" }}>Suscribirme</button>
              </div>
            </form>
          </div>

          <div className="article-body font-body text-[17px] leading-[1.75]" style={{ color: "#232C40" }}>
            <p>
              There’s a particularly cheeky episode of Brooklyn 99 about a fictitious Tri-State Police Officers Convention, an annual conference that brings police officers—including the show’s ensemble—together for presentations, professional development, and parties.
            </p>
            <p>
              <a href="#" className="article-link">“Cop-Con”</a> is a rare glimpse into the kind of professional development, training, and networking police officers attend. It’s also an opportunity to see what policing looks like when it’s not happening on a television screen.
            </p>
            <p>
              Surprisingly, the antics weren’t the most fascinating part of the episode. What interested me was the way technology was brought into every room: facial recognition, drones, license plate readers, and systems that promised to turn data into instant answers.
            </p>
            <p>
              The show’s fictional expo hall bears a striking resemblance to <a href="#" className="article-link">the one I walked through</a> at the International Association of Chiefs of Police conference in San Diego last month. It was full of vendors demonstrating tools that promised to make police work faster, easier, and more predictable.
            </p>
          </div>

          <figure className="my-10 dotframe">
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop" alt="Persona utilizando tecnología en una sala oscura" className="relative z-10 w-full h-[300px] sm:h-[420px] object-cover" />
            <figcaption className="font-mono text-xs mt-3 text-center" style={{ color: "#8A8577" }}>La tecnología aparece como parte cotidiana del trabajo policial.</figcaption>
          </figure>

          <div className="article-body font-body text-[17px] leading-[1.75]" style={{ color: "#232C40" }}>
            <p>
              Unlike the conference in Brooklyn 99, which was regional, the IACP conference had a global reach: around 16,000 attendees passed the San Diego Convention Center, including delegations from countries including Indonesia, Ireland, the Dominican Republic, the United Kingdom, Brazil, Norway, Costa Rica, Kazakhstan, Fiji, Nigeria, the Bahamas, South Africa, Japan, Canada, and Jamaica.
            </p>
            <p>
              After walking thousands of steps around the expo floor over several days, where nearly 700 vendors were demonstrating and showcasing their latest, I got to see and hear a bit about hundreds of new products, including voice analysis algorithms that claim to detect fraud risks based on speech, virtual reality training simulators, robot dogs, window-breaking drones, and tracking devices that looked exactly like packs of Newport cigarettes or bottles of medication.
            </p>
            <p>It took me virtually the entire conference to make it from one end of the expo floor to the other.</p>
            <p>Most of the emerging public safety tech I saw falls into three big buckets:</p>
          </div>

          <ul className="dot-bullet font-body text-[17px] leading-[1.75]" style={{ color: "#232C40" }}>
            <li><strong>Robotic tools like drones and police robots</strong> that could enter spaces that might be difficult or unsafe to send an officer.</li>
            <li><strong>Emerging and enhanced surveillance technologies</strong> like automatic license plate readers, which can capture images of cars and infer vehicles that police officers can use to target investigative leads.</li>
            <li><strong>Artificial intelligence and algorithmic products</strong> were, predictably, among the tools I saw the most. In addition to the voice analysis tools I described above, companies advertised tools that generate and analyze data from social media, jail data systems, video feeds, court records, and social media to generate quick insights.</li>
          </ul>

          <div className="article-body font-body text-[17px] leading-[1.75]" style={{ color: "#232C40" }}>
            <p>To give our readers a more robust view of the conference and the policy tech trends, I also asked experts who attended or presented workshops at IACP’s conference to share their thoughts about the emerging technology — and about the technology that was notably absent at the conference. <a href="#" className="article-link">Read that here</a>.</p>
            <p>I want to learn more about what you’re interested in within the public safety technology space. What fascinating tech are police officers in your hometown using that you’d like us investigating next? Email me at <a href="#" className="article-link">renata@senal.com</a>, or message me on Signal at 55 1234 5678.</p>
            <p>“Til next time,</p>
            <p>Ese</p>
          </div>
        </section>

        <section className="max-w-[680px] mx-auto px-6 pb-16">
          <div className="border p-3 sm:p-4" style={{ borderColor: "#F05A78" }}>
            <div className="px-5 py-7 sm:px-8 sm:py-9" style={{ backgroundColor: "#DCE7F7" }}>
              <h2 className="font-body font-semibold text-2xl sm:text-3xl leading-tight max-w-xl" style={{ color: "#172033" }}>No investigamos solo tecnología.<br />Investigamos el cambio.</h2>
            </div>
            <div className="px-2 pt-6 pb-2 sm:px-4 sm:pt-7 sm:pb-3">
              <p className="font-body text-base sm:text-lg leading-relaxed max-w-xl mb-6" style={{ color: "#172033" }}>Tu apoyo permite que sigamos haciendo periodismo independiente sobre tecnología, poder y las decisiones que casi nadie ve.</p>
              <button className="focus-ring px-4 py-3 font-body font-semibold text-white border-2" style={{ backgroundColor: "#F05A78", borderColor: "#172033", boxShadow: "4px 4px 0 #172033" }}>Dona ahora</button>
            </div>
          </div>
        </section>

        {/* Share + credits */}
        <section className="max-w-[680px] mx-auto px-6 pb-16">
          <div className="pt-10 pb-8" style={{ borderTop: "1px solid #E4E1D8" }}>
            <p className="font-mono text-xs uppercase tracking-wider mb-4" style={{ color: "#8A8577" }}>
              Comparte este artículo
            </p>
            <div className="flex gap-3">
              <button className="focus-ring flex items-center gap-2 font-mono text-[13px] uppercase tracking-wider px-4 py-2 rounded-sm border" style={{ borderColor: "#172033" }}>
                <Link2 size={14} /> Copiar enlace
              </button>
              <button className="focus-ring flex items-center gap-2 font-mono text-[13px] uppercase tracking-wider px-4 py-2 rounded-sm border" style={{ borderColor: "#172033" }}>
                <Repeat2 size={14} /> Republicar
              </button>
            </div>
          </div>

          <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-8" style={{ borderTop: "1px solid #E4E1D8" }}>
            <div className="flex items-start gap-3">
              <img src={AUTHOR_IMAGE} alt="Renata Cordero" className="w-10 h-10 rounded-full shrink-0 object-cover" />
              <div>
                <p className="font-mono text-xs uppercase tracking-wider mb-1" style={{ color: "#8A8577" }}>Créditos</p>
                <p className="font-body text-sm" style={{ color: "#172033" }}>Renata Cordero</p>
                <p className="font-mono text-xs" style={{ color: "#8A8577" }}>Reportera de investigación</p>
              </div>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider mb-1" style={{ color: "#8A8577" }}>Edición</p>
                <p className="font-body text-sm" style={{ color: "#172033" }}>Julián Rosas</p>
            </div>
          </div>
        </section>

        {/* Latest grid */}
        <section className="max-w-6xl mx-auto px-6 md:px-8 pb-20" style={{ backgroundColor: "#FAFAF8" }}>
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-display text-2xl md:text-3xl">Lo último</h2>
            <div className="hidden sm:block flex-1 mx-6" style={{ borderTop: "1px solid #E4E1D8" }} />
            <a href="#" className="font-mono text-[13px] uppercase tracking-wider link-underline flex items-center gap-1 focus-ring rounded-sm" style={{ color: "#5577B8" }}>
              Ver todo <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {LATEST.map((item) => (
              <a href="#" key={item.title} className="group focus-ring rounded-sm block">
                <div className="dotframe mb-5">
                  <img src={item.img} alt="" className="w-full h-[170px] object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
                </div>
                <p className="font-mono text-[12px] uppercase tracking-wider mb-2" style={{ color: "#5577B8" }}>{item.tag}</p>
                <h3 className="font-display text-lg leading-snug link-underline inline">{item.title}</h3>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t" style={{ borderColor: "#E4E1D8" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-12 flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="font-display italic text-2xl mb-2">Señal</p>
            <p className="font-mono text-xs max-w-xs" style={{ color: "#8A8577" }}>
              Periodismo sobre tecnología, poder y las decisiones que casi nadie ve.
            </p>
          </div>
          <div className="flex gap-3 font-mono text-[13px] uppercase tracking-wider">
            {NAV_LINKS.map((link) => (
              <a key={link} href="#" className="link-underline w-fit focus-ring rounded-sm">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
