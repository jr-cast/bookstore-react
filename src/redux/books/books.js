//Defining action types
const ADDBOOK = 'bookstore/books/ADDBOOK';
const REMOVEBOOK = 'bookstore/books/ADDBOOK';

//Settting initial state 
const initialState = [];

export function addBook(addedTitle) {
  return {
    type: ADDBOOK,
    payload: addedTitle
  };
}

export function removeBook(rmvTitle) {
  return {
    type: REMOVEBOOK,
    payload: rmvTitle
  };
}

export default function reducerBooks(state = initialState, action) {
  switch (action.type) {
    case ADDBOOK:
      return [
        ...state,
        {
          title: action.title
        }
      ]
    case REMOVEBOOK:
      return state.filter(item => item !== action.rmvTitle);
    default:
      return state;
  }
}
