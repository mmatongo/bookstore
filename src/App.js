import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/Nav';
import Book from './components/Books';
import NewBook from './components/NewBook';
import Categories from './components/Categories';

const books = [
  {
    id: 1,
    category: 'Action',
    name: 'The Hunger Games',
    author: 'Suzanne Collins',
    percentage: '64%',
    chapter: 'Chapter 17',
  },
  {
    id: 2,
    category: 'Science Fiction',
    name: 'Dune',
    author: 'Frank Herbert',
    percentage: '8%',
    chapter: 'Chapter 3: "A Lesson Learned"',
  },
  {
    id: 3,
    category: 'Economy',
    name: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    percentage: '0%',
    chapter: 'Introduction',
  },
];

const App = () => {
  const bookList = books.map((books) => <Book key={books.id} info={books} />);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          { bookList }
          <NewBook />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
