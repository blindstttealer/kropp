import HeaderMenuLink from "../header-menu-link";

const HeaderMenuList = () => {
  const navLinks = ["Home", "Pages", "Portfolio", "Blog", "Shop"];
  return (
    <div className="header-menu-list">
      {navLinks.map((item) => (
        <HeaderMenuLink key={item} item={item} />
      ))}
    </div>
  );
};

export default HeaderMenuList;
