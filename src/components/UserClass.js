import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    return (
      <div className="user-cart">
        <h1 style={{ textAlign: "Center" }}>
          This is coming from Class based Component{" "}
        </h1>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: {this.props.location}</h3>
        <h3>Contact: anshu.possible@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
