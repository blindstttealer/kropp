import "./training-types.css";
import { TrainingTypesList } from "./TrainingTypesList";

const TrainingTypes = () => {
  return (
    <section className="training-types container-wide">
      <h2 className="visually-hidden"></h2>
      <TrainingTypesList />
    </section>
  );
};

export default TrainingTypes;
