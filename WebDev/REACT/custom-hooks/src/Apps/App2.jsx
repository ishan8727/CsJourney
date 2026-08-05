import React, { useEffect, useState } from 'react'
import useSwr from '../hooks/Swr'
import vamp from './assets/vampire.jpeg';

const App2 = () => {

    const [todos, setTodo] = useState([]);
    let [number, setNumber] = useState(1);

    const { data, loading, err } = useSwr(`https://dummyjson.com/todos/${number}`);

    function addTodo(){
        
        setNumber((n) => n + 1);
    }

    useEffect(()=>{
        if(data){
        setTodo((todo) =>
            [...todo,
                {
                    id: data.id,
                    todo: data.todo,
                    completed: data.completed
                }
            ]
        )}
        else{
            console.log('No data yet!')
        }

    },[data])

  return (
    <div>
        <h1>Todo List </h1><button onClick={addTodo} disabled={loading} >Add a Todo</button>
        <h2>{err && <span>{err?.message}</span>}</h2>
          {loading ? <img src={vamp} /> : <div>{todos.map((todo) =>
          (<div key={todo.id} >
              <h3>{todo.id}. {todo.todo}</h3>
          </div>)
          )}</div>}
    </div>
  )
}

export default App2
