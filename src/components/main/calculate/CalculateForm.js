export const CalculateForm = () => {
  return (
    <form className="calculate-form">
      <div className="calculate-form-body">
        <label htmlFor="height" className="visually-hidden">
          Height
        </label>
        <input
          type="number"
          id="height"
          placeholder="Height / cm"
          className="calculate-input input"
        />
        <label htmlFor="weight" className="visually-hidden">
          Weight
        </label>
        <input
          type="number"
          id="weight"
          placeholder="Weight / kg"
          className="calculate-input input"
        />
        <label htmlFor="age" className="visually-hidden">
          Age
        </label>
        <input
          type="number"
          id="age"
          placeholder="Age"
          className="calculate-input input"
        />

        <label className="visually-hidden" htmlFor="gender"></label>
        <select required id="gender" className="calculate-input input">
          <option disabled selected>
            Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label className="visually-hidden" htmlFor="activity-factor">
          Activity-factor
        </label>
        <select
          required
          id="activity-factor"
          className="calculate-input input wide"
        >
          <option value="" disabled selected>
            Select an activity factor:
          </option>
          <option value="factor-1">Factor 1</option>
          <option value="factor-2">Factor 2</option>
        </select>
      </div>
      <button type="submit" className="calculate-button button transparent">
        Calculate
      </button>
    </form>
  );
};
