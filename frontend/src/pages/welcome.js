import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../assets/styles/welcome.css';

function HomePage() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="homepage-cyber">
      {/* Navbar */}
      <nav className="cyber-navbar cyber-navbar-blur">
        <div className="cyber-navbar-left">
          <span className="cyber-brand">SmartKhata</span>
        </div>
        <div className="cyber-navbar-center">
          <a href="#home" className="cyber-nav-link">Home</a>
          <a href="#about" className="cyber-nav-link">About</a>
          <a href="#features" className="cyber-nav-link">Features</a>
          <a href="/user/dashboard" className="cyber-nav-link">Dashboard</a>
        </div>
        <div className="cyber-navbar-right">
          <Link to="/auth/login" className="cyber-btn-nav">Login</Link>
          <Link to="/auth/register" className="cyber-btn-nav">Sign Up</Link>
        </div>
      </nav>

      {/* Hero Section with dashboard mockup */}
      <section className="cyber-hero cyber-hero-bg" id="home">
        {/* Neon Finance Chart SVG Background */}
        <div className="cyber-hero-finance-bg">
          <svg className="finance-chart-svg" viewBox="0 0 900 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <polyline points="0,220 60,180 120,200 180,120 240,160 300,100 360,140 420,80 480,120 540,60 600,100 660,40 720,80 780,30 840,60 900,20" stroke="#00fff0" strokeWidth="4" fill="none" filter="url(#glow1)"/>
            <polyline points="0,260 60,220 120,240 180,180 240,200 300,160 360,180 420,140 480,160 540,120 600,140 660,100 720,120 780,80 840,100 900,60" stroke="#ff3cac" strokeWidth="3" fill="none" filter="url(#glow2)"/>
            <defs>
              <filter id="glow1" x="-20" y="-20" width="940" height="360">
                <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="glow2" x="-20" y="-20" width="940" height="360">
                <feGaussianBlur stdDeviation="7" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
          </svg>
        </div>
        <div className="cyber-hero-overlay"></div>
        <div className="cyber-hero-content hero-vertical">
          <div className="cyber-hero-headline-group">
            <h1 className="cyber-glow-text hero-main-title" style={{textAlign: 'center'}}>Expense Management for Everyone</h1>
            <h2 className="cyber-hero-sub hero-main-sub" style={{textAlign: 'center'}}>Track, analyze, and control your finances with SmartKhata. Fast, secure, and beautifully simple.</h2>
          </div>
          <div className="dashboard-mockup-card dashboard-mockup-contained">
            <div className="dashboard-mockup-header">
              <span className="dashboard-mockup-title">My Dashboard</span>
              <span className="dashboard-mockup-badge">All</span>
              <span className="dashboard-mockup-badge">Withdrawal</span>
              <span className="dashboard-mockup-badge">Savings</span>
              <span className="dashboard-mockup-badge">Deposit</span>
            </div>
            <div className="dashboard-mockup-content">
              <div className="dashboard-mockup-chart">
                <svg width="180" height="60" viewBox="0 0 180 60">
                  <polyline points="0,50 20,40 40,30 60,20 80,25 100,15 120,30 140,20 160,10 180,20" fill="none" stroke="#00FF9D" strokeWidth="3" />
                  <circle cx="160" cy="10" r="5" fill="#a084fa" />
                </svg>
                <div className="dashboard-mockup-chart-label">Revenue Flow</div>
              </div>
              <div className="dashboard-mockup-stats">
                <div className="dashboard-mockup-stat">
                  <span className="stat-label">Available</span>
                  <span className="stat-value">$1,750</span>
                </div>
                <div className="dashboard-mockup-stat">
                  <span className="stat-label">Income</span>
                  <span className="stat-value stat-green">$2,240</span>
                </div>
                <div className="dashboard-mockup-stat">
                  <span className="stat-label">Expense</span>
                  <span className="stat-value stat-red">$1,750</span>
                </div>
              </div>
              <div className="dashboard-mockup-cardlist">
                <div className="dashboard-mockup-carditem">
                  <span className="carditem-title">My Card</span>
                  <span className="carditem-balance">$22,350.50</span>
                  <span className="carditem-label">**** 2323</span>
                </div>
                <div className="dashboard-mockup-carditem">
                  <span className="carditem-title">Transactions</span>
                  <span className="carditem-tx">Figma <span className="stat-red">- $15</span></span>
                  <span className="carditem-tx">Grammarly <span className="stat-red">- $10</span></span>
                  <span className="carditem-tx">Blender <span className="stat-green">+ $15</span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="cyber-hero-btns center">
            <Link to="/auth/login"><button className="cyber-btn">Login</button></Link>
            <Link to="/auth/register"><button className="cyber-btn outline">Sign Up</button></Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="cyber-about" id="about">
        {/* Radial gradient overlay for depth */}
        <div className="cyber-section-radial-bg"></div>
        {/* Geometric diamond SVGs background for About */}
        <div className="cyber-section-geo-bg">
          <svg width="60" height="60" style={{top:'8%',left:'7%',position:'absolute'}}><rect x="20" y="20" width="20" height="20" fill="none" stroke="#a084fa" strokeWidth="2.5" transform="rotate(45 30 30)"/></svg>
          <svg width="50" height="50" style={{bottom:'10%',right:'10%',position:'absolute'}}><rect x="15" y="15" width="20" height="20" fill="none" stroke="#00fff0" strokeWidth="2" transform="rotate(45 25 25)"/></svg>
        </div>
        <div className="cyber-section-card">
          <h2 className="cyber-section-title cyber-glow-text">Why SmartKhata?</h2>
          <p className="cyber-about-desc">SmartKhata automates your expense tracking and budgeting, so you can focus on what matters. Enjoy real-time updates, smart budget alerts, and effortless category management—all in one place.</p>
          <div className="cyber-about-cards">
            <div className="cyber-about-card">
              <span className="cyber-icon-card">⏱️</span>
              <h3>Real-Time Tracking</h3>
            </div>
            <div className="cyber-about-card">
              <span className="cyber-icon-card">☁️</span>
              <h3>Cloud Sync</h3>
            </div>
            <div className="cyber-about-card">
              <span className="cyber-icon-card">📂</span>
              <h3>Category View</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="cyber-features" id="features">
        {/* Radial gradient overlay for depth */}
        <div className="cyber-section-radial-bg"></div>
        {/* Geometric diamond SVGs background for Features */}
        <div className="cyber-section-geo-bg">
          <svg width="60" height="60" style={{top:'10%',right:'8%',position:'absolute'}}><rect x="20" y="20" width="20" height="20" fill="none" stroke="#00fff0" strokeWidth="2.5" transform="rotate(45 30 30)"/></svg>
          <svg width="50" height="50" style={{bottom:'12%',left:'12%',position:'absolute'}}><rect x="15" y="15" width="20" height="20" fill="none" stroke="#a084fa" strokeWidth="2" transform="rotate(45 25 25)"/></svg>
        </div>
        <div className="cyber-section-card">
          <h2 className="cyber-section-title cyber-glow-text">Features</h2>
          <div className="cyber-features-cards">
            <div className="cyber-feature-card">
              <span className="cyber-icon-card">📊</span>
              <h4>Analytics Dashboard</h4>
            </div>
            <div className="cyber-feature-card">
              <span className="cyber-icon-card">🔔</span>
              <h4>Budget Alerts</h4>
            </div>
            <div className="cyber-feature-card">
              <span className="cyber-icon-card">🔄</span>
              <h4>Cross-Device Sync</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="cyber-footer">
        <div className="cyber-footer-brand">SmartKhata</div>
        <div className="cyber-footer-contact">support@smartkhata.com</div>
        <div className="cyber-footer-copyright">&copy; {new Date().getFullYear()} SmartKhata. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default HomePage;