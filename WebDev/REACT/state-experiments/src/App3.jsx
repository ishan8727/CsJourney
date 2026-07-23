// import { useState } from "react";
// import "./App.css";

// function App3() {
//     const [bulb, setBulb] = useState(false);

//     return (
//         <Room bulb={bulb} setBulb={setBulb} />
//     );
// }

// function Room({ bulb, setBulb }) {
//     return (
//         <div style={{ border: "1px solid white" }}>
//             <h2>This is room</h2>

//             <Wall bulb={bulb} setBulb={setBulb} />
//         </div>
//     );
// }

// function Wall({ bulb, setBulb }) {
//     return (
//         <div>
//             <h3>This is wall</h3>

//             <SwitchArea bulb={bulb} setBulb={setBulb} />
//         </div>
//     );
// }

// function SwitchArea({ bulb, setBulb }) {
//     return (
//         <div>
//             <h3>This is switch area</h3>

//             <Bulb bulb={bulb} />
//             <BulbSwitch setBulb={setBulb} />
//         </div>
//     );
// }

// function Bulb({ bulb }) {
//     return (
//         <h2>
//             Bulb is: {bulb ? "On" : "Off"}
//         </h2>
//     );
// }

// function BulbSwitch({ setBulb }) {
//     return (
//         <button onClick={() => setBulb(prev => !prev)}>
//             Switch
//         </button>
//     );
// }

// export default App3;

// -------------------------------------------------------------------------------

// now using context API ~ API is an interface provided by React same as useState API, useEffect API etc.


import { createContext, useContext, useState } from "react";
import "./App.css";

const BulbContext = createContext();

function BulbProvider({ children }) {

    const [bulb, setBulb] = useState(false);

    return (
        <BulbContext.Provider value={{ bulb, setBulb}}>
            {children}
        </BulbContext.Provider>
    )
}


function App3() {

    return (
        <BulbProvider>
            <Room />
        </BulbProvider>
    );
}

function Room() {
    return (
        <div style={{ border: "1px solid white" }}>
            <h2>This is room</h2>

            <Wall />
        </div>
    );
}

function Wall() {
    return (
        <div>
            <h3>This is wall</h3>

            <SwitchArea />
        </div>
    );
}

function SwitchArea() {
    return (
        <div>
            <h3>This is switch area</h3>

            <Bulb />
            <BulbSwitch />
        </div>
    );
}

function Bulb() {

    const {bulb} = useContext(BulbContext);

    return (
        <h2>
            Bulb is: {bulb ? "On" : "Off"}
        </h2>
    );
}

function BulbSwitch() {

    const {setBulb} = useContext(BulbContext);

    return (
        <button onClick={() => setBulb(prev => !prev)}>
            Switch
        </button>
    );
}

export default App3;






// now in App3.jsx we'll see what is 'Prop Drilling'
// => muktiple level props passing.

// Why is it bad?
// => mutiplr re-rendering in the compponents where state is not even used. 

// what is the soltion to it?
// State management => Context API and libs like Redux, Recoil, zustand etc.
