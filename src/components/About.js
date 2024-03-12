import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent constructor");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namste Food App</h2>
        <UserClass name={"First"} location="Pune" />
        <UserClass name={"Second"} location="Patna" />
      </div>
    );
  }
}

export default About;
