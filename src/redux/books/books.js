// Defining action types
const ADDBOOK = 'bookstore/books/ADDBOOK';
const REMOVEBOOK = 'bookstore/books/REMOVEBOOK';
const FETCH_API = 'bookstore/books/FETCH_API';

// Settting initial state
const initialState = [];

const appID = 'qaN82McBVLs48kXCiyvn';
const baseUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appID}/books/`;

export const addBook = (id, title, author, category) => () => {
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
    .then((response) => console.log(response.status));
  return {
    type: ADDBOOK,
    payload: {
      id,
      title,
      author,
      category,
    },
  };
};

export const removeBook = (bookId) => () => {
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
    .then((data) => console.log(data));
  return {
    type: REMOVEBOOK,
    payload: bookId,
  };
};

export function fetchBooksSuccess(data) {
  return {
    type: FETCH_API,
    payload: data,
  };
}

export default function reducerBooks(state = initialState, action) {
  switch (action.type) {
    case ADDBOOK:
      return [
        ...state,
        {
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
    case REMOVEBOOK:
      return [...state].filter((book) => book.id !== action.bookId);
    case FETCH_API:
      return action.payload;
    default:
      return state;
  }
}
