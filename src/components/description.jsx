import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export default function Description() {
  return (
    <div className="wrapper">
      <header>
        <div>
          <Link to="/">
            <ArrowLeft />
          </Link>
          <figure>
            <img className="pfp" src="./assets/kanye-east.gif" alt="Profile" />
          </figure>
        </div>
        <figure>
            <img src="burger" alt="burger" />
        </figure>
      </header>
      <main>
        <h1>burger</h1>
      </main>
    </div>
  );
}
