import * as Yup from "yup";
 export const ContactSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

