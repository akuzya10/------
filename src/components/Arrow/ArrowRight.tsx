import React from "react";

const ArrowRight = (props) => {
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
          right: "0%",
          padding: width ? "5px" : "25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: "translate(-50%, -50%)",
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
            d="M0.487305 0.483398L8.2226 8.21987L0.487305 15.9563"
            stroke="black"
            strokeWidth="0.966912"
          />
        </svg>
      </div>
    </div>
  );
};

export default ArrowRight;
