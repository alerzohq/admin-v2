import { IconProps } from '../types'

const TerminalIcon = ({ width, height, color, fill, className }: IconProps) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="21"
        fill="none"
        viewBox="0 0 20 21"
      >
        <rect
          width="12"
          height="16"
          x="2"
          y="2.451"
          stroke={color ? color : '#374B58'}
          fill={fill ? fill : ''}
          strokeLinecap="round"
          strokeLinejoin="round"
          rx="3"
        ></rect>
        <rect
          width="8"
          height="3"
          x="4"
          y="5.451"
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
          d="M14 5.451h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v-10z"
        ></path>
      </svg>
      {/* <svg
        width={width ? width : '24'}
        height={height ? height : '24'}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z"
          fill={color ? color : '#374B58'}
        />
        <path
          d="M14.9755 12.6504C14.2429 13.4724 13.1877 14.0002 12 14.0002C10.8124 14.0002 9.75726 13.4725 9.02466 12.6506C6.62628 13.6121 4.80951 15.6855 4.21002 18.2502C6.10425 20.6162 8.96924 21.9953 12 22.0002C15.0308 21.9953 17.8958 20.6162 19.79 18.2502C19.173 15.611 17.3129 13.59 14.9755 12.6504Z"
          fill="#A5B0B7"
        />
        <path
          d="M9.02467 12.6506C8.39454 11.9437 8.00001 11.0218 8.00001 10.0002C8.00001 7.79107 9.79084 6.00024 12 6.00024C14.2092 6.00024 16 7.79107 16 10.0002C16 11.0217 15.6055 11.9435 14.9755 12.6504C17.3062 13.5873 19.1611 15.6 19.7834 18.2283C21.155 16.5191 21.98 14.3522 21.98 11.9902C21.98 6.47845 17.5118 2.01025 12 2.01025C6.48822 2.01025 2.02002 6.47845 2.02002 11.9902C2.02002 14.3522 2.84497 16.519 4.21661 18.2283C4.82142 15.674 6.63331 13.6093 9.02467 12.6506Z"
          fill="white"
        />
      </svg> */}
    </>
  )
}

export default TerminalIcon
