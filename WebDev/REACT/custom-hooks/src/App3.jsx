import { useEffect, useRef, useState } from "react"
import usePrev from './hooks/usePrev.js'

const App3 = () => {

    const [count, setCount] = useState(4);
    const prev  = usePrev(count);
    
  return (
    <div>
        <h1> {count}</h1>
        <h3>previously: {prev}</h3>
        <button onClick={()=> setCount((c)=> c+1) }>Increase</button>    
    </div>
  )
}

export default App3