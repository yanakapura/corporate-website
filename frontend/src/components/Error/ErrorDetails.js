import { useRouteError } from "react-router-dom";
import "./ErrorDetails.scss";

const ErrorDetails = () => {
  const error = useRouteError();

  return (
    <section className="error-page">
      <h1>
        {error.status} {error.statusText}
      </h1>
      <p>{error.data}</p>
    </section>
  );
};

export default ErrorDetails;
