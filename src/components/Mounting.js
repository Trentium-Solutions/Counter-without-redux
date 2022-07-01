import React, { Component } from 'react'

export class Mounting extends Component {
    constructor(props) {
        super(props);
        this.state = {game: "COD"}; //constructor is used to set initial values in our program such as states
      }

    //  static getDerivedStateFromProps(props, state) {
    //     return {game: props.favgame };  // this method is used to change state values if props are passed 
    //   }
    
      componentDidMount() {
        setTimeout(() => {  
          // this method only executes if compnent is mounted succesfully, it is used to do changes only if compnent is mounted in DOM  
          this.setState({game: "Valorant"})
        }, 1000)
      }

    render() {
      // render method is used to render HTML to DOM
        return (
        <>
        My favorite game is {this.state.game}.
        </>
    )
  }
}

export default Mounting