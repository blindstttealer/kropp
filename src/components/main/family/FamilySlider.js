import sliderImage_1 from "../../../images/family/1.jpg";
import sliderImage_2 from "../../../images/family/2.jpg";
import sliderImage_3 from "../../../images/family/3.jpg";
import sliderImage_4 from "../../../images/family/4.jpg";
import { FamilySliderItem } from "./FamilySliderItem";

const familySliderData = [
  {
    img: sliderImage_1,
    width: 414,
  },
  {
    img: sliderImage_2,
    width: 744,
  },
  {
    img: sliderImage_3,
    width: 396,
  },
  {
    img: sliderImage_4,
    width: 396,
  },
  {
    img: sliderImage_1,
    width: 414,
  },
];

export const FamilySlider = () => {
  return (
    <div className="family-body container-wide">
      {familySliderData.map((item) => (
        <FamilySliderItem {...item} />
      ))}
    </div>
  );
};
