import Contacts from "@/components/Contacts";
import { Link } from "react-router-dom";

const ErrorPage = () => {

  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
            <h2>Page not found</h2>
          </div>
          <Link to="/">Home</Link>
        </div>
      </div>
      <Contacts />
    </>
  );
}

export default ErrorPage;