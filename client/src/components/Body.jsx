import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home.jsx';
import Upload from './Upload.jsx';
import About from './About.jsx';

const Body = (props) => {
  return (
    <Switch>
      <Route
        exact path='/'
        component={ Home }
      />

      <Route
        path='/upload'
        component={ Upload }
      />

      <Route path='/about'
        component={ About }
      />
    </Switch>
  );
}

export default Body;