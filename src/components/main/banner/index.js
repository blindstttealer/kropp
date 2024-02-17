import "./banner.css";
import { BannerBody } from "./BannerBody";
import { BannerPagination } from "./BannerPagination";

const Banner = () => {
  return (
    <section className="banner">
      <h2 className="visually-hidden">Upcoming events</h2>
      <BannerBody />
      <BannerPagination />
    </section>
  );
};

export default Banner;
