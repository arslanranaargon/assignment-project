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
  RadioGroup,
  Radio,
  Flex,
  HStack,
} from "@chakra-ui/react";

import { Controller, useForm } from "react-hook-form";

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
import { optionList } from "../data/DropDownOptions";

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
    const { startTime, endTime } = data;

    data.id = map.has("id") ? map.get("id") : generateID();
    data.startTime = dateFormatter(startTime);
    data.endTime = dateFormatter(endTime);
    data.colors = selectedOptions || map.get("colors");
    data.previewUrl = previewUrl || map.get("previewUrl");

    if (map.has("id")) {
      tasksArray.forEach((task: any, index: number) => {
        if (task.id === map.get("id")) {
          tasksArray[index] = data;
        }
      });
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

        <FormControl mt={4} id="colors" isRequired>
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

        <Controller
          name="gender"
          control={control}
          defaultValue="male"
          rules={{ required: true }}
          render={({ field }) => (
            <RadioGroup
              onChange={(e) => field.onChange(e)}
              value={map.get("gender")}
              defaultValue={map.get("gender")}
            >
              <FormLabel marginTop="20px">Gender</FormLabel>
              <Stack direction="row" justifyContent="space-around">
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </Stack>
            </RadioGroup>
          )}
        />
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
