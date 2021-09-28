import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/Nav';
import NewBook from './components/NewBook';
import Categories from './components/Categories';
import store from './redux/cofigureStore';
import Store from './components/Store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Store />
          <NewBook />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

export default App;
