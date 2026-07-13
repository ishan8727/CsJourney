import { useEffect, useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  useEffect(()=>{
    
    const interval = setInterval(()=>{
      setCount(c=>c+10)
    },1000);
    
    setTimeout(()=>{
      clearInterval(interval)
    },5000);
  
  },[])

  function increaseCount() {
    setCount(c => c+1);
  }

  function decreaseCount() {
    setCount(c => c-1);
  }

  function resetCount(){
    setCount(0);
  }

  function implementClock(){
    const clock = setInterval(()=>{
      setCount(c=>c+1);
    } ,1000);
    setTimeout(()=>{
      clearInterval(clock);
    },5000);
  }

  return (
    <div>
      <h1 style={{
        'marginTop': 30
      }}>
        Count: {count}
      </h1>
      <button onClick={increaseCount}>+</button>
      {" "}
      <button onClick={decreaseCount}>-</button>
      {" "}
      <button onClick={resetCount}>Reset</button>
      {" "}
      <button onClick={implementClock}>Clock mode</button>
    </div>
  )
}

export default App
