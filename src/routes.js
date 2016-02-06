import React from 'react';
import { Route } from 'react-router';

/* containers */
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import { List } from 'containers/List';
import { Adv } from 'containers/Adv';
import { Todo } from 'containers/Todo/index';

export default (
  <Route path="/" component={App}>
    <Route path="home" component={Home} />
    <Route path="list" component={List} />
    <Route path="adv" component={Adv} />
    <Route path="todo" component={Todo} />
    <Route status={404} path="*" component={Home} />
  </Route>
);
