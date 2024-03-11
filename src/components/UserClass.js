import React from "react";

class UserClass extends React.Component {
  render() {
    return (
      <div className="user-cart">
      <h1 style={{textAlign: 'Center'}}>This is coming from Class based Component </h1>
        <h2>Name: Sittu</h2>
        <h3>Location: Pune</h3>
        <h3>Contact: anshu.possible@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
