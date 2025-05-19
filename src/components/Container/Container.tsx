import React, { ReactNode } from "react";
import "./conateiner.scss";

interface Props {
  children: ReactNode;
  style?: React.CSSProperties;
}
const Container = ({ children, style }: Props) => {
  return (
    <div className="conateiner" style={{ ...style }}>
      {children}
    </div>
  );
};

export default Container;
