import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "yashwin",
      },
    };
    console.log("child constructor");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/yashwintapdiya");
    const json = await data.json();
    console.log(json);
    this.setState({
      user: json,
    });
  }

  componentDidUpdate() {
    console.log("ComponetDidUpdate called");
  }
  componentWillUnmount() {
    console.log("Component will unmount called");
  }
  render() {
    const { count } = this.state;
    const { user } = this.state;
    console.log("child render");
    return (
      <div className="user-card">
        <h2>{user.name}</h2>
        <h2>Location: {user.location}</h2>
        <h4>Contact: 8085720505</h4>
      </div>
    );
  }
}

export default UserClass;
