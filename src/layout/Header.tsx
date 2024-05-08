import Logo from "@/components/Logo";
import SearchInput from "@/features/search/containers/SearchInput";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        marginBottom: "1rem",
        backgroundColor: "yellow"
      }}
    >
      <Logo />
      <SearchInput />
    </div>
  );
};

export default Header;
