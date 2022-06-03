import React from 'react';
import PropTypes from 'prop-types';

function BookCard({
  category, title, author, chapter,
}) {
  return (
    <div className="card">
      <div className="meta">
        <h5>{category}</h5>
        <h2>{title}</h2>
        <h4>{author}</h4>
        <div className="edit">
          <p>Comments</p>
          <p>Remove</p>
          <p>Edit</p>
        </div>
      </div>
      <div className="data">
        <div className="percent">
          <div className="oval" />
          <div className="completed">
            <p className="perc">100%</p>
            <p>Completed</p>
          </div>
        </div>
        <div className="chapter">
          <p>CURRENT CHAPTER</p>
          <h4>{chapter}</h4>
          <button type="submit">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
}

BookCard.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  chapter: PropTypes.string,
};

export default BookCard;
