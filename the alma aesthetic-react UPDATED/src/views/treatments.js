import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './treatments.css'

const Treatments = (props) => {
  return (
    <div className="treatments-container1">
      <Helmet>
        <title>Treatments - Alma Aesthetic</title>
        <meta
          name="description"
          content="Alma Aesthetic is an exclusive organic facial spa serving Miami, Broward, Island and Palm Beach with facials, advanced skincare and technology."
        />
        <meta property="og:title" content="Treatments - Alma Aesthetic" />
        <meta
          property="og:description"
          content="Alma Aesthetic is an exclusive organic facial spa serving Miami, Broward, Island and Palm Beach with facials, advanced skincare and technology."
        />
        <link rel="canonical" href="https://alma-aesthetic.com/treatments" />
        <meta
          property="og:url"
          content="https://alma-aesthetic.com/treatments"
        />
      </Helmet>
      <Navigation></Navigation>
      <section className="treatments-hero">
        <div className="treatments-hero-inner">
          <h1 className="hero-title treatments-hero-title">Rituals</h1>
          <p className="treatments-hero-intro">
            Discover facial rituals designed to refine, restore, brighten, and
            deeply nourish the skin. Each treatment is tailored with intentional
            technique, advanced skincare, and sculpting touch to support your
            skin&apos;s natural vitality.
          </p>
          <div className="treatments-hero-ctas">
            <Link to="/book">
              <div className="treatments-btn-primary btn-primary btn btn-lg">
                <span>Book Your Ritual</span>
              </div>
            </Link>
            <a href="#facial-rituals">
              <div className="btn btn-lg btn-outline treatments-btn-outline">
                <span>Explore Treatments</span>
              </div>
            </a>
          </div>
          <div className="treatments-hero-trust">
            <span>North &amp; South Florida</span>
            <span aria-hidden="true" className="treatments-trust-dot"></span>
            <span>Miami-Dade</span>
            <span aria-hidden="true" className="treatments-trust-dot"></span>
            <span>Broward</span>
            <span aria-hidden="true" className="treatments-trust-dot"></span>
            <span>Palm Beach</span>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="treatments-thq-treatments-hero-image-band-elm treatments-hero-image-band"
        ></div>
      </section>
      <section
        id="facial-rituals"
        aria-labelledby="facial-rituals-heading"
        className="facial-rituals"
      >
        <div className="facial-rituals-inner">
          <div className="facial-rituals-header">
            <div className="treatments-thq-facial-rituals-eyebrow-elm facial-rituals-eyebrow"></div>
            <h2
              id="facial-rituals-heading"
              className="section-title facial-rituals-title"
            >
              Facial Rituals
            </h2>
            <p className="facial-rituals-subtitle">
              Four bespoke rituals, each designed with purpose. Discover the one
              your skin is asking for.
            </p>
          </div>
          <div className="facial-rituals-grid">
            <article
              aria-label="Signature Ritual treatment"
              className="glossary--treatments-overview-ritual-card"
            >
              <div className="ritual-card-image-wrap">
                <img
                  alt="Signature Ritual facial treatment"
                  src="https://images.pexels.com/photos/3985325/pexels-photo-3985325.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
                <div aria-hidden="true" className="ritual-card-number">
                  <span>01</span>
                </div>
              </div>
              <div className="ritual-card-body">
                <div className="ritual-card-top">
                  <h2 className="section-title ritual-card-name">
                    Signature Ritual
                  </h2>
                  <div className="ritual-card-price">
                    <span>
                      {' '}
                      From
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <strong>$150</strong>
                  </div>
                </div>
                <p className="section-content ritual-card-desc">
                  Refined exfoliation, a potent active booster, and a nourishing
                  mask. The ritual concludes with Alma&apos;s signature
                  sculpting, draining, and lifting massage to redefine facial
                  contours and promote lymphatic drainage.
                </p>
                <div className="ritual-card-best">
                  <span className="ritual-best-label">Best for</span>
                  <span className="ritual-best-value">
                    Lift, glow, hydration, and facial contouring
                  </span>
                </div>
                <div className="ritual-card-addon-note">
                  <svg
                    width="13"
                    xmlns="http://www.w3.org/2000/svg"
                    height="13"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 12h14m-7-7v14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Enhance with Customized Peels or Microcurrent</span>
                </div>
                <Link to="/book">
                  <div className="btn-primary btn ritual-card-cta">
                    <span>Book Signature Ritual</span>
                  </div>
                </Link>
              </div>
            </article>
            <article
              aria-label="Radiance Ritual treatment"
              className="glossary--treatments-overview-ritual-card ritual-card--accent"
            >
              <div className="ritual-card-image-wrap">
                <img
                  alt="Radiance Ritual LED light therapy facial"
                  src="https://images.pexels.com/photos/7446691/pexels-photo-7446691.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
                <div aria-hidden="true" className="ritual-card-number">
                  <span>02</span>
                </div>
              </div>
              <div className="ritual-card-body">
                <div className="ritual-card-top">
                  <h2 className="section-title ritual-card-name">
                    Radiance Ritual
                  </h2>
                  <div className="ritual-card-price">
                    <span>
                      {' '}
                      From
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <strong>$250</strong>
                  </div>
                </div>
                <p className="section-content ritual-card-desc">
                  Designed to counteract stress, sleep deprivation, poor diet,
                  travel fatigue, and dullness. Following a thorough cleanse,
                  peel, and hydration infusion, the skin is cocooned in a
                  hyaluronic mask. A firm massage boosts circulation and helps
                  reduce puffiness, while soothing Light Therapy stimulates
                  collagen and elastin.
                </p>
                <div className="ritual-card-best">
                  <span className="ritual-best-label">Best for</span>
                  <span className="ritual-best-value">
                    Pre-event glow, post-flight recovery, gifting, dullness, and
                    tired skin
                  </span>
                </div>
                <div className="ritual-card-addon-note">
                  <svg
                    width="13"
                    xmlns="http://www.w3.org/2000/svg"
                    height="13"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 12h14m-7-7v14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Enhance with Exosomes or LED Phototherapy</span>
                </div>
                <Link to="/book">
                  <div className="btn-primary btn ritual-card-cta">
                    <span>Book Radiance Ritual</span>
                  </div>
                </Link>
              </div>
            </article>
            <article
              aria-label="Désincrustation Aesthetic treatment"
              className="glossary--treatments-overview-ritual-card"
            >
              <div className="ritual-card-image-wrap">
                <img
                  alt="Désincrustation deep cleansing facial"
                  src="https://images.pexels.com/photos/37229304/pexels-photo-37229304.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
                <div aria-hidden="true" className="ritual-card-number">
                  <span>03</span>
                </div>
              </div>
              <div className="ritual-card-body">
                <div className="ritual-card-top">
                  <h2 className="section-title ritual-card-name">
                    Désincrustation Aesthetic
                  </h2>
                  <div className="ritual-card-price">
                    <span>
                      {' '}
                      From
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <strong>$250</strong>
                  </div>
                </div>
                <p className="section-content ritual-card-desc">
                  A deep cleansing and exfoliating facial using ultra-fine
                  microdermabrasion to help target oiliness, congestion,
                  lacklustre complexions, blackheads, and whiteheads.
                </p>
                <div className="ritual-card-best">
                  <span className="ritual-best-label">Best for</span>
                  <span className="ritual-best-value">
                    Congestion, oiliness, blackheads, whiteheads, and deep
                    cleansing
                  </span>
                </div>
                <div className="ritual-card-addon-note">
                  <svg
                    width="13"
                    xmlns="http://www.w3.org/2000/svg"
                    height="13"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 12h14m-7-7v14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Enhance with Customized Peels or LED Phototherapy</span>
                </div>
                <Link to="/book">
                  <div className="btn-primary btn ritual-card-cta">
                    <span>Book Désincrustation Aesthetic</span>
                  </div>
                </Link>
              </div>
            </article>
            <article
              aria-label="Breathing Ritual treatment"
              className="glossary--treatments-overview-ritual-card ritual-card--accent"
            >
              <div className="ritual-card-image-wrap">
                <img
                  alt="Breathing Ritual oxygen facial treatment"
                  src="https://images.pexels.com/photos/3985338/pexels-photo-3985338.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
                <div aria-hidden="true" className="ritual-card-number">
                  <span>04</span>
                </div>
              </div>
              <div className="ritual-card-body">
                <div className="ritual-card-top">
                  <h2 className="section-title ritual-card-name">
                    Breathing Ritual
                  </h2>
                  <div className="ritual-card-price">
                    <strong>$350</strong>
                  </div>
                </div>
                <p className="section-content ritual-card-desc">
                  We prepare the skin by removing impurities, then apply our
                  wand to introduce specialized serums deep into the pores. This
                  delivers highly concentrated oxygen and negative anions to
                  optimize cellular respiration and support a fresh, revitalized
                  complexion.
                </p>
                <div className="ritual-card-best">
                  <span className="ritual-best-label">Best for</span>
                  <span className="ritual-best-value">
                    Oxygenation, skin vitality, deep serum infusion, and
                    revitalization
                  </span>
                </div>
                <div className="ritual-card-addon-note">
                  <svg
                    width="13"
                    xmlns="http://www.w3.org/2000/svg"
                    height="13"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 12h14m-7-7v14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Enhance with Exosomes or Microcurrent</span>
                </div>
                <Link to="/book">
                  <div className="btn-primary btn ritual-card-cta">
                    <span>Book Breathing Ritual</span>
                  </div>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section
        id="enhance-your-ritual"
        aria-labelledby="addons-heading"
        className="addons-section"
      >
        <div className="addons-inner">
          <div className="addons-header">
            <div className="treatments-thq-addons-eyebrow-elm addons-eyebrow"></div>
            <h2 id="addons-heading" className="section-title addons-title">
              Enhance Your Ritual
            </h2>
            <p className="section-content addons-intro">
              Personalize your facial with targeted add-ons designed to refine
              texture, boost radiance, calm inflammation, support lift, and help
              your skin respond beautifully to active ingredients.
            </p>
          </div>
          <div className="addons-grid">
            <article
              aria-label="Customized Peels add-on"
              className="addon-card"
            >
              <div aria-hidden="true" className="addon-card-icon">
                <svg
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                  height="22"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path>
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                  </g>
                </svg>
              </div>
              <div className="addon-card-content">
                <div className="addon-card-top">
                  <h3 className="addon-card-name">Customized Peels</h3>
                  <div className="addon-card-price">
                    <span>Price upon consultation</span>
                  </div>
                </div>
                <p className="section-content addon-card-desc">
                  Strategic chemical exfoliation tailored to your skin&apos;s
                  specific concerns, including hyperpigmentation, fine lines,
                  dullness, congestion, and uneven texture.
                </p>
                <div className="addon-card-paired">
                  <span className="addon-paired-label">Best paired with</span>
                  <span className="addon-paired-value">
                    Signature Facial, Radiance Ritual, or Désincrustation
                    Aesthetic
                  </span>
                </div>
              </div>
              <Link to="/book">
                <div className="btn btn-outline addon-card-cta">
                  <span>Add to Your Ritual</span>
                </div>
              </Link>
            </article>
            <article
              aria-label="Exosomes add-on"
              className="addon-card addon-card--featured"
            >
              <div aria-hidden="true" className="addon-card-icon">
                <svg
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                  height="22"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                    <circle r="2" cx="4" cy="20"></circle>
                  </g>
                </svg>
              </div>
              <div className="addon-card-badge">
                <span>Most Sought After</span>
              </div>
              <div className="addon-card-content">
                <div className="addon-card-top">
                  <h3 className="addon-card-name">Exosomes</h3>
                  <div className="addon-card-price">
                    <strong>$550</strong>
                  </div>
                </div>
                <p className="section-content addon-card-desc">
                  A premium regenerative enhancement designed to support visible
                  skin renewal, radiance, and post-treatment recovery.
                </p>
                <div className="addon-card-paired">
                  <span className="addon-paired-label">Best paired with</span>
                  <span className="addon-paired-value">
                    Radiance Ritual or Breathing Ritual
                  </span>
                </div>
              </div>
              <Link to="/book">
                <div className="btn-primary btn addon-card-cta">
                  <span>Add Exosomes</span>
                </div>
              </Link>
            </article>
            <article
              aria-label="Microdermabrasion add-on"
              className="addon-card"
            >
              <div aria-hidden="true" className="addon-card-icon">
                <svg
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                  height="22"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m21.64 3.64l-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72M14 7l3 3M5 6v4m14 4v4M10 2v2M7 8H3m18 8h-4M11 3H9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="addon-card-content">
                <div className="addon-card-top">
                  <h3 className="addon-card-name">Microdermabrasion</h3>
                  <div className="addon-card-price">
                    <strong>$120</strong>
                  </div>
                </div>
                <p className="section-content addon-card-desc">
                  A precision resurfacing technique that sweeps away debris,
                  refines texture, and allows active ingredients to penetrate
                  more effectively.
                </p>
                <div className="addon-card-paired">
                  <span className="addon-paired-label">Best paired with</span>
                  <span className="addon-paired-value">
                    Signature Facial or Radiance Ritual
                  </span>
                </div>
              </div>
              <Link to="/book">
                <div className="btn btn-outline addon-card-cta">
                  <span>Add Microdermabrasion</span>
                </div>
              </Link>
            </article>
            <article aria-label="Microcurrent add-on" className="addon-card">
              <div aria-hidden="true" className="addon-card-icon">
                <svg
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                  height="22"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="addon-card-content">
                <div className="addon-card-top">
                  <h3 className="addon-card-name">Microcurrent</h3>
                  <div className="addon-card-price">
                    <strong>$90</strong>
                  </div>
                </div>
                <p className="section-content addon-card-desc">
                  Low-level electrical currents mirror the body&apos;s natural
                  impulses to re-educate facial muscles, support ATP production,
                  and create an immediate lifted look across the brow, jawline,
                  and facial contours.
                </p>
                <div className="addon-card-paired">
                  <span className="addon-paired-label">Best paired with</span>
                  <span className="addon-paired-value">
                    Signature Ritual or Breathing Ritual
                  </span>
                </div>
              </div>
              <Link to="/book">
                <div className="btn btn-outline addon-card-cta">
                  <span>Add Microcurrent</span>
                </div>
              </Link>
            </article>
            <article
              aria-label="LED Phototherapy add-on"
              className="addon-card"
            >
              <div aria-hidden="true" className="addon-card-icon">
                <svg
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                  height="22"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="addon-card-content">
                <div className="addon-card-top">
                  <h3 className="addon-card-name">LED Phototherapy</h3>
                  <div className="addon-card-price">
                    <strong>$90</strong>
                  </div>
                </div>
                <p className="section-content addon-card-desc">
                  Targeted light wavelengths help support tissue repair,
                  radiance, hydration, acne control, and a calmer-looking
                  complexion.
                </p>
                <div className="addon-card-paired">
                  <span className="addon-paired-label">Best paired with</span>
                  <span className="addon-paired-value">
                    Radiance Ritual, Désincrustation Aesthetic, or Breathing
                    Ritual
                  </span>
                </div>
              </div>
              <Link to="/book">
                <div className="btn btn-outline addon-card-cta">
                  <span>Add LED Phototherapy</span>
                </div>
              </Link>
            </article>
          </div>
        </div>
      </section>
      <section aria-labelledby="guidance-heading" className="guidance-section">
        <div className="guidance-inner">
          <div aria-hidden="true" className="guidance-visual">
            <video
              src="https://videos.pexels.com/video-files/9335760/9335760-hd_1280_720_25fps.mp4"
              loop
              muted
              poster="https://play.teleporthq.io/static/svg/videoposter.svg"
              autoPlay
              playsInline
              className="treatments-video"
            ></video>
          </div>
          <div className="guidance-content">
            <div className="guidance-eyebrow">
              <svg
                width="14"
                xmlns="http://www.w3.org/2000/svg"
                height="14"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>We Are Here to Help</span>
            </div>
            <h2 id="guidance-heading" className="section-title guidance-title">
              Not Sure What to Choose?
            </h2>
            <p className="section-content guidance-copy">
              Your facial does not need to be decided alone. Book your ritual
              and we will guide you toward the treatment and enhancements best
              suited to your skin, your goals, and your schedule.
            </p>
            <Link to="/book">
              <div className="btn-primary guidance-cta btn btn-lg">
                <span>Help Me Choose My Ritual</span>
              </div>
            </Link>
            <div className="guidance-service-areas">
              <p className="section-content guidance-areas-note">
                Serving North Florida &amp; South Florida including Miami-Dade,
                Broward County, and Palm Beach.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="treatments-container2">
        <div className="treatments-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.treatments-hero-img-wrap img, .ritual-card, .ritual-card:hover .ritual-card-image-wrap img, .addon-card {
  transition: none;
  transform: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="treatments-container4">
        <div className="treatments-container5">
          <Script
            html={`<script defer data-name="treatments-smooth-explore">
(function(){
  const exploreBtn = document.querySelector('a[href="#facial-rituals"]')
  if (exploreBtn) {
    exploreBtn.addEventListener("click", function (e) {
      const target = document.getElementById("facial-rituals")
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Treatments
