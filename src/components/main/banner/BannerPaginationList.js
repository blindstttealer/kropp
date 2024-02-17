import { BannerPaginationItem } from "./BannerPaginationItem";

export const BannerPaginationList = () => {
  return (
    <ul className="banner-pagination-list">
      {[...new Array(3)].map((_, index) => (
        <BannerPaginationItem key={index} />
      ))}
    </ul>
  );
};
