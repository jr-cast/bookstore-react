import { useSelector } from 'react-redux';
import BookCard from './BookCard';

function BookShelf() {
  const books = useSelector((state) => state.books);

  const bookProps = []

  books.forEach((item) => bookProps.push(<BookCard category={item.category} author={item.author} title={item.title} id={item.item_id} />));

  return (
    <div className="bookShelf">
      {bookProps}
    </div>
  );
}

export default BookShelf;
