// Section components for the portfolio site.
// All static markup — JSX is just for componentisation.
// Copy is Lorem Ipsum placeholder; swap freely.

// ─────────────────────────────────────────────────────────
// Header (fixed running banner)
// ─────────────────────────────────────────────────────────
// Placeholder scheduling link — swap for Harry's real Calendly / cal.com / Google.
const BOOK_URL = 'https://cal.com/harrymrdavies';

function Runner() {
  const [active, setActive] = React.useState('hero');
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    function onScroll() {
      const sections = ['hero', 'about', 'career', 'projects', 'services', 'writing', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top < 120) {
          setActive(sections[i]);
          break;
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    ['about', 'About'],
    ['career', 'Career'],
    ['projects', 'Work'],
    ['writing', 'Writing'],
    ['contact', 'Contact'],
  ];

  return (
    <header className="runner">
      <div className="wrap runner-inner">
        <a className="brand" href="#hero" aria-label="Harry M. R. Davies — home">
          <span className="mark">H</span>
          <span className="brand-name">Harry Davies</span>
        </a>

        <nav className="runner-nav" aria-label="Sections">
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'active' : ''}
              aria-current={active === id ? 'location' : undefined}
            >{label}</a>
          ))}
        </nav>

        <div className="runner-cta">
          <a className="btn btn-primary" href={BOOK_URL} target="_blank" rel="noreferrer">Book a call</a>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
          >
            <span></span><span></span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="runner-mobile" aria-label="Sections">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="btn btn-primary" href={BOOK_URL} target="_blank" rel="noreferrer">Book a call</a>
        </nav>
      )}
    </header>
  );
}

// ─────────────────────────────────────────────────────────
// Hero — masthead + portrait (placeholder photo)
// ─────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="hero" className="hero-section" data-screen-label="01 Hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Sales · Marketing · Growth</p>
          <h1 className="hero-title">
            The work of <em>lorem ipsum</em> dolor sit amet.
          </h1>
          <p className="hero-lede">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={BOOK_URL} target="_blank" rel="noreferrer">Book a call →</a>
            <a className="btn btn-ghost" href="#writing">Read the writing</a>
          </div>
        </div>

        <div className="hero-photo">
          <div className="hero-photo-frame">
            <img
              src="assets/portrait-placeholder.png"
              alt="Portrait of Harry M. R. Davies (placeholder)"
              width="800"
              height="1000"
              fetchpriority="high"
            />
            <span className="hero-photo-tag">Sales · Marketing · Growth</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// About
// ─────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="about-section" data-screen-label="02 About">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="ttl"><em>Lorem ipsum dolor</em><br/>sit amet consectetur.</h2>
          </div>
        </div>

        <div className="body about-lede drop">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
        </div>

        <hr className="hairline" style={{margin: '64px 0'}} />

        <div className="three-cards">
          <article>
            <div className="kicker">01</div>
            <h3 className="subhead">Lorem <em>Ipsum</em></h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
          </article>
          <article>
            <div className="kicker">02</div>
            <h3 className="subhead">Dolor &amp; <em>Sit Amet</em></h3>
            <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
          </article>
          <article>
            <div className="kicker">03</div>
            <h3 className="subhead">Consectetur <em>Elit</em></h3>
            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.</p>
          </article>
        </div>

        <hr className="hairline" style={{margin: '64px 0 32px'}} />

        <div className="achievements">
          <div className="kicker">Key highlights</div>
          <ol className="achievement-list">
            <li><span className="ach-num">01</span><span>Lorem ipsum dolor sit amet <em>consectetur adipiscing</em> elit sed do eiusmod.</span></li>
            <li><span className="ach-num">02</span><span>Tempor incididunt ut labore et <em>dolore magna</em> aliqua ut enim.</span></li>
            <li><span className="ach-num">03</span><span>Ad minim veniam quis nostrud <em>exercitation ullamco</em> laboris nisi.</span></li>
            <li><span className="ach-num">04</span><span>Ut aliquip ex ea commodo consequat <em>duis aute</em> irure dolor.</span></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// Career — chronological timeline
// ─────────────────────────────────────────────────────────
const CAREER = [
  { period: '2025 –',      org: 'Lorem Company',     role: 'Founder & Operator',        note: 'Consectetur adipiscing elit' },
  { period: '2024 – 2025', org: 'Ipsum Labs',        role: 'Head of Product',           note: 'Sed do eiusmod tempor' },
  { period: '2023 – 2024', org: 'Dolor Systems',     role: 'Engineering Lead',          note: 'Incididunt ut labore' },
  { period: '2021 – 2023', org: 'Amet Technologies',  role: 'Senior Engineer',           note: 'Et dolore magna aliqua' },
  { period: '2018 – 2021', org: 'Consectetur Corp',  role: 'Software Engineer',         note: 'Ut enim ad minim veniam' },
  { period: '—',           org: 'University of Lorem', role: 'BSc, Computer Science',     note: 'Quis nostrud exercitation' },
];

function Career() {
  return (
    <section id="career" className="career-section" data-screen-label="03 Career">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Career</p>
            <h2 className="ttl">A <em>decade</em> in brief.</h2>
          </div>
        </div>

        <ol className="career-list list-divided">
          {CAREER.map((c, i) => (
            <li key={i} className="career-item">
              <div className="career-period meta">{c.period}</div>
              <div className="career-body">
                <h3 className="subhead">{c.org}<span className="project-role"> · {c.role}</span></h3>
                <p className="meta">{c.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// Projects
// ─────────────────────────────────────────────────────────
const PROJECTS = [
  {
    num: '04.i',
    name: 'Lorem Project',
    role: 'Founder & Operator',
    period: '2025 –',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    pills: ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet'],
    url: 'https://example.com/',
  },
  {
    num: '04.ii',
    name: 'Ipsum Platform',
    role: 'Engineering Lead',
    period: '2024 – 2025',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.',
    pills: ['Consectetur', 'Adipiscing', 'Elit'],
    url: 'https://example.com/',
  },
  {
    num: '04.iii',
    name: 'Dolor Engine',
    role: 'Senior Engineer',
    period: '2023 – 2024',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.',
    pills: ['Tempor', 'Incididunt', 'Labore'],
  },
  {
    num: '04.iv',
    name: 'Amet Toolkit',
    role: 'Maintainer',
    period: '2022 – 2023',
    body: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.',
    pills: ['Magna', 'Aliqua', 'Veniam'],
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section" data-screen-label="04 Projects">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="ttl">Selected <em>work.</em></h2>
          </div>
        </div>

        <div className="list-divided">
          {PROJECTS.map((p, i) => (
            <article key={i} className="project">
              <div className="project-meta">
                <div className="kicker">{String(i + 1).padStart(2, '0')}</div>
                <div className="meta">{p.period}</div>
              </div>
              <div className="project-body">
                <h3 className="subhead">{p.name}<span className="project-role"> · {p.role}</span></h3>
                <p>{p.body}</p>
                {p.url && (
                  <p style={{marginTop: 16}}>
                    <a className="link-arrow" href={p.url} target="_blank" rel="noreferrer">
                      {p.url.replace(/^https?:\/\//, '').replace(/\/$/, '')} →
                    </a>
                  </p>
                )}
                <div className="project-pills">
                  {p.pills.map((t, j) => <span key={j} className="pill">{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// Services
// ─────────────────────────────────────────────────────────
function Services() {
  return (
    <section id="services" className="services-section" data-screen-label="05 Services">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Services</p>
            <h2 className="ttl">Lorem ipsum <em>dolor</em> sit amet.</h2>
          </div>
        </div>

        <div className="services-grid">
          <article>
            <div className="kicker">01</div>
            <h3 className="subhead">Lorem &amp; <em>Ipsum</em><br/>Advisory</h3>
            <ul className="bare-list">
              <li>Lorem ipsum dolor sit</li>
              <li>Consectetur adipiscing elit</li>
              <li>Sed do eiusmod tempor</li>
              <li>Incididunt ut labore</li>
            </ul>
          </article>
          <article>
            <div className="kicker">02</div>
            <h3 className="subhead">Dolor &amp; <em>Sit Amet</em><br/>Strategy</h3>
            <ul className="bare-list">
              <li>Et dolore magna aliqua</li>
              <li>Ut enim ad minim veniam</li>
              <li>Quis nostrud exercitation</li>
              <li>Ullamco laboris nisi</li>
            </ul>
          </article>
          <article>
            <div className="kicker">03</div>
            <h3 className="subhead">Consectetur &amp; <em>Adipiscing</em></h3>
            <ul className="bare-list">
              <li>Ut aliquip ex ea commodo</li>
              <li>Duis aute irure dolor</li>
              <li>In reprehenderit voluptate</li>
              <li>Velit esse cillum dolore</li>
            </ul>
          </article>
        </div>

        <div className="dd-callout">
          <div className="kicker">A note</div>
          <h3 className="subhead">Lorem ipsum — <em>dolor</em> sit amet</h3>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis.</p>
          <a className="link-arrow" href="https://example.com" target="_blank" rel="noreferrer">example.com →</a>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// Writing & Speaking
// ─────────────────────────────────────────────────────────
const ARTICLES = [
  {
    date: 'Jun 2026',
    title: 'Lorem Ipsum Dolor Sit Amet',
    excerpt: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    url: '/writing/lorem-ipsum-dolor/',
  },
  {
    date: 'May 2026',
    title: 'Consectetur Adipiscing Elit',
    excerpt: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
    url: '/writing/consectetur-adipiscing/',
  },
  {
    date: 'Apr 2026',
    title: 'Sed Do Eiusmod Tempor',
    excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    url: '/writing/sed-do-eiusmod/',
  },
];

const SPEAKING = [
  { event: 'Lorem Conference',   topic: 'Dolor Sit Amet &amp; Strategy' },
  { event: 'Ipsum Summit',       topic: 'Consectetur Adipiscing Elit' },
];

function Writing() {
  return (
    <section id="writing" className="writing-section" data-screen-label="06 Writing">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Writing &amp; speaking</p>
            <h2 className="ttl">In <em>print</em> and at the lectern.</h2>
          </div>
        </div>

        <div className="writing-grid">
          <div>
            <div className="kicker" style={{marginBottom: 24}}>Recent articles</div>
            <div className="list-divided">
              {ARTICLES.map((a, i) => (
                <a key={i} className="article-link" href={a.url}>
                  <div className="meta">{a.date}</div>
                  <h3 className="subhead" dangerouslySetInnerHTML={{__html: a.title}} />
                  <p dangerouslySetInnerHTML={{__html: a.excerpt}} />
                  <span className="link-arrow">Read →</span>
                </a>
              ))}
            </div>
            <p style={{marginTop: 32}}><a className="link-arrow" href="/writing/">All writing →</a></p>
          </div>

          <aside className="speaking">
            <div className="kicker" style={{marginBottom: 24}}>Speaking</div>
            {SPEAKING.map((s, i) => (
              <div key={i} className="speaking-item">
                <h4 className="subhead" style={{fontSize: '24px'}}>{s.event}</h4>
                <div className="meta" dangerouslySetInnerHTML={{__html: s.topic}} />
              </div>
            ))}
            <hr className="hairline" style={{margin: '40px 0'}}/>
            <div className="kicker" style={{marginBottom: 16}}>Open to —</div>
            <p style={{fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '20px'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// Contact
// ─────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="contact-section" data-screen-label="07 Contact">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2 className="ttl">Lorem ipsum, <em>dolor,</em><br/>sit amet.</h2>
          </div>
        </div>

        <div className="contact-grid">
          <p className="lede" style={{maxWidth: 720}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>

          <div className="contact-links">
            <a href="mailto:me@harrymrdavies.com" rel="me">
              <div className="kicker">Email</div>
              <div className="contact-value">me@harrymrdavies.com</div>
            </a>
            <a href="https://www.linkedin.com/in/harrymrdavies/" target="_blank" rel="me noreferrer">
              <div className="kicker">LinkedIn</div>
              <div className="contact-value">/in/harrymrdavies</div>
            </a>
            <a href="https://x.com/harrymrdavies" target="_blank" rel="me noreferrer">
              <div className="kicker">Twitter</div>
              <div className="contact-value">@harrymrdavies</div>
            </a>
            <a href="https://github.com/harrymrdavies" target="_blank" rel="me noreferrer">
              <div className="kicker">GitHub</div>
              <div className="contact-value">@harrymrdavies</div>
            </a>
          </div>
        </div>
      </div>

      <div className="wrap">
        <footer className="colophon">
          <div>
            <strong>Harry Davies</strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div>
            <strong>Elsewhere</strong>
            <a href="https://www.linkedin.com/in/harrymrdavies/" rel="me">LinkedIn</a><br/>
            <a href="https://x.com/harrymrdavies" rel="me">X · @harrymrdavies</a><br/>
            <a href="https://github.com/harrymrdavies" rel="me">GitHub</a>
          </div>
          <div>
            <strong>© 2026</strong>
            Harry M. R. Davies.<br/>
            All rights reserved.
          </div>
        </footer>
      </div>
    </section>
  );
}

Object.assign(window, { Runner, Hero, About, Career, Projects, Services, Writing, Contact });
