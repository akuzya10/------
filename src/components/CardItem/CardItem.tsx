import React from "react";
import "./cardItem.scss";
import { galleryDataForBarhat } from "../../data/galleryForBarhat";
import { galleryDataForBaron } from "../../data/galleryForBaron";
import { galleryDataForBarskiy } from "../../data/galleryForBarskiy";
import Slider from "react-slick/lib/slider";
import ArrowRight from "../Arrow/ArrowRight";
import { IS_MOBILE } from "../../constants/mobileConstant";
import ArrowLeft from "../Arrow/ArrowLeft";
import { List } from "../List/List";

export interface PropsCardItem {
  title: string;
  numberSeats: string;
  tarif: string;
  price: string;
  description: string;
  variant: string;
}

const CardItem = ({
  title,
  numberSeats,
  tarif,
  price,
  description,
  variant,
}: PropsCardItem) => {
  const settings = {
    // dots: true,
    infinite: true,
    fade: true,
    speed: 400,
    slidesToShow: 1,
    lazyLoad: true,
    slidesToScroll: 1,
    nextArrow: IS_MOBILE ? <ArrowRight width={10} height={10} /> : <ArrowRight width={20} height={20} />,
    prevArrow: IS_MOBILE ? <ArrowLeft width={10} height={10} /> : <ArrowLeft width={20} height={20} />,
  };

  const gallery = () => {
    if (variant === "baron") {
      return galleryDataForBaron;
    }

    if (variant === "barhat") {
      return galleryDataForBarhat;
    }

    if (variant === "barskiy") {
      return galleryDataForBarskiy;
    }

    return galleryDataForBaron;
  };

  return (
    <div className="card">
      <h1 className="card-title">{title}</h1>
      <div className="card-slider">
        <Slider {...settings}>
          {gallery().map((itemImg) => (
            <div style={{ outline: 'none' }}>
              <img src={itemImg} alt="" className="gallery-img" />
            </div>
          ))}
        </Slider>
      </div>

      {IS_MOBILE && (
        <>
          <div className="card-list">
            <List width={178} height={130} />
          </div>
          <div className="card-list-too">
            <List width={158} height={110} />
          </div>
        </>
      )}

      <div className="card-numberSeats">
        Вместимость: до {numberSeats} человек
      </div>
      <div className="card-tarif">Тариф: {tarif}</div>
      <div className="card-tarif">{price}</div>
      <h3 className="card-description">{description}</h3>

      <div className="card-button-wrapeer">
        <a href="tel:+79821176175" className="card-button">
          Позвонить
        </a>
      </div>
    </div>
  );
};

export default CardItem;
