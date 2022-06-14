import { useSelector } from 'react-redux';
import Nav from './components/Nav';
import BookShelf from './components/BookShelf';
import AddBook from './components/AddBook';

function App() {
  const list = useSelector((state) => state.books);
  return (
    <div className="App">
      <Nav />
      <BookShelf />
      <h1>
        {list[0].title}
        {' by '}
        {list[0].author}
      </h1>
      <h1>
        {list[1].title}
        {' by '}
        {list[1].author}
      </h1>
      <AddBook />
    </div>
  );
}

export default App;
