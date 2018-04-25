import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PostsIndex from '../posts/PostsIndex';
import PostsShow from '../posts/PostsShow';

const Routes = () => {
  return (
    <Switch>
      <Route path="/posts/:id" component={PostsShow} />
      <Route exact path="/" component={PostsIndex} />
    </Switch>
  );
};

export default Routes;
