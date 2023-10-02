import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent CompDidMount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <UserClass name="first" location="Mumbai" email="abc"></UserClass>
        <UserClass name="second" location="Pune" email="def"></UserClass>
        <UserClass name="third" location="Hyd" email="ghi"></UserClass>
      </div>
    );
  }
}

export default About;
