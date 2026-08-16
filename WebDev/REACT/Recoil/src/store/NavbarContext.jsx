import { createContext, useState } from "react";

export const myNetworkContext = createContext();
export const myMessages = createContext();

export function MyNetworkProvider({children}){

  const [network, setNetwork] = useState(0);

    return (
      <>
        <myNetworkContext.Provider value={{network, setNetwork}}>
            {children}
        </myNetworkContext.Provider>
        </>
    );
} 


export function MessagesProvider({ children }) {

  const [messages, setMessages] = useState(0);

  return (
    <>
        <myMessages.Provider value={{ messages, setMessages }} >
          {children}
        </myMessages.Provider>
    </>
  );
}