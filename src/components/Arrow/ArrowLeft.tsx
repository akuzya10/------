import React from "react";

const ArrowLeft = (props) => {
  const { className, style, onClick, width, height } = props;
  return (
    <div
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(255, 255, 255, 0.604)",
          borderRadius: "100%",
          top: "50%",
          left: "7%",
          padding: width ? "5px" : "25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: "translate(-50%, -50%)",
          zIndex: 30,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width ? width : "30"}
          height={height ? height : "30"}
          viewBox="0 0 9 17"
          fill="none"
        >
          <path
            d="M8.5127 16.5166L0.777401 8.78013L8.5127 1.04366"
            stroke="black"
            strokeWidth="0.966912"
          />
        </svg>
      </div>
    </div>
  );
};

export default ArrowLeft;
