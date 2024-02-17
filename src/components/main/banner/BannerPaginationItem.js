import React from "react";
export const BannerPaginationItem = () => {
  const [toggle, setToggle] = React.useState(false);

  let defaultClass = "banner-pagination-button";
  let active = "is-current";

  let classes = toggle ? `${defaultClass} ${active}` : defaultClass;

  const onClickSelect = () => {
    setToggle(!toggle);
  };

  return (
    <li className="banner-pagination-item">
      <button
        onClick={onClickSelect}
        type="button"
        className={classes}
      ></button>
    </li>
  );
};
