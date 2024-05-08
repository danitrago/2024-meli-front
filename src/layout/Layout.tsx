import React from "react";
import Header from "./header/Header";
import Container from "./Container";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <div>
      <Header />
      {props.children && <Container>{props.children}</Container>}
    </div>
  );
};

export default Layout;
