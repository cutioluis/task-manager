import { createContext, useState, useContext } from "react";

import { v4 as uuidv4 } from "uuid";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const createTask = (title, description) => {
    setTasks([...tasks, { title, description, id: uuidv4() }]);
  };

  const deleteTask = (id) => {
    setTasks([...tasks.filter((t) => t.id !== id)]);
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
