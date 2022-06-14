import { useSelector } from 'react-redux';
import Nav from './components/Nav';
import BookShelf from './components/BookShelf';
import AddBook from './components/AddBook';

function App() {
  const list = useSelector((state) => state.books);
  console.log(list);
  return (
    <div className="App">
      <Nav />
      <BookShelf />
      <AddBook />
    </div>
  );
}

export default App;
