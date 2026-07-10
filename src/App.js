import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Shield, Camera, TrendingUp, Globe, Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import "@/App.css";

const SPLINE_URL = "https://customer-assets.emergentagent.com/job_a536ecb9-313f-47dd-b765-665569b29c99/artifacts/gvh366pr_nexbot_by_aximoris.spline";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxImage, setLightboxImage] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced threat protection, security audits, and IT infrastructure hardening for modern businesses.",
      gradient: "from-red-500 to-orange-600"
    },
    {
      icon: Globe,
      title: "IT Solutions",
      description: "Website design, digital systems, and tech infrastructure to power your brand in the modern world.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Camera,
      title: "Photography & Videography",
      description: "Professional studio, corporate, event photography and cinematic storytelling that moves people.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Social media strategy, content creation, and brand positioning that amplifies your reach.",
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  const photos = [
    { src: "https://customer-assets.emergentagent.com/job_a536ecb9-313f-47dd-b765-665569b29c99/artifacts/Photos/718A0334.webp", category: "studio" },
    { src: "https://customer-assets.emergentagent.com/job_a536ecb9-313f-47dd-b765-665569b29c99/artifacts/Photos/IHP_1322.webp", category: "studio" },
    { src: "https://customer-assets.emergentagent.com/job_a536ecb9-313f-47dd-b765-665569b29c99/artifacts/Photos/IMG_0059.webp", category: "embassy" },
    { src: "https://customer-assets.emergentagent.com/job_a536ecb9-313f-47dd-b765-665569b29c99/artifacts/Photos/IMG_0061.webp", category: "embassy" },
    { src: "https://customer-assets.emergentagent.com/job_a536ecb9-313f-47dd-b765-665569b29c99/artifacts/Photos/IMG_0268.webp", category: "events" },
    { src: "https://customer-assets.emergentagent.com/job_a536ecb9-313f-47dd-b765-665569b29c99/artifacts/Photos/IMG_0328.webp", category: "events" },
    { src: "https://customer-assets.emergentagent.com/job_a536ecb9-313f-47dd-b765-665569b29c99/artifacts/Photos/IMG_0458-1.webp", category: "events" },
    { src: "https://customer-assets.emergentagent.com/job_a536ecb9-313f-47dd-b765-665569b29c99/artifacts/Photos/Nhif_1_1.webp", category: "events" }
  ];

  const videos = [
    { id: "emv3XXILQJk", title: "Hatari Security Promo 2025" },
    { id: "TpP-SVttyC8", title: "Plainsview Hospital Grand Opening" },
    { id: "64epsUWH9_Q", title: "Sowairina X Vivo Collection" },
    { id: "ZO2snY0rtMQ", title: "Drum Doctor & Carl Rawgah" },
    { id: "UjRZ235YHyE", title: "Omema Album Cover" }
  ];

  const filteredPhotos = activeFilter === "all" 
    ? photos 
    : photos.filter(p => p.category === activeFilter);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      service: formData.get("service"),
      message: formData.get("message")
    };

    try {
      await fetch("https://formspree.io/f/xwvjkvyv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      alert("Message sent successfully!");
      e.target.reset();
    } catch (error) {
      alert("Failed to send message. Please try WhatsApp.");
    }
  };

  return (
    <div className="app-container" data-testid="main-app">
      {/* Fixed Background Spline */}
      <div className="spline-bg-fixed">
        <spline-viewer 
          url={SPLINE_URL}
          loading-anim
          style={{ width: "100%", height: "100%", opacity: 0.16 }}
        />
      </div>

      {/* Navigation */}
      <motion.nav 
        className={`nav ${scrolled ? "scrolled" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        data-testid="main-nav"
      >
        <div className="nav-container">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            data-testid="logo"
          >
            <span className="logo-text">JSANE</span>
            <span className="logo-subtitle">MEDIA HOUSE</span>
          </motion.div>

          <div className={`nav-links ${isMenuOpen ? "mobile-open" : ""}`}>
            <a href="#home" onClick={() => setIsMenuOpen(false)} data-testid="nav-home">Home</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} data-testid="nav-services">Services</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)} data-testid="nav-portfolio">Portfolio</a>
            <a href="#videos" onClick={() => setIsMenuOpen(false)} data-testid="nav-videos">Videos</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} data-testid="nav-contact">Contact</a>
          </div>

          <motion.a 
            href="#contact"
            className="cta-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="cta-button"
          >
            Book Session
          </motion.a>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="hero" data-testid="hero-section">
        <div className="hero-spline">
          <spline-viewer 
            url={SPLINE_URL}
            loading-anim
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="hero-label" data-testid="hero-label">Nairobi, Kenya · Est. 2020</p>
            <h1 className="hero-title" data-testid="hero-title">
              We <span className="text-glitch">Craft</span>
              <br />
              <span className="gradient-text">Visual Stories</span>
              <br />
              That <span className="neon-text">Last</span>
            </h1>
            <p className="hero-subtitle" data-testid="hero-subtitle">
              Cybersecurity · Photography · Videography · Digital Marketing · IT Solutions
            </p>
            <div className="hero-buttons">
              <motion.a 
                href="#portfolio"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="view-portfolio-btn"
              >
                View Portfolio <ChevronRight size={20} />
              </motion.a>
              <motion.a 
                href="#contact"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="get-started-btn"
              >
                Get Started
              </motion.a>
            </div>
            <div className="hero-stats" data-testid="hero-stats">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">200+</span>
                <span className="stat-label">Clients</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="scroll-indicator" data-testid="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </section>

      {/* Marquee Strip */}
      <div className="marquee-strip" data-testid="marquee-strip">
        <div className="marquee-content">
          <span>Cybersecurity</span>
          <span>·</span>
          <span>Photography</span>
          <span>·</span>
          <span>Videography</span>
          <span>·</span>
          <span>Digital Marketing</span>
          <span>·</span>
          <span>IT Solutions</span>
          <span>·</span>
          <span>Branding</span>
          <span>·</span>
        </div>
        <div className="marquee-content" aria-hidden="true">
          <span>Cybersecurity</span>
          <span>·</span>
          <span>Photography</span>
          <span>·</span>
          <span>Videography</span>
          <span>·</span>
          <span>Digital Marketing</span>
          <span>·</span>
          <span>IT Solutions</span>
          <span>·</span>
          <span>Branding</span>
          <span>·</span>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="services-section" data-testid="services-section">
        <div className="section-spline">
          <spline-viewer 
            url={SPLINE_URL}
            loading-anim
            style={{ width: "100%", height: "100%", opacity: 0.2 }}
          />
        </div>
        
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title" data-testid="services-title">
              Services built for <span className="gradient-text">impact</span>
            </h2>
            <p className="section-subtitle">
              Cutting-edge cybersecurity meets creative excellence
            </p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                data-testid={`service-card-${index}`}
              >
                <div className="service-number">0{index + 1}</div>
                <div className={`service-icon bg-gradient-to-br ${service.gradient}`}>
                  <service.icon size={32} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-glow"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Strip */}
      <div className="about-strip" data-testid="about-strip">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="about-title">
              Purposeful visuals. <span className="neon-text">Lasting impressions.</span>
            </h2>
            <p className="about-text">
              From the lens to the screen, every project is handled with creative precision 
              and a deep respect for your brand's narrative. Secured by cutting-edge cybersecurity.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio-section" data-testid="portfolio-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title" data-testid="portfolio-title">
              Photography <span className="gradient-text">Portfolio</span>
            </h2>
          </motion.div>

          <div className="filter-buttons" data-testid="portfolio-filters">
            {["all", "studio", "embassy", "events"].map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
                onClick={() => setActiveFilter(filter)}
                data-testid={`filter-${filter}`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          <div className="photo-grid">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={index}
                className="photo-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setLightboxImage(photo.src)}
                data-testid={`photo-${index}`}
              >
                <img src={photo.src} alt={`Portfolio ${index + 1}`} loading="lazy" />
                <div className="photo-overlay">
                  <span>View Full</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <div className="stats-row" data-testid="stats-row">
        <div className="stat-item">
          <div className="stat-value">500+</div>
          <div className="stat-name">Projects</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">200+</div>
          <div className="stat-name">Clients</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">5+</div>
          <div className="stat-name">Years Active</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">4</div>
          <div className="stat-name">Services</div>
        </div>
      </div>

      {/* Videos Section */}
      <section id="videos" className="videos-section" data-testid="videos-section">
        <div className="section-spline">
          <spline-viewer 
            url={SPLINE_URL}
            loading-anim
            style={{ width: "100%", height: "100%", opacity: 0.15 }}
          />
        </div>
        
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title" data-testid="videos-title">
              Videography <span className="gradient-text">Reels</span>
            </h2>
          </motion.div>

          <div className="video-grid">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                className="video-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                data-testid={`video-${index}`}
              >
                <div className="video-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="video-title">{video.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section" data-testid="contact-section">
        <div className="contact-spline">
          <spline-viewer 
            url={SPLINE_URL}
            loading-anim
            style={{ width: "100%", height: "100%", opacity: 0.14 }}
          />
        </div>
        
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title" data-testid="contact-title">
              Book a <span className="gradient-text">Session</span>
            </h2>
            <p className="section-subtitle">Let's create something remarkable together</p>
          </motion.div>

          <div className="contact-grid">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3>Get in Touch</h3>
              <div className="contact-items">
                <a href="tel:+254708751365" className="contact-item" data-testid="contact-phone">
                  <Phone size={24} />
                  <span>+254 708 751 365</span>
                </a>
                <a href="mailto:info@jsanemediahouse.com" className="contact-item" data-testid="contact-email">
                  <Mail size={24} />
                  <span>info@jsanemediahouse.com</span>
                </a>
                <div className="contact-item">
                  <MapPin size={24} />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
              <p className="training-note">
                We also offer photography training with{" "}
                <a href="https://customer-assets.emergentagent.com/job_a536ecb9-313f-47dd-b765-665569b29c99/artifacts/verify.html" target="_blank" rel="noopener noreferrer">
                  verifiable certificates
                </a>
              </p>
            </motion.div>

            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              data-testid="contact-form"
            >
              <input 
                type="text" 
                name="name" 
                placeholder="Full Name" 
                required 
                data-testid="form-name"
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Email Address" 
                required 
                data-testid="form-email"
              />
              <select name="service" required data-testid="form-service">
                <option value="">Select Service</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="it-solutions">IT Solutions</option>
                <option value="photography">Photography</option>
                <option value="videography">Videography</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="training">Training</option>
              </select>
              <textarea 
                name="message" 
                placeholder="Your Message" 
                rows="5" 
                required
                data-testid="form-message"
              />
              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-testid="form-submit"
              >
                Send Message <ChevronRight size={20} />
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" data-testid="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-text">JSANE</span>
              <span className="logo-subtitle">MEDIA HOUSE</span>
            </div>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#videos">Videos</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Jsane Media House. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      {lightboxImage && (
        <motion.div
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightboxImage(null)}
          data-testid="lightbox"
        >
          <button 
            className="lightbox-close"
            onClick={() => setLightboxImage(null)}
            data-testid="lightbox-close"
          >
            <X size={32} />
          </button>
          <img src={lightboxImage} alt="Full size" />
        </motion.div>
      )}

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/254708751365"
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        data-testid="whatsapp-button"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </motion.a>

      {/* Floating Spline Element */}
      <div className="floating-spline" data-testid="floating-spline">
        <spline-viewer 
          url={SPLINE_URL}
          loading-anim
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}

export default App;
