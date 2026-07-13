import { useState } from "react";

function App() {

  const [todos, SetTodos] = useState([{
    task: 'Complete Homework',
    done: false,
    id: 1
  }])

  const [task, setTask] = useState("");

  function addTodo(task) {
    SetTodos((prevTodos)=>{
      return [
        ...prevTodos,{
          task: task,
          done: false,
          id: Math.random()
        }
      ]
    })

    setTask("");

  }

  function toggleDone(id){
    SetTodos((PrevTodo)=>
      PrevTodo.map((todo)=>
        todo.id === id ? {...todo, done : !todo.done} : todo
      )
    )
  }

  return (
    <div>
      <h1>Todo Basics</h1>
      <h2>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        {" "}
        <button onClick={()=>{addTodo(task)}}>Add</button>
      </h2>
      <h3>
        {
          todos.map((todo) => (
            <div key={todo.id}>
              <span> {todo.task} {todo.done ? "💙" : "😡"}</span>{" "}
              <button onClick={() => {
                toggleDone(todo.id);
              }}>Done</button>
            </div>
          ))
        }
      </h3>
    </div>
  )
}

export default App;