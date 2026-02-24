import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError(); //hook koji služi da uhvati i prikaže greške koje se dese u ruti.
  console.log(error);
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
};
export default ErrorPage;
