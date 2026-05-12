import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import { useBookingPageEffects } from '../hooks/useBookingPageEffects'
import './book.css'

const Book = (props) => {
  useBookingPageEffects()
  return (
    <div className="book-container10">
      <Helmet>
        <title>Book - Alma Aesthetic</title>
        <meta
          name="description"
          content="Alma Aesthetic is an exclusive organic facial spa serving Miami, Broward, Island and Palm Beach with facials, advanced skincare and technology."
        />
        <meta property="og:title" content="Book - Alma Aesthetic" />
        <meta
          property="og:description"
          content="Alma Aesthetic is an exclusive organic facial spa serving Miami, Broward, Island and Palm Beach with facials, advanced skincare and technology."
        />
        <link rel="canonical" href="https://alma-aesthetic.com/book" />
        <meta property="og:url" content="https://alma-aesthetic.com/book" />
      </Helmet>
      <Navigation></Navigation>
      <div
        id="booking-modal-overlay"
        role="dialog"
        data-role="booking-modal"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        className="book-container11"
      >
        <div id="booking-modal-panel">
          <button
            id="booking-modal-close"
            aria-label="Close booking modal"
            className="button"
          >
            ×
          </button>
          <div id="booking-step-1" data-step="1">
            <p id="booking-modal-eyebrow">Reserve Your Ritual</p>
            <h2 id="booking-modal-title">Select a Date &amp; Time</h2>
            <div id="booking-calendar">
              <div id="booking-cal-header">
                <button
                  id="booking-cal-prev"
                  aria-label="Previous month"
                  className="button"
                >
                  ‹
                </button>
                <span id="booking-cal-label"></span>
                <button
                  id="booking-cal-next"
                  aria-label="Next month"
                  className="button"
                >
                  ›
                </button>
              </div>
              <div id="booking-cal-weekdays">
                <span>Su</span>
                <span>Mo</span>
                <span>Tu</span>
                <span>We</span>
                <span>Th</span>
                <span>Fr</span>
                <span>Sa</span>
              </div>
              <div id="booking-cal-days"></div>
            </div>
            <div id="booking-timeslots-wrap" className="book-container18">
              <p id="booking-timeslots-label">Available Times</p>
              <div id="booking-timeslots"></div>
            </div>
            <button
              id="booking-next-btn"
              className="book-thq-btn-elm1 btn-primary button btn btn-lg"
            >
              Continue
            </button>
          </div>
          <div id="booking-step-2" data-step="2" className="book-container20">
            <button
              id="booking-back-btn"
              aria-label="Go back"
              className="button"
            >
              ← Back
            </button>
            <p id="booking-step2-eyebrow">Almost There</p>
            <h2 id="booking-modal-title-2">Your Details</h2>
            <p id="booking-selected-summary"></p>
            <form
              id="booking-form"
              data-form-id="ced461f0-5082-4d90-bc6d-c1ce4d4fa4ae"
              noValidate="true"
              className="book-form"
            >
              <div className="booking-form-row">
                <div className="booking-form-group">
                  <label htmlFor="booking-name">
                    <span aria-hidden="true" className="booking-required">
                      *
                    </span>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="booking-name"
                    name="booking_name"
                    required="true"
                    placeholder="Jane Smith"
                    autoComplete="name"
                    data-form-field-id="booking-name"
                    className="booking-field-input"
                  />
                </div>
                <div className="booking-form-group">
                  <label htmlFor="booking-treatment">
                    <span aria-hidden="true" className="booking-required">
                      *
                    </span>
                    Treatment Type
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </label>
                  <div className="book-thq-booking-select-wrapper-elm">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 5l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <select
                      id="booking-treatment"
                      name="booking_treatment"
                      required={true}
                      data-form-field-id="booking-treatment"
                      className="book-thq-booking-field-input-elm booking-field-input"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a treatment…
                      </option>
                      <option value="Signature Facial">Signature Facial</option>
                      <option value="Radiance Ritual">Radiance Ritual</option>
                      <option value="Desincrustation Aesthetic">
                        Desincrustation Aesthetic
                      </option>
                      <option value="Cosmetic Consult">Cosmetic Consult</option>
                    </select>
                    <span
                      aria-hidden="true"
                      className="book-thq-booking-select-arrow-elm"
                    ></span>
                  </div>
                </div>
              </div>
              <div className="booking-form-row">
                <div className="booking-form-group">
                  <label htmlFor="booking-phone">
                    <span aria-hidden="true" className="booking-required">
                      *
                    </span>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="booking-phone"
                    name="booking_phone"
                    required="true"
                    placeholder="+1 (305) 000-0000"
                    autoComplete="tel"
                    data-form-field-id="booking-phone"
                    className="booking-field-input"
                  />
                </div>
                <div className="booking-form-group">
                  <label htmlFor="booking-email">
                    <span aria-hidden="true" className="booking-required">
                      *
                    </span>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="booking-email"
                    name="booking_email"
                    required="true"
                    placeholder="hello@example.com"
                    autoComplete="email"
                    data-form-field-id="booking-email"
                    className="booking-field-input"
                  />
                </div>
              </div>
              <div className="book-thq-booking-form-group-elm5 booking-form-group">
                <label className="book-thq-booking-addons-label-elm">
                  <span className="book-thq-booking-optional-elm">
                    (optional — select all that apply)
                  </span>
                  Add-On Services
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </label>
                <div className="book-thq-booking-addons-grid-elm">
                  <label className="booking-addon-option">
                    <input
                      type="checkbox"
                      name="booking_addons"
                      value="Customized Peels"
                      id="addon-peels"
                      data-form-field-id="addon-peels"
                      className="input booking-addon-checkbox"
                    />
                    <span className="booking-addon-text">Customized Peels</span>
                  </label>
                  <label className="booking-addon-option">
                    <input
                      type="checkbox"
                      name="booking_addons"
                      value="Exosomes - $550"
                      id="addon-exosomes"
                      data-form-field-id="addon-exosomes"
                      className="input booking-addon-checkbox"
                    />
                    <span className="booking-addon-text">
                      Exosomes<span className="booking-addon-price"> — $550</span>
                    </span>
                  </label>
                  <label className="booking-addon-option">
                    <input
                      type="checkbox"
                      name="booking_addons"
                      value="Microdermabrasion - $120"
                      id="addon-micro"
                      data-form-field-id="addon-micro"
                      className="input booking-addon-checkbox"
                    />
                    <span className="booking-addon-text">
                      Microdermabrasion
                      <span className="booking-addon-price"> — $120</span>
                    </span>
                  </label>
                  <label className="booking-addon-option">
                    <input
                      type="checkbox"
                      name="booking_addons"
                      value="Microcurrent - $90"
                      id="addon-microcurrent"
                      data-form-field-id="addon-microcurrent"
                      className="input booking-addon-checkbox"
                    />
                    <span className="booking-addon-text">
                      Microcurrent<span className="booking-addon-price"> — $90</span>
                    </span>
                  </label>
                  <label className="booking-addon-option">
                    <input
                      type="checkbox"
                      name="booking_addons"
                      value="LED Phototherapy - $90"
                      id="addon-led"
                      data-form-field-id="addon-led"
                      className="input booking-addon-checkbox"
                    />
                    <span className="booking-addon-text">
                      LED Phototherapy
                      <span className="booking-addon-price"> — $90</span>
                    </span>
                  </label>
                </div>
              </div>
              <div
                id="booking-form-error"
                role="alert"
                aria-live="polite"
                className="booking-form-error"
              ></div>
              <p className="book-thq-booking-form-footnote-elm">
                We&apos;ll confirm your appointment by email within 24 hours.
              </p>
              <button
                id="thq_button_Mpgm"
                name="button"
                type="submit"
                data-form-field-id="thq_button_Mpgm"
                className="book-thq-btn-elm2 btn-primary button btn btn-lg"
              >
                Book Appointment
              </button>
            </form>
          </div>
          <div id="booking-step-3" data-step="3" className="book-container21">
            <div id="booking-confirm-icon">
              <span>✦</span>
            </div>
            <h2 id="booking-modal-title-3">You&apos;re Booked</h2>
            <p id="booking-confirm-msg"></p>
            <p id="booking-confirm-sub">
              A confirmation will be sent to your email. We look forward to
              welcoming you to Alma Aesthetic.
            </p>
            <button
              id="booking-done-btn"
              className="book-thq-btn-elm3 btn-primary button btn btn-lg"
            >
              Close
            </button>
          </div>
        </div>
      </div>
      <div className="book-container25">
        <section className="book-thq-booking-hero-elm booking-hero">
          <div className="booking-hero-media">
            <img
              alt="Serene minimalist spa interior with warm neutral tones and natural light"
              src="https://images.pexels.com/photos/17640379/pexels-photo-17640379.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=1500"
              className="booking-hero-img"
            />
            <div className="book-thq-booking-hero-overlay-elm booking-hero-overlay"></div>
          </div>
          <div className="booking-hero-container">
            <div className="booking-hero-content">
              <h1 className="hero-title">Book Your Ritual</h1>
              <p className="hero-subtitle">
                Select your preferred location and service.
              </p>
              <div className="book-thq-booking-hero-selectors-elm booking-hero-selectors">
                <div className="booking-hero-field">
                  <label className="booking-hero-label">Region</label>
                  <div className="booking-hero-input-wrapper">
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
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </svg>
                    <select
                      id="location-select"
                      className="book-thq-booking-hero-select-elm1 booking-hero-select"
                    >
                      <option value="florida">Florida</option>
                    </select>
                  </div>
                </div>
                <div className="booking-hero-field">
                  <label className="booking-hero-label">Treatment Type</label>
                  <div className="booking-hero-input-wrapper">
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
                      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                      <circle r="2" cx="4" cy="20"></circle>
                    </svg>
                    <select id="service-select" className="booking-hero-select">
                      <option value="signature">Signature Facial</option>
                      <option value="radiance">Radiance Ritual</option>
                      <option value="desincrustation">
                        Desincrustation Aesthetic
                      </option>
                      <option value="cosmetic-consult">Cosmetic Consult</option>
                    </select>
                  </div>
                </div>
                <button type="button" id="hero-book-btn" className="btn-primary btn btn-lg">
                  Check Availability
                </button>
              </div>
              <div className="booking-hero-availability">
                <span className="booking-hero-status-dot"></span>
                <span className="section-content">
                  Next available: Tomorrow, 10:00 AM
                </span>
              </div>
            </div>
          </div>
        </section>
        <div className="mobile-sticky-cta">
          <button type="button" id="mobile-sticky-btn" className="btn-accent btn btn-lg">
            Book Facial
          </button>
        </div>
      </div>
      <section className="quick-services">
        <div className="quick-services-container">
          <div className="quick-services-header">
            <h2 className="section-title">Choose Your Facial</h2>
          </div>
          <div className="quick-services-grid">
            <div data-service="signature" className="quick-service-tile">
              <div className="quick-service-info">
                <h3 className="section-subtitle">Signature Facial</h3>
                <p className="section-content">
                  Refined exfoliation, a potent active booster, and a nourishing
                  mask. The ritual concludes with a signature sculpting,
                  draining and lifting massage to redefine the facial contours
                  and promote lymphatic drainage.
                </p>
                <div className="quick-service-meta">
                  <span className="quick-service-tag">60 Min</span>
                  <span className="quick-service-price">From $150</span>
                </div>
              </div>
              <button type="button" className="btn-sm btn btn-outline">
                Book
              </button>
            </div>
            <div data-service="radiance" className="quick-service-tile">
              <div className="quick-service-info">
                <h3 className="section-subtitle">Radiance Ritual</h3>
                <p className="section-content">
                  Counteract stress, sleep deprivation and poor diet. Following
                  a thorough cleanse, peel and hydration infusion, the skin is
                  cocooned in a hyaluronic mask. Soothing Light Therapy
                  stimulates collagen and elastin. The perfect treatment pre
                  event, post flight or gift.
                </p>
                <div className="quick-service-meta">
                  <span className="quick-service-tag">75 Min</span>
                  <span className="quick-service-price">From $250</span>
                </div>
              </div>
              <button type="button" className="btn-sm btn btn-outline">
                Book
              </button>
            </div>
            <div data-service="desincrustation" className="quick-service-tile">
              <div className="quick-service-info">
                <h3 className="section-subtitle"> Désincrustation Aesthetic</h3>
                <p className="section-content">
                  A deep-cleansing facial performed with galvanic current to
                  help target oiliness, congestion, lacklustre complexions,
                  blackheads, and whiteheads.
                </p>
                <div className="quick-service-meta">
                  <span className="quick-service-tag">90 Min</span>
                  <span className="quick-service-price">From $250</span>
                </div>
              </div>
              <button type="button" className="btn-sm btn btn-outline">
                Book
              </button>
            </div>
            <div
              data-service="cosmetic-consult"
              className="quick-service-tile"
            >
              <div className="quick-service-info">
                <h3 className="section-subtitle">Breathing Ritual</h3>
                <p className="section-content">
                  <span>
                    We prepare the skin by removing impurities, and apply our
                    wand to introduce specialized serums deep into pores. This
                    delivers highly concentrated oxygen and negative anions to
                    optimize cellular respiration.
                  </span>
                  <br></br>
                </p>
                <div className="quick-service-meta">
                  <span className="quick-service-tag">30 Min</span>
                  <span className="quick-service-price">$350</span>
                </div>
              </div>
              <button type="button" className="btn-sm btn btn-outline">
                Book
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="availability-hub">
        <div className="availability-container book-thq-availability-container-elm">
          <div className="availability-tabs">
            <div className="book-thq-availability-pane-elm availability-pane active"></div>
          </div>
          <div className="availability-policies">
            <div className="policy-item">
              <svg
                fill="none"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle r="10" cx="12" cy="12"></circle>
                <path d="m9 12l2 2l4-4"></path>
              </svg>
              <p className="section-content">
                <span className="book-text34">Cancellation:</span>
                <span>
                  {' '}
                  24-hour notice required for full refund.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
            <div className="policy-item">
              <svg
                fill="none"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle r="10" cx="12" cy="12"></circle>
                <path d="m9 12l2 2l4-4"></path>
              </svg>
              <p className="section-content">
                <span className="book-text36">Arrival:</span>
                <span>
                  {' '}
                  Please arrive 15 minutes prior to your ritual.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default Book
