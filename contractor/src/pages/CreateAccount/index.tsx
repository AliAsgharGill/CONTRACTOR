// import { validationSchema } from "../../validation/Schema";
import { countries, formFields } from "./formFields";
import { Link } from "react-router-dom";
import CustomButton from "../../components/common/CustomButton";
import CustomCheckbox from "../../components/common/CustomCheckbox";
import CustomInput from "../../components/common/CustomInput";
import CustomLabel from "../../components/common/CustomLabel";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  companyName: Yup.string().required("Company name is required"),
  address: Yup.string().required("Address is required"),
  companyPostalCode: Yup.string().required("Company postal code is required"),
  city: Yup.string().required("City is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  zipPostalCode: Yup.string().required("Zip/Postal code is required"),
  phone: Yup.string().required("Phone number is required"),
  stateProvince: Yup.string().required("State/Province is required"),
  position: Yup.string().required("Position is required"),
  country: Yup.string().required("Country is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  accountingEmail: Yup.string()
    .email("Invalid email")
    .required("Accounting email is required"),
  term: Yup.boolean().oneOf(
    [true],
    "You must agree to the terms and conditions"
  ),
});

const CreateAccount = () => {
  return (
    <>
      <div className="min-h-screen bg-[#f2f1ec] w-full flex flex-col lg:flex-row justify-between">
        <div>
          <div className="space-x-2 flex justify-start items-center sm:mt-5 lg:items-center lg:mt-16 lg:ml-28">
            <img src="src/assets/images/miniLogo.png" alt="miniLogo" />
            <h1 className="text-lg lg:text-5xl font-semibold">
              Create Account
            </h1>
          </div>
          <div className="flex space-x-20 items-center justify-center p-4 sm:p-14 md:py-10 lg:p-0 lg:py-10">
            {/* Formik */}
            <Formik
              initialValues={{
                companyName: "",
                address: "",
                companyPostalCode: "",
                city: "",
                email: "",
                zipPostalCode: "",
                phone: "",
                stateProvince: "",
                position: "",
                country: "",
                password: "",
                confirmPassword: "",
                accountingEmail: "",
                term: false,
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, setErrors }) => {
                if (Object.keys(errors).length === 0) {
                  console.log("Form Values:", values);
                }
                setSubmitting(false);
              }}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form className="ml-28">
                  <div className="flex justify-start font-bold md:space-x-44">
                    <h1>Enter company information</h1>
                    <h1>Enter billing information</h1>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-x-16 gap-y-4">
                    {formFields.map((field, index) => (
                      <div key={index}>
                        <Field name={field.name}>
                          {({ field: formikField }) => (
                            <>
                              <CustomLabel text={field.label} />
                              {field.helpingText && (
                                <CustomLabel
                                  text={field.helpingText}
                                  className="ml-2 font-bold text-gray-500 text-[11px]"
                                />
                              )}
                              {field.type === "dropdown" ? (
                                <select
                                  {...formikField}
                                  name={field.name}
                                  className="mt-1 p-1 outline outline-gray-300 rounded outline-1  w-80 mb-4"
                                >
                                  {countries.map((option) => (
                                    <option key={option} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              ) : (
                                <CustomInput
                                  {...formikField}
                                  name={field.name}
                                  type={field.type}
                                  placeholder={field.placeholder}
                                  className="mt-1 h-12 w-80"
                                />
                              )}
                              {errors[field.name] && touched[field.name] ? (
                                <div className="text-red-500 text-sm -mt-4 ">
                                  {errors[field.name]}
                                </div>
                              ) : null}
                            </>
                          )}
                        </Field>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center mt-4">
                    <Field name="term">
                      {({ field: formikField }) => (
                        <>
                          <CustomCheckbox
                            {...formikField}
                            name="term"
                            id="term"
                            label={
                              <>
                                Agree to{" "}
                                <Link
                                  className="text-[#0A5F59]"
                                  to="/terms-and-conditions"
                                >
                                  Terms and Conditions
                                </Link>{" "}
                                and{" "}
                                <Link
                                  className="text-[#0A5F59]"
                                  to="/privacy-policy"
                                >
                                  Privacy Policy
                                </Link>
                              </>
                            }
                            className="text-4lg"
                          />
                          {errors.term && touched.term ? (
                            <div>
                              <br />
                              <div className="text-red-500 text-sm">
                                {errors.term}
                              </div>
                            </div>
                          ) : null}
                        </>
                      )}
                    </Field>
                    <CustomButton
                      htmlType="submit"
                      className="ml-4 text-black font-bold bg-yellow-400 w-full flex justify-center items-center hover:bg-yellow-500"
                      text="Create Account"
                      // disabled={isSubmitting}
                      onClick={() => console.log("clicked")}
                    />
                  </div>
                </Form>
              )}
            </Formik>

            {/* Formik implementation */}
            {/* <Formik
              initialValues={{
                companyName: "",
                address: "",
                companyPostalCode: "",
                city: "",
                email: "",
                zipPostalCode: "",
                phone: "",
                stateProvince: "",
                position: "",
                country: "",
                password: "",
                confirmPassword: "",
                accountingEmail: "",
                term: false,
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log("Form Values:", values);
                setSubmitting(false);
              }}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form className="ml-28">
                  <div className="flex justify-start font-bold md:space-x-44">
                    <h1>Enter company information</h1>
                    <h1>Enter billing information</h1>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-x-16 gap-y-4">
                    {formFields.map((field, index) => (
                      <div key={index}>
                        <Field name={field.name}>
                          {({ field: formikField }) => (
                            <>
                              <CustomLabel text={field.label} />
                              {field.helpingText && (
                                <CustomLabel
                                  text={field.helpingText}
                                  className="ml-2 font-bold text-gray-500 text-[11px]"
                                />
                              )}
                              {field.type === "dropdown" ? (
                                <select
                                  {...formikField}
                                  name={field.name}
                                  defaultValue="Pakistan"
                                  className="mt-1 h-8 w-80"
                                >
                                  {countries.map((option) => (
                                    <option key={option} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              ) : (
                                <CustomInput
                                  {...formikField}
                                  name={field.name}
                                  type={field.type}
                                  placeholder={field.placeholder}
                                  className="mt-1 h-12 w-80"
                                />
                              )}
                              {errors[field.name as keyof typeof formFields] &&
                              touched[field.name as keyof typeof formFields] ? (
                                <div className="text-red-500 text-sm">
                                  {errors[field.name]}
                                </div>
                              ) : null}
                            </>
                          )}
                        </Field>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center mt-4">
                    <Field name="term">
                      {({ field: formikField }) => (
                        <>
                          <CustomCheckbox
                            {...formikField}
                            name="term"
                            id="term"
                            label={
                              <>
                                Agree to{" "}
                                <Link
                                  className="text-[#0A5F59]"
                                  to="/terms-and-conditions"
                                >
                                  Terms and Conditions
                                </Link>{" "}
                                and{" "}
                                <Link
                                  className="text-[#0A5F59]"
                                  to="/privacy-policy"
                                >
                                  Privacy Policy
                                </Link>
                              </>
                            }
                            className="text-4lg"
                          />
                          {errors.term && touched.term ? (
                            <div className="text-red-500 text-sm">
                              {errors.term}
                            </div>
                          ) : null}
                        </>
                      )}
                    </Field>
                    <CustomButton
                      onClick={() => console.log("clicked")}
                      type="primary"
                      className="ml-4 text-black font-bold bg-yellow-400 w-full flex justify-center items-center hover:bg-yellow-500   "
                      text="Create Account"
                    />
                  </div>
                </Form>
              )}
            </Formik> */}
          </div>
        </div>
        <div className="h-4 sm:h-full sm:w-full lg:w-auto flex flex-col items-center lg:items-end mt-8 lg:mt-0">
          <img
            src="src/assets/images/homeImage.png"
            alt="homeImage"
            className="w-full lg:h-screen mt-8 lg:mt-0 object-cover lg:object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
