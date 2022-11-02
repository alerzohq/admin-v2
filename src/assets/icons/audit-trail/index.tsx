import React from 'react'
import { IconProps } from '../types'

function AuditIcon({
  color,
  height,
  width,
  className,
  fill,
  onClick,
}: IconProps) {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M18 10.0957V5.0957C18 3.43885 16.6569 2.0957 15 2.0957H5C3.34315 2.0957 2 3.43885 2 5.0957V15.0957C2 16.7526 3.34315 18.0957 5 18.0957H10"
        stroke={color ? color : '#374B58'}
        fill={fill ? fill : ''}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle
        cx="11"
        cy="11.0957"
        r="4"
        stroke="#374B58"
        stroke-linejoin="round"
      />
      <path
        d="M13.8511 14.232L17.8967 18.3626"
        stroke={color ? color : '#374B58'}
        fill={fill ? fill : ''}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.5 5.5957H7.5"
        stroke={color ? color : '#374B58'}
        fill={fill ? fill : ''}
        stroke-linecap="round"
      />
    </svg>
  )
}

export default AuditIcon
