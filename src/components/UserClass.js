import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };
    console.log("constructor")
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;

   console.log("Render")

    return (
      <div className="user-cart">
        <h1 style={{ textAlign: "Center" }}>
          This is coming from Class based Component
        </h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: anshu.possible@gmail.com</h3>
        <h4>
          Count = {count}
          <button
            onClick={() => {
              this.setState({
                // NEVER UPDATE STATE DIRECTLY 
                count: this.state.count + 1,
                
              });
            }}
          >
            Click Me
          </button>
        </h4>
      </div>
    );
  }
}

export default UserClass;
