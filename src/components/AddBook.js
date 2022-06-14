import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const title = document.getElementById('book');
const author = document.getElementById('author');
console.log(title, author);

function AddBook() {
  const dispatch = useDispatch();

  return (
    <div className="addBookCont">
      <h2>ADD NEW BOOK</h2>
      <div className="inputs">
        <input id="book" type="text" placeholder="Book title" />
        <input id="author" type="text" placeholder="Author" />
        <button type="submit" onClick={() => dispatch(addBook(document.getElementById('book').value, document.getElementById('author').value))}>ADD BOOK</button>
      </div>
    </div>
  );
}

export default AddBook;
