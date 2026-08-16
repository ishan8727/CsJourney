import React, { memo, useContext, useState } from 'react'
import { MessagesProvider, myMessages, myNetworkContext, MyNetworkProvider } from './store/NavbarContext'

const App = () => {

  const [count, setCount] = useState(0)

  console.log('------------------------------------------')
  console.log('Parent Rendered')

  return (
    <>

      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
      <br/>
      <NavBar/>
      <Content/>
    </>
  )
}

export default App;

const NavBar = memo(function () {

  console.log('NAVBAR Rendered')

  return (
    <>
      <MyNetworkProvider>
        <MessagesProvider>
          <div className="nabar" style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
            <MyNetwork />
            <Messages />
          </div>
        </MessagesProvider>
      </MyNetworkProvider>
    </>
  )
})

const MyNetwork = memo (function(){

  console.log("MY NETWORK RENDERED");
  
  const { network, setNetwork } = useContext(myNetworkContext);

  return(
    <>
      <button onClick={() => setNetwork((c) => c + 1)}>My Network {network}</button>
    </>
  )
})

const Messages = memo (function() {

  console.log("MESSAGES RENDERED");

  const { messages, setMessages } = useContext(myMessages);

  return (
    <>
      <button onClick={() => setMessages((m)=>m+1)}>Messages {messages}</button>
    </>
  )
})


function Content() {
  console.log("CONTENT RENDERED");

  console.log('----------------------------------------')

  return <h1>Content Here!</h1>;
}