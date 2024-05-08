import React from "react";

interface ContainerProps {
  children?: React.ReactNode;
}

const Container = (props: ContainerProps) => {
  return <main className="container">{props.children}</main>;
};

export default Container;
