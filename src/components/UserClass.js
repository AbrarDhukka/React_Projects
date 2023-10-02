import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    console.log(this.props.name + "Child Contructor");
  }

  componentDidMount() {
    console.log(this.props.name + "Child CompDidMount");
  }

  render() {
    console.log(this.props.name + "Child Render");
    return (
      <div id="user">
        <h2>{this.props.name}</h2>
        <h3>Count : {this.state.count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 2,
            });
          }}
        >
          Click me
        </button>
        <h3>{this.props.location}</h3>
        <h3>{this.props.email}</h3>
      </div>
    );
  }
}

export default UserClass;
