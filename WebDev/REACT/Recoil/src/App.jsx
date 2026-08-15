import { createContext, useContext, useState } from 'react'
import './App.css'

// function App() {

// const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>{count}</h1>
//       <Increase children = {{setCount, count}} />
//       <br
//       />
//       <Decrease abc={[setCount, count]} />
//       <br/>
//       <Reset props = {{setCount, count}} />
//     </>
//   )
// }

// export default App;

// function Increase({children}){

//   const {setCount, count} = children;
//   // if [setCount, count] = children; what's wrong here as well

//   return(<>
//   <button onClick={()=>setCount((c)=>c+1)}>Increase!!!</button>
//   </>)
// }

// function Decrease({abc}){

//   const [setCount, count] = abc;

//   return (
//     <>
//     <button onClick={()=>setCount((c)=>c-1)}>Decrease!!!</button>
//     </>)
  
// }

// function Reset({props}){

//   const {setCount, count} = props;

//   return(
//     <>
//     <button onClick={()=>setCount(0)}>Reset</button>
//     </>
//   )
// }

const CountContext = createContext();


function App() {

const [count, setCount] = useState(0);

  return (
    <>
    <CountContext.Provider value={{count, setCount}}>
        <h1>{count}</h1>
        <Increase/>
        <br/>
        <Decrease/>
        <br />
        <Reset/>
    </CountContext.Provider>
    </>
  )
}

export default App;

function Increase(){

  const {count, setCount} = useContext(CountContext);

  return(
  <>
  <button onClick={()=> setCount((c)=>c+1)}>Increase!!!</button>
  </>
  )
}

function Decrease(){

  const {count, setCount} = useContext(CountContext);

  return (
    <>
    <button onClick={()=>setCount((c)=>c-1)}>Decrease!!!</button>
    </>
    )
  
}

function Reset(){

  const { count, setCount } = useContext(CountContext);

  return(
    <>
    <button onClick={()=>setCount((0))}>Reset</button>
    </>
  )
}

