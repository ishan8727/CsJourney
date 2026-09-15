// import React, { createContext, useContext, useState } from 'react';

// const CountContext = createContext();

// function CountContextProvider({ children }) {
//   const [count, setCount] = useState(0);

//   return <CountContext.Provider value={{ count, setCount }}>
//     {children}
//   </CountContext.Provider>
// }

// function Parent() {

//   console.log('Parent Rendered')
  
//   return (
//     <CountContextProvider>
//       <br/>
//       <Increase />
//       <Decrease />
//       <Value />
//     </CountContextProvider>
//   );
// }

// function Decrease() {


//   console.log('Decrease Rendered')

//   const { count, setCount } = useContext(CountContext);
//   return <button onClick={() => setCount(count - 1)}>Decrease</button>;
// }

// function Increase() {


//   console.log('Increase Rendered')

//   const { count, setCount } = useContext(CountContext);
//   return <button onClick={() => setCount(count + 1)}>Increase</button>;
// }

// function Value() {

//   console.log('Value Rendered')
//   console.log('-----------------------------')

//   const { count } = useContext(CountContext);
//   return <p>Count: {count}</p>;
// }

// // App Component
// const App = () => {


//   console.log('-----------------------------')
//   console.log('App Rendered')

//   return <div>
//     <Parent />
//   </div>
// };

// export default App;

import React, { createContext, useContext, useState } from 'react';
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { count } from './store/Atoms';

function Parent() {

  console.log('Parent Rendered')

  return (
    <RecoilRoot>
      <br />
      <Increase />
      <Decrease />
      <Value />
    </RecoilRoot>
  );
}

function Decrease() {

  console.log('Decrease Rendered')

  const setCount = useSetRecoilState(count);

  return <button onClick={() => setCount((c)=>c-1)}>Decrease</button>;
}

function Increase() {

  console.log('Increase Rendered')

  const setCount = useSetRecoilState(count);

  return <button onClick={() => setCount((c)=>c+1)}>Increase</button>;
}

function Value() {

  console.log('Value Rendered')
  console.log('-----------------------------')

  const countValue = useRecoilValue(count);

  return <p>Count: {countValue}</p>;
}


const App = () => {

  console.log('-----------------------------')
  console.log('App Rendered')

  return <div>
    <Parent />
  </div>
};

export default App;