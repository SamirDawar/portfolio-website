import { useState } from 'react'
import Decorations from './Decorations'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('about')
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleViewChange = (newView) => {
    if (newView === currentView) return
    
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentView(newView)
      setIsTransitioning(false)
    }, 300)
  }

  return (
    <>
      <Decorations />
      <div className="page-wrapper">
        {currentView === 'about' && (
          <div className="avatar-container">
            <img 
              src="/avatar.png" 
              alt="Samir - Pixel Art Avatar" 
              className="pixel-avatar"
            />
          </div>
        )}
        <div className={`app-container ${currentView === 'experience' ? 'wide-view' : ''}`}>
          <Navigation 
            currentView={currentView} 
            setCurrentView={handleViewChange}
          />
          <div className={`view-container ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
            {currentView === 'about' && <AboutView />}
            {currentView === 'experience' && <ExperienceView />}
            {currentView === 'contact' && <ContactView />}
          </div>
        </div>
      </div>
    </>
  )
}

function Navigation({ currentView, setCurrentView }) {
  return (
    <nav className="nav">
      <button
        className={`nav-button ${currentView === 'about' ? 'active' : ''}`}
        onClick={() => setCurrentView('about')}
      >
        About
      </button>
      <button
        className={`nav-button ${currentView === 'experience' ? 'active' : ''}`}
        onClick={() => setCurrentView('experience')}
      >
        Experience
      </button>
      <button
        className={`nav-button ${currentView === 'contact' ? 'active' : ''}`}
        onClick={() => setCurrentView('contact')}
      >
        Contact
      </button>
    </nav>
  )
}

function AboutView() {
  return (
    <div className="about-content">
      <h1>Hi, I'm Samir!</h1>
      <div className="about-intro">
        <p>
I'm a freshman at George Mason University studying Computer Science, currently part of the JPMorganChase Fellowship program working on a very cool project involving Java Spring Boot and Kafka.
        </p>
        <p>
When I'm not in class, I'm building side projects for fun because the best way to get better at this stuff is to just make things.
        </p>
      </div>
      <div className="social-links">
        <a
          href="https://github.com/samirdawar"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button github"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/samirdawar"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button linkedin"
        >
          LinkedIn
        </a>
      </div>
    </div>
  )
}

function ExperienceView() {
  const experiences = [
    {
      id: 1,
      title: 'Software Engineer Virtual Fellowship',
      company: 'JPMorganChase',
      location: 'Remote',
      period: 'Feb 2026 - present',
      overview: 'Built a Kafka consumer in Spring Boot to asynchronously ingest and process transaction events using event-driven architecture patterns, handling high-throughput transaction data in a decoupled backend system.',
      techStack: ['Java', 'Kafka', 'Spring Boot', 'JSON', 'Jackson']
    },
    {
      id: 2,
      title: 'Software Engineer AI Trainer',
      company: 'DataAnnotation',
      location: 'Remote',
      period: 'August 2024 – November 2024',
      overview: 'Engineered and evaluated AI/ML model performance through iterative fine-tuning cycles, writing and reviewing code-based tasks to improve model accuracy across software development scenarios.',
      techStack: ['Python', 'TypeScript', 'Pandas', 'OpenCV', 'AI/ML']
    },
    {
      id: 3,
      title: 'Software Engineer Intern',
      company: 'TriVision Inc.',
      location: 'Virginia',
      period: 'May 2024 – August 2024',
      overview: 'Developed a full-stack dashboard using React.js and Node.js/Express for the TUTV platform. Integrated AWS S3 for secure video storage with multipart uploads, improving reliability and upload stability for large files.',
      techStack: ['JavaScript', 'React.js', 'Node.js', 'Express', 'AWS S3']
    }
  ]

  return (
    <div className="projects-content">
      <h1>My Experience</h1>
      <div className="projects-grid">
        {experiences.map(experience => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  )
}

function ExperienceCard({ experience }) {
  return (
    <div className="project-card">
      <h3>{experience.title}</h3>
      <div style={{ marginBottom: '0.5rem' }}>
        <strong>{experience.company}</strong> | {experience.location}
      </div>
      <div style={{ color: '#888', marginBottom: '1rem', fontSize: '0.9rem' }}>
        {experience.period}
      </div>
      <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
        {experience.overview}
      </p>
      <div className="tech-stack">
        {experience.techStack.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

function ContactView() {
  return (
    <div className="contact-content">
      <h1>Let's Connect!</h1>
      <div className="contact-bubble">
        <p>
          Have a project in mind or just want to chat? I'd love to hear from you!
          Feel free to reach out and I'll get back to you as soon as possible.
        </p>
        <a href="mailto:your.email@example.com" className="email-button">
          Send Email
        </a>
      </div>
    </div>
  )
}

export default App
