import { useState } from 'react'
import './App.css'

function App2() {

    const [bulb, setBulb] = useState(false);

    return (
        <>
            <Bulb bulb={bulb} />
            <BulbSwitch setBulb={setBulb} />
        </>
    )
}

function Bulb({bulb}){
    return(
        <h2>
            Bulb is: {bulb? 'On' : 'Off'}
        </h2>
    )
}

function BulbSwitch({setBulb}){
    return(
        <>
        <button onClick={()=>setBulb((prevState)=> !prevState)} >Switch</button>
        </>
    )
}

export default App2

// This is a good example of 'rolling up the state' since Bulb and BulbSwitch Both use 
// the state Bulb so we need to pass these down via a common parent to be accessible.

// now in App3.jsx we'll see what is 'Prop Drilling', 'Why is it bad?', 'what is the soltion to it'.
