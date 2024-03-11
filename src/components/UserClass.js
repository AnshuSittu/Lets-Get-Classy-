import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

  //  console.log(props);
  }

  render() {
    //destructuring in class components
    const {name, location} = this.props;

    return (
      <div className="user-cart">
        <h1 style={{ textAlign: "Center" }}>
          This is coming from Class based Component{" "}
        </h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: anshu.possible@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
