import * as Yup from "yup";

export const TaskFormSchema = Yup.object().shape({
  description: Yup.string()
    .min(10, "Description must be at least 10 characters")
    .max(50, "Description can be at most 50 characters")
    .notOneOf(["foo", "bar"], "Description should not contain 'foo' or 'bar'")
    .test(
      "is-capitalized",
      "Description should start with a capital letter",
      (value) => {
        if (typeof value !== "string") {
          return false;
        }
        return /^[A-Z]/.test(value);
      }
    )
    .required("Description is required"),

  startTime: Yup.date().required("Start Time is required"),
  endTime: Yup.date()
    .required("End Time is required")
    .min(new Date(), "End Time should not be in the past"),
  timeEstimation: Yup.string().required("Time Estimation is required"),
  country: Yup.string().required("Please select a country."),
  gender: Yup.string().required("Gender is required"),
});

export const UserFormSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email().required("Email is required"),
  phone: Yup.string().required("Phone is required"),
});
