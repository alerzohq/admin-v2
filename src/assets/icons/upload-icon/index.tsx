import { IconProps } from '../types'

const UserIcon = ({  color }: IconProps) => {
  return (
    <svg
      width="14"
      height="17"
      viewBox="0 0 14 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 11.832V13.832C13 14.5684 12.403 15.1654 11.6667 15.1654H2.33333C1.59695 15.1654 1 14.5684 1 13.832V11.832"
        stroke={color || "#A1A8B7"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.66602 4.16602L6.99935 1.49935L4.33268 4.16602"
        stroke={color || "#A1A8B7"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 10.832L7 1.4987"
        stroke={color || "#A1A8B7"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default UserIcon
