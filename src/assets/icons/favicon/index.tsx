import React from "react";
import { IconProps } from "../types";

function FavIcon({color,height,width,className,onClick}:IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width?width:"25"}
      height={height?height:"25"}
      fill="none"
      viewBox="0 0 34 34"
      className={className}
      onClick={onClick}
    >
      <path
        fill={color?color:"#07F"}
        d="M32.944.033s-12.96-.074-16.366 0A17.014 17.014 0 006.494 3.657a16.97 16.97 0 00-5.909 8.928 16.948 16.948 0 00.617 10.683 16.979 16.979 0 006.895 8.192V16.775a8.672 8.672 0 012.548-6.14 8.696 8.696 0 016.149-2.543 9.053 9.053 0 016.281 2.457 9.027 9.027 0 012.831 6.115 8.901 8.901 0 01-2.504 6.5 8.927 8.927 0 01-6.422 2.717h-.811a8.937 8.937 0 01-3.876-1.3l-.156-.096-.29-.2-.127-.082a5.283 5.283 0 012.09 3.944v5.556a17.13 17.13 0 003.17.297 16.883 16.883 0 008.926-2.526v1.486A1.04 1.04 0 0026.948 34h6.01A1.042 1.042 0 0034 32.96V1.073a1.04 1.04 0 00-1.056-1.04z"
      ></path>
    </svg>
  );
}

export default FavIcon;