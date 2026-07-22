import { useState } from "react";

const Programs = () => {

  const [counter, setCounter] = useState(0);
  let [clock, setClock] = useState(0);

  function startCounter(){
    let interaval = setInterval(()=>{
      setCounter((c)=>c+1)
    },1000);

    setClock(interaval);
  }
  
  function stopCounter() {
    clearInterval(clock);
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