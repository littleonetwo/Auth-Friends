import React, {useEffect, useState} from "react";
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import { axiosWithAuth } from './axiosAuth.js';


const Login = (props) => {
  const [user, setUser] = useState('');

    const changeHandler = ev => {
      ev.persist();
      let value = ev.target.value;


      setUser({
        ...user,
        [ev.target.name]: value
      });
    };

    const handleSubmit = e => {
      e.preventDefault();
      let auth = {username:user.username, password:user.password};
      console.log("submitted!");
      axiosWithAuth()
          .post("http://localhost:5000/api/login", auth)
          .then(res => {
              console.log(res);
              localStorage.setItem("token", res.data.payload)
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
            name="username"
            onChange={changeHandler}
            placeholder="Username"
            value={user.username}
          />
          <div className="baseline" />
          <br />


          <input
            type="text"
            name="password"
            onChange={changeHandler}
            placeholder="Password"
            value={user.password}
          />
          <div className="baseline" />
          <br />
          <br />


          <button className="md-button form-button">Login</button>
        </form>
      </div>
    );
  };

  export default Login;
