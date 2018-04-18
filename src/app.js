import React    from 'react';
import ReactDOM from 'react-dom';

import PostsIndex from './components/posts/PostsIndex';

class App extends React.Component {

  render() {
    return (
      <div>
        <PostsIndex />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
