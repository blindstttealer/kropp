export const HeaderActions = () => {
  return (
    <div className="header-actions">
      <button className="header-book-button button">Book now</button>
      <button className="header-burger-button" title="Open menu">
        <span className="visually-hidden"> Open menu</span>
        <span className="header-burger-button-line"></span>
        <span className="header-burger-button-line"></span>
        <span className="header-burger-button-line"></span>
      </button>
    </div>
  );
};
