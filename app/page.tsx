/* eslint-disable @next/next/no-img-element */
import { BOOKING_URL } from "@/lib/site-config";

const heroStages = ["Incoming call", "AI answers", "Qualify", "Book", "Notify"];
const process = [
  { number: "01", name: "Answer", text: "A natural-sounding AI receptionist picks up when your team cannot." },
  { number: "02", name: "Qualify", text: "Collect the homeowner, location, job type and urgency details you need." },
  { number: "03", name: "Book", text: "Offer available times and add the appointment directly to your calendar." },
  { number: "04", name: "Notify", text: "Send your team the appointment details and a clear summary of the call." },
];
const everwardHandles = ["Missed-call answering", "After-hours answering", "Natural voice conversations", "Homeowner qualification", "Basic job qualification", "Calendar availability checks", "Appointment booking", "Team notifications"];

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
          <p className="eyebrow"><span /> AI receptionist for residential HVAC</p>
          <h1>Turn missed HVAC calls into booked appointments.</h1>
          <p className="hero-lede">Everward answers missed and after-hours calls, qualifies the homeowner and job, books the appointment and lets your team know what happened.</p>
          <div className="hero-actions"><BookingLink /><p>Answering · Qualification · Booking · Notifications</p></div>
        </div>

        <div className="system-window" aria-label="Everward AI receptionist workflow">
          <div className="window-bar"><span>EVERWARD / SYSTEM</span><span className="status"><i /> ACTIVE</span></div>
          <div className="system-flow">
            {heroStages.map((stage, index) => (
              <div className="flow-stage" key={stage}><span className="stage-number">0{index + 1}</span><strong>{stage}</strong>{index < heroStages.length - 1 && <span className="flow-line" aria-hidden="true" />}</div>
            ))}
          </div>
          <div className="system-note"><span>Call outcome</span><strong><i /> Appointment booked</strong></div>
        </div>
      </section>

      <section className="system-section" id="system">
        <div className="section-shell">
          <div className="section-heading"><p className="section-index">01 / The system</p><h2>From missed call to booked appointment.</h2></div>
          <div className="process-track">
            {process.map((step) => (
              <article className="process-step" key={step.number}><div className="process-node"><span>{step.number}</span><i /></div><h3>{step.name}</h3><p>{step.text}</p></article>
            ))}
          </div>
          <p className="section-footnote">One connected workflow. Clear handoff to your team.</p>
        </div>
      </section>

      <section className="difference section-shell" id="difference">
        <div className="difference-copy">
          <p className="section-index">02 / The difference</p>
          <h2>The demand is already there.</h2>
          <p>Homeowners are already calling. When no one answers, they often move on to the next company. Everward helps you capture that existing demand by answering, qualifying and booking the call.</p>
        </div>
        <div className="comparison" aria-label="Comparison of an unanswered call and an Everward call">
          <div className="compare-row typical"><div><span>Without Everward</span><b>Call comes in</b></div><span className="arrow">→</span><div><b>No one answers</b><small>Voicemail or hang-up</small></div><span className="arrow">→</span><div><b>Homeowner moves on</b></div></div>
          <div className="compare-row everward"><div><span>With Everward</span><b>Call comes in</b></div><span className="arrow">→</span><div><b>Answered + qualified</b><small>Calendar checked</small></div><span className="arrow">→</span><div><b>Appointment booked</b><small>Your team notified</small></div></div>
        </div>
      </section>

      <section className="handles-section" id="handles">
        <div className="section-shell">
          <div className="handles-heading"><p className="section-index">03 / The handoff</p><h2>We handle the missed call.<br />Your team handles the job.</h2></div>
          <div className="responsibility-grid">
            <article className="everward-list"><div className="list-title"><img className="brand-symbol" src="/favicon.png" width="28" height="28" alt="" /><h3>Everward handles</h3></div><ul>{everwardHandles.map((item) => <li key={item}><span>+</span>{item}</li>)}</ul></article>
            <article className="contractor-list"><p className="list-kicker">Your team</p><h3>Focuses on what it does best.</h3><ol><li><span>01</span>Review booked appointments</li><li><span>02</span>Visit the homeowner</li><li><span>03</span>Complete the work</li></ol><p className="pilot-note"><i /> Built around your existing call flow.</p></article>
          </div>
        </div>
      </section>

      <section className="final-cta" id="contact">
        <div className="section-shell cta-inner"><p className="section-index">Start a conversation</p><h2>Stop letting good calls go unanswered.</h2><p>See how Everward can fit into your current call flow, calendar and dispatch process.</p><BookingLink className="button button-accent" /></div>
      </section>

      <footer className="site-footer"><div className="section-shell footer-grid"><div><a className="wordmark footer-wordmark" href="#top" aria-label="Everward home"><BrandLogo footer /></a><p>AI receptionist for residential HVAC.</p></div><div className="footer-contact"><span>Direct contact</span><a href="mailto:hello@everward.ca">hello@everward.ca</a></div><div className="footer-meta"><span>© 2026 Everward</span><span aria-label="Legal pages forthcoming">Privacy · Terms</span></div></div></footer>
    </main>
  );
}
