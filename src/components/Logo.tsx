import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" title="Inicio">
      <img src={import.meta.env.VITE_LOGO_URL} height={40} alt="Logo MeLi" />
    </Link>
  );
};

export default Logo;
