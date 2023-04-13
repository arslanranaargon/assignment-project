import React, { ReactNode, createContext, useState } from "react";
import tasks from "../data/Tasks";
import { TaskProps } from "../utils/types";

interface TaskContextValue {
  tasksArray: TaskProps[];
  setTaskArray: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskContext = createContext<TaskContextValue>({
  tasksArray: [],
  setTaskArray: () => {},
});

export function TaskProvider({ children }: TaskProviderProps) {
  const [tasksArray, setTaskArray] = useState<TaskProps[]>([...tasks]);

  return (
    <TaskContext.Provider value={{ tasksArray, setTaskArray }}>
      {children}
    </TaskContext.Provider>
  );
}
