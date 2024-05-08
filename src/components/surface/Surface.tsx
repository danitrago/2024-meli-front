import React from "react";
import "./surface.style.scss";

interface SurfaceProps {
  children?: React.ReactNode;
}
const Surface = ({ children }: SurfaceProps) => {
  return <div className="surface">{children}</div>;
};

export default Surface;
