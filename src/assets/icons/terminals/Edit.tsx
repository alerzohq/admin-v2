import { IconProps } from '../types'

export const Edit = ({ width, height, color, fill, className }: IconProps) => {
  return (
    <>
      <svg
        className={className}
        width={width ? width : '46'}
        height={height ? height : '46'}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M38.3602 18.435L15.5574 41.2431C14.334 42.4666 12.801 43.3345 11.1224 43.7542L2.37409 45.9413C0.97577 46.2908 -0.290837 45.0242 0.0587441 43.6259L2.24583 34.8776C2.66547 33.199 3.53342 31.666 4.75688 30.4426L27.5596 7.63444L38.3602 18.435ZM43.7631 2.23687C46.7456 5.21935 46.7456 10.0549 43.7631 13.0374L41.0603 15.7348L30.2598 4.9343L32.9626 2.23687C35.9451 -0.745622 40.7806 -0.745622 43.7631 2.23687Z"
          fill={fill ? fill : '#007BFF'}
        />
      </svg>
    </>
  )
}
