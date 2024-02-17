import "./location.css";
import { LocationAbout } from "./LocationAbout";
import { LocationMap } from "./LocationMap";

const Location = () => {
  return (
    <section className="location container-wide">
      <LocationMap />
      <LocationAbout />
    </section>
  );
};

export default Location;
