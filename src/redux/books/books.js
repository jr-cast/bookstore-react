// Defining action types
const ADDBOOK = 'bookstore/books/ADDBOOK';
const REMOVEBOOK = 'bookstore/books/ADDBOOK';

// Settting initial state
const initialState = [
  {
    title: 'Ghost in the Shell',
    author: 'Masamune',
  },
  {
    title: 'Fight Club',
    author: 'Palaniuk',
  },
];

export function addBook(addedTitle, addedAuthor) {
  return {
    type: ADDBOOK,
    payload: {
      title: addedTitle,
      author: addedAuthor,
    },
  };
}

export function removeBook(rmvTitle) {
  return {
    type: REMOVEBOOK,
    payload: rmvTitle,
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
      return state.filter((item) => item !== action.rmvTitle);
    default:
      return state;
  }
}
