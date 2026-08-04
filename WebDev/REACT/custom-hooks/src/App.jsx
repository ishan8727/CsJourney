/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react"
import useFetch from "./hooks/useFetch";
import vamp from './assets/vampire.jpeg';

const App = () => {

  const [number, setNumber] = useState(1);
  const { data, loading } = useFetch(`https://dummyjson.com/todos/${number}`);
  console.log(data)

  useEffect(()=>{
    const id = setTimeout(()=>{
      setNumber((n)=>n+1)
    }, 5000)

    return()=>{
      clearTimeout(id);
    }
  },[number])

  console.log('');

  return (
    <div>
       <h1>Hello this is Data</h1>
      {
      loading ? 
          (<img src={vamp} />)
        :        
          (<h2>{data?.todo}</h2>)
      }
    </div>
  )
}

export default App