// CurrentTaskContext.ts
import React, { useState } from "react";

type TaskContextType = {
  currentTask: Object;
  setCurrentTask: React.Dispatch<React.SetStateAction<string>>;
};

const CurrentTaskContext = React.createContext<TaskContextType | undefined>(
  undefined
);

type CurrentTaskProviderProps = React.PropsWithChildren<{}>;

export const CurrentTaskProvider = ({ children }: CurrentTaskProviderProps) => {
  const [currentTask, setCurrentTask] = useState({});

  return (
    <CurrentTaskContext.Provider value={{ currentTask, setCurrentTask }}>
      {children}
    </CurrentTaskContext.Provider>
  );
};

export default CurrentTaskContext;
