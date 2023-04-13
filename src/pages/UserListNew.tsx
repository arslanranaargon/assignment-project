import React, { useContext } from "react";
import { Button, Heading, HStack } from "@chakra-ui/react";
import VerticalFlexCardGeneric from "../components/VerticalFlexCardGeneric";
import { UserContext } from "../context/UserContext";
import { UserProps } from "../utils/types";

const UserListNew: React.FC = () => {
  const { usersArray, setUsersArray } = useContext(UserContext);

  const handleDelete = (userId: number) => {
    setUsersArray(usersArray.filter((user: UserProps) => user.id !== userId));
  };

  return (
    <>
      <Heading as="h1">List of Users</Heading>
      {usersArray.map((user: UserProps) => (
        <VerticalFlexCardGeneric key={user.email}>
          <HStack>
            <span>First Name:</span>
            <span>{user?.firstName}</span>
          </HStack>
          <HStack>
            <span>Last Name:</span>
            <span>{user?.lastName}</span>
          </HStack>
          <HStack>
            <span>Email:</span>
            <span>{user?.email}</span>
          </HStack>
          <HStack>
            <span>Address:</span>
            <span>{`${user?.address?.street} ${user?.address?.street} ${user?.address?.city} ${user?.address?.state} ${user?.address?.country}`}</span>
          </HStack>
          <HStack>
            <span>Phone:</span>
            <span>{user?.phone}</span>
          </HStack>

          <Button colorScheme="red" onClick={() => handleDelete(user.id)}>
            Delete
          </Button>
        </VerticalFlexCardGeneric>
      ))}
    </>
  );
};

export default UserListNew;
