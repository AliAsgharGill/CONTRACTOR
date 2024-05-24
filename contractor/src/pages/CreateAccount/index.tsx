import { Formik, Form, Field } from "formik";
import { Row, Col, Divider, Typography } from "antd";
import { validationSchema } from "../../validation/Schema";
import { countries, formFields } from "./formFields";
import { Link } from "react-router-dom";
import {
  CustomButton,
  CustomCheckbox,
  CustomInput,
  CustomLabel,
} from "../../components/common/AntdCustoms";
const { Title } = Typography;

const initialValues = formFields.reduce((acc, field) => {
  acc[field.name] = "";
  return acc;
}, {});

const CreateAccount = () => {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <div className="min-h-screen bg-[#f2f1ec] w-full flex flex-col lg:flex-row justify-between">
        <div>
          <div className="space-x-2 flex justify-start items-center sm:mt-5 lg:items-center lg:mt-16 lg:ml-28 ">
            <img src="src/assets/images/miniLogo.png" alt="miniLogo" />
            <h1 className=" text-lg lg:text-5xl font-semibold">
              Create Account
            </h1>
          </div>
          <div className="flex space-x-20 items-center justify-center p-4 sm:p-14 md:py-10 lg:p-0 lg:py-10">
            {/* old code */}
            {/* <div className="ml-28">
              <div className="flex justify-start font-bold md:space-x-44">
                <h1>Enter company information</h1>
                <h1>Enter billing information</h1>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-x-16 gap-y-4  ">
                {formFields.map((field, index) => (
                  <div key={index}>
                    <CustomLabel text={field.label} key={field.label} />
                    {field.helpingText && (
                      <CustomLabel
                        text={field.helpingText}
                        className="ml-2 font-bold text-gray-500 text-[11px]"
                      />
                    )}
                    <CustomInput
                      placeholder={field.placeholder}
                      options={countries}
                      type={field.type}
                      className="mt-1 h-12 w-80"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center  ">
                <div>
                  <CustomInput type="checkbox" id="term" className="text-4lg" />
                  <label htmlFor="term" className=" ml-2 text-[13px]">
                    Agree to
                    {
                      <Link
                        className="text-[#0A5F59] "
                        to={"/terms-and-conditions"}
                      >
                        Terms and Conditions
                      </Link>
                    }{" "}
                    and{" "}
                    <Link className="text-[#0A5F59] " to={"/privacy-policy"}>
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                <CustomButton
                  variant="secondary"
                  size="large"
                  className="w-1/2 lg:w-60 mt-8 md:w-1/3  lg:mt-10 bg-[#F6D218] font-bold text-black hover:bg-[#d8c045]"
                  onClick={() => alert("Sign Up")}
                >
                  Sign Up
                </CustomButton>
              </div>
            </div> */}
            {/* new */}

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
                              <CustomLabel
                                text={field.label}
                                htmlFor={field.name}
                              />
                              {field.helpingText && (
                                <CustomLabel
                                  text={field.helpingText}
                                  className="ml-2 font-bold text-gray-500 text-[11px]"
                                />
                              )}
                              <CustomInput
                                {...formikField}
                                type={field.type}
                                placeholder={field.placeholder}
                                options={field.options}
                                className="mt-1 h-12 w-80"
                              />
                              {errors[field.name] && touched[field.name] ? (
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
                      type="submit"
                      className="ml-4"
                      onClick={() => !isSubmitting}
                    >
                      Sign Up
                    </CustomButton>
                  </div>
                </Form>
              )}
            </Formik>
            {/* old */}
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
