import React, { useState } from "react";
import { useTaskContext } from "../App";

const TaskForm = () => {
  const { state, dispatch } = useTaskContext();
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");

  const validateTask = () => {
    if (!title) return "Title is required";
    if (state.tasks.some(task => task.title === title)) return "Task title must be unique";
    if (new Date(dueDate) < new Date()) return "Due date must be today or in the future";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateTask();
    if (error) {
      setError(error);
      return;
    }
    dispatch({
      type: "ADD_TASK",
      payload: { id: Date.now(), title, priority, dueDate, completed: false },
    });
    setTitle("");
    setPriority("Low");
    setDueDate("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">Add Task</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default TaskForm;
