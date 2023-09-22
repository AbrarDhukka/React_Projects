import React from "react";
import ReactDOM from "react-dom/client";
import {headData } from "./utilities/data";
import HeadingComp from "./components/HeadingComp";
import BodyComp from "./components/BodyComp";

const App = () => {
  return (
    <div>
      <HeadingComp data={headData}></HeadingComp>
      <BodyComp></BodyComp>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);
