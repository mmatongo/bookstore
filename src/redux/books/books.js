import { addBook as newBook, removeBook as dropBook } from '../../api/ApiCall';
import { PULL_BOOKS, PULL_SUCCESS, PULL_FAIL } from '../../components/Slice';

// Actions

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

// Initial state

const initialState = {
  books: [],
  pending: false,
  error: null,
};

// Action Creators

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      newBook(action.payload);
      return state;
    case REMOVE_BOOK:
    {
      const entries = Object.fromEntries(
        Object.entries(state.books).filter(([id]) => id !== action.payload),
      );
      dropBook(action.payload);
      return { ...state, pending: false, books: entries };
    }
    case PULL_BOOKS:
      return { ...state, pending: true };
    case PULL_SUCCESS:
      return { ...state, pending: false, books: action.books };
    case PULL_FAIL:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;
