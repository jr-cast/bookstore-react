// Defining action types
const ADDBOOK = 'bookstore/books/ADDBOOK';
const REMOVEBOOK = 'bookstore/books/REMOVEBOOK';
const FETCH_API = 'bookstore/books/FETCH_API';

// Settting initial state
const initialState = [];

const appID = 'qaN82McBVLs48kXCiyvn';
const baseUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appID}/books/`;

export function fetchBooksSuccess(data) {
  return {
    type: FETCH_API,
    payload: data,
  };
}

export const fetchBooks = () => function (dispatch) {
  fetch(baseUrl)
    .then((response) => response.json())
    .then((bookData) => {
      const booksArray = Object.keys(bookData).map((key) => {
        const newBook = bookData[key][0];
        newBook.item_id = key;
        return newBook;
      });
      dispatch(fetchBooksSuccess(booksArray));
    });
};

export const addBook = (id, title, author, category) => async (dispatch) => {
  const post = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      title,
      author,
      category,
    }),
  };
  fetch(baseUrl, post)
    .then((response) => response.status);
  dispatch({
    type: ADDBOOK,
    payload: {
      item_id: id, title, author, category,
    },
  });
};

export const removeBook = (bookId) => async (dispatch) => {
  const itemUrl = baseUrl + bookId;
  const post = {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: bookId,
    }),
  };
  fetch(itemUrl, post)
    .then((res) => res.text())
    .then((data) => data);
  dispatch({
    type: REMOVEBOOK,
    payload: bookId,
  });
};

export default function reducerBooks(state = initialState, action) {
  switch (action.type) {
    case ADDBOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVEBOOK:
      return [...state.filter((book) => book.item_id !== action.payload)];
    case FETCH_API:
      return action.payload;
    default:
      return state;
  }
}
