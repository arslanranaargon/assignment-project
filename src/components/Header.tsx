import { Box, Flex, Text, Link, useBreakpointValue } from "@chakra-ui/react";

import { HeaderProps } from "../utils/types";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import CurrentTaskContext from "../context/CurrentTaskContext";
import { useContext } from "react";

export default function Header({
  openCreateTaskModal,
  openCreateUserModal,
}: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const taskContext = useContext(CurrentTaskContext);
  if (!taskContext) {
    throw new Error("Context must be used within a CurrentTaskProvider");
  }
  const { currentTask, setCurrentTask } = taskContext;
  function redirectToListOfTasks() {
    navigate("/");
  }

  function redirectToListOfUsers() {
    navigate("/users");
  }
  function handleClick(event: React.MouseEvent) {
    setCurrentTask("");
    openCreateTaskModal(event);
  }

  const linkMarginLeft = useBreakpointValue({
    base: "0",
    md: "auto",
    lg: "1100px",
  });
  const flexDirection = useBreakpointValue<any | undefined>({
    base: "column",
    md: "row",
  });

  return (
    <Box
      bg="blue.800"
      w="100%"
      p={4}
      color="white"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        height: "80px",
      }}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexDirection={flexDirection}
      >
        {location.pathname.includes("/users") && (
          <Link
            textDecor="none"
            onClick={openCreateUserModal}
            href="#create-new-user"
            justifySelf="center"
            p={2}
            color="white"
          >
            Create a new User
          </Link>
        )}

        {location.pathname === "/" && (
          <Link
            textDecor="none"
            onClick={(event) => handleClick(event)}
            href="#create-new-task"
            p={2}
            color="white"
            marginLeft={linkMarginLeft}
          >
            <Text fontSize="30px">Create a new Task</Text>
          </Link>
        )}
      </Flex>
    </Box>
  );
}
