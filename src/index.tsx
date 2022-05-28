import 'bulmaswatch/superhero/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { store } from './state';
import Navbar from './components/navbar/navbar';
import ShowCellList from './components/show-cellList';
import './app.css';

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={ShowCellList} />
        </Switch>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
