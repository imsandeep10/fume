   import * as Yup from "yup";
   export const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    event: Yup.string().required("Please select an event"),
    participants: Yup.number()
      .typeError("Participants must be a number")
      .required("Number of participants is required")
      .min(1, "At least one participant is required"),
  });