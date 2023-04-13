import React, { useContext } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { TaskContext } from "../context/TaskContext";
import CurrentTaskContext from "../context/CurrentTaskContext";
import TaskItem from "./TaskItem";
import { TaskProps } from "../utils/types";

interface TaskListProps {
  openCreateTaskModal: () => void;
}

const TaskList: React.FC<TaskListProps> = ({ openCreateTaskModal }) => {
  const { tasksArray, setTaskArray } = useContext(TaskContext);

  const taskContext = useContext(CurrentTaskContext);
  if (!taskContext) {
    throw new Error("Context must be used within a CurrentTaskProvider");
  }
  const { setCurrentTask } = taskContext;
  const handleDelete = (taskId: string | number) => {
    setTaskArray(tasksArray.filter((task: TaskProps) => task.id !== taskId));
  };

  return (
    <>
      <Flex justifyContent="center" mb={4} marginTop="100px">
        <Heading as="h1">List of Tasks</Heading>
      </Flex>
      {tasksArray.map((task: TaskProps) => (
        <TaskItem
          key={task.id}
          task={task}
          setCurrentTask={setCurrentTask}
          openCreateTaskModal={openCreateTaskModal}
          handleDelete={handleDelete}
        />
      ))}
    </>
  );
};

export default TaskList;
