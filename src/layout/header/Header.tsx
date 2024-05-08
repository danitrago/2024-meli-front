import Logo from "@/components/Logo";
import "./header.styles.scss";
import { SearchForm } from "@/features/search/containers/search-form";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container container">
        <Logo />
        <SearchForm />
      </div>
    </div>
  );
};

export default Header;
