import React from "react";

interface ContainerProps {
  children?: React.ReactNode;
}

const Container = (props: ContainerProps) => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        border: "1px solid black",
        margin: "0 auto"
      }}
    >
      {props.children}
    </div>
  );
};

export default Container;
