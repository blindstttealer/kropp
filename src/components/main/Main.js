import Banner from "./banner";
import JoinUs from "./join-us";
import Motivated from "./motivated";
import TrainingTypes from "./training-types";
import Location from "./location";
import Family from "./family";
import Calculate from "./calculate";
const Main = () => {
  return (
    <div className="content">
      <Banner />
      <Motivated />
      <TrainingTypes />
      <JoinUs />
      <Location />
      <Family />
      <Calculate />
    </div>
  );
};

export default Main;
