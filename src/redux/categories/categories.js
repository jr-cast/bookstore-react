// Defining action type for checking the status
const STATUS = 'books/categories/STATUS';

// Defining initial state of categories
const initialState = [];

export function status() {
  return {
    type: STATUS,
  };
}

export default function reducerStatus(state = initialState, action) {
  switch (action.type) {
    case STATUS:
      return 'Under Construction';
    default:
      return state;
  }
}
