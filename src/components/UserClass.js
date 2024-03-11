import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        count: 0,
        count2:1,
    }

  }

  render() {
    const {name, location} = this.props;

    // Destructuring fo state variable
    const {count, count2} = this.state;

    return (
      <div className="user-cart">
        <h1 style={{ textAlign: "Center" }}>
          This is coming from Class based Component{" "}
        </h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: anshu.possible@gmail.com</h3>
        <h4>Count = {count} </h4>
        <h4>Count2 = {count2} </h4>
      </div>
    );
  }
}

export default UserClass;
