import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  const location = useLocation()
  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      window.requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [location.pathname, location.hash])

  return (
    <div className="home-container1">
      <Helmet>
        <title>Alma Aesthetic</title>
        <meta
          name="description"
          content="Alma Aesthetic is an exclusive organic facial spa serving Miami, Broward, Island and Palm Beach with facials, advanced skincare and technology."
        />
        <meta property="og:title" content="Alma Aesthetic" />
        <meta
          property="og:description"
          content="Alma Aesthetic is an exclusive organic facial spa serving Miami, Broward, Island and Palm Beach with facials, advanced skincare and technology."
        />
        <link rel="canonical" href="https://alma-aesthetic.com/" />
        <meta property="og:url" content="https://alma-aesthetic.com/" />
      </Helmet>
      <Navigation></Navigation>
      <section className="hero-ritual">
        <div className="hero-video-wrapper">
          <video
            src="https://videos.pexels.com/video-files/9335813/9335813-hd_720_1280_25fps.mp4"
            loop
            muted
            poster="https://images.pexels.com/videos/30978285/pictures/preview-0.jpg"
            autoPlay
            playsInline
            className="hero-video-bg"
          ></video>
        </div>
        <div className="hero-content">
          <h1 className="hero-title home-hero-title">Alma Aesthetic</h1>
          <p className="home-thq-hero-subtitle-elm hero-subtitle home-hero-subtitle">
            Exclusive spa offering personalized skin treatments, advanced
            skincare technology, and refined facial rituals. 
          </p>
          <div className="hero-actions">
            <Link to="/book">
              <div className="btn-primary btn btn-lg">
                <span>Book a Treatment</span>
              </div>
            </Link>
            <Link to="/treatments">
              <div className="btn btn-lg btn-outline">
                <span>Explore Treatments</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="hero-trust-strip">
          <div className="trust-container">
            <span className="trust-item">Personalized Facials</span>
            <span className="trust-divider"></span>
            <span className="trust-item">Advanced Skin Technology</span>
            <span className="trust-divider"></span>
            <span className="trust-item">Client-First Care</span>
            <span className="trust-divider"></span>
            <span className="trust-item">South Florida Luxury Skincare</span>
          </div>
        </div>
        <Link to="/book">
          <div className="btn-primary sticky-mobile-cta btn">
            <span>Book Facial</span>
          </div>
        </Link>
      </section>
      <section id="alma-method" className="alma-method">
        <div className="method-container">
          <div className="method-card">
            <div className="method-header">
              <h2 className="section-title">The Alma Method</h2>
              <div className="method-icon-row">
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
                  <circle r="10" cx="12" cy="12"></circle>
                  <path d="M11.051 7.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.867l-1.156-1.152a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"></path>
                </svg>
              </div>
            </div>
            <p className="section-content">
              At Alma Aesthetic, every facial begins with your skin, your
              ideals, and your lifestyle. We combine thoughtful consultation,
              expert technique, and innovative non-invasive treatments to help
              refine your skin and support a healthy-looking glow.
            </p>
            <Link to={{ pathname: '/', hash: '#alma-method' }}>
              <div className="btn-md btn btn-outline">
                <span>Discover The Alma Method</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="signature-ritual">
        <div className="ritual-container">
          <div className="ritual-header">
            <h2 className="section-title">Signature Ritual</h2>
            <p className="section-subtitle">Science meet Soul.</p>
          </div>
          <div className="ritual-grid">
            <div className="ritual-card">
              <div className="ritual-image-box">
                <img
                  alt="Signature Facial"
                  src="https://images.pexels.com/photos/6663361/pexels-photo-6663361.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
              </div>
              <div className="ritual-card-content">
                <h3 className="ritual-item-title">Signature Facial</h3>
                <p className="section-content">
                  A customized facial designed to cleanse, scult, firm, and
                  hydrate using manual and knuckle technique.
                </p>
                <div className="ritual-tags">
                  <span>FIRM</span>
                  <span>HYDRATE</span>
                  <span>ILLUMINATE</span>
                </div>
                <Link to="/treatments#ritual-signature">
                  <div className="btn btn-link">
                    <span>View Treatment</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="ritual-card">
              <div className="ritual-image-box">
                <img
                  alt="Radiance Ritual"
                  src="https://images.pexels.com/photos/6663368/pexels-photo-6663368.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
              </div>
              <div className="ritual-card-content">
                <h3 className="ritual-item-title">Radiance Ritual</h3>
                <p className="section-content">
                  A glow-focused facial using LED light therapy, gentle
                  exfoliation, and manual muscle technique to stimulate collagen
                  and cell turnover illuminating the skin.
                </p>
                <div className="ritual-tags">
                  <span>SMOOTHE</span>
                  <span>FIRM</span>
                  <span>ILLUMINATE</span>
                </div>
                <Link to="/treatments#ritual-radiance">
                  <div className="btn btn-link">
                    <span>View Treatment</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="ritual-card">
              <div className="ritual-image-box">
                <img
                  alt="Désincrustation Aesthetic"
                  src="https://images.pexels.com/photos/6663465/pexels-photo-6663465.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
              </div>
              <div className="ritual-card-content">
                <h3 className="ritual-item-title">Désincrustation Aesthetic</h3>
                <p className="section-content">
                  A deep-cleansing facial performed with galvanic current to
                  target oiliness and congestion.
                </p>
                <div className="ritual-tags">
                  <span>CLARIFY</span>
                  <span>SMOOTHE</span>
                  <span>ILLUMINATE</span>
                </div>
                <Link to="/treatments#ritual-desincrustation">
                  <div className="btn btn-link">
                    <span>View Treatment</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="ritual-card">
              <div className="ritual-image-box">
                <img
                  alt="Breathe Facial"
                  src="https://images.pexels.com/photos/36930756/pexels-photo-36930756.png?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
              </div>
              <div className="ritual-card-content">
                <h3 className="ritual-item-title">Breathe Facial</h3>
                <p className="section-content">
                  Pressurized oxygen wand delivers concentrated vitamin serums
                  to optimize cellular respiration. 
                </p>
                <div className="ritual-tags">
                  <span>OXYGENATE</span>
                  <span>REFRESH</span>
                  <span>ILLUMINATE</span>
                </div>
                <Link to="/treatments#ritual-breathe">
                  <div className="btn btn-link">
                    <span>View Treatment</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<script defer data-name="alma-aesthetic-logic">
(function(){
  // Minimal interaction for smooth reveal or hover states
  const ritualCards = document.querySelectorAll(".ritual-card")

  ritualCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const img = card.querySelector("img")
      if (img) img.style.transform = "scale(1.05)"
    })

    card.addEventListener("mouseleave", () => {
      const img = card.querySelector("img")
      if (img) img.style.transform = "scale(1)"
    })
  })

  // Handle sticky CTA visibility logic if needed (already handled by CSS media queries)
  // No additional complex JS required for this luxury minimalist aesthetic.
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
