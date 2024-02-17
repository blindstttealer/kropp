export const TrainingTypesItem = ({ title, type }) => {
  return (
    <li className="training-types-item">
      <img
        src={type}
        alt=""
        className="training-types-image"
        width={150}
        height={140}
      />
      <h3 className="training-types-item-title">{title}</h3>
    </li>
  );
};
