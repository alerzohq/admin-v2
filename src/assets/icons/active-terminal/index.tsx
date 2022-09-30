import React from 'react'

function ActiveTerminalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill="#005FCB"
        stroke="#005FCB"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 5h2a2 2 0 012 2v6a2 2 0 01-2 2h-2V5z"
      ></path>
      <rect
        width="12"
        height="16"
        x="2"
        y="2"
        fill="#07F"
        stroke="#07F"
        strokeLinecap="round"
        strokeLinejoin="round"
        rx="3"
      ></rect>
      <rect width="8" height="3" x="4" y="5" fill="#F9FAFC" rx="1"></rect>
    </svg>
  )
}

export default ActiveTerminalIcon
