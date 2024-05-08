import React from "react";
import Header from "./header/Header";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Layout;
