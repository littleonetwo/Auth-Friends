import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Route, NavLink, withRouter, Link} from "react-router-dom";
import axios from "axios";

import Login from './components/login.js';
import FriendsList from './components/friendsList.js';
import AddFriend from './components/addFriend.js';

import PrivateRoute from './components/privateRoute.js';


const App = props => {
  // const [login, setLogin] = useState(false);
  // console.log("login stat")

  return (
    <div className="App">
      <nav>
        <h1 className="app-header">Friends</h1>

      </nav>
      <Link to='/friends-list'>Friends List</Link>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/friends-list" component={FriendsList} />
      <PrivateRoute path='/add-friend' component={AddFriend} />

    </div>
  );
}

export default App;
