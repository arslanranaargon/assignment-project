import React, { useContext } from "react";
import { Box, Button, Heading, HStack, Image, Text } from "@chakra-ui/react";
import VerticalFlexCardGeneric from "../components/VerticalFlexCardGeneric";
import { TaskContext } from "../context/TaskContext";
import useModalState from "../hooks/useModalState";
import CurrentTaskContext from "../context/CurrentTaskContext";

interface TaskListNewProps {
  openCreateTaskModal: () => void;
}

const TaskListNew: React.FC<TaskListNewProps> = ({ openCreateTaskModal }) => {
  const { tasksArray, setTaskArray } = useContext(TaskContext);

  const taskContext = useContext(CurrentTaskContext);
  if (!taskContext) {
    throw new Error("Context must be used within a CurrentTaskProvider");
  }
  const { currentTask, setCurrentTask } = taskContext;
  const handleDelete = (taskId: number) => {
    setTaskArray(tasksArray.filter((task: any) => task.id !== taskId));
  };

  return (
    <>
      <Heading as="h1">List of Tasks</Heading>
      {tasksArray.map((task: any) => (
        <VerticalFlexCardGeneric key={task.id}>
          <Text fontSize="30px">
            <b>Description:</b>
          </Text>
          <Text fontSize="20px">{task.description}</Text>

          <Text fontSize="20px">Start Time:</Text>
          <Text>{task.startTime.toLocaleString()}</Text>

          <Text fontSize="20px">End Time:</Text>
          <Text fontSize="20px">{task.endTime}</Text>

          <Text fontSize="20px">Time Estimation:</Text>
          <Text fontSize="20px">{task.timeEstimation.toLocaleString()}</Text>
          {task.previewUrl && (
            <Box mt={4}>
              <Image src={task.previewUrl} alt="Preview" maxW="300px" />
            </Box>
          )}
          <HStack>
            <Button
              colorScheme="teal"
              onClick={() => {
                setCurrentTask(task);
                openCreateTaskModal();
              }}
            >
              Edit
            </Button>
            <Button colorScheme="red" onClick={() => handleDelete(task.id)}>
              Delete
            </Button>
          </HStack>
        </VerticalFlexCardGeneric>
      ))}
    </>
  );
};

export default TaskListNew;
