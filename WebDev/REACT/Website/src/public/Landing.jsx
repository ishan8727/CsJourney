// eslint-disable-next-line no-unused-vars
import { useRef } from "react"

const Landing = () => {

  const referece = useRef(null);

  function buttonHandler(){
    referece.current.focus();
  }

  return (
    <div>
      <h1>Landing Page</h1>
      <span>Ref: </span>
      <input ref={referece} type="text" /><br/><br/>
      <span>Without Ref: </span>
      <input type="text" />
      <button onClick={buttonHandler}>Submit</button>
    </div>
  )
}

export default Landing;
