import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const titleRef = useRef(null);
  const authorRef = useRef(null);
  const catRef = useRef(null);

  const clearInputs = (event) => {
    console.log('clearedInputs done!');
    event.preventDefault();
    event.target.reset();
  };

  return (
    <div className="addBookCont">
      <form onSubmit={clearInputs}>
        <h2>ADD NEW BOOK</h2>
        <div className="inputs">
          <input
            ref={titleRef}
            id="book"
            type="text"
            placeholder="Book title"
          />
          <input
            ref={authorRef}
            id="author"
            type="text"
            placeholder="Author"
          />

          <input
            ref={catRef}
            id="category"
            type="text"
            placeholder="Category"
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
