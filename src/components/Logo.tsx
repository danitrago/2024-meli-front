import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link style={{ fontSize: "2rem", marginRight: "1rem" }} to="/">
      <img src={import.meta.env.VITE_LOGO_URL} alt="Logo MeLi" />
    </Link>
  );
};

export default Logo;
