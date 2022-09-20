import React from 'react'

function ActiveDashboardIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <rect width="7" height="9" x="2" y="1.793" fill="#07F" rx="1"></rect>
      <rect
        width="7"
        height="9"
        x="18"
        y="17.793"
        fill="#07F"
        rx="1"
        transform="rotate(-180 18 17.793)"
      ></rect>
      <rect width="7" height="5" x="2" y="12.793" fill="#07F" rx="1"></rect>
      <rect
        width="7"
        height="5"
        x="18"
        y="6.793"
        fill="#07F"
        rx="1"
        transform="rotate(-180 18 6.793)"
      ></rect>
    </svg>
  )
}

export default ActiveDashboardIcon
