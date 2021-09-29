const PULL_BOOKS = 'books/booksslice/PULL_BOOKS';
const PULL_SUCCESS = 'books/booksslice/PULL_SUCCESS';
const PULL_FAIL = 'books/booksslice/PULL_FAIL ';

const apiURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const apiEnd = 'L8vgoTZoDzjU5hFmzaXd';

const endPoint = `${apiURL}${apiEnd}/books/`;

const pullBooks = () => async (dispatch) => {
  dispatch({ type: PULL_BOOKS });
  const result = await fetch(endPoint);
  const books = await result.json();
  return dispatch({ type: PULL_SUCCESS, books });
};

export {
  pullBooks as default,
  PULL_BOOKS,
  PULL_SUCCESS,
  PULL_FAIL,
};
