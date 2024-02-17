export const JoinUsForm = () => {
  return (
    <div className="join-us-body container">
      <h2 className="join-us-title">Join us</h2>
      <form className="join-us-form">
        <div className="join-us-form-header">
          <h3
            title="Go!"
            className="join-us-form-title backdrop-title centered title-big"
          >
            Start here
          </h3>
          <div className="join-us-form-subtitle section-description ">
            fill the form below to start your journey
          </div>
        </div>
        <div className="join-us-form-body">
          <label className="visually-hidden" htmlFor="username"></label>
          <input
            id="username"
            type="text"
            className="join-us-form-input input"
            placeholder="Name"
          />
          <label className="visually-hidden" htmlFor="email"></label>
          <input
            id="email"
            type="email"
            className="join-us-form-input input"
            placeholder="Email"
          />
          <button className="join-us-form-button button transparent">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};
