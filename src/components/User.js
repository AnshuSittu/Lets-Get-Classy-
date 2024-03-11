import React from "react";

const User = ({name}) => {
  return (
    <div className="user-cart">
     <h1 style={{textAlign: 'Center'}}>This is coming from Functional Component </h1>
      <h2>Name: {name}</h2>
      <h2>Location: Pune</h2>
      <h2>Contact: anshu.raj.singh@outlook.com</h2>
     
    </div>
  );
};

export default User;