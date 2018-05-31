import React from 'react';
import { Switch, Route } from 'react-router-dom';

import UsersList from "../../conteiners/usersList";
import AboutUser from "../../conteiners/about-user";

const Main = () => {

  return (
    <main className="main">
      <Switch>
        <Route exact path="/" component={UsersList} />
        <Route path="/users/:id" component={AboutUser} />
      </Switch>
    </main>
  )
};

export default Main;

