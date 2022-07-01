import React, { useState } from 'react'
import '../App.css'
function BasicCounter() {
const [counter, setCounter] = useState(Number(1))    
  return (
  <>
  <div className='main'>
    <h1>Welcome to Counter App</h1>
    <br/><br/>
    <div className='buttons'>
    <button className="btn" onClick = {() => { setCounter(counter + 1)}}>Increment</button>
    <h4 style={{padding: "25px"}}> Value of counter is: {counter}</h4>
    <button className="btn" onClick={() => {setCounter(counter - 1)}} disabled={counter<=0}>Decrement</button>
    </div>
    </div>
    </>
  )
}

export default BasicCounter