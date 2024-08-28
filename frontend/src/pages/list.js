import React, { useState, useEffect } from "react";
import axios from "axios";

const List = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [alert, setAlert] = useState({ message: "", type: "" }); 

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:8080/");
        setTasks(response.data);
      } catch (err) {
        setAlert({ message: "Error fetching tasks.", type: "danger" });
        console.error("Error fetching tasks:", err);
      }
    };
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (inputValue.trim() !== "") {
      try {
        const response = await axios.post("http://localhost:8080/save", {
          text: inputValue.trim(),
        });
        setTasks([...tasks, response.data]);
        setInputValue("");
        setAlert({ message: "Task added successfully!", type: "success" });
      } catch (err) {
        setAlert({ message: "Error adding task.", type: "danger" });
        console.error("Error adding task:", err);
      }
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.post("http://localhost:8080/delete", { _id: id });
      setTasks(tasks.filter((task) => task._id !== id));
      setAlert({ message: "Task deleted successfully!", type: "success" });
    } catch (err) {
      setAlert({ message: "Error deleting task.", type: "danger" });
      console.error("Error deleting task:", err);
    }
  };

  const editTask = async (id, newText) => {
    try {
      await axios.post("http://localhost:8080/update", { _id: id, text: newText });
      setTasks(
        tasks.map((task) => task._id === id ? { ...task, text: newText } : task)
      );
      setEditingIndex(null);
      setInputValue("");
      setAlert({ message: "Task updated successfully!", type: "success" });
    } catch (err) {
      setAlert({ message: "Error updating task.", type: "danger" });
      console.error("Error updating task:", err);
    }
  };

  const handleEdit = (index) => {
    const taskToEdit = tasks[index];
    setEditingIndex(index);
    setInputValue(taskToEdit.text);
  };

  return (
    <div className="w-100 bg-white p-3 rounded">
      <h1 className="text-center mb-4">To-Do List</h1>
      
      {alert.message && (
        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
          {alert.message}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      )}
      
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Add Your..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} required/>
      </div>
      <button className="btn btn-primary mb-3" onClick={() => editingIndex !== null ? editTask(tasks[editingIndex]._id, inputValue) : addTask()}> {editingIndex !== null ? "Update" : "Add"}</button>
      <ol className="list-group">
        {tasks.map((task, index) => (
          <li
            key={task._id}
            className="list-group-item d-flex justify-content-between align-items-center">
            <span>{task.text}</span>
            <div>
              <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(index)}>Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => deleteTask(task._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default List;
