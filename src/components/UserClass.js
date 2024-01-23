import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "yashwin",
      },
    };
    //console.log("child constructor");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/yashwintapdiya");
    const json = await data.json();
    //console.log(json);
    this.setState({
      user: json,
    });
  }

  componentDidUpdate() {
    //console.log("ComponetDidUpdate called");
  }
  componentWillUnmount() {
    //console.log("Component will unmount called");
  }
  render() {
    const { count } = this.state;
    const { user } = this.state;
    //console.log("child render");
    return (
      <div className="pt-2">
        <h2 className="font-bold">{user.name}</h2>
        <h2>Location: {"Indore"}</h2>
        <h4>Contact: 8085720505</h4>
        <a href="https://github.com/YashwinTapdiya/food-ordering-app" target="_blank"><h4>GitHub Url: {user.html_url}</h4></a>
        <UserContext.Consumer>
          {(data)=> console.log(data)}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default UserClass;
