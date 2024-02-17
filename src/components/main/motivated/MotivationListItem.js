export const MotivationListItem = ({ title, desc, img }) => {
  return (
    <li className="motivation-item">
      <div className="motivation-card container">
        <div className="motivation-card-body">
          <h3
            title="Strong"
            className="motivation-card-title backdrop-title title-medium"
          >
            {title}
          </h3>
          <div className="motivation-card-description">
            <p>{desc}</p>
          </div>
          <a href="/" className="motivation-card-button button transparent">
            View more
          </a>
        </div>
        <img
          width="518"
          height="760"
          src={img}
          alt="man doing pull-ups on the horizontal bar"
          className="motivation-card-image"
        />
      </div>
    </li>
  );
};
