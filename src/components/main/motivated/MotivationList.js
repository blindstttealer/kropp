import { MotivationListItem } from "./MotivationListItem";
import img1 from "../../../images/motivation/1.jpg";
import img2 from "../../../images/motivation/2.jpg";
const motivationCards = [
  {
    title: `Be you, just stronger!
            Power is in you`,
    desc: "Unum solum justo ex ius. Pro cu probo laboramus eius insolens euripidis te eos, ut agam tota.",
    img: img1,
  },
  {
    title: `Today is the best 
            day to start!`,
    desc: "Sed abhorreant constituam consectetuer eu. At mei clita deserunt, his movet molestie nemore.",
    img: img2,
  },
];

export const MotivationList = () => {
  return (
    <ul className="motivation-list">
      {motivationCards.map((item) => (
        <MotivationListItem {...item} />
      ))}
    </ul>
  );
};
