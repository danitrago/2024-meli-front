import React from "react";

type InputProps = React.ComponentProps<"input">;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    return (
      <input
        style={{ backgroundColor: "lightgray", color: "black" }}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Input;
