import React from "react";
import mainImage from "../../assets/IMG_1260.jpg";
import "./main.scss";
import Header from "../Header/Header";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import { IS_MOBILE } from "../../constants/mobileConstant";
import { List } from "../List/List";

const Main = () => {
  return (
    <>
      {IS_MOBILE ? (
        <Header />
      ) : (
        <Container>
          <Header />
        </Container>
      )}
      <div className="main">
        <img src={mainImage} alt="" className="main-image" />

        <Container>
          <div className="main-content_wrapper">
            <div className="main-content_blok">
              <h1 className="main-content_blok-title">
                ПРАВИЛЬНАЯ {IS_MOBILE && <br />} БАНЯ
              </h1>
              {!IS_MOBILE && (
                <div className="main-content_blok-subtitle_wrapper">
                  <h1 className="main-content_blok-subtitle">БАРИНЪ</h1>

                  <Logo />
                </div>
              )}
              {IS_MOBILE && (
                <>
                  <div className="main-content_blok-list">
                    <List width={178} height={130} />
                  </div>
                  <div className="main-content_blok-list">
                    <List width={158} height={110} />
                  </div>
                  <div className="main-content_blok-list-too">
                    <List width={158} height={110} />
                  </div>

                  <div className="main-content_blok-list-three">
                    <List width={158} height={110} />
                  </div>
                  <div className="main-content_blok-list-foo">
                    <List width={158} height={110} />
                  </div>
                  <div className="main-content_blok-phone-wrapper">
                    <a href="tel:+516175" className="main-content_blok-phone">
                      Позвонить
                    </a>
                  </div>
                </>
              )}
            </div>

            <div className="main-content_blok-small">
              <h2 className="main-content_blok-small-title">
                Правильные бани - это те в которых предоставлены все условия для
                отличного отдыха и время проведённого без забот.
              </h2>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Main;
