import React from "react";
import Header from "./header/Header";
import Container from "./Container";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Header />
      {props.children && <Container>{props.children}</Container>}
    </>
  );
};

export default Layout;
