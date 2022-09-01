import React from "react";

function WithDrawIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="391"
      height="278"
      fill="none"
      viewBox="0 0 391 278"
    >
      <g filter="url(#filter0_d_8725_31801)">
        <rect width="271" height="158" x="60" y="54" fill="#fff" rx="20"></rect>
      </g>
      <defs>
        <filter
          id="filter0_d_8725_31801"
          width="391"
          height="278"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="6"></feOffset>
          <feGaussianBlur stdDeviation="30"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_8725_31801"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_8725_31801"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default WithDrawIcon;