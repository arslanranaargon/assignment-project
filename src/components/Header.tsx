import { Box, Flex, Text, Link, Divider } from "@chakra-ui/react";

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
        height: "80px"
      }}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ xs: "column", sm: "column", md: "row" }}
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
            marginLeft="1100px"
          >
            <Text fontSize="30px">Create a new Task</Text>
          </Link>
        )}
        {/* <Link
          textDecor="none"
          onClick={redirectToListOfTasks}
          href="#list-of-tasks"
          p={2}
          color="white"
        >
          List of Tasks
        </Link> */}
        {/* <Link
          textDecor="none"
          onClick={redirectToListOfUsers}
          href="#list-of-tasks"
          p={2}
          color="white"
          justifyContent="left"
        >
          List of Users
        </Link> */}
      </Flex>
    </Box>
  );
}
