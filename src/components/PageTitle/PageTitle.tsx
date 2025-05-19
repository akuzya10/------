import React from "react";
import Container from "../Container/Container";
import "./pageTitle.scss";

interface Props {
  title: string;
  subtitle: string;
  id: string;
}

const PageTitle = ({ title, subtitle, id }: Props) => {
  return (
    <Container>
      <div className="page-title-wrapper" id={id}>
        <div className="page-title-title">({title})</div>
        <div className="page-title-subTitle">{subtitle}</div>
      </div>
    </Container>
  );
};

export default PageTitle;
