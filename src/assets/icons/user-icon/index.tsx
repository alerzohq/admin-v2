import { IconProps } from '../types'

const UserIcon = ({ width, height, color,fill, className }: IconProps) => {
  return (
    <>
       <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      fill="none"
      viewBox="0 0 20 21"
    >
      <path
        stroke={color?color:"#374B58"}
        fill={fill ? fill : ""}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.975 10.405a3.976 3.976 0 003.975-3.977 3.976 3.976 0 10-3.975 3.977zM10 13.453a18.871 18.871 0 00-2.737.053c-.624.046-1.244.137-1.856.274-.848.183-1.87.587-2.233 1.35a1.978 1.978 0 000 1.623c.37.799 1.385 1.165 2.24 1.34.609.143 1.227.237 1.85.282.217.045.427.045.645.045.696.04 1.394.042 2.091.006"
      ></path>
      <path
        stroke={color?color:"#374B58"}
        fill={fill ? fill : ""}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.913 14.255l-.21-.365a.645.645 0 00-.88-.238.642.642 0 01-.967-.537.646.646 0 00-.645-.664h-.423a.642.642 0 00-.642.646.645.645 0 01-.646.636.617.617 0 01-.308-.087.645.645 0 00-.88.238l-.226.37a.645.645 0 00.235.88.645.645 0 010 1.118.642.642 0 00-.235.877l.213.368a.646.646 0 00.88.25.64.64 0 01.964.543c0 .357.289.646.645.646h.423a.645.645 0 00.645-.643.643.643 0 01.646-.645.657.657 0 01.308.086.645.645 0 00.88-.234l.223-.37a.642.642 0 00-.235-.88.642.642 0 010-1.115.645.645 0 00.235-.877v-.003z"
        clipRule="evenodd"
      ></path>
      <path
        stroke={color?color:"#374B58"}
        fill={fill ? fill : ""}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 16.583a.89.89 0 100-1.779.89.89 0 000 1.779z"
      ></path>
    </svg>
    </>
  )
}

export default UserIcon
