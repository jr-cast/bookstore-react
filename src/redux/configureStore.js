import { combineReducers, configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducerBooks, { fetchBooksSuccess } from './books/books';
import reducerStatus from './categories/categories';

const appID = 'qaN82McBVLs48kXCiyvn';
const baseUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appID}/books`;

const rootReducer = combineReducers({
  books: reducerBooks,
  status: reducerStatus,
});

const fetchBooks = () => function (dispatch) {
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

const store = configureStore(
  { reducer: rootReducer },
  applyMiddleware(thunk),
);

store.subscribe(() => { store.getState(); });
store.dispatch(fetchBooks());

export default store;
