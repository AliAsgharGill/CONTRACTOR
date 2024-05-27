import React from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input, message } from "antd";
import CustomLabel from "../../components/common/CustomLabel";
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
const ChangePassword = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const response = await axios.get("http://localhost:3000/users");

    const userExist = response.data.find(
      (user: User) =>
        user.email === values.email && user.password === values.password
    );
    // console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
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
            <h1 className="text-2xl font-bold">Change Password</h1>
          </div>
          <label htmlFor="password" className="mt-10 text-xl">
            Username
          </label>
          <Form.Item<FieldType>
            // label="Username"
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input className="w-96 h-12 text-xl" />
          </Form.Item>
          <label htmlFor="password" className="text-xl">
            Password
          </label>
          <Form.Item<FieldType>
            id="password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password className="w-96 h-12 text-xl" />
          </Form.Item>
          <Link
            to={"/forgot-password"}
            className="font-bold text-md my-5 mr-7 text-end -mt-8 cursor-pointer"
          >
            Forgot Password
          </Link>
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
    </>
  );
};

export default ChangePassword;
