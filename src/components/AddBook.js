import React from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addBook } from '../redux/books/books';

function AddBook() {
  const dispatch = useDispatch();
  const uuid = nanoid();
  return (
    <div className="addBookCont">
      <h2>ADD NEW BOOK</h2>
      <div className="inputs">
        <input id="book" type="text" placeholder="Book title" />
        <input id="author" type="text" placeholder="Author" />
        <input id="category" type="text" placeholder="Category" />
        <button
          type="submit"
          onClick={() => dispatch(
            addBook(
              uuid,
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
}

export default AddBook;
