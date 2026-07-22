import { useRef, useState } from "react";

const Programs = () => {

  const [counter, setCounter] = useState(0);
  const interval = useRef(null); 

  function startCounter(){
    const clock = setInterval(()=>{
      setCounter((c)=>c+1)
    },100);

    interval.current = clock;
  }
  
  function stopCounter() {
    clearInterval(interval.current);
  }

  return (
    <div style={{ display: 'flex', flexDirection:"column" , alignItems: 'center', justifyContent:'center'}}>
      <h1>
        Counter:{' '+counter}
      </h1>
      <br></br>
      <div>
        <button onClick={startCounter}>Start Counter</button>{' '}
        <button onClick={stopCounter}>Stop Counter</button>
      </div>
    </div>
  )
}

export default Programs;