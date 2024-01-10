// To use states, we need hooks.
// hooks - a small bit of behavior that we can use or 
    // manage

// import the state
// react gives us access to built in hooks
import { useState } from 'react';

function Card() {
    //      prop1  ,  prop 2
    const [ myName, setMyName] = useState('Jessica');
    // useState Function gives us back an Array

    function clickChangeName() {
        // set name to new name
        // this is where setName comes into play
        console.log("Test");
        setMyName('JESSICA');
    }
    
    return (
    <div className="card">
        {/* Create state to increment the count*/}
        <button>count is 0</button>
            <p>{myName}</p>
            <button onClick={clickChangeName}>Change Name</button>
            <p>
                Edit <code>src/App.jsx</code> and save to test HMR
            </p>
    </div>
  );
}

export default Card;