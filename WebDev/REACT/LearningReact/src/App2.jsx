import { useEffect, useState } from "react";

function Counter() {

        const [count, setCount] = useState(0);

        function increaseCount() {
            setCount(c => c + 1);
        }

        function decreaseCount() {
            setCount(c => c - 1);
        }

        function resetCount() {
            setCount(0);
        }

        function implementClock() {
            const clock = setInterval(() => {
                setCount(c => c + 1);
            }, 1000);
            setTimeout(() => {
                clearInterval(clock);
            }, 5000);
        }

    useEffect(() => {
        console.log('OnMount');
        const clock = setInterval(() => {
            console.log('From inside interval');
            setCount(c => c + 1);
        }, 1000)

        return function () {
            console.log('on unmount')
            clearInterval(clock);
        }
    }, [])

        return(
            <div>
                <h1 style={{
                    'marginTop': 30
                }}>
                    Counter: {count}
                </h1>
                <button onClick={increaseCount}>+</button>
                {" "}
                <button onClick={decreaseCount}>-</button>
                {" "}
                <button onClick={resetCount}>Reset</button>
                {" "}
                <button onClick={implementClock}>Clock mode</button>
                {" "}
            </div>
        )
    }


function App2() {
    const [hide, setHide] = useState(false);

    function toggleHide() {
        console.log('Counter is now ')
        setHide(h => !h);
        console.log(!hide);
    }

    return (
        <div>
            <div style={{
                'marginTop': 30
            }}>
               { hide && <Counter/> }
            </div   >
            <button onClick={toggleHide}>Toggle</button>
        </div>
    )
}


export default App2