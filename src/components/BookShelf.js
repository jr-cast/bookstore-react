import React from 'react';
import BookCard from './BookCard';

function BookShelf() {
  return (
    <div className="bookShelf">
      <BookCard category="Science fiction" title="Ghost in the shell" author="Masamune Shirow" chapter="Chapter 19" />
    </div>
  );
}

export default BookShelf;
