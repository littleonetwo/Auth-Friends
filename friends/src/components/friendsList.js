import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Route, NavLink, withRouter, Link} from "react-router-dom";
import { axiosWithAuth } from './axiosAuth.js';

const FriendsList = props =>{

  const [friends, setFriends] = useState([{
    name:"",
    age: "",
    email: ""
  }]);

  useEffect(() =>{
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res =>{
        setFriends(res.data);
        console.log(res.data);
      })
      .catch(err => console.log("Error: ", err))
  }, []);

  return(
    <div>
      {friends.map(friend =>{
        return (
          <div>
            <br />
            <div>
              <h3>Name: {friend.name}</h3>
              <h3>Age: {friend.age}</h3>
              <h4>Email: {friend.email}</h4>
            </div>
            <br />
          </div>
        )
      })}
      <Link to='/add-friend'> Add New Friend </Link>
    </div>
  )




}

export default FriendsList;
