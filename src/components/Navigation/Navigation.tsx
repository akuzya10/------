import React from "react";
import "./navigation.scss";

interface Props {
  onScroll: (string) => void;
}

const Navigation = ({ onScroll }: Props) => {
  return (
    <div className="navigation">
      <nav className="navigation-wrapper">
        <a
          onClick={() => {
            onScroll("services");
          }}
          className="navigation-link"
        >
          Услуги
        </a>
        <a
          onClick={() => {
            onScroll("gallery");
          }}
          className="navigation-link"
        >
          Галерея
        </a>
        <a
          onClick={() => {
            onScroll("stock");
          }}
          className="navigation-link"
        >
          Акции
        </a>
        <a
          onClick={() => {
            onScroll("reviews");
          }}
          className="navigation-link"
        >
          Отзывы
        </a>
        <a
          onClick={() => {
            onScroll("footer");
          }}
          className="navigation-link"
        >
          Контакты
        </a>
      </nav>
    </div>
  );
};

export default Navigation;
