import React, { useState } from 'react';
import { 
  User, LayoutDashboard, Code2, Layers, Mail, 
  Github, Linkedin, Download, Menu, 
  Terminal, Database, Briefcase, GraduationCap,
  CheckCircle2, Clock, Send, MapPin
} from 'lucide-react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const navigate = (tab) => {
    setActiveTab(tab);
    setSidebarOpen(false);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      alert("Message sent successfully! (Demo)");
      e.target.reset();
    }, 1500);
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="profile-section">
          <div className="avatar">
            <User size={32} />
          </div>
          <h2>Abhijith A</h2>
          <span className="badge">Software Engineer</span>
        </div>
        
        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`} 
            onClick={() => navigate('overview')}
          >
            <LayoutDashboard size={20} /> Overview
          </button>
          <button 
            className={`nav-item ${activeTab === 'skills' ? 'active' : ''}`} 
            onClick={() => navigate('skills')}
          >
            <Code2 size={20} /> Tech Stack
          </button>
          <button 
            className={`nav-item ${activeTab === 'projects' ? 'active' : ''}`} 
            onClick={() => navigate('projects')}
          >
            <Layers size={20} /> Projects
          </button>
          <button 
            className={`nav-item ${activeTab === 'contact' ? 'active' : ''}`} 
            onClick={() => navigate('contact')}
          >
            <Mail size={20} /> Contact
          </button>
        </nav>

        <div className="sidebar-footer">
          <p>Sree Buddha College of Engg</p>
          <div className="socials">
            <a href="https://github.com" target="_blank" rel="noreferrer"><Github size={20} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="topbar">
          <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu size={24} />
          </button>
          <div className="topbar-title">Developer Workspace</div>
          <div className="topbar-actions">
            <button className="btn btn-outline"><Download size={18} /> Resume</button>
          </div>
        </header>

        <div className="content-wrapper">
          {activeTab === 'overview' && (
            <section className="view-section animate-fade-in">
              <div className="page-header">
                <h1>Dashboard</h1>
                <p>Welcome to my professional portfolio.</p>
              </div>

              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon"><Terminal size={24} /></div>
                  <div className="stat-info">
                    <h3>Python</h3>
                    <p>Primary Language</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon java-icon"><Database size={24} /></div>
                  <div className="stat-info">
                    <h3>Java</h3>
                    <p>Enterprise Dev</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon"><GraduationCap size={24} /></div>
                  <div className="stat-info">
                    <h3>B.Tech</h3>
                    <p>Engineering</p>
                  </div>
                </div>
              </div>

              <div className="panel">
                <div className="panel-header">
                  <h2>About Me</h2>
                </div>
                <div className="panel-body">
                  <p>Hello! I'm <strong>Abhijith A</strong>, a software developer currently studying at Sree Buddha College of Engineering. I specialize in backend development, data processing, and object-oriented design using <strong>Python</strong> and <strong>Java</strong>. I treat coding like building robust infrastructure—focusing on scalability, clean code, and effective problem-solving.</p>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'skills' && (
            <section className="view-section animate-fade-in">
              <div className="page-header">
                <h1>Tech Stack</h1>
                <p>Technologies I work with.</p>
              </div>

              <div className="skills-grid">
                <div className="skill-category">
                  <h3>Languages</h3>
                  <ul className="skill-list">
                    <li>
                      <Terminal size={18} /> Python 
                      <div className="progress"><div className="progress-bar" style={{width: '90%'}}></div></div>
                    </li>
                    <li>
                      <Database size={18} /> Java 
                      <div className="progress"><div className="progress-bar" style={{width: '85%'}}></div></div>
                    </li>
                    <li>
                      <Code2 size={18} /> JavaScript 
                      <div className="progress"><div className="progress-bar" style={{width: '70%'}}></div></div>
                    </li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h3>Tools & Databases</h3>
                  <ul className="skill-list">
                    <li>
                      <Database size={18} /> SQL / MySQL 
                      <div className="progress"><div className="progress-bar" style={{width: '80%'}}></div></div>
                    </li>
                    <li>
                      <Github size={18} /> Git & GitHub 
                      <div className="progress"><div className="progress-bar" style={{width: '85%'}}></div></div>
                    </li>
                    <li>
                      <Layers size={18} /> React & Web 
                      <div className="progress"><div className="progress-bar" style={{width: '75%'}}></div></div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'projects' && (
            <section className="view-section animate-fade-in">
              <div className="page-header">
                <h1>Projects</h1>
                <p>Recent work and applications.</p>
              </div>

              <div className="project-cards">
                <div className="app-card">
                  <div className="app-card-header">
                    <Terminal size={32} />
                    <span className="app-status success"><CheckCircle2 size={12} style={{display: 'inline', marginRight: '4px'}}/> Active</span>
                  </div>
                  <h3>Data Analytics Pipeline</h3>
                  <p>A Python application that processes and visualizes large datasets efficiently.</p>
                  <div className="app-tags">
                    <span>Python</span>
                    <span>Pandas</span>
                  </div>
                  <div className="app-actions">
                    <a href="#" className="btn btn-primary btn-sm">View Source</a>
                  </div>
                </div>

                <div className="app-card">
                  <div className="app-card-header">
                    <Database size={32} />
                    <span className="app-status warning"><Clock size={12} style={{display: 'inline', marginRight: '4px'}}/> In Progress</span>
                  </div>
                  <h3>Enterprise Library System</h3>
                  <p>A robust Java-based management system with a secure SQL database backend.</p>
                  <div className="app-tags">
                    <span>Java</span>
                    <span>SQL</span>
                  </div>
                  <div className="app-actions">
                    <a href="#" className="btn btn-primary btn-sm">View Source</a>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'contact' && (
            <section className="view-section animate-fade-in">
              <div className="page-header">
                <h1>Contact</h1>
                <p>Let's connect and build something.</p>
              </div>

              <div className="contact-layout">
                <div className="panel">
                  <div className="panel-header">
                    <h2>Send a Message</h2>
                  </div>
                  <div className="panel-body">
                    <form className="app-form" onSubmit={handleContactSubmit}>
                      <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" className="form-control" placeholder="John Doe" required />
                      </div>
                      <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" className="form-control" placeholder="john@example.com" required />
                      </div>
                      <div className="form-group">
                        <label>Message</label>
                        <textarea className="form-control" rows="4" placeholder="How can we work together?" required></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary" disabled={isSending}>
                        {isSending ? 'Sending...' : <><Send size={18} /> Submit</>}
                      </button>
                    </form>
                  </div>
                </div>
                <div className="contact-info-cards">
                  <div className="info-card">
                    <Mail size={32} />
                    <h4>Email</h4>
                    <p>abhijith@example.com</p>
                  </div>
                  <div className="info-card">
                    <MapPin size={32} />
                    <h4>Location</h4>
                    <p>Kerala, India</p>
                  </div>
                </div>
              </div>
            </section>
          )}

        </div>
      </main>
    </div>
  );
}

export default App;
