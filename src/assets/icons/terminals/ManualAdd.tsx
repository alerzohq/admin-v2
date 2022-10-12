import { IconProps } from '../types'

export const TerminalManualAdd = ({
  width,
  height,
  color,
  fill,
  className,
}: IconProps) => {
  return (
    <>
      <svg
        width={width ? width : '160'}
        height="116"
        viewBox="0 0 160 116"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="159"
          height="115"
          rx="4.5"
          fill={fill ? fill : '#DFEEFF'}
          stroke={color ? color : '#374B58'}
        />
        <path
          d="M95.3602 51.435L72.5574 74.2431C71.334 75.4666 69.801 76.3345 68.1224 76.7542L59.3741 78.9413C57.9758 79.2908 56.7092 78.0242 57.0587 76.6259L59.2458 67.8776C59.6655 66.199 60.5334 64.666 61.7569 63.4426L84.5596 40.6344L95.3602 51.435ZM100.763 35.2369C103.746 38.2194 103.746 43.0549 100.763 46.0374L98.0603 48.7348L87.2598 37.9343L89.9626 35.2369C92.9451 32.2544 97.7806 32.2544 100.763 35.2369Z"
          fill="#007BFF"
        />
      </svg>
    </>
  )
}
