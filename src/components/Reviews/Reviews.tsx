import ArrowRight from "../Arrow/ArrowRight";
import ArrowLeft from "../Arrow/ArrowLeft";
import Container from "../Container/Container";
import Slider from "react-slick/lib/slider";
import { reviesData } from "../../data/galleryDataReviews";
import mainImage from "../../assets/IMG_1260.jpg";
import "./reviews.scss";
import { useState } from "react";
import { IS_MOBILE } from "../../constants/mobileConstant";

export const Reviews = () => {
  const [openReviews, setOpenReviews] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 400,
    slidesToShow: 1,
    lazyLoad: true,
    slidesToScroll: 1,
    nextArrow: IS_MOBILE ? (
      <ArrowRight width={10} height={10} />
    ) : (
      <ArrowRight />
    ),
    prevArrow: IS_MOBILE ? <ArrowLeft width={10} height={10} /> : <ArrowLeft />,
  };

  const badge = (
    <div
      style={{
        width: IS_MOBILE ? "360px" : "560px",
        height: IS_MOBILE ? "550px" : "700px",
        overflow: "scroll",
        position: "relative",
        zIndex: "999",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <iframe
        style={{
          width: "100%",
          height: "1600px",
          border: "1px solid #e6e6e6",
          borderRadius: "8px",
          boxSizing: "border-box",
        }}
        src="https://yandex.ru/maps-reviews-widget/170135426081?comments"
      ></iframe>
      <a
        href="https://yandex.ru/maps/org/barin/170135426081/"
        target="_blank"
        style={{
          boxSizing: "border-box",
          textDecoration: "none",
          color: "#b3b3b3",
          fontSize: "10px",
          fontFamily: "YS Text,sans-serif",
          padding: "0 20px",
          position: "absolute",
          bottom: "8px",
          width: "100%",
          textAlign: "center",
          left: "0",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "block",
          maxHeight: "14px",
          whiteSpace: "nowrap",
        }}
      >
        Баринъ на карте Удмуртской Республики — Яндекс Карты
      </a>
    </div>
  );

  return (
    <>
      {openReviews && (
        <div
          style={{
            position: "fixed",
            left: "0",
            top: "0",
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 1313,
          }}
          onClick={() => {
            setOpenReviews(false);
          }}
        >
          <div
            onClick={() => {
              setOpenReviews(false);
            }}
            style={{
              textAlign: "end",
              color: "white",
              fontSize: "24px",
              position: "absolute",
              right: "10px",
              top: "20px",
            }}
          >
            X
          </div>
          {badge}
        </div>
      )}
      <Container>
        <div className="gallery-review">
          <Slider {...settings}>
            {reviesData.map(({ text: textReview, author, id }) => (
              <div key={id}>
                <div className="gallery-review-img-tint"></div>
                <img
                  src={mainImage}
                  alt=""
                  className="gallery-review-img"
                  onClick={() => {
                    setOpenReviews(false);
                  }}
                />
                <h3 className="gallery-review-text">
                  {textReview} <br /> {IS_MOBILE && <br />}
                  {author}
                </h3>

                <div
                  onClick={() => {
                    setOpenReviews(true);
                  }}
                  className="gallery-review-button"
                >
                  Посмотреть больше
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </>
  );
};
