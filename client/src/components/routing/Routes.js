import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from '../pages/aboutTodos';
import Home from '../pages/Home';
import completedTodos from '../pages/completedTodos';
import deletedTodos from '../pages/deletedTodos';
import savedTodos from '../pages/savedTodos';

const Routes = (props) => {
  return (
    <>
      <Switch>
        <Route exact path='/about' component={About} />
        <Route exact path='/' component={Home} />
        <Route exact path='/completedTodos' component={completedTodos} />
        <Route exact path='/deletedTodos' component={deletedTodos} />
        <Route exact path='/savedTodos' component={savedTodos} />
      </Switch>
    </>
  );
};

export default Routes;
