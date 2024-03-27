import { Link } from "react-router-dom";

const Welcome = () => {
  const date = new Date();
  const today = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);
  const content = (
    <section className="welcome">
      <p>Today is {today}</p>

      <h1>We are meant to be amazing!</h1>
      <p>
        <Link to="/dash/notes">View Notes</Link>
      </p>
      <p>
        <Link to="/dash/users">View User settings</Link>
      </p>
    </section>
  );
  return content;
};

export default Welcome;