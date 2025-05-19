import React from "react";
import imageReview from "../../assets/IMG_1250.jpg";

interface Props {
  textReview: string;
  img: string;
}

export const CustomSlide = ({ textReview }: Props) => {
  return (
    <div>
      <img src={imageReview} alt="" />
      <h3>{textReview}</h3>
    </div>
  );
};
