import { TrainingTypesItem } from "./TrainingTypesItem";
import type_1 from "../../../images/training-types/1.svg";
import type_2 from "../../../images/training-types/2.svg";
import type_3 from "../../../images/training-types/3.svg";
import type_4 from "../../../images/training-types/4.svg";
import type_5 from "../../../images/training-types/5.svg";
import type_6 from "../../../images/training-types/6.svg";

const trainingTypes = [
  {
    title: "Maxpump",
    type: type_1,
  },
  {
    title: "aron gym",
    type: type_2,
  },
  {
    title: "fit & tone",
    type: type_3,
  },
  {
    title: "forza",
    type: type_4,
  },
  {
    title: "balance fitness",
    type: type_5,
  },
  {
    title: "body sculpt",
    type: type_6,
  },
];

export const TrainingTypesList = () => {
  return (
    <ul className="training-types-list">
      {trainingTypes.map((item) => (
        <TrainingTypesItem {...item} />
      ))}
    </ul>
  );
};
