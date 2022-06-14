import { combineReducers } from "redux";
import reducerBooks from "./books/books.js";
import reducerStatus from "./categories/categories.js";

const rootReducer = combineReducers({
  books: reducerBooks,
  status: reducerStatus
})

const store = Redux.createStore(rootReducer);