import { IconProps } from '../types'

const HistoryIcon = ({ width, height, color,fill, className }: IconProps) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="21"
    fill="none"
    viewBox="0 0 20 21"
  >
    <path
      stroke={color ? color :"#374B58"}
    
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 9.945v-5a3 3 0 00-3-3H5a3 3 0 00-3 3v10a3 3 0 003 3h5"
    ></path>
    <circle
      cx="15"
      cy="14.945"
      r="4"
      stroke={color ? color :"#374B58"}  
      fill={fill ? fill : ""}

      strokeLinejoin="round"
    ></circle>
    <path
      stroke={color ? color :"#374B58"}  
      fill={fill ? fill : ""}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12.945v2h2"
    ></path>
    <path
      stroke={color ? color :"#374B58"}  
      strokeLinecap="round"
      d="M5.5 6.445L14.5 6.445"
      fill={fill ? fill : ""}
    ></path>
    <path
    stroke={color ? color :"#374B58"}  
      strokeLinecap="round"
      d="M5.5 10.445L9.5 10.445"
      fill={fill ? fill : ""}
    ></path>
    <path
      stroke={color ? color :"#374B58"}  
      strokeLinecap="round"
      d="M5.5 14.445L9.5 14.445"
      fill={fill ? fill : ""}
    ></path>
  </svg>
  )
}
export default HistoryIcon