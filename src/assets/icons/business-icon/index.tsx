import React from 'react'
import { IconProps } from '../types'

function BusinessIcon({
  color,
  height,
  width,
  className,
  fill,
  onClick,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      fill="none"
      viewBox="0 0 20 21"
      className={className}
      onClick={onClick}
    >
      <path
        stroke={color ? color : '#374B58'}
        fill={fill ? fill : ''}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 13.451h5v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4h4.5M8 2.451a1 1 0 011-1h2a1 1 0 011 1v1H8v-1zM12 13.451h4a2 2 0 002-2v-6a2 2 0 00-2-2H4a2 2 0 00-2 2v6a2 2 0 002 2h4"
      ></path>
      <path
        stroke={color ? color : '#374B58'}
        fill={fill ? fill : ''}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 12.451a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1H9a1 1 0 01-1-1v-1z"
      ></path>
    </svg>
  )
}

export default BusinessIcon
