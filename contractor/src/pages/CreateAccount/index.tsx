import React, { useState } from "react";
import { Form, Input, Select, Checkbox, message, Modal } from "antd";
import { formFields } from "./formFields";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../../components/common/CustomInput";
import CustomButton from "../../components/common/CustomButton";

const { Option } = Select;
interface User {
  companyName: string;
  address: string;
  companyPostalCode: string;
  city: string;
  email: string;
  zipPostalCode: string;
  phone: string;
  stateProvince: string;
  position: string;
  country: string;
  password: string;
  companyPhone: string;
  confirmPassword: string;
  accountingEmail: string;
  termAndConditions: string;
}

const CreateAccount: React.FC = () => {
  const [form] = Form.useForm();
  const [modalVisible, setModalVisible] = useState(false);
  const [formValues, setFormValues] = useState<User>(null);

  const navigate = useNavigate();

  const onFinishFailed = (errorInfo: User) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = async (values: User) => {
    setFormValues(values);

    try {
      // console.log("Form Values:", formValues);
      setModalVisible(false);

      const response = await axios.get("http://localhost:3000/users");
      const userExist = response.data.some(
        (user: User) => user.email === formValues.email
      );
      // console.log("User Exist:", userExist);

      if (!userExist) {
        await axios.post("http://localhost:3000/users", formValues);
        Modal.success({
          title: "Thank you for signing up",
          content:
            "Nulla facilisi. Donec molestie vitae est non ullamcorper. Mauris ut efficitur diam. Nullam hendrerit.",
          okButtonProps: {
            style: {
              backgroundColor: "#F6D218",
              padding: "30px 70px",
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
              alignItems: "center",
              fontWeight: "bold",
              color: "black",
            },
          },
          className: "center-modal-button w-full mt-62",
          onOk() {
            message.success(`User created successfully`);
            setModalVisible(false);
            form.resetFields();
            setFormValues(null);
            navigate("/login");
          },
          onCancel() {},
        });
      } else {
        message.warning("User already exists with email: " + formValues.email);
      }
    } catch (error) {
      console.error("Error during user creation:", error);
      message.error(
        "An error occurred while creating the user. Please try again."
      );
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[#f2f1ec] w-full flex flex-col lg:flex-row justify-between">
        <div>
          <div className="space-x-2 flex justify-start items-center sm:mt-5 lg:items-center md:mt-10 md:ml-44 lg:mt-16 lg:ml-28 w-full">
            <img src="src/assets/images/miniLogo.png" alt="miniLogo" />
            <h1 className="text-lg lg:text-5xl font-semibold">
              Create Account
            </h1>
          </div>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-x-12 mt-10 md:ml-44 lg:ml-60 ">
            <h1 className="font-bold">Enter company information</h1>
            <h1 className="font-bold">Enter billing information</h1>
          </div>
          <div className="space-x-20 items-center justify-center ml-36 p-4 sm:p-14 md:pb-10 lg:p-0 lg:pb-10 lg:ml-60">
            <Form
              form={form}
              name="register"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              scrollToFirstError
              layout="vertical"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
                {formFields.map((field) => (
                  <Form.Item
                    key={field.name}
                    name={field.name}
                    valuePropName={
                      field.type === "checkbox" ? "checked" : "value"
                    }
                    rules={[
                      {
                        required: true,
                        message: `Please ${
                          field.type === "checkbox" ? "accept" : "enter"
                        } ${field.label.toLowerCase()}!`,
                      },
                    ]}
                    label={field.label === "checkbox" ? "" : field.label}
                    label={field.label === "password" ? "" : field.label}
                    label={field.label === "confirmPassword" ? "" : field.label}
                    label={field.label === "Terms and Conditions & Privacy Policy" ? "" : field.label}
                  >
                    {field.type === "checkbox" ? (
                      <Checkbox>
                        <div>
                          {" "}
                          Agree to
                          <Link
                            to="/terms-and-conditions"
                            className="text-[#0A5F59]"
                          >
                            &nbsp;Terms and Conditions
                          </Link>
                          &nbsp; and{" "}
                          <Link to="/privacy-policy" className="text-[#0A5F59]">
                            Privacy Policy
                          </Link>{" "}
                        </div>
                      </Checkbox>
                    ) : field.type === "select" ? (
                      <Select
                        className="w-96 h-12"
                        placeholder={field.placeholder}
                      >
                        {field.options?.map((option) => (
                          <Option key={option} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                    ) : field.type === "password" ? (
                      <Input.Password
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-96 h-12"
                      />
                    ) : (
                      <CustomInput
                        type={field.type}
                        // label={field.label  }
                        className="w-96 h-12"
                        placeholder={field.placeholder}
                      />
                    )}
                  </Form.Item>
                ))}
                <Form.Item>
                  <CustomButton
                    type="dashed"
                    htmlType="submit"
                    size="large"
                    className="bg-[#F6D218] text-[#000]   w-full py-12 flex justify-center items-center font-bold text-xl"
                  >
                    Create Account
                  </CustomButton>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
        <div className="h-4 sm:h-full sm:w-full lg:w-auto flex flex-col items-center lg:items-end mt-8 lg:mt-0">
          <img
            src="src/assets/images/homeImage.png"
            alt="homeImage"
            className="w-full h-screen   mt-8 lg:mt-0 object-cover lg:object-contain"
          />
        </div>
      </div>

      {modalVisible && (
        <div className="min-h-screen bg-[#f2f1ec] w-full flex  justify-center items-center">
          <Modal
            style={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
              justifyContent: "center",
              margin: "auto",
              marginTop: "50%",
            }}
            open={modalVisible}
            title="Thank you for signing up"
            onOk={handleOk}
          >
            <div>
              Nulla facilisi. Donec molestie vitae est non ullamcorper. Mauris
              ut efficitur diam. Nullam hendrerit.s
              <p></p>
            </div>
          </Modal>
        </div>
      )}
    </>
  );
};

export default CreateAccount;
