import React, { useReducer, createContext, useContext, useState } from "react";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import './App.css';


// Task Context for state management
const TaskContext = createContext();

const initialState = {
  tasks: [],
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { tasks: [...state.tasks, action.payload] };
    case "EDIT_TASK":
      return {
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...action.payload } : task
        ),
      };
    case "TOGGLE_COMPLETE":
      return {
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    case "REMOVE_TASK":
      return { tasks: state.tasks.filter(task => task.id !== action.payload) };
    default:
      return state;
  }
};

export const useTaskContext = () => useContext(TaskContext);

const App = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [search, setSearch] = useState("");

  const filteredTasks = state.tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      <div className="app-container">
        <h1>Task Management App</h1>
        <TaskForm />
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TaskList tasks={filteredTasks} />
      </div>
    </TaskContext.Provider>
  );
};

export default App;
