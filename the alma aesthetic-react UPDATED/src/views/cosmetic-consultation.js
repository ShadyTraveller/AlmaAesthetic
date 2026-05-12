import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './cosmetic-consultation.css'

const CosmeticConsultation = (props) => {
  return (
    <div className="cosmetic-consultation-container1">
      <Helmet>
        <title>Cosmetic-Consultation - Alma Aesthetic</title>
        <meta
          name="description"
          content="Alma Aesthetic is an exclusive organic facial spa serving Miami, Broward, Island and Palm Beach with facials, advanced skincare and technology."
        />
        <meta
          property="og:title"
          content="Cosmetic-Consultation - Alma Aesthetic"
        />
        <meta
          property="og:description"
          content="Alma Aesthetic is an exclusive organic facial spa serving Miami, Broward, Island and Palm Beach with facials, advanced skincare and technology."
        />
        <link
          rel="canonical"
          href="https://alma-aesthetic.com/cosmetic-consultation"
        />
        <meta
          property="og:url"
          content="https://alma-aesthetic.com/cosmetic-consultation"
        />
      </Helmet>
      <Navigation></Navigation>
      <section className="consult-hero">
        <div className="consult-hero-media">
          <img
            alt="Luxurious spa consultation setting at Alma Aesthetic"
            src="https://images.pexels.com/photos/5659012/pexels-photo-5659012.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            className="consult-hero-img"
          />
          <div className="consult-hero-overlay"></div>
        </div>
        <div className="consult-hero-content">
          <div className="consult-hero-text-block">
            <h1 className="hero-title">Cosmetic Consultation</h1>
            <p className="hero-subtitle">
              A thoughtful consultation designed to help you understand your
              skin, renew it and support your health.
            </p>
            <div className="consult-hero-actions">
              <Link to="/book">
                <div className="btn-primary btn btn-lg">
                  <span>Book Now</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="expect-steps">
        <div className="expect-steps-container">
          <div className="expect-steps-header">
            <h2 className="section-title">The Consultation Journey</h2>
            <p className="section-content">
              Our structured approach ensures every detail of your skin&apos;s
              health is considered before we begin your transformation.
            </p>
          </div>
          <div className="expect-steps-grid">
            <div className="expect-step-item">
              <div className="expect-step-icon-box">
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
                  <path d="M16 5H3m13 7H3m8 7H3m12-1l2 2l4-4"></path>
                </svg>
                <span className="expect-step-number">01</span>
              </div>
              <h3 className="section-subtitle">Initial Assessment</h3>
              <p className="section-content">
                A deep dive into your current skincare routine, lifestyle
                factors, and specific skin concerns to build a comprehensive
                baseline.
              </p>
            </div>
            <div className="expect-step-item">
              <div className="expect-step-icon-box">
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
                  <path d="M5 21h14M6 18h2m-1 0v3m2-10l3 3l6-6l-3-3zm1.5 1.5L9 14m8-11l3 3m-8 15a6 6 0 0 0 3.715-10.712"></path>
                </svg>
                <span className="expect-step-number">02</span>
              </div>
              <h3 className="section-subtitle">Digital Skin Analysis</h3>
              <p className="section-content">
                Using advanced imaging and expert observation to identify
                underlying issues not visible to the naked eye.
              </p>
            </div>
            <div className="expect-step-item">
              <div className="expect-step-icon-box">
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
                  <path d="m21.64 3.64l-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72M14 7l3 3M5 6v4m14 4v4M10 2v2M7 8H3m18 8h-4M11 3H9"></path>
                </svg>
                <span className="expect-step-number">03</span>
              </div>
              <h3 className="section-subtitle">Expert Recommendations</h3>
              <p className="section-content">
                Guided selection of treatments and bioscience-grade products
                tailored to your unique skin profile.
              </p>
            </div>
            <div className="expect-step-item">
              <div className="expect-step-icon-box">
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
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 2v4m8-4v4"></path>
                    <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                    <path d="M3 10h18"></path>
                  </g>
                </svg>
                <span className="expect-step-number">04</span>
              </div>
              <h3 className="section-subtitle">Ritual Plan</h3>
              <p className="section-content">
                Finalizing your long-term skin health roadmap, including
                appointment frequencies and home-care integration.
              </p>
            </div>
          </div>
          <div className="expect-steps-footer">
            <p className="section-content">
              <span className="cosmetic-consultation-text2">Duration:</span>
              <span>
                {' '}
                45 Minutes |
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="cosmetic-consultation-text4">Arrival:</span>
              <span>
                {' '}
                Please arrive 15 minutes early to settle in.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </p>
          </div>
        </div>
      </section>
      <div className="cosmetic-consultation-container2">
        <div className="cosmetic-consultation-container3">
          <Script
            html={`<script defer data-name="consultation-interactions">
(function(){
  // Simple intersection observer for a soft reveal effect on steps
  const stepItems = document.querySelectorAll(".expect-step-item")

  const revealOnScroll = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
          revealOnScroll.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
    }
  )

  stepItems.forEach((item) => {
    item.style.opacity = "0"
    item.style.transform = "translateY(20px)"
    item.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    revealOnScroll.observe(item)
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default CosmeticConsultation
