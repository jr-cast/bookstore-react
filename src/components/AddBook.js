import React from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  return (
    <div className="addBookCont">
      <h2>ADD NEW BOOK</h2>
      <div className="inputs">
        <input id="book" type="text" placeholder="Book title" />
        <input id="author" type="text" placeholder="Author" />
        <input id="category" type="text" placeholder="Category" />
        <button
          id="submitBtn"
          type="submit"
          onClick={() => dispatch(
            addBook(
              nanoid(),
              document.getElementById('book').value,
              document.getElementById('author').value,
              document.getElementById('category').value,
            ),
          )}
        >
          ADD BOOK
        </button>
      </div>
    </div>
  );
};

export default AddBook;
