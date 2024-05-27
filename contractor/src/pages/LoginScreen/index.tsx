import React, { useState } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, message, Modal } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

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
const LoginScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const response = await axios.get("http://localhost:3000/users");

    const userExist = response.data.find(
      (user: User) =>
        user.email === values.email && user.password === values.password
    );

    if (userExist) {
      navigate("/");
    } else {
      message.error("User does not exist");
    }
    // console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const navigate = useNavigate();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Form values:", values);
        setIsModalVisible(false);
        form.resetFields();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className=" bg-[#f2f1ec] flex">
        <div className="w-full flex justify-center items-center ">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{
              maxWidth: 470,
              backgroundColor: "#e7e4de ",
              borderRadius: "10px",
              width: "100%",
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "left",
              // alignItems: "center",
              gap: "10px",
            }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className="flex space-x-3 items-center">
              <img
                src="src/assets/images/miniLogo.png"
                alt="miniLogo"
                className="w-12"
              />
              <h1 className="text-2xl font-bold">Login</h1>
            </div>
            <label htmlFor="password" className="mt-10 text-xl">
              Username
            </label>
            <Form.Item<FieldType>
              // label="Username"
              name="email"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input className="w-96 h-12 text-xl" />
            </Form.Item>
            <label htmlFor="password" className="text-xl">
              Password
            </label>
            <Form.Item<FieldType>
              id="password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password className="w-96 h-12 text-xl" />
            </Form.Item>
            <label
              onClick={showModal}
              className="font-bold text-md my-5 mr-2 text-end -mt-6 cursor-pointer"
            >
              Forgot Password
            </label>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="flex justify-center items-center  h-14 w-96 text-black bg-[#F6D218] font-bold text-lg px-20 py-5 "
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="">
          <img
            src="src/assets/images/homeImage.png"
            alt="homeImage"
            className="h-screen w-full"
          />
        </div>
      </div>

      {isModalVisible && (
        <Modal
          title="Forgot Password"
          open={isModalVisible}
          onOk={handleOk}
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            justifyContent: "center",
            margin: "auto",
            marginTop: "10%",
          }}
          okText="Send me the Password Reset Link"
          okButtonProps={{
            style: {
              backgroundColor: "#F6D218",
              padding: "30px 80px",
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
              alignItems: "center",
              fontWeight: "bold",
              color: "black",
              margin: " 0px 50px",
            },
          }}
          cancelButtonProps={{ style: { display: "none" } }}
          onCancel={handleCancel}
          footer={null}
        >
          <Form
            form={form}
            layout="vertical"
            name="form_in_modal"
            className="flex flex-col"
          >
            <label
              htmlFor="password"
              className="mt-10 text-xl text-start ml-12 "
            >
              Email
            </label>
            <Form.Item<FieldType>
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input className="w-96 h-12 text-xl ml-12" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="flex justify-center items-center  m-auto h-14 w-96 text-black bg-[#F6D218] font-bold text-lg px-20 py-5 "
              >
                Send me the Password Reset Link
              </Button>
            </Form.Item>
            <label
              htmlFor=""
              className="flex justify-center items-center  font-bold"
            >
              Didn't get Link?{" "}
              <Link to="" className="text-teal-500">
                &nbsp; Resend
              </Link>{" "}
            </label>
          </Form>
        </Modal>
      )}
    </>
  );
};
export default LoginScreen;
