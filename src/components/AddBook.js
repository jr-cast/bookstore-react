import React from 'react';

function AddBook() {
  return (
    <div className="addBookCont">
      <h2>ADD NEW BOOK</h2>
      <div className='inputs'>
        <input id='book' type="text" placeholder="Book title" />
        <input id='author' type="text" placeholder="Author" />
        <button type='submit'>ADD BOOK</button>
      </div>
    </div>
  );
}

export default AddBook;
