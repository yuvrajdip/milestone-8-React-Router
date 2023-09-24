import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      { error.status === 404 &&
        <>
          <h2>{error?.status} Page Not Found</h2>
          <p>{error?.message}</p>
        </>
      }
    </div>
  );
};

export default ErrorPage;