import {
  FormControl,
  FormLabel,
  Input,
  Text,
  ModalBody,
  ModalFooter,
  Button,
  ModalHeader,
  Stack,
  Select as SimpleSelect,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";

import { useContext, useState } from "react";

import { TaskContext } from "../context/TaskContext";

import { TaskProps, ModaleProps } from "../utils/types";

import { yupResolver } from "@hookform/resolvers/yup";

import { TaskFormSchema } from "../utils/schemas";

import ChakraFileUpload from "../components/ChakraFileUpload";
import { generateID } from "../utils/generateId";
import CurrentTaskContext from "../context/CurrentTaskContext";
import { dateFormatter } from "../utils/dateFormatter";
import Select from "react-select";

const optionList = [
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "yellow", label: "Yellow" },
  { value: "blue", label: "Blue" },
  { value: "white", label: "White" },
];

const CreateTodoForm = ({ onClose, title }: ModaleProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = useState();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TaskProps>({ resolver: yupResolver(TaskFormSchema) });

  const taskContext = useContext(CurrentTaskContext);

  if (!taskContext) {
    throw new Error("Context must be used within a CurrentTaskProvider");
  }

  const { currentTask } = taskContext;
  const { tasksArray, setTaskArray } = useContext(TaskContext);

  const map = new Map(Object.entries(currentTask));

  function handleSelect(data: any) {
    setSelectedOptions(data);
  }

  const onSubmit = (data: TaskProps) => {
    data.id = map.has("id") ? map.get("id") : generateID();
    data.startTime = dateFormatter(data.startTime);
    data.endTime = dateFormatter(data.endTime);
    data.colors = selectedOptions ? selectedOptions : map.get("colors");

    if (previewUrl) {
      data.previewUrl = previewUrl;
    } else if (map.has("previewUrl")) {
      data.previewUrl = map.get("previewUrl");
    }

    if (map.has("id")) {
      let taskIndex = tasksArray.findIndex(
        (task: any) => task.id === map.get("id")
      );
      tasksArray[taskIndex] = data;
    } else {
      tasksArray.push(data);
    }

    setTaskArray(tasksArray);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalHeader>Create a new task !</ModalHeader>

      <ModalBody>
        <FormControl id="description" isRequired>
          <FormLabel>Description</FormLabel>

          <Input
            {...register("description", {
              required: "Description is required",
            })}
            defaultValue={map.get("description")}
          />

          {errors.description && (
            <Text color="red.500">{errors.description.message}</Text>
          )}
        </FormControl>

        <FormControl mt={4} id="startTime" isRequired>
          <FormLabel>Start Time</FormLabel>

          <Input
            type="datetime-local"
            {...register("startTime", { required: "Start Time is required" })}
            defaultValue={map.get("startTime")}
          />

          {errors.startTime && (
            <Text color="red.500">{errors.startTime.message}</Text>
          )}
        </FormControl>

        <FormControl mt={4} id="endTime" isRequired>
          <FormLabel>End Time</FormLabel>

          <Input
            type="datetime-local"
            {...register("endTime", { required: "End Time is required" })}
            defaultValue={map.get("endTime")}
          />

          {errors.endTime && (
            <Text color="red.500">{errors.endTime.message}</Text>
          )}
        </FormControl>

        <FormControl mt={4} id="timeEstimation" isRequired>
          <FormLabel>Time Estimation</FormLabel>

          <Input
            {...register("timeEstimation", {
              required: "End Time is required",
            })}
            defaultValue={map.get("timeEstimation")}
          />

          {errors.timeEstimation && (
            <Text color="red.500">{errors.timeEstimation.message}</Text>
          )}
        </FormControl>

        <Stack spacing={3} paddingTop="8">
          <FormControl mt={4} id="timeEstimation" isRequired>
            <FormLabel>Country of origin</FormLabel>

            <SimpleSelect
              size="lg"
              {...register("country", { required: true })}
              defaultValue={map.get("country")}
            >
              <option value="pakistan">Pakistan</option>

              <option value="england">England</option>

              <option value="france">France</option>

              <option value="turkey">Turkey</option>
            </SimpleSelect>
          </FormControl>
        </Stack>

        <FormControl mt={4} id="timeEstimation" isRequired>
          <FormLabel>Favourite Color</FormLabel>
          <Select
            options={optionList}
            value={
              selectedOptions && selectedOptions.length
                ? selectedOptions
                : currentTask?.colors
            }
            onChange={handleSelect}
            isSearchable={true}
            isMulti={true}
          />
        </FormControl>

        <ChakraFileUpload
          control={control}
          name="file"
          setPreviewUrl={setPreviewUrl}
          previewUrl={previewUrl}
        />
        <ModalFooter>
          <Button colorScheme="teal" type="submit">
            {currentTask ? "Update" : "Create"}
          </Button>
        </ModalFooter>
      </ModalBody>
    </form>
  );
};

export default CreateTodoForm;
