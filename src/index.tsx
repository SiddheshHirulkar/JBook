import 'bulmaswatch/superhero/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import { store } from './state';
import CellList from './components/cell-list';
import Navbar from './components/navbar/navbar';
import './app.css';

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <div className="display-flex">
        <div className="cell-container"><CellList /></div>
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
