import React, { Component } from 'react'

export class Unmounting extends Component {
    
    constructor(props) {
      super(props);
      this.state = {display: true};
    }

    delete = () => {
      this.setState({display: false});
    }
    
    render() {
      let myheader;
      if (this.state.display) {
        myheader = <Child />;
      };
      return (
        <div>
        {myheader}
        <button type="button" onClick={this.delete} disabled={this.state.display===false}>Delete Heading</button>
        </div>
      );
    }
  }
  
  class Child extends React.Component {
    
    componentWillUnmount() {
        // used to execute tasks before any component is about to be unmounted
      alert("The component Header is about to be unmounted.");
    }
    
    render() {
      return (
        <h1>React Internship Task!</h1>
      );
    }
  }
export default Unmounting