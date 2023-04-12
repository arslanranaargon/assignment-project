import React, { useContext } from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  list,
  Text,
} from "@chakra-ui/react";
import VerticalFlexCardGeneric from "../components/VerticalFlexCardGeneric";
import { TaskContext } from "../context/TaskContext";
import CurrentTaskContext from "../context/CurrentTaskContext";
import moment from "moment";
interface TaskListNewProps {
  openCreateTaskModal: () => void;
}

const TaskListNew: React.FC<TaskListNewProps> = ({ openCreateTaskModal }) => {
  const { tasksArray, setTaskArray } = useContext(TaskContext);

  const taskContext = useContext(CurrentTaskContext);
  if (!taskContext) {
    throw new Error("Context must be used within a CurrentTaskProvider");
  }
  const { setCurrentTask } = taskContext;
  const handleDelete = (taskId: number) => {
    setTaskArray(tasksArray.filter((task: any) => task.id !== taskId));
  };

  return (
    <>
      <Heading as="h1">List of Tasks</Heading>
      {tasksArray.map((task: any) => (
        <VerticalFlexCardGeneric key={task.id}>
          <HStack>
            <Text fontSize="30px">
              <b>{task?.description}:</b>
            </Text>
          </HStack>
          <HStack>
            <Text fontSize="20px">Start Time is</Text>
            <Text fontSize="20px">
              {moment(task.startTime).format("MMMM Do YYYY, h:mm:ss a")}
            </Text>

            <Text fontSize="20px">and the End Time:</Text>
            <Text fontSize="20px">
              {moment(task.endTime).format("MMMM Do YYYY, h:mm:ss a")}
            </Text>
          </HStack>
          {task.previewUrl && (
            <Box mt={4}>
              <Image src={task?.previewUrl} alt="Preview" maxW="300px" />
            </Box>
          )}
          <HStack>
            <Text fontSize="20px">Favourite Colors:</Text>
            <Text fontSize="20px">
              {
                <ul>
                  {task?.colors?.length ? (
                    task?.colors.map((color: any) => (
                      <li
                        style={{
                          display: "inline-block",
                        }}
                      >
                        {`${color.value} , `}
                      </li>
                    ))
                  ) : (
                    <p>no color selected</p>
                  )}
                </ul>
              }
            </Text>
          </HStack>
          <HStack>
            <Text fontSize="20px">Time Estimate for the task is</Text>
            <Text fontSize="20px">{`${task?.timeEstimation},`}</Text>
            <Text fontSize="20px"> and the working country is</Text>
            <Text fontSize="20px">{task?.country || "Pakistan"}</Text>
          </HStack>
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
