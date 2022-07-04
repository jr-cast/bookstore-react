import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const clearInputs = (event) => {
    console.log('clearedInputs done!');
    event.preventDefault();
    setTitle = ('');
    setAuthor = ('');
  };

  return (
    <div className="addBookCont">
      <form onSubmit={clearInputs}>
        <h2>ADD NEW BOOK</h2>
        <div className="inputs">
          <input
            id="book"
            type="text"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            placeholder="Book title"
          />
          <input
            id="author"
            type="text"
            onChange={(event) => setAuthor(event.target.value)}
            value={author}
            placeholder="Author"
          />

          <input
            id="category"
            type="text"
            placeholder="Category"
            onChange={(event) => setCategory(event.target.value)}
            value={category}
          />

          <button
            id="submitBtn"
            type="submit"
            onClick={() => (
              document.getElementById('book').value
                && document.getElementById('author').value
                && document.getElementById('category').value ? dispatch(
                  addBook(
                    nanoid(),
                    document.getElementById('book').value,
                    document.getElementById('author').value,
                    document.getElementById('category').value,
                  ),
                ) : alert('Please fill all required inputs!')
            )}
          >
            ADD BOOK
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
