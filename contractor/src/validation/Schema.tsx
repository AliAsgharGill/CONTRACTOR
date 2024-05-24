import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  companyname: Yup.string().required("Company name is required"),
  address: Yup.string().required("Address is required"),
  companypostalcode: Yup.string().required("Company postal code is required"),
  city: Yup.string().required("City is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  zippostalcode: Yup.string().required("ZIP/Postal code is required"),
  phone: Yup.string().required("Phone is required"),
  stateprovince: Yup.string().required("State/Province is required"),
  positioninthecompany: Yup.string().required("Position is required"),
  country: Yup.string().required("Country is required"),
  password: Yup.string().required("Password is required"),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  accountingemail: Yup.string()
    .email("Invalid email")
    .required("Accounting email is required"),
  terms: Yup.bool().oneOf([true], "You must accept the terms and conditions"),
});
