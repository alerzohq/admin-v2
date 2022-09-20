import React from 'react'

function ActiveHistoryIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      fill="none"
      viewBox="0 0 17 17"
    >
      <rect width="16" height="16" fill="#07F" rx="3"></rect>
      <circle cx="13" cy="13" r="4" fill="#005FCB"></circle>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 11v2h2"
      ></path>
      <path stroke="#F9FAFC" strokeLinecap="round" d="M3.5 4.5L12.5 4.5"></path>
      <path stroke="#F9FAFC" strokeLinecap="round" d="M3.5 8.5L8.5 8.5"></path>
      <path
        stroke="#F9FAFC"
        strokeLinecap="round"
        d="M3.5 12.5L7.5 12.5"
      ></path>
    </svg>
  )
}

export default ActiveHistoryIcon
