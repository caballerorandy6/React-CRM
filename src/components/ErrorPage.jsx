import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error.message);

  return (
    <div className="space-y-8">
      <h1 className="text-center text-6xl font-extrabold mt-20 text-green-800">
        React - CRM
      </h1>
      <p className="text-center">An error has occurred</p>
      <p className="text-center">{error.statusText || error.message}</p>
    </div>
  );
}
