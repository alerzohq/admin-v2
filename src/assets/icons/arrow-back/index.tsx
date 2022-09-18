import React from 'react'
import { IconProps } from '../types'

function ArrowBackIcon({ onClick }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      onClick={onClick}
    >
      <path
        fill="#000"
        d="M19 11H7.14l3.63-4.36a1.001 1.001 0 00-1.54-1.28l-5 6a1.198 1.198 0 00-.09.15c0 .05 0 .08-.07.13A1 1 0 004 12a1 1 0 00.07.36c0 .05 0 .08.07.13.026.052.056.102.09.15l5 6A1 1 0 0010 19a1 1 0 00.77-1.64L7.14 13H19a1 1 0 100-2z"
      ></path>
    </svg>
  )
}

export default ArrowBackIcon
