import React from "react";
import "./input.style.scss";

type InputProps = React.ComponentProps<"input">;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    return <input className="input" ref={ref} {...props} />;
  }
);

export default Input;
