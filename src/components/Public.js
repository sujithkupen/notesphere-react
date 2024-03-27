import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">NoteSphere</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          NoteSphere is the next-gen note taking app for all your business needs.
        </p>
        <address className="public__addr">
          NoteSphere
          <br />
          Bangalore
          <br />
          India
          <br />
          <a href="tel:+919999999999">+919999999999</a>
        </address>
        <br />
        <p>Owner: NoteSphere</p>
      </main>
      <footer>
        <Link to="/login">Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
