import { CalculateForm } from "./CalculateForm";
import { CalculateTitle } from "./CalculateTitle";

export const CalculateBody = () => {
  return (
    <div className="calculate-body">
      <CalculateTitle />
      <CalculateForm />
    </div>
  );
};
