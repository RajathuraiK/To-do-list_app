
import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  function addTask() {
    if (input.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInput("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  return (
    <div className="app">
      <h1>TaskFlow</h1>
      <p>Organize your day, one task at a time.</p>

      <div className="task-input">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTask();
          }}
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="task-list">
        {tasks.length === 0 ? (
          <p>No tasks yet. Add your first task!</p>
        ) : (
          tasks.map((task) => (
            <div className="task" key={task.id}>
              <span
                onClick={() => toggleTask(task.id)}
                className={task.completed ? "completed" : ""}
              >
                {task.text}
              </span>

              <button onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </div>
          ))
        )}
      </div>
      <footer color="blue" style={{marginTop:"20px", fontWeight:"bold"}}>
      Rajathurai K<br></br>
      212225100036
    </footer>
    </div>
    
  );
}

export default App;
