export const FamilySliderItem = ({ width, img }) => {
  return (
    <img
      width={width}
      height={479}
      src={img}
      alt="Training people"
      loading="lazy"
      className="family-image"
    />
  );
};
