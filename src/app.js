import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './components/utility/routes';

import 'bootstrap-css-only';
import './scss/style.scss';


class App extends React.Component {

  render() {
    return (
      <div>
        <Router>
          <main>
            <Routes />
          </main>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
