import React from "react";
import "./buyButton.style.scss";

type BuyButtonProps = React.ComponentProps<"button">;

const BuyButton = React.forwardRef<HTMLButtonElement, BuyButtonProps>(
  (props: BuyButtonProps, ref) => {
    return <button className="buyButton" ref={ref} {...props} />;
  }
);

export default BuyButton;
