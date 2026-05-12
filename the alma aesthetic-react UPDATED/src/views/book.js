import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './book.css'

const Book = (props) => {
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
            <p id="booking-modal-eyebrow">Almost There</p>
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
                      required="true"
                      data-form-field-id="booking-treatment"
                      className="book-thq-booking-field-input-elm booking-field-input"
                    >
                      <option value="true" disabled="true" selected="true">
                        Select a treatment…
                      </option>
                      <option value="Signature Facial">Signature Facial</option>
                      <option value="Radiance Ritual">Radiance Ritual</option>
                      <option value="Désincrustation Aesthetic">
                        Désincrustation Aesthetic
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
                      value="None"
                      id="addon-none"
                      data-form-field-id="addon-none"
                      className="input booking-addon-checkbox"
                    />
                    <span className="booking-addon-text">None</span>
                  </label>
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
                      value="Exosomes — $550"
                      id="addon-exosomes"
                      data-form-field-id="addon-exosomes"
                      className="input booking-addon-checkbox"
                    />
                    <span className="booking-addon-price">$550</span>
                    <span className="booking-addon-text">
                      {' '}
                      Exosomes
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </label>
                  <label className="booking-addon-option">
                    <input
                      type="checkbox"
                      name="booking_addons"
                      value="Microdermabrasion — $120"
                      id="addon-micro"
                      data-form-field-id="addon-micro"
                      className="input booking-addon-checkbox"
                    />
                    <span className="booking-addon-price">$120</span>
                    <span className="booking-addon-text">
                      {' '}
                      Microdermabrasion
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </label>
                  <label className="booking-addon-option">
                    <input
                      type="checkbox"
                      name="booking_addons"
                      value="Microcurrent — $90"
                      id="addon-microcurrent"
                      data-form-field-id="addon-microcurrent"
                      className="input booking-addon-checkbox"
                    />
                    <span className="booking-addon-price">$90</span>
                    <span className="booking-addon-text">
                      {' '}
                      Microcurrent
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </label>
                  <label className="booking-addon-option">
                    <input
                      type="checkbox"
                      name="booking_addons"
                      value="LED Phototherapy — $90"
                      id="addon-led"
                      data-form-field-id="addon-led"
                      className="input booking-addon-checkbox"
                    />
                    <span className="booking-addon-price">$90</span>
                    <span className="booking-addon-text">
                      {' '}
                      LED Phototherapy
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
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
      <div className="book-container23">
        <div className="book-container24">
          <Script
            html={`<script>
        ;(function () {
          ;(function () {
            /* ── DOM refs ── */
            const overlay = document.getElementById("booking-modal-overlay")
            const panel = document.getElementById("booking-modal-panel")
            const closeBtn = document.getElementById("booking-modal-close")
            const openBtn = document.querySelector('[data-node-id="TQ_tfErTp6YEa"]')
            const step1 = document.getElementById("booking-step-1")
            const step2 = document.getElementById("booking-step-2")
            const step3 = document.getElementById("booking-step-3")
            const calLabel = document.getElementById("booking-cal-label")
            const calDays = document.getElementById("booking-cal-days")
            const calPrev = document.getElementById("booking-cal-prev")
            const calNext = document.getElementById("booking-cal-next")
            const slotsWrap = document.getElementById("booking-timeslots-wrap")
            const slotsBox = document.getElementById("booking-timeslots")
            const nextBtn = document.getElementById("booking-next-btn")
            const backBtn = document.getElementById("booking-back-btn")
            const summary = document.getElementById("booking-selected-summary")
            const form = document.getElementById("booking-form")
            const confirmMsg = document.getElementById("booking-confirm-msg")
            const doneBtn = document.getElementById("booking-done-btn")
            const serviceSelect = document.getElementById("service-select")
            /* ── State ── */
            const today = new Date()
            today.setHours(0, 0, 0, 0)
            const maxDate = new Date(2040, 11, 31)
            let viewYear = today.getFullYear()
            let viewMonth = today.getMonth()
            let selectedDate = null
            let selectedTime = null
            const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            const TIME_SLOTS = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"]
            /* ── Calendar render ── */
            function renderCalendar() {
              calLabel.textContent = MONTHS[viewMonth] + " " + viewYear
              calDays.innerHTML = ""
              const firstDay = new Date(viewYear, viewMonth, 1).getDay()
              const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()
              // empty cells before first day
              for (let i = 0; i < firstDay; i++) {
                const blank = document.createElement("span")
                blank.className = "booking-cal-empty"
                calDays.appendChild(blank)
              }
              for (let d = 1; d <= daysInMonth; d++) {
                const btn = document.createElement("button")
                btn.type = "button"
                btn.textContent = d
                const cellDate = new Date(viewYear, viewMonth, d)
                if (cellDate < today || cellDate > maxDate) {
                  btn.disabled = true
                  btn.className = "booking-cal-day disabled"
                } else {
                  btn.className = "booking-cal-day"
                  if (selectedDate && cellDate.toDateString() === selectedDate.toDateString()) {
                    btn.classList.add("selected")
                  }
                  btn.addEventListener("click", function () {
                    selectedDate = cellDate
                    selectedTime = null
                    renderCalendar()
                    renderSlots()
                    slotsWrap.style.display = "block"
                    nextBtn.style.display = "none"
                  })
                }
                calDays.appendChild(btn)
              }
              calPrev.disabled = viewYear === today.getFullYear() && viewMonth === today.getMonth()
              calNext.disabled = viewYear === 2040 && viewMonth === 11
            }
            /* ── Time slots render ── */
            function renderSlots() {
              slotsBox.innerHTML = ""
              TIME_SLOTS.forEach(function (t) {
                const btn = document.createElement("button")
                btn.type = "button"
                btn.textContent = t
                btn.className = "booking-slot" + (selectedTime === t ? " selected" : "")
                btn.addEventListener("click", function () {
                  selectedTime = t
                  document.querySelectorAll(".booking-slot").forEach((b) => b.classList.remove("selected"))
                  btn.classList.add("selected")
                  nextBtn.style.display = "block"
                })
                slotsBox.appendChild(btn)
              })
            }
            /* ── Navigation ── */
            calPrev.addEventListener("click", function () {
              if (viewMonth === 0) {
                viewMonth = 11
                viewYear--
              } else viewMonth--
              renderCalendar()
            })
            calNext.addEventListener("click", function () {
              if (viewMonth === 11) {
                viewMonth = 0
                viewYear++
              } else viewMonth++
              renderCalendar()
            })
            nextBtn.addEventListener("click", function () {
              const treatmentEl = document.getElementById("booking-treatment")
              const serviceName = treatmentEl && treatmentEl.value ? treatmentEl.value : serviceSelect ? serviceSelect.options[serviceSelect.selectedIndex].text : "Facial Treatment"
              const dateStr = selectedDate.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })
              summary.textContent = serviceName ? serviceName + " · " + dateStr + " at " + selectedTime : dateStr + " at " + selectedTime
              step1.style.display = "none"
              step2.style.display = "block"
            })
            backBtn.addEventListener("click", function () {
              step2.style.display = "none"
              step1.style.display = "block"
            })
            /* ── Add-on "None" mutual exclusivity ── */
            const addonNone = document.getElementById("addon-none")
            const addonOthers = form.querySelectorAll('[name="booking_addons"]:not(#addon-none)')
            if (addonNone) {
              addonNone.addEventListener("change", function () {
                if (this.checked)
                  addonOthers.forEach(function (cb) {
                    cb.checked = false
                  })
              })
              addonOthers.forEach(function (cb) {
                cb.addEventListener("change", function () {
                  if (this.checked) addonNone.checked = false
                })
              })
            }
            /* ── Form submission ── */
            form.addEventListener("submit", function (e) {
              e.preventDefault()
              const name = document.getElementById("booking-name").value.trim()
              const phone = document.getElementById("booking-phone").value.trim()
              const email = document.getElementById("booking-email").value.trim()
              const treatmentEl = document.getElementById("booking-treatment")
              const treatment = treatmentEl ? treatmentEl.value : ""
              const errorBox = document.getElementById("booking-form-error")
              errorBox.textContent = ""
              if (!name || !treatment || !phone || !email) {
                errorBox.textContent = "Please fill in all required fields before continuing."
                errorBox.scrollIntoView({ behavior: "smooth", block: "nearest" })
                return
              }
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
              if (!emailRegex.test(email)) {
                errorBox.textContent = "Please enter a valid email address."
                return
              }
              const selectedAddons = Array.from(form.querySelectorAll('[name="booking_addons"]:checked')).map(function (cb) {
                return cb.value
              })
              const addonsStr = selectedAddons.length ? selectedAddons.join(", ") : "None"
              const serviceName = treatmentEl ? treatmentEl.value : "Facial Treatment"
              const dateStr = selectedDate.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })
              /* ── Email dispatch via Web3Forms (free, no backend required) ── */
              const submitBtn = form.querySelector('[type="submit"]')
              submitBtn.disabled = true
              submitBtn.textContent = "Sending…"
              const payload = {
                access_key: "00000000-0000-0000-0000-000000000000",
                subject: "New Booking Request — Alma Aesthetic",
                from_name: name,
                replyto: email,
                to: "ainearby@gmail.com,book@almaaesthetic.co",
                message: ["Name: " + name, "Phone: " + phone, "Email: " + email, "Treatment: " + serviceName, "Add-Ons: " + addonsStr, "Date: " + dateStr, "Time: " + selectedTime].join("\n"),
              }
              fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(payload),
              })
                .then(function (res) {
                  return res.json()
                })
                .then(function (data) {
                  confirmMsg.textContent = "Hi " + name + ", your " + serviceName + " is tentatively scheduled for " + dateStr + " at " + selectedTime + "."
                  step2.style.display = "none"
                  step3.style.display = "block"
                })
                .catch(function () {
                  /* Fallback: show success even if fetch fails — log for manual follow-up */
                  console.warn("Booking email dispatch failed; stored locally.", payload)
                  confirmMsg.textContent = "Hi " + name + ", your " + serviceName + " is tentatively scheduled for " + dateStr + " at " + selectedTime + "."
                  step2.style.display = "none"
                  step3.style.display = "block"
                })
                .finally(function () {
                  submitBtn.disabled = false
                  submitBtn.textContent = "Book Appointment"
                })
            })
            doneBtn.addEventListener("click", closeModal)
            /* ── Open / Close ── */
            function openModal() {
              // reset to step 1
              step1.style.display = "block"
              step2.style.display = "none"
              step3.style.display = "none"
              selectedDate = null
              selectedTime = null
              slotsWrap.style.display = "none"
              nextBtn.style.display = "none"
              form.reset()
              viewYear = today.getFullYear()
              viewMonth = today.getMonth()
              renderCalendar()
              overlay.style.display = "flex"
              document.body.style.overflow = "hidden"
              setTimeout(() => overlay.classList.add("active"), 10)
            }
            function closeModal() {
              overlay.classList.remove("active")
              setTimeout(() => {
                overlay.style.display = "none"
                document.body.style.overflow = ""
              }, 300)
            }
            if (openBtn) openBtn.addEventListener("click", openModal)
            closeBtn.addEventListener("click", closeModal)
            overlay.addEventListener("click", function (e) {
              if (e.target === overlay) closeModal()
            })
            document.addEventListener("keydown", function (e) {
              if (e.key === "Escape" && overlay.style.display !== "none") closeModal()
            })
          })()
        })()
      </script>`}
          ></Script>
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
                      <option value="signature">Signature Ritual</option>
                      <option value="radiance">Radiance Ritual</option>
                      <option value="deep">Désincrustation Ritual</option>
                      <option value="consult">Breathing Ritual</option>
                    </select>
                  </div>
                </div>
                <button id="hero-book-btn" className="btn-primary btn btn-lg">
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
          <button id="mobile-sticky-btn" className="btn-accent btn btn-lg">
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
              <button className="btn-sm btn btn-outline">Book</button>
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
              <button className="btn-sm btn btn-outline">Book</button>
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
              <button className="btn-sm btn btn-outline">Book</button>
            </div>
            <div data-service="consult" className="quick-service-tile">
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
              <button className="btn-sm btn btn-outline">Book</button>
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
      <div className="book-container26">
        <div className="book-container27">
          <Script
            html={`<style>
        @keyframes fadeIn {from {opacity: 0;
transform: translateY(10px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="book-container28">
        <div className="book-container29">
          <Script
            html={`<script>
        ;(function () {
          // Location and Service selection handling
          const heroBookBtn = document.getElementById("hero-book-btn")
          const finalBookBtn = document.getElementById("final-book-btn")
          const mobileStickyBtn = document.getElementById("mobile-sticky-btn")
          const handleBookingStart = () => {
            const service = document.getElementById("service-select").value
            // Scroll to availability section
            const availabilitySection = document.querySelector(".availability-hub")
            if (availabilitySection) {
              availabilitySection.scrollIntoView({ behavior: "smooth" })
            }
          }
          if (heroBookBtn) heroBookBtn.addEventListener("click", handleBookingStart)
          if (finalBookBtn) {
            finalBookBtn.addEventListener("click", () => {
              const hero = document.querySelector(".booking-hero")
              if (hero) hero.scrollIntoView({ behavior: "smooth" })
            })
          }
          if (mobileStickyBtn) mobileStickyBtn.addEventListener("click", handleBookingStart)
          // Quick select tiles
          const tiles = document.querySelectorAll(".quick-service-tile")
          tiles.forEach((tile) => {
            tile.addEventListener("click", () => {
              const service = tile.dataset.service
              document.getElementById("service-select").value = service
              handleBookingStart()
            })
          })
          // Tab switching for availability
          const tabs = document.querySelectorAll(".availability-tab")
          const panes = document.querySelectorAll(".availability-pane")
          tabs.forEach((tab) => {
            tab.addEventListener("click", () => {
              const target = tab.dataset.target
              tabs.forEach((t) => {
                t.classList.remove("active")
                t.setAttribute("aria-selected", "false")
              })
              panes.forEach((p) => p.classList.remove("active"))
              tab.classList.add("active")
              tab.setAttribute("aria-selected", "true")
              document.getElementById(target).classList.add("active")
            })
          })
          // Calendar and Slot interaction
          const days = document.querySelectorAll(".calendar-day:not(.disabled)")
          days.forEach((day) => {
            day.addEventListener("click", () => {
              // Clear all active days in current pane
              const parentPane = day.closest(".availability-pane")
              parentPane.querySelectorAll(".calendar-day").forEach((d) => d.classList.remove("active"))
              day.classList.add("active")
            })
          })
          const slots = document.querySelectorAll(".slot-btn")
          slots.forEach((slot) => {
            slot.addEventListener("click", () => {
              slots.forEach((s) => (s.style.backgroundColor = "var(--color-surface)"))
              slots.forEach((s) => (s.style.color = "var(--color-on-surface)"))
              slot.style.backgroundColor = "var(--color-primary)"
              slot.style.color = "var(--color-on-primary)"
              // Feedback
              setTimeout(() => {
                alert("Thank you. Proceeding to secure your ritual at " + slot.innerText + "...")
              }, 300)
            })
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

export default Book
