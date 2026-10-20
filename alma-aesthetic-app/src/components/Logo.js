import React from 'react'

// Elegant serif "AA" monogram with a clean gold line running beneath it.
export default function Logo({ className = '', wordmark = true }) {
  return (
    <svg
      viewBox={wordmark ? '0 0 232 52' : '0 0 64 52'}
      role="img"
      aria-label="Alma Aesthetic"
      className={className}
    >
      <text
        x="0"
        y="38"
        fill="currentColor"
        fontFamily="'Libre Baskerville', Georgia, serif"
        fontSize="40"
        textLength="60"
        lengthAdjust="spacing"
      >
        AA
      </text>
      {wordmark && (
        <text
          x="72"
          y="36"
          fill="currentColor"
          fontFamily="'Open Sans', system-ui, sans-serif"
          fontSize="12"
          fontWeight="400"
          textLength="158"
          lengthAdjust="spacing"
        >
          ALMA AESTHETIC
        </text>
      )}
      <line x1="0" x2={wordmark ? 230 : 62} y1="45" y2="45" stroke="#c9a96e" strokeWidth="1.2" />
    </svg>
  )
}
