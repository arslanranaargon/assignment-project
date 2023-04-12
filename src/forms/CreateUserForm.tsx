import {
  FormControl,
  FormLabel,
  Input,
  Text,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ModaleProps, UserProps } from "../utils/types";
import { UserContext } from "../context/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserFormSchema } from "../utils/schemas";
import { generateID } from "../utils/generateId";
const CreateUserForm = ({ onClose, title }: ModaleProps) => {
  const { usersArray, setUsersArray } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProps>({ resolver: yupResolver(UserFormSchema) });

  const onSubmit = (data: UserProps) => {
    data.id = generateID();
    setUsersArray([...usersArray, data]);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalHeader>Create a new user !</ModalHeader>
      <ModalBody>
        <FormControl id="firstName" isRequired>
          <FormLabel>firstName</FormLabel>
          <Input
            {...register("firstName", { required: "First Name is required" })}
          />
          {errors.firstName && (
            <Text color="red.500">{errors.firstName.message}</Text>
          )}
        </FormControl>
        <FormControl id="lastName" isRequired>
          <FormLabel>lastName</FormLabel>
          <Input
            {...register("lastName", { required: "First Name is required" })}
          />
          {errors.lastName && (
            <Text color="red.500">{errors.lastName.message}</Text>
          )}
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>email</FormLabel>
          <Input
            {...register("email", { required: "First Name is required" })}
          />
          {errors.email && <Text color="red.500">{errors.email.message}</Text>}
        </FormControl>
        <FormControl id="phone" isRequired>
          <FormLabel>phone</FormLabel>
          <Input
            {...register("phone", { required: "First Name is required" })}
          />
          {errors.phone && <Text color="red.500">{errors.phone.message}</Text>}
        </FormControl>
        <ModalFooter>
          <Button colorScheme="teal" type="submit">
            Create
          </Button>
        </ModalFooter>
      </ModalBody>
    </form>
  );
};

export default CreateUserForm;
