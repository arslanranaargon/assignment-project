import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import VerticalFlexCard from "../components/VerticalFlexCardGeneric";
import moment from "moment";

const TaskItem = ({
  task,
  setCurrentTask,
  openCreateTaskModal,
  handleDelete,
}: any) => {
  const fontSizeResponsive = useBreakpointValue({ base: "md", md: "20px" });

  return (
    <VerticalFlexCard>
      <Stack spacing={2}>
        <Text fontSize={["md", "xl"]} fontWeight="bold">
          {task?.description}:
        </Text>
        <Text fontSize={fontSizeResponsive}>
          Start Time is{" "}
          {moment(task.startTime).format("MMMM Do YYYY, h:mm:ss a")} and the End
          Time: {moment(task.endTime).format("MMMM Do YYYY, h:mm:ss a")}
        </Text>
        {task.previewUrl && (
          <Box mt={4}>
            <Image
              src={task?.previewUrl}
              alt="Preview"
              maxW={["100%", "300px"]}
            />
          </Box>
        )}
        <Box fontSize={fontSizeResponsive}>
          <ul>
            {task?.colors?.length ? (
              task?.colors.map((color: any, index: number) => (
                <li
                  key={`${task.id}-${color.value}-${index}`}
                  style={{ display: "inline-block" }}
                >{`${color.value}, `}</li>
              ))
            ) : (
              <li key={1} style={{ display: "inline-block" }}>
                no color selected
              </li>
            )}
          </ul>
        </Box>
        <Text fontSize={fontSizeResponsive}>
          Time Estimate for the task is {`${task?.timeEstimation},`} and the
          working country is {task?.country || "Pakistan"}
        </Text>
        <Flex>
          <Button
            colorScheme="teal"
            onClick={() => {
              setCurrentTask(task);
              openCreateTaskModal();
            }}
            mr={2}
          >
            Edit
          </Button>
          <Button colorScheme="red" onClick={() => handleDelete(task.id)}>
            Delete
          </Button>
        </Flex>
      </Stack>
    </VerticalFlexCard>
  );
};

export default TaskItem;
