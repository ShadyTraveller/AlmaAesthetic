import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'

import ContactInfo from './contact-info'
import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <nav
        role="navigation"
        aria-label="Main Navigation"
        className="navigation-container"
      >
        <div className="navigation-wrapper">
          <Link to="/">
            <div aria-label="Alma Aesthetic Home" className="navigation-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 520 90"
                aria-label="Alma Aesthetic &amp; Facial Bar"
                className="navigation-logo-image"
              >
                <text
                  x="0"
                  y="48"
                  fill="#1a1a1a"
                  fontSize="52"
                  fontFamily="'Libre Baskerville', 'Baskerville', 'Georgia', serif"
                  fontWeight="400"
                  letterSpacing="0.08em"
                >
                  <span>ALMA AESTHETIC</span>
                </text>
                <line
                  x1="0"
                  x2="340"
                  y1="62"
                  y2="62"
                  stroke="#c9a96e"
                  strokeWidth="0.8"
                ></line>
                <text
                  x="355"
                  y="66"
                  fill="#6b6560"
                  fontSize="14"
                  fontFamily="'Open Sans', system-ui, sans-serif"
                  fontWeight="400"
                  letterSpacing="0.28em"
                >
                  <span>&amp; FACIAL BAR</span>
                </text>
              </svg>
            </div>
          </Link>
          <div className="navigation-desktop-links">
            <Link to="/">
              <div className="navigation-link">
                <span>Home</span>
              </div>
            </Link>
            <a href="/#alma-method">
              <div className="navigation-link">
                <span>The Alma Method</span>
              </div>
            </a>
            <Link to="/treatments">
              <div className="navigation-link">
                <span>Treatments</span>
              </div>
            </Link>
            <Link to="/cosmetic-consultation">
              <div className="navigation-link">
                <span>Cosmetic Consultation</span>
              </div>
            </Link>
            <a href="/#contact">
              <div className="navigation-link">
                <span>Contact</span>
              </div>
            </a>
            <Link to="/book">
              <div className="btn-sm btn-primary navigation-cta btn">
                <span>Book Now</span>
              </div>
            </Link>
          </div>
          <button
            id="mobile-nav-toggle"
            aria-label="Open Menu"
            aria-controls="mobile-overlay"
            aria-expanded="false"
            className="navigation-mobile-toggle"
          >
            <svg
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <div
        id="mobile-overlay"
        aria-hidden="true"
        className="navigation-mobile-overlay"
      >
        <div className="navigation-mobile-header">
          <Link to="/">
            <div aria-label="Alma Aesthetic Home" className="navigation-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 520 90"
                aria-label="Alma Aesthetic &amp; Facial Bar"
                className="navigation-logo-image"
              >
                <text
                  x="0"
                  y="48"
                  fill="#ffffff"
                  fontSize="52"
                  fontFamily="'Libre Baskerville', 'Baskerville', 'Georgia', serif"
                  fontWeight="400"
                  letterSpacing="0.08em"
                >
                  <span>ALMA AESTHETIC</span>
                </text>
                <line
                  x1="0"
                  x2="340"
                  y1="62"
                  y2="62"
                  stroke="#ffffff"
                  strokeWidth="0.8"
                ></line>
                <text
                  x="355"
                  y="66"
                  fill="#ffffff"
                  fontSize="14"
                  fontFamily="'Open Sans', system-ui, sans-serif"
                  fontWeight="400"
                  letterSpacing="0.28em"
                >
                  <span>&amp; FACIAL BAR</span>
                </text>
              </svg>
            </div>
          </Link>
          <button
            id="mobile-nav-close"
            aria-label="Close Menu"
            className="navigation-mobile-close"
          >
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
                <rect x="3" y="3" rx="2" width="18" height="18"></rect>
                <path d="m9 9l6 6m0-6l-6 6"></path>
              </g>
            </svg>
          </button>
        </div>
        <div className="navigation-mobile-content">
          <div className="navigation-mobile-links">
            <Link to="/">
              <div className="navigation-mobile-link">
                <span>Home</span>
              </div>
            </Link>
            <a href="/#alma-method">
              <div className="navigation-mobile-link">
                <span>The Alma Method</span>
              </div>
            </a>
            <Link to="/treatments">
              <div className="navigation-mobile-link">
                <span>Treatments</span>
              </div>
            </Link>
            <Link to="/cosmetic-consultation">
              <div className="navigation-mobile-link">
                <span>Cosmetic Consultation</span>
              </div>
            </Link>
            <a href="/#contact">
              <div className="navigation-mobile-link">
                <span>Contact</span>
              </div>
            </a>
            <ContactInfo className="contact-info-wrapper-t7z1"></ContactInfo>
          </div>
          <div className="navigation-mobile-footer">
            <Link to="/book">
              <div className="navigation-mobile-cta btn-primary btn btn-lg">
                <span>Book Your Facial</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Link to="/book">
        <div
          aria-label="Book Facial Now"
          className="btn-accent navigation-sticky-cta btn btn-lg"
        >
          <span>Book Facial</span>
        </div>
      </Link>
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<script>
            ;(function () {
              const mobileToggle = document.getElementById("mobile-nav-toggle")
              const mobileClose = document.getElementById("mobile-nav-close")
              const mobileOverlay = document.getElementById("mobile-overlay")
              const body = document.body
              const openMenu = () => {
                mobileOverlay.style.display = "flex"
                mobileOverlay.setAttribute("aria-hidden", "false")
                mobileToggle.setAttribute("aria-expanded", "true")
                body.style.overflow = "hidden"
              }
              const closeMenu = () => {
                mobileOverlay.style.display = "none"
                mobileOverlay.setAttribute("aria-hidden", "true")
                mobileToggle.setAttribute("aria-expanded", "false")
                body.style.overflow = ""
              }
              mobileToggle.addEventListener("click", openMenu)
              mobileClose.addEventListener("click", closeMenu)
              const mobileLinks = document.querySelectorAll(".navigation-mobile-link")
              mobileLinks.forEach((link) => {
                link.addEventListener("click", () => {
                  closeMenu()
                })
              })
              window.addEventListener("resize", () => {
                if (window.innerWidth > 991) {
                  closeMenu()
                }
              })
            })()
          </script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
