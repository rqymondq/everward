/* eslint-disable @next/next/no-img-element */
import { BOOKING_URL } from "@/lib/site-config";

const heroStages = ["Meta ads", "Homeowner", "Qualified", "Follow-up", "Estimate"];
const process = [
  { number: "01", name: "Attract", text: "Reach local homeowners through focused Meta advertising." },
  { number: "02", name: "Qualify", text: "Capture location, project type, home status and timing." },
  { number: "03", name: "Follow up", text: "Start the conversation quickly with automated SMS follow-up." },
  { number: "04", name: "Book", text: "Move qualified homeowners toward an estimate with your team." },
];
const everwardHandles = ["Meta advertising", "Landing pages & lead capture", "Homeowner qualification", "CRM infrastructure", "Automated SMS follow-up", "Instant lead notifications", "Estimate booking system", "Campaign monitoring & optimization"];

function BookingLink({ className = "button", label = "Book a call" }: { className?: string; label?: string }) {
  return <a className={className} href={BOOKING_URL} target="_blank" rel="noopener noreferrer">{label}<span aria-hidden="true">↗</span></a>;
}

function BrandLogo({ footer = false }: { footer?: boolean }) {
  return <img className={`brand-logo${footer ? " brand-logo-light" : ""}`} src="/everward-logo.png" width="214" height="45" alt="Everward" />;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Everward home"><BrandLogo /></a>
        <nav aria-label="Primary navigation"><a href="#system">How it works</a><a href="#handles">What we handle</a></nav>
        <BookingLink className="button button-small" />
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <div><a href="#system">How it works</a><a href="#handles">What we handle</a><BookingLink /></div>
        </details>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Residential HVAC growth systems</p>
          <h1>More qualified HVAC replacement opportunities.</h1>
          <p className="hero-lede">Everward helps residential HVAC companies find and qualify local homeowners looking for furnace, AC, heat-pump and full-system replacements.</p>
          <div className="hero-actions"><BookingLink /><p>Advertising · Qualification · Follow-up · Booking</p></div>
        </div>

        <div className="system-window" aria-label="Everward lead generation system">
          <div className="window-bar"><span>EVERWARD / SYSTEM</span><span className="status"><i /> ACTIVE</span></div>
          <div className="system-flow">
            {heroStages.map((stage, index) => (
              <div className="flow-stage" key={stage}><span className="stage-number">0{index + 1}</span><strong>{stage}</strong>{index < heroStages.length - 1 && <span className="flow-line" aria-hidden="true" />}</div>
            ))}
          </div>
          <div className="system-note"><span>Opportunity status</span><strong><i /> Ready for your team</strong></div>
        </div>
      </section>

      <section className="system-section" id="system">
        <div className="section-shell">
          <div className="section-heading"><p className="section-index">01 / The system</p><h2>From ad click to estimate opportunity.</h2></div>
          <div className="process-track">
            {process.map((step) => (
              <article className="process-step" key={step.number}><div className="process-node"><span>{step.number}</span><i /></div><h3>{step.name}</h3><p>{step.text}</p></article>
            ))}
          </div>
          <p className="section-footnote">One connected system. Clear handoff to your team.</p>
        </div>
      </section>

      <section className="difference section-shell" id="difference">
        <div className="difference-copy">
          <p className="section-index">02 / The difference</p>
          <h2>More than a list of names and phone numbers.</h2>
          <p>Getting a lead isn’t the hard part. Turning that lead into a real conversation is. Everward combines acquisition with the infrastructure needed to qualify, follow up with and organize each opportunity.</p>
        </div>
        <div className="comparison" aria-label="Comparison of a typical lead service and Everward">
          <div className="compare-row typical"><div><span>Typical lead service</span><b>Lead generated</b></div><span className="arrow">→</span><div><b>Name + number</b><small>Your team chases</small></div><span className="arrow">→</span><div><b>Lead goes cold</b></div></div>
          <div className="compare-row everward"><div><span>Everward</span><b>Lead generated</b></div><span className="arrow">→</span><div><b>Qualified + contacted</b><small>Follow-up starts</small></div><span className="arrow">→</span><div><b>Estimate opportunity</b><small>Your team notified</small></div></div>
        </div>
      </section>

      <section className="handles-section" id="handles">
        <div className="section-shell">
          <div className="handles-heading"><p className="section-index">03 / The handoff</p><h2>We build the front end.<br />Your team closes the work.</h2></div>
          <div className="responsibility-grid">
            <article className="everward-list"><div className="list-title"><img className="brand-symbol" src="/favicon.png" width="28" height="28" alt="" /><h3>Everward handles</h3></div><ul>{everwardHandles.map((item) => <li key={item}><span>+</span>{item}</li>)}</ul></article>
            <article className="contractor-list"><p className="list-kicker">Your team</p><h3>Focuses on what it does best.</h3><ol><li><span>01</span>Talk to qualified homeowners</li><li><span>02</span>Run estimates</li><li><span>03</span>Close replacement work</li></ol><p className="pilot-note"><i /> Performance-based, low-risk pilot structure.</p></article>
          </div>
        </div>
      </section>

      <section className="final-cta" id="contact">
        <div className="section-shell cta-inner"><p className="section-index">Start a conversation</p><h2>Want to see if it makes sense for your market?</h2><p>We’ll look at your service area, the replacement jobs you want more of and whether the Everward system is a fit.</p><BookingLink className="button button-accent" /></div>
      </section>

      <footer className="site-footer"><div className="section-shell footer-grid"><div><a className="wordmark footer-wordmark" href="#top" aria-label="Everward home"><BrandLogo footer /></a><p>British Columbia, Canada</p></div><div className="footer-contact"><span>Direct contact</span><a href="mailto:hello@everward.ca">hello@everward.ca</a></div><div className="footer-meta"><span>© 2026 Everward</span><span aria-label="Legal pages forthcoming">Privacy · Terms</span></div></div></footer>
    </main>
  );
}
