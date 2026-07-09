// Section components for the portfolio site.
// All static markup — JSX is just for componentisation.

// External links. BOOK_URL and SUBSCRIBE_URL are placeholders — swap for the real ones.
const BOOK_URL = 'https://cal.com/harrymrdavies';
const SUBSCRIBE_URL = 'https://harrymrdavies.com/#subscribe';
const YOUTUBE_URL = 'https://youtube.com/@harrymrdavies';
const LINKEDIN_URL = 'https://www.linkedin.com/in/harry-davies93/';

// ─────────────────────────────────────────────────────────
// Header (fixed running banner)
// ─────────────────────────────────────────────────────────
function Runner() {
  const [active, setActive] = React.useState('hero');
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    function onScroll() {
      const sections = ['hero', 'about', 'services', 'projects', 'career', 'writing', 'beyond', 'contact'];
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
    ['services', 'Work with me'],
    ['projects', 'Work'],
    ['writing', 'Content'],
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
// Hero — masthead + portrait
// ─────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="hero" className="hero-section" data-screen-label="01 Hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Founder · Investor · Advisor</p>
          <h1 className="hero-title">
            Helping businesses put <em>AI to work</em>.
          </h1>
          <p className="hero-lede">
            Hey, I'm Harry — an exited founder, community builder, investor and
            advisor. Now I help businesses implement AI to increase efficiency
            and profitability.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={BOOK_URL} target="_blank" rel="noreferrer">Book a call →</a>
            <a className="btn btn-ghost" href={YOUTUBE_URL} target="_blank" rel="noreferrer">Watch on YouTube</a>
          </div>
        </div>

        <div className="hero-photo">
          <div className="hero-photo-frame">
            <img
              src="assets/portrait.png"
              alt="Harry M. R. Davies"
              width="800"
              height="800"
              fetchpriority="high"
            />
            <span className="hero-photo-tag">AI · Advisory · Community</span>
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
            <h2 className="ttl"><em>From building companies</em><br/>to putting AI to work.</h2>
          </div>
        </div>

        <div className="body about-lede drop">
          <p>Hey, I'm Harry. Over the past decade I've built companies across tech, services and communities — as a founder, operator, investor and advisor. I co-founded a technology recruitment company, scaled it past seven figures, and exited.</p>
          <p>Today I help businesses implement AI to increase efficiency and profitability — from hands-on setup to strategy — and I advise founders across Web3, fintech, recruitment, wellness and AI on operations, fundraising, go-to-market, sales and marketing.</p>
        </div>

        <hr className="hairline" style={{margin: '64px 0'}} />

        <div className="three-cards">
          <article>
            <div className="kicker">01</div>
            <h3 className="subhead">AI <em>Implementation</em></h3>
            <p>Helping businesses adopt AI to increase efficiency and profitability — practical setup, workflows and training. I also lead roundtables with private-equity funds on rolling AI out across their fund and portfolio companies.</p>
          </article>
          <article>
            <div className="kicker">02</div>
            <h3 className="subhead"><em>Advisory</em></h3>
            <p>Advising founders across Web3, fintech, recruitment, wellness and AI — from operational setup and fundraising strategy to go-to-market, sales and marketing.</p>
          </article>
          <article>
            <div className="kicker">03</div>
            <h3 className="subhead"><em>Community</em></h3>
            <p>Built a community of 11,000+ investors, founders and senior operators across the UK, US and Europe, with partnerships spanning some of the largest companies in the world.</p>
          </article>
        </div>

        <hr className="hairline" style={{margin: '64px 0 32px'}} />

        <div className="achievements">
          <div className="kicker">Key highlights</div>
          <ol className="achievement-list">
            <li><span className="ach-num">01</span><span>Co-founded and scaled a technology recruitment company to <em>seven figures</em>, then exited — working with Barclays, LSEG, BP, Moneybox, Tide, Curve, Wintermute and GSR.</span></li>
            <li><span className="ach-num">02</span><span>Built a community of <em>11,000+</em> VC/PE investors, founders and senior operators across the UK, US and Europe.</span></li>
            <li><span className="ach-num">03</span><span>Built partnerships with some of the largest companies on the planet — <em>Google, Microsoft, AWS, Hubspot and Revolut</em>.</span></li>
            <li><span className="ach-num">04</span><span>Guest speaker and advisor to <em>Kickstart Global</em>, the UK's largest cross-university incubator — 100+ startups launched, £33m+ raised.</span></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// Services — how I can help + subscribe callout
// ─────────────────────────────────────────────────────────
function Services() {
  return (
    <section id="services" className="services-section" data-screen-label="03 Work with me">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Work with me</p>
            <h2 className="ttl">How I can <em>help</em>.</h2>
          </div>
        </div>

        <div className="services-grid">
          <article>
            <div className="kicker">01</div>
            <h3 className="subhead">AI <em>Implementation</em></h3>
            <ul className="bare-list">
              <li>Put AI to work across your business</li>
              <li>Practical setup &amp; workflow design</li>
              <li>Team training &amp; enablement</li>
              <li>PE-fund AI-adoption roundtables</li>
            </ul>
          </article>
          <article>
            <div className="kicker">02</div>
            <h3 className="subhead"><em>Advisory</em></h3>
            <ul className="bare-list">
              <li>Operational setup &amp; scaling</li>
              <li>Fundraising strategy</li>
              <li>Go-to-market &amp; sales</li>
              <li>Marketing &amp; positioning</li>
            </ul>
          </article>
          <article>
            <div className="kicker">03</div>
            <h3 className="subhead">Partnerships &amp; <em>Community</em></h3>
            <ul className="bare-list">
              <li>Access to 11,000+ investors &amp; operators</li>
              <li>Enterprise partnership building</li>
              <li>Curated events &amp; introductions</li>
              <li>Go-to-market through community</li>
            </ul>
          </article>
        </div>

        <div className="dd-callout">
          <div className="kicker">Free guide</div>
          <h3 className="subhead">Subscribe for a <em>free Claude Cowork setup guide</em></h3>
          <p>Get free, practical AI content — plus a step-by-step Claude Cowork setup guide — straight to your inbox.</p>
          <a className="link-arrow" href={SUBSCRIBE_URL}>Subscribe →</a>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// Selected work
// ─────────────────────────────────────────────────────────
const PROJECTS = [
  {
    name: 'Gathr',
    role: 'Head of Partnerships / Investor / Advisor',
    period: 'Dec 2023 –',
    body: 'A curated community of 11,000+ founders, investors and operators. I invested first, then joined the founder after exiting my recruitment company to build the business from scratch. Built and monetised relationships across 2,000 VC and growth investors (850 funds) and 2,000 private-equity investors (450 funds), and secured partnerships with AWS, Stripe, Airwallex, Hubspot and Revolut. Helped design the recruitment-comparison product that matches investment-backed companies to search firms on actual placement data.',
    pills: ['Partnerships', 'Community', 'Investors', 'Events'],
  },
  {
    name: 'Albert Bow',
    role: 'Co-Founder',
    period: '2018 – 2023',
    body: 'Co-founded and bootstrapped a technology recruitment agency specialising in Tech, Trading, Product and C-suite hiring. Scaled past seven figures and exited. Developed deep market knowledge of digital assets, trading and blockchain through senior and C-suite placements with the likes of Wintermute, GSR, Tide, Curve and Moneybox.',
    pills: ['Recruitment', 'Digital Assets', 'C-suite', 'Exited'],
  },
  {
    name: 'Vestn.io & Levitate',
    role: 'Investor & Advisor',
    period: '2021 –',
    body: 'Angel investor and advisor across early-stage tech, helping startups scale efficiently, raise capital and improve profitability. Advisor to Vestn.io, a real-world-asset (RWA) tokenisation platform, and to Levitate, a digital design and branding agency.',
    pills: ['Advisory', 'Tokenisation', 'RWA', 'Branding'],
  },
  {
    name: 'HippoConsent',
    role: 'Founder',
    period: '2020 – 2023',
    body: 'Founded a digital medical-consent platform for surgical preparation and aftercare, used by clinicians and patients. Now on the backburner.',
    pills: ['HealthTech', 'Product'],
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section" data-screen-label="04 Work">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="ttl">Things I've <em>built.</em></h2>
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
// Experience — chronological timeline
// ─────────────────────────────────────────────────────────
const CAREER = [
  { period: 'Dec 2023 –',   org: 'Gathr',                     role: 'Head of Partnerships / Investor / Advisor', note: 'Community of 11,000+ founders, investors & operators' },
  { period: '2018 – 2023',  org: 'Albert Bow',                role: 'Co-Founder',                                note: 'Bootstrapped tech recruitment agency · exited' },
  { period: '2021 –',       org: 'Vestn.io / Levitate',       role: 'Investor & Advisor',                        note: 'Angel investing & startup advisory' },
  { period: '2020 – 2023',  org: 'HippoConsent',              role: 'Founder',                                   note: 'Digital medical-consent platform' },
  { period: '2016 – 2018',  org: 'Twenty Recruitment Group',  role: 'Head of Development & Vendor Technology',   note: 'Development & vendor-technology initiatives' },
];

function Career() {
  return (
    <section id="career" className="career-section" data-screen-label="05 Experience">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Experience</p>
            <h2 className="ttl">A <em>decade</em> of building.</h2>
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
// Content & speaking
// ─────────────────────────────────────────────────────────
const SPEAKING = [
  { event: 'Kickstart Global',        topic: 'Guest speaker &amp; advisor · UK\'s largest cross-university incubator' },
  { event: 'Private-equity roundtables', topic: 'Leading AI-adoption roundtables for PE funds &amp; portfolio companies' },
];

function Writing() {
  return (
    <section id="writing" className="writing-section" data-screen-label="06 Content">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Content &amp; speaking</p>
            <h2 className="ttl">Teaching AI <em>in public.</em></h2>
          </div>
        </div>

        <div className="writing-grid">
          <div>
            <div className="youtube-feature">
              <div className="kicker">YouTube · @harrymrdavies</div>
              <h3 className="subhead">Free AI education, <em>every week.</em></h3>
              <p>I share practical, no-fluff AI content to help businesses and founders get more done — and get your hands on a free Claude Cowork setup guide when you subscribe.</p>
              <div className="youtube-actions">
                <a className="btn btn-primary" href={YOUTUBE_URL} target="_blank" rel="noreferrer">Watch on YouTube →</a>
                <a className="btn btn-ghost" href={LINKEDIN_URL} target="_blank" rel="noreferrer">21,000+ on LinkedIn</a>
              </div>
            </div>
          </div>

          <aside className="speaking">
            <div className="kicker" style={{marginBottom: 24}}>Speaking</div>
            {SPEAKING.map((s, i) => (
              <div key={i} className="speaking-item">
                <h4 className="subhead" style={{fontSize: '22px'}}>{s.event}</h4>
                <div className="meta" dangerouslySetInnerHTML={{__html: s.topic}} />
              </div>
            ))}
            <hr className="hairline" style={{margin: '40px 0'}}/>
            <div className="kicker" style={{marginBottom: 16}}>Open to —</div>
            <p style={{fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '20px'}}>
              Talks and roundtables on implementing AI in business, community-building and going to market.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// Beyond work — fitness
// ─────────────────────────────────────────────────────────
const RIDES = [
  { route: 'London → Paris',     dist: '470km' },
  { route: 'London → Amsterdam', dist: '450km' },
  { route: 'Bath → Manchester',  dist: '350km' },
];

function Beyond() {
  return (
    <section id="beyond" className="beyond-section" data-screen-label="07 Beyond work">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Beyond work</p>
            <h2 className="ttl">A bit of a <em>fitness freak.</em></h2>
          </div>
        </div>

        <div className="body about-lede">
          <p>Former top junior tennis player — five-time Welsh champion — I represented Wales Students at rugby sevens and played to professional standard for Richmond RFC. These days I get my fix on long-distance charity cycle rides.</p>
        </div>

        <div className="three-cards" style={{marginTop: 48}}>
          {RIDES.map((r, i) => (
            <article key={i}>
              <div className="kicker">Charity ride</div>
              <h3 className="subhead">{r.route}</h3>
              <p className="ride-dist">{r.dist}</p>
            </article>
          ))}
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
    <section id="contact" className="contact-section" data-screen-label="08 Contact">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2 className="ttl">Let's put <em>AI to work.</em></h2>
          </div>
        </div>

        <div className="contact-grid">
          <p className="lede" style={{maxWidth: 720}}>
            Interested in how AI can help your business? Book a call. Otherwise,
            find me on YouTube and LinkedIn — or drop me a line.
          </p>

          <div className="contact-links">
            <a href={BOOK_URL} target="_blank" rel="noreferrer">
              <div className="kicker">Book a call</div>
              <div className="contact-value">Find a time</div>
            </a>
            <a href="mailto:me@harrymrdavies.com" rel="me">
              <div className="kicker">Email</div>
              <div className="contact-value">me@harrymrdavies.com</div>
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="me noreferrer">
              <div className="kicker">LinkedIn</div>
              <div className="contact-value">21,000+ followers</div>
            </a>
            <a href={YOUTUBE_URL} target="_blank" rel="me noreferrer">
              <div className="kicker">YouTube</div>
              <div className="contact-value">@harrymrdavies</div>
            </a>
          </div>
        </div>
      </div>

      <div className="wrap">
        <footer className="colophon">
          <div>
            <strong>Harry Davies</strong>
            Exited founder, investor and advisor. Helping businesses put AI to work.
          </div>
          <div>
            <strong>Elsewhere</strong>
            <a href={LINKEDIN_URL} rel="me">LinkedIn</a><br/>
            <a href={YOUTUBE_URL} rel="me">YouTube · @harrymrdavies</a>
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

Object.assign(window, { Runner, Hero, About, Services, Projects, Career, Writing, Beyond, Contact });
