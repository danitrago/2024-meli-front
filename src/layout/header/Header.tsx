import Logo from "@/components/Logo";
import "./header.style.scss";
import { SearchForm } from "@/containers/search-form";

const Header = () => {
  return (
    <header className="header">
      <section className="header__container container">
        <Logo />
        <SearchForm />
      </section>
    </header>
  );
};

export default Header;
