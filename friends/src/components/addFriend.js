import React, {useEffect, useState} from "react";
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import { axiosWithAuth } from './axiosAuth.js';


const AddFriend = (props) => {
  const [newFriend, setNewFriend] = useState('');

    const changeHandler = ev => {
      ev.persist();
      let value = ev.target.value;


      setNewFriend({
        ...newFriend,
        [ev.target.name]: value
      });
    };

    const handleSubmit = e => {
      e.preventDefault();
      let friend = {name:newFriend.name, age:newFriend.age, email:newFriend.email};
      console.log("submitted!");
      axiosWithAuth()
          .post("http://localhost:5000/api/friends", friend)
          .then(res => {
              console.log(res);
              // props.setLogin(true);
              props.history.push(`/friend-list`);
          })
          .catch(err => {
              console.log(err);
          });
    };

    return (
      <div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={changeHandler}
            placeholder="Name"
            value={newFriend.name}
          />
          <div className="baseline" />
          <br />

          <input
            type="number"
            name="age"
            onChange={changeHandler}
            placeholder="Age"
            value={newFriend.age}
          />
          <div className="baseline" />
          <br />

          <input
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Email"
            value={newFriend.email}
          />
          <div className="baseline" />
          <br />
          <br />


          <button className="md-button form-button">Add Friend</button>
        </form>
      </div>
    );
  };

  export default AddFriend;
