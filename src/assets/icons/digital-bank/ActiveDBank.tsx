import React from 'react'
import { IconProps } from '../types'

export function ActiveDigitalBankIcon({
  width,
  height,
  color,
  fill,
  className,
}: IconProps) {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="5"
        y1="9.30273"
        x2="5"
        y2="15.3027"
        stroke={color ? color : '#005FCB'}
        stroke-width="2"
        stroke-linecap="square"
        stroke-linejoin="round"
      />
      <line
        x1="10"
        y1="9.30273"
        x2="10"
        y2="15.3027"
        stroke={color ? color : '#005FCB'}
        stroke-width="2"
        stroke-linecap="square"
        stroke-linejoin="round"
      />
      <line
        x1="15"
        y1="9.30273"
        x2="15"
        y2="15.3027"
        stroke={color ? color : '#005FCB'}
        stroke-width="2"
        stroke-linecap="square"
        stroke-linejoin="round"
      />
      <path
        d="M2 5.99573C2 5.57889 2.25857 5.20577 2.64888 5.05941L9.64888 2.43441C9.87526 2.34951 10.1247 2.34951 10.3511 2.43441L17.3511 5.05941C17.7414 5.20577 18 5.57889 18 5.99573V7.30273C18 7.85502 17.5523 8.30273 17 8.30273H3C2.44772 8.30273 2 7.85502 2 7.30273V5.99573Z"
        fill="#0077FF"
        stroke="#0077FF"
        stroke-linejoin="round"
      />
      <rect
        x="2"
        y="16.3027"
        width="16"
        height="2"
        rx="1"
        fill="#0077FF"
        stroke="#0077FF"
        stroke-linejoin="round"
      />
    </svg>
  )
}
