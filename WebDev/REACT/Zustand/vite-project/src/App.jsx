import React from 'react'
import Game from '../demo/todo'

const App = () => {
  return (
    <div>
            
    </div>
  )
}

export default App


// import './App.css'
// import { useCount, useName } from './Store/CountStore'

// function App(){
//   return(
//     <>
//       <Name/>
//     </>
//   )
// }

// export default App;

// function Name(){
  
//   const name = useName((state)=>state.user)

//   return(
//     <>
//     User is: {name}
//     </>
//   )
// }

// function App() {

//   return (
//     <>
//      <Counter/>
//       <Increase/>
//       <br/>
//       <Decrease/>
//     </>
//   )
// }

// export default App


// function Counter(){

//   const count = useCount((what)=>what.count);

//   return(
//     <>
//       Count is: {count}
//     </>
//   )
// }

// function Increase(){

//   const increase = useCount((state)=>state.increaseCount)

//   return(
//     <>
//     <button onClick={increase}>Increase</button>
//     </>
//   )
// }
// function Decrease() {

//   const decrease = useCount((state)=>state.decreaseCount)

//   return (
//     <>
//       <button onClick={decrease}>Decrease</button>
//     </>
//   )
// }