import React from "react";
import "./cardItem.scss";
import { galleryData } from "../../data/galleryData";
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
}

const CardItem = ({
  title,
  numberSeats,
  tarif,
  price,
  description,
}: PropsCardItem) => {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 400,
    slidesToShow: 1,
    lazyLoad: true,
    slidesToScroll: 1,
    nextArrow: IS_MOBILE ? <ArrowRight width={10} height={10} /> : <></>,
    prevArrow: IS_MOBILE ? <ArrowLeft width={10} height={10} /> : <></>,
  };

  return (
    <div className="card">
      <h1 className="card-title">{title}</h1>
      <div className="card-slider">
        <Slider {...settings}>
          {galleryData.map((itemImg) => (
            <div>
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
        <a href="tel:+79292758250" className="card-button">
          Позвонить
        </a>
      </div>
    </div>
  );
};

export default CardItem;
