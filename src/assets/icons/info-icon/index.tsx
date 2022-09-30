import React from 'react'
import { IconProps } from '../types'

function InfoIcon({ color }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="69"
      height="69"
      fill="none"
      viewBox="0 0 99 99"
    >
      <path
        fill={color ? color : '#EA4336'}
        d="M49.5 0C22.195 0 0 22.195 0 49.5S22.195 99 49.5 99 99 76.805 99 49.5 76.805 0 49.5 0zm-4.79 73.452V69.97c0-2.651 2.14-4.79 4.79-4.79s4.79 2.139 4.79 4.79v3.48c0 2.651-2.14 4.79-4.79 4.79s-4.79-2.139-4.79-4.79zm9.58-17.437c0 2.618-2.14 4.79-4.79 4.79s-4.79-2.172-4.79-4.79V25.548c0-2.65 2.14-4.79 4.79-4.79s4.79 2.14 4.79 4.79v30.467z"
      ></path>
    </svg>
  )
}

export default InfoIcon
