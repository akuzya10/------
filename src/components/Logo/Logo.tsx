import React from "react";

interface Props {
  width?: number;
  height?: number;
}
const Logo = ({ width, height }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "46"}
      height={height ? height : "39"}
      viewBox="0 0 46 39"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.8418 5.22876C13.8537 5.12525 2.04383 16.0804 1.03384 38.7795C1.01418 39.0699 0.625741 39.0699 0.586981 38.8002C-0.384253 31.3928 -0.209554 24.6289 1.55821 18.7569C7.36596 -0.643195 29.5678 -3.17445 45.3014 2.96722C46.0783 3.27835 46.253 4.35721 45.5926 4.91764C33.3166 15.3958 34.9871 44.0287 5.09348 31.6211C9.77467 16.1011 19.3508 6.49424 35.8418 5.22876Z"
        fill="white"
      />
    </svg>
  );
};

export default Logo;
