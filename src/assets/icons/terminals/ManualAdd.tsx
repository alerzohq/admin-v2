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
        height={height ? height : '116'}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="99%"
          height="115"
          rx="4.5"
          fill={fill ? fill : '#DFEEFF'}
          stroke={color ? color : '#007BFF'}
        />
      </svg>
    </>
  )
}
