import "./calculate.css";
import { CalculateBody } from "./CalculateBody";
import { CalculateTable } from "./CalculateTable";

const Calculate = () => {
  return (
    <section className="calculate">
      <div className="calculate-inner container">
        <CalculateBody />
        <CalculateTable />
      </div>
    </section>
  );
};

export default Calculate;
