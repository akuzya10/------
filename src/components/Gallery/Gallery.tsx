import { galleryData } from "../../data/galleryData";
import "./gallery.scss";
import Container from "../Container/Container";
import ArrowRight from "../Arrow/ArrowRight";
import ArrowLeft from "../Arrow/ArrowLeft";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import { IS_MOBILE } from "../../constants/mobileConstant";

const Gallery = () => {
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

  return (
    <Container>
      <div className="gallery">
        <Slider {...settings}>
          {galleryData.map((itemImg) => (
            <div>
              <img src={itemImg} alt="" className="gallery-img" />
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default Gallery;
