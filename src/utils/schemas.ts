import * as Yup from 'yup';


export const TaskFormSchema = Yup.object().shape({
    description: Yup.string().required('Description is required'),
    startTime: Yup.date().required('Start Time is required'),
    endTime: Yup.date()
        .required('End Time is required')
        .min(Yup.ref('startTime'), 'End Time should be after Start Time'),
    timeEstimation: Yup.string().required('Time Estimation is required'),
    country: Yup.string().required("Please select a language."),

});

export const UserFormSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email().required('Email is required'),
    phone: Yup.string().required('Phone is required'),
});
