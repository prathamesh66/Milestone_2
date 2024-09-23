import React, { useState } from "react";
import { useTaskContext } from "../App";

const TaskList = ({ tasks }) => {
  const { dispatch } = useTaskContext();
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDueDate, setEditDueDate] = useState("");
  const [editPriority, setEditPriority] = useState("Low");

  const handleEdit = (task) => {
    setEditId(task.id);
    setEditTitle(task.title);
    setEditDueDate(task.dueDate);
    setEditPriority(task.priority);
  };

  const saveEdit = (task) => {
    dispatch({
      type: "EDIT_TASK",
      payload: {
        ...task,
        title: editTitle,
        dueDate: editDueDate,
        priority: editPriority,
      },
    });
    setEditId(null);
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? "completed" : ""}>
          {editId === task.id ? (
            <>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <select value={editPriority} onChange={(e) => setEditPriority(e.target.value)}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
              <input
                type="date"
                value={editDueDate}
                onChange={(e) => setEditDueDate(e.target.value)}
              />
              <button onClick={() => saveEdit(task)}>Save</button>
            </>
          ) : (
            <>
              <span>{task.title} - {task.priority} - {task.dueDate}</span>
              <button onClick={() => handleEdit(task)}>Edit</button>
              <button onClick={() => dispatch({ type: "TOGGLE_COMPLETE", payload: task.id })}>
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button onClick={() => dispatch({ type: "REMOVE_TASK", payload: task.id })}>
                Delete
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
