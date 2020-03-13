import React from "react";
import { render } from "react-dom";
import Title from "./Title.jsx";

render(
  <>
    <h1>wei-external-component</h1>
    <Title>Hello world!</Title>
  </>,
  document.getElementById("react")
);
