import React from 'react'
import { IconProps } from '../types'

function ActiveAuditIcon({
  color,
  height,
  width,
  className,
  fill,
  onClick,
}: IconProps) {
  return (
    <svg
      className={className}
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <rect
        x="2"
        y="2.30273"
        width="16"
        height="16"
        rx="3"
        fill="#0077FF"
        stroke="#0077FF"
      />
      <path
        d="M13.8511 14.4391L17.8967 18.5697"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle
        cx="11"
        cy="11.3027"
        r="4"
        fill="#005FCB"
        stroke="#F9FAFC"
        stroke-linejoin="round"
      />
      <path d="M5.5 5.80273H7.5" stroke="#F9FAFC" stroke-linecap="round" />
    </svg>
  )
}

export default ActiveAuditIcon
