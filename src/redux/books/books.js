//Defining action types
const ADDBOOK = 'bookstore/books/ADDBOOK';
const REMOVEBOOK = 'bookstore/books/ADDBOOK';

//Settting initial state 
const initialState = [];

export function addBook(addedTitle) {
  return {
    type: ADDBOOK,
    payload: title
  };
}

export function removeBook(rmvTitle) {
  return {
    type: REMOVEBOOK,
    payload: rmvTitle
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADDBOOK:
      return {
        ...state,
        payload: action.title
      }
    case REMOVEBOOK:
      return state.filter(item => item !== action.rmvTitle);
    default:
      return state;
  }
}
