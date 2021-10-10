import { createContext, useState, useContext } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      title: "Task 1",
      description: "Task description",
    },
    {
      id: 1,
      title: "Task 2",
      description: "Task description",
    },
  ]);

  return (
    <TaskContext.Provider value={{ tasks, sayHello }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
