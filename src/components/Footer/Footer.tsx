import React from "react";
import { Map, Placemark, YMaps } from "react-yandex-maps";
import Container from "../Container/Container";
import { IS_MOBILE } from "../../constants/mobileConstant";
import "./footer.scss";

export const Footer = () => {
  return (
    <Container>
      <div className="footer">
        <div className="footer-map">
          <YMaps>
            <Map
              width="100%"
              height={IS_MOBILE ? 300 : 600}
              defaultState={{
                center: [56.776215, 53.16275],
                zoom: 16,
              }}
            >
              <Placemark defaultGeometry={[56.776215, 53.16275]} />
            </Map>
          </YMaps>
        </div>

        <div className="footer-content">
          <p className="footer-contact">Контакты</p>
          <p className="footer-adress">Адрес:</p>
          <p className="footer-adress-city">г.Ижевск деревня пирогово</p>
          <p className="footer-adress-street">ул. Азина 12</p>
          <a href="tel:8(3412)576175" className="footer-tel">
            57-61-75
          </a>
          <br />
          <a href="tel:+79821176175" className="footer-tel">
            +7 (982) 117 61-75
          </a>
        </div>
      </div>
    </Container>
  );
};
