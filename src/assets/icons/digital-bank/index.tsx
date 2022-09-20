import React from 'react'
import { IconProps } from '../types'

function DigitalbankIcon({ width, height, color, fill, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      fill="none"
      viewBox="0 0 20 21"
    >
      <path
        stroke={color ? color : '#374B58'}
        fill={fill ? fill : ''}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 6.144a1 1 0 01.649-.936l7-2.625a1 1 0 01.702 0l7 2.625a1 1 0 01.649.936v1.307a1 1 0 01-1 1H3a1 1 0 01-1-1V6.144z"
      ></path>
      <rect
        width="16"
        height="3"
        x="2"
        y="15.451"
        stroke={color ? color : '#374B58'}
        fill={fill ? fill : ''}
        strokeLinecap="round"
        strokeLinejoin="round"
        rx="1"
      ></rect>
      <path
        stroke={color ? color : '#374B58'}
        fill={fill ? fill : ''}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 9.951L4.5 13.951"
      ></path>
      <path
        stroke={color ? color : '#374B58'}
        fill={fill ? fill : ''}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.5 9.951L9.5 13.951"
      ></path>
      <path
        stroke={color ? color : '#374B58'}
        fill={fill ? fill : ''}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.5 9.951L14.5 13.951"
      ></path>
    </svg>
  )
}

export default DigitalbankIcon
