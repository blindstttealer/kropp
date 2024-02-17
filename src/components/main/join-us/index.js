import "./join-us.css";

import { JoinUsForm } from "./JoinUsForm";
import { JoinUsVideo } from "./JoinUsVideo";

const JoinUs = () => {
  return (
    <section className="join-us">
      <JoinUsVideo />
      <JoinUsForm />
    </section>
  );
};

export default JoinUs;
