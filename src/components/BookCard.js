import React from 'react'

function BookCard() {
  return (
    <div className='card'>
      <div className='meta'>
        <h5>Action</h5>
        <h2>Fight Club</h2>
        <h4>Chuck Palaniuk</h4>
        <div className='edit'>
          <p>Comments</p>
          <p>Remove</p>
          <p>Edit</p>
        </div>
      </div>
      <div className='data'>
        <div className='percent'>
          <div className='oval'></div>
          <div className='completed'>
            <p className='perc'>100%</p>
            <p>Completed</p>
          </div>
        </div>
        <div className='chapter'>
          <p>CURRENT CHAPTER</p>
          <h4>Chapter 17</h4>
          <button>UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  )
}

export default BookCard;