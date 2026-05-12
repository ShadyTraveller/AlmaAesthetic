import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-main-content">
            <div className="footer-column footer-brand-col">
              <Link to="/">
                <div className="footer-thq-footer-logo-link-elm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 400 60"
                    aria-label="Alma Aesthetic &amp; Facial Bar"
                    className="footer-logo-svg"
                  >
                    <text
                      x="0"
                      y="38"
                      fill="currentColor"
                      fontSize="42"
                      fontFamily="'Libre Baskerville', 'Georgia', 'Times New Roman', serif"
                      fontWeight="300"
                      letterSpacing="0.08em"
                    >
                      <span>ALMA AESTHETIC</span>
                    </text>
                    <line
                      x1="0"
                      x2="245"
                      y1="48"
                      y2="48"
                      stroke="currentColor"
                      strokeWidth="0.8"
                    ></line>
                    <text
                      x="255"
                      y="52"
                      fill="currentColor"
                      fontSize="11"
                      fontFamily="'Open Sans', system-ui, -apple-system, sans-serif"
                      fontWeight="400"
                      letterSpacing="0.28em"
                    >
                      <span>&amp; FACIAL BAR</span>
                    </text>
                  </svg>
                </div>
              </Link>
              <p className="section-content footer-philosophy">
                Skincare with Alma at heart. We provide a client-first,
                innovative facial experience that combines the art of living
                skin with advanced scientific rituals.
              </p>
              <div className="footer-social-links">
                <a href="#">
                  <div aria-label="Instagram" className="footer-social-icon">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"></path>
                      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m7.5-4.5v.01"></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="Facebook" className="footer-social-icon">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-column footer-nav-col">
              <h3 className="footer-heading section-subtitle">Experience</h3>
              <nav className="footer-nav">
                <ul className="footer-nav-list">
                  <li className="footer-nav-item">
                    <Link to="/">
                      <div className="footer-nav-link">
                        <span>Home</span>
                      </div>
                    </Link>
                  </li>
                  <li className="footer-nav-item">
                    <Link to="/treatments">
                      <div className="footer-nav-link">
                        <span>Treatments</span>
                      </div>
                    </Link>
                  </li>
                  <li className="footer-nav-item">
                    <Link to="/cosmetic-consultation">
                      <div className="footer-nav-link">
                        <span>Cosmetic Consultation</span>
                      </div>
                    </Link>
                  </li>
                  <li className="footer-nav-item">
                    <Link to="/book">
                      <div className="footer-nav-link">
                        <span>Book Now</span>
                      </div>
                    </Link>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Privacy Policy</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div id="contact" className="footer-column footer-contact-col">
              <h3 className="footer-heading section-subtitle">TALK TO US</h3>
              <div className="footer-contact-info">
                <div className="footer-contact-item">
                  <svg
                    fill="none"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                  </svg>
                  <a href="mailto:book@alma-aesthetic.com?subject=">
                    <div className="footer-contact-link">
                      <span>book@almaaesthetic.co</span>
                    </div>
                  </a>
                </div>
                <div className="footer-contact-item">
                  <svg
                    fill="none"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"></path>
                  </svg>
                  <a href="tel:+17722558737">
                    <div>
                      <div className="footer-contact-link">
                        <span>(772) 255-8737</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="footer-contact-item">
                  <svg
                    fill="none"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </g>
                  </svg>
                  <span className="footer-contact-text">
                    <span>7901 4th ST N STE 300</span>
                    <br></br>
                    <span>ST PETERSBURG, FL US 33702</span>
                  </span>
                </div>
                <div className="footer-contact-item footer-coming-soon">
                  <span className="footer-contact-text">
                    Coming Soon: New York · Los Angeles
                  </span>
                </div>
              </div>
              <div className="footer-cta-wrapper">
                <Link to="/book">
                  <div className="btn-sm btn-primary btn">
                    <span>Book Your Facial</span>
                  </div>
                </Link>
              </div>
              <div className="footer-thq-footer-cta-wrapper-elm2 footer-cta-wrapper"></div>
            </div>
          </div>
          <div className="footer-bottom-bar">
            <div className="footer-copyright">
              <span className="section-content">
                © 2026 Alma Aesthetic. All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
        <div className="footer-sticky-cta">
          <Link to="/book">
            <div className="btn-accent btn footer-mobile-btn btn-lg">
              <span>Book Facial</span>
            </div>
          </Link>
        </div>
        <div className="footer-container3">
          <div className="footer-container4">
            <Script
              html={`<script type="application/ld+json">
{"@context":"https://schema.org","@type":"HealthAndBeautyBusiness","name":"Alma Aesthetic","description":"Client-first facial bar serving North and South Florida, with personalized facials, advanced skincare treatments, and routine-focused skin care.","url":"https://alma-aesthetic.com","telephone":"+17722558737","email":"book@alma-aesthetic.com","address":{"@type":"PostalAddress","streetAddress":"7901 4th ST N STE 300","addressLocality":"St Petersburg","addressRegion":"FL","postalCode":"33702","addressCountry":"US"},"areaServed":["North & South Florida","Miami-Dade County","Broward County","Palm Beach County"],"serviceType":["Luxury Facials","Personalized Facials","LED Facial","Desincrustation Aesthetic Facial","Consultation"],"priceRange":"$$"}
</script>`}
            ></Script>
          </div>
        </div>
      </footer>
      <div className="footer-container5">
        <div className="footer-container6">
          <Script
            html={`<script defer data-name="footer-scroll-effects">
(function(){
  const footerCta = document.querySelector(".footer-sticky-cta")

  if (footerCta) {
    let lastScrollTop = 0

    window.addEventListener(
      "scroll",
      () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop

        if (scrollTop > 300) {
          footerCta.style.opacity = "1"
          footerCta.style.transform = "translateX(-50%) translateY(0)"
          footerCta.style.transition = "all 0.3s ease"
        } else {
          footerCta.style.opacity = "0"
          footerCta.style.transform = "translateX(-50%) translateY(20px)"
        }

        lastScrollTop = scrollTop
      },
      { passive: true }
    )
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
