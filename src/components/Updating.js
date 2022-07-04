import React from "react";

class Updating extends React.Component {
  constructor(props) {
    // used to state initial values such as variables, state.
    super(props);
    this.state = { name: "Raees" };
  }

  // static getDerivedStateFromProps(props, state) { //used to get passed props and update the state value based on them
  //          return {name: props.name };
  //  }

  shouldComponentUpdate() {
    // return false; // specifies if component should update or not default is true; if it is set to false component is not updated
    return true;
  }

  changeName = () => {
    this.setState({ name: "meet" }); // changes value of state
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // this method preserves value of state after updation and can be used to display changes in state
    document.getElementById("div1").innerHTML =
      "Before update, the name was " + prevState.name;
  }

  componentDidUpdate() {
    // conditions in this function excutes once component is updated
    document.getElementById("div2").innerHTML =
      "The updated name is " + this.state.name;
  }

  render() {
    // used to render HTML to DOM
    return (
      <div>
        <h1>My name is {this.state.name}</h1>
        <button type="button" onClick={this.changeName}>
          Change name
        </button>
        <br />
        <br />
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

export default Updating;
