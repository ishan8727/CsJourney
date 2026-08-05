import {useState, useEffect, useRef} from 'react'

const App4 = () => {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log('useEffect called!')
        const interval = setInterval(()=>{
            setCount((c)=>c+1);
        },1000)

        return()=>{
            console.log('cleared interval on unmount!')
            clearInterval(interval);
        }
    },[])

  return (
    <h1>{count}</h1>
  )
}

export default App4
