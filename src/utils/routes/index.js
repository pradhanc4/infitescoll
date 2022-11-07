import React from "react";
import Home from "../../page/Home";
import Gallery from "../../page/Gallery";
import Login from "../../page/Login";
import SignUp from "../../page/SignUp";
import Tensorflow from "../../page/tensorflow";

export default [
  {
    path: "/",
    exact: true,
    component: () => <Home />,
    protected: null,
  },
 
  {
    path: "/login",
    component: () => <Login />,
    protected: "guest",
  },
];
