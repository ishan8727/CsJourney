import { use, useEffect, useState } from "react"
import useDebounce from "../hooks/useDebounce";

const App6 = () => {
    const [input, setInput] = useState('');

    let debounced = useDebounce(input, 2000)

    useEffect(()=>{
      if(debounced){
        console.log('url called!')
      }
    },[debounced]);

    function handleInput(value){
      setInput(value);
    }

  return (
    <div>
        <input type="text" value={input} onChange={(e)=>handleInput(e.target.value)} />
        <h1>{input}</h1>
    </div>
  )
}

export default App6;
