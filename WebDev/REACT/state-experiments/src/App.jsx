import { useState } from 'react'
import './App.css'

function App() {

  const [bulb, setBulbOn] = useState(false);

  return (
    <>
    <h1>
      Bulb is {bulb? 'On':'Off'}
      </h1>
      <button onClick={()=>setBulbOn(true)}>
        on
      </button>
      <br/>
      <button onClick={() => setBulbOn(false)}>
        off
      </button>
    </>
  )
}

export default App

// This is not how we write big applications,
// so in App2 we split our app into components and see 'rolling up the state' to the
// nearest common parent ~LCP so that state can be used and accessed by the components easily.

// Why we dont do this?
// huge apps have complexity so it'll be just unreadable code
// multiple un-necessary rerenders and unoptimized ~ not good for sustainability