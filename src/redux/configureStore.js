import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducerBooks from './books/books';
import reducerStatus from './categories/categories';

const rootReducer = combineReducers({
  books: reducerBooks,
  status: reducerStatus,
});

const store = configureStore({ reducer: rootReducer });

export default store;
