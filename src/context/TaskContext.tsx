import React, { createContext, useState } from "react";
export const TaskContext = createContext([] as any);
import Tasks from "../data/Tasks.json";

export function TaskProvider({ children }: any) {
  const [tasksArray, setTaskArray] = useState(Tasks);

  return (
    <TaskContext.Provider value={{ tasksArray, setTaskArray }}>
      {children}
    </TaskContext.Provider>
  );
}
