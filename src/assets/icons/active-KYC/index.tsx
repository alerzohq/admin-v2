import React from 'react'

function ActiveKYCIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      fill="none"
      viewBox="0 0 20 21"
    >
      <rect
        width="16"
        height="16"
        x="3"
        y="2.151"
        fill="#07F"
        stroke="#07F"
        rx="3"
      ></rect>
      <path
        stroke="#005FCB"
        strokeLinecap="round"
        d="M7.707 6.151L15 13.444"
      ></path>
      <path
        stroke="#005FCB"
        strokeLinecap="round"
        d="M0.5 -0.5L10.814 -0.5"
        transform="scale(-1 1) rotate(45 -14.925 -15.03)"
      ></path>
      <circle
        cx="11"
        cy="10.151"
        r="3"
        fill="#005FCB"
        stroke="#F9FAFC"
        strokeLinejoin="round"
      ></circle>
      <path
        stroke="#005FCB"
        strokeLinecap="round"
        d="M2 7.151h2M2 13.151h2"
      ></path>
    </svg>
  )
}

export default ActiveKYCIcon
