import React from 'react'
import { motion } from 'framer-motion'
import { UploadCloud, Factory, ShieldCheck, Gauge, Cpu, Sparkles, ArrowRight, Layers3, CheckCircle2 } from 'lucide-react'

const services = [
  { icon: Gauge, title: 'Rapid Prototyping', text: 'Fast, reliable prototypes for design validation, fit checks and functional development.' },
  { icon: ShieldCheck, title: 'End-Use Parts', text: 'Engineering-grade printed components using robust polymers and controlled production methods.' },
  { icon: Factory, title: 'Batch Production', text: 'Repeatable small-batch manufacture with consistent quality, lead-time control and traceability.' },
  { icon: Cpu, title: 'Engineering Support', text: 'Material selection, DfAM guidance, printability review and practical manufacturing support.' },
]

const steps = [
  ['01', 'Upload CAD File', 'Submit STL, STEP or 3MF files securely.'],
  ['02', 'Quote & Review', 'Geometry, material and delivery requirements are assessed.'],
  ['03', 'Precision Manufacture', 'Parts are printed using engineering-grade processes.'],
  ['04', 'Quality & Dispatch', 'Parts are checked, packed and shipped.'],
]

function App() {
  return (
    <main className="app-shell">
      <div className="background-grid" />
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="energy-line" />

      <header className="topbar">
        <div className="brand">
          <div className="brand-mark"><Sparkles size={22} /></div>
          <div>
            <div className="brand-title">ATOM3D</div>
            <div className="brand-subtitle">Additive Technologies & Optimised Manufacturing</div>
          </div>
        </div>
        <nav>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#materials">Materials</a>
          <a href="#quote">Quote</a>
        </nav>
        <button className="login-btn">Log In</button>
      </header>

      <section className="hero">
        <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="hero-content">
          <div className="eyebrow"><span /> Precision manufacturing for engineered parts</div>
          <h1>High-performance 3D printing for serious engineering.</h1>
          <p>
            Atom3D delivers prototype, production and end-use polymer components with a clean digital quoting workflow and engineering-first support.
          </p>
          <div className="hero-actions">
            <button className="primary-btn">Start Your Project <ArrowRight size={18} /></button>
            <button className="secondary-btn">View Case Studies</button>
          </div>
          <div className="hero-stats">
            <div><strong>&lt;24h</strong><span>Quote turnaround</span></div>
            <div><strong>±0.1mm</strong><span>Typical tolerance</span></div>
            <div><strong>1000+</strong><span>Parts produced</span></div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="hero-card">
          <div className="scan-line" />
          <Layers3 className="hero-icon" size={72} />
          <h3>Atom3D Platform V1</h3>
          <p>Website foundation now ready for quoting, customer portal and manufacturing workflow expansion.</p>
          <div className="status-row"><CheckCircle2 size={16} /> Homepage foundation online</div>
          <div className="status-row"><CheckCircle2 size={16} /> Supabase-ready structure</div>
          <div className="status-row"><CheckCircle2 size={16} /> Vercel deployment ready</div>
        </motion.div>
      </section>

      <section id="services" className="section">
        <div className="section-heading">
          <h2>3D Printing Services</h2>
          <p>Engineering-grade additive manufacturing for prototypes, batch production and functional end-use components.</p>
        </div>
        <div className="service-grid">
          {services.map((item) => {
            const Icon = item.icon
            return <div className="service-card" key={item.title}>
              <Icon size={30} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          })}
        </div>
      </section>

      <section id="process" className="section process-section">
        <div className="section-heading">
          <h2>How It Works</h2>
          <p>A simple digital workflow from upload to delivery.</p>
        </div>
        <div className="process-grid">
          {steps.map(([num, title, text]) => <div className="process-card" key={num}>
            <span>{num}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>)}
        </div>
      </section>

      <section id="quote" className="quote-section">
        <div>
          <h2>Ready to print your parts?</h2>
          <p>Upload your 3D file and start building the Atom3D quoting workflow.</p>
        </div>
        <button className="upload-btn"><UploadCloud size={20} /> Upload Your 3D File</button>
      </section>
    </main>
  )
}

export default App
