import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parnet constructor");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <UserClass name={"yashwin tapdiya"} location={"Indore"} />
      </div>
    );
  }
}

export default About;
