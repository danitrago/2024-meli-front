import Logo from "@/components/Logo";
import SearchInput from "@/features/search/containers/SearchInput";
import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Logo />
        <SearchInput />
      </div>
    </div>
  );
};

export default Header;
