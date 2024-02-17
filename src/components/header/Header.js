import { HeaderActions } from "./header-actions";
import { HeaderLogo } from "./header-logo";
import { HeaderMenu } from "./header-menu";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <HeaderLogo />
      <HeaderMenu />
      <HeaderActions />
    </div>
  );
};

export default Header;
