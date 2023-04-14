import { TaskProps } from "../utils/types";

const tasks: TaskProps[] = [
  {
    id: 1,
    description: "Write a report on renewable energy sources",
    startTime: "2023-04-05T09:00:00",
    endTime: "2024-04-06T12:00:00",
    timeEstimation: "3 hours",
    createdAt: "2023-04-05T10:00:00",
    updatedAt: "2023-04-05T10:00:00",
    colors: [
      { value: "red", label: "Red" },
      { value: "green", label: "Green" },
      { value: "yellow", label: "Yellow" },
    ],
    gender: "male",
    previewUrl: "",
  },
  {
    id: 2,
    description: "Create a marketing plan for new product launch",
    startTime: "2023-04-07T13:00:00",
    endTime: "2024-04-07T16:00:00",
    timeEstimation: "3 hours",
    createdAt: "2023-04-05T10:00:00",
    updatedAt: "2023-04-05T10:00:00",
    colors: [
      { value: "blue", label: "Blue" },
      { value: "white", label: "White" },
    ],
    gender: "female",
    previewUrl: "",
  },
];

export default tasks;
