import { Box, Flex, Grid, GridItem, Link, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import TaskList from "./TaskList";
import CurrentTaskContext from "../context/CurrentTaskContext";

interface TaskListProps {
  openCreateTaskModal: () => void;
}

const Layout: React.FC<TaskListProps> = ({ openCreateTaskModal }) => {
  const taskContext = useContext(CurrentTaskContext);

  if (!taskContext) {
    throw new Error("Context must be used within a CurrentTaskProvider");
  }

  const { setCurrentTask } = taskContext;

  function handleClick(event: React.MouseEvent) {
    setCurrentTask("");
    openCreateTaskModal();
  }
  return (
    <Box>
      <Grid
        templateAreas={`"header header"
                      "nav main"
                      `}
        gridTemplateRows={"80px 1fr "}
        gridTemplateColumns={"0px 1fr"}
        gap="3"
        color="blackAlpha.700"
        fontWeight="bold"
        height={{
          base: "calc(var(--vh, 1vh) * 100)",
          sm: "calc(var(--vh, 1vh) * 100)",
          md: "calc(var(--vh, 1vh) * 100)",
          lg: "calc(var(--vh, 1vh) * 100)",
          xl: "calc(var(--vh, 1vh) * 100)",
          "2xl": "calc(var(--vh, 1vh) * 100)",
        }}
      >
        <GridItem pl="2" bg="black.300" area={"header"}>
          <Flex justifyContent="center" alignContent="center">
            <Link
              textDecor="none"
              onClick={(event) => handleClick(event)}
              href="#create-new-task"
              p={2}
              color="white"
            >
              <Text fontSize="22px">Create a new Task</Text>
            </Link>
          </Flex>
        </GridItem>
        {/* <GridItem pl="2" bg="pink.300" area={"nav"}>
          Nav
        </GridItem> */}
        <GridItem pl="2" bg="green.300" area={"main"}>
          <TaskList openCreateTaskModal={openCreateTaskModal} />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Layout;
