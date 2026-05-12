import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'

import './contact-info.css'

const ContactInfo = (props) => {
  return (
    <div className="contact-info-container1">
      <section className="contact-info-section">
        <div className="contact-info-container">
          <div className="contact-info-card">
            <div className="contact-info-content">
              <div className="contact-info-header">
                <h2 className="section-title">Talk to us</h2>
                <p className="section-content">
                  Care you can feel, from people you can reach.
                </p>
              </div>
              <div className="contact-info-grid">
                <div className="contact-info-item">
                  <div className="contact-info-icon-wrapper">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div className="contact-info-text-group">
                    <span className="contact-info-label">Direct Line</span>
                    <a href="tel:+17722558737">
                      <div className="contact-info-value">
                        <span>(772) 255-8737</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon-wrapper">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      </g>
                    </svg>
                  </div>
                  <div className="contact-info-thq-contact-info-text-group-elm2 contact-info-text-group">
                    <span className="contact-info-label">Email</span>
                    <a href="mailto:book@alma-aesthetic.com?subject=">
                      <div className="contact-info-value">
                        <span>book@almaaesthetic.co</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon-wrapper">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
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
                  </div>
                  <div className="contact-info-text-group">
                    <p className="contact-info-thq-contact-info-value-elm3 contact-info-value">
                      <span>7901 4th ST N STE 300</span>
                      <br></br>
                      <span>ST PETERSBURG, FL</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="contact-info-footer">
                <Link to="/book">
                  <div className="btn-primary btn btn-lg">
                    <span>Book Your Treatment</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="contact-info-visual">
              <img
                alt="Serene Alma Aesthetic spa interior with minimalist white oak and beige tones"
                src="https://images.pexels.com/photos/17640379/pexels-photo-17640379.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                loading="lazy"
                className="contact-info-image"
              />
              <div className="contact-info-overlay"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="contact-info-container2">
        <div className="contact-info-container3">
          <Script
            html={`<style>
a.contact-info-value:hover {
  color: var(--color-primary);
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="contact-info-container4">
        <div className="contact-info-container5">
          <Script
            html={`<script defer data-name="contact-info-interaction">
(function(){
  const contactLinks = document.querySelectorAll(".contact-info-value")

  contactLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transform = "translateX(4px)"
      link.style.transition = "all 0.3s ease"
    })

    link.addEventListener("mouseleave", () => {
      link.style.transform = "translateX(0)"
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
