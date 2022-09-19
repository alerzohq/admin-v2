import { IconProps } from '../types'

const Dashboard = ({ width, height, color,fill, className }: IconProps) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width?width:"20"}
    height={height?height:"21"}
    fill="none"

    viewBox="0 0 20 21"
    className={className}
  >
    <rect width="7" height="9" x="2" y="1.945"
     stroke={color?color:"#374B58"} 
     fill={fill?fill:""}
     rx="1"></rect>
    <rect
      width="7"
      height="9"
      x="18"
      y="17.945"
      stroke={color?color:"#374B58"}
      fill={fill?fill:""}
      rx="1"
      transform="rotate(-180 18 17.945)"
    ></rect>
    <rect
      width="7"
      height="5"
      x="2"
      y="12.945"
      stroke={color?color:"#374B58"}
      fill={fill?fill:""}
      rx="1"
    ></rect>
    <rect
      width="7"
      height="5"
      x="18"
      y="6.945"
      stroke={color?color:"#374B58"}
      fill={fill?fill:""}
      rx="1"
      transform="rotate(-180 18 6.945)"
    ></rect>
  </svg>
  )
}
export default Dashboard




