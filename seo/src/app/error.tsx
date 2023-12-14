import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.data || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }

  return (
    <div id='error-page' data-testid='error-page'>
      <h1>Oops!</h1>
      <p>예상하지 못한 에러가 발생했어요.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
      <Link to='/todo'>todo로 돌아가기</Link>
    </div>
  );
}
