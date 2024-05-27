import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import axios from "axios";

type FieldType = {
  password?: string;
  confirmPassword?: string;
};

const ChangePassword = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const response = await axios.get("http://localhost:3000/users");
    response.data;
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className=" min-h-screen w-full flex justify-center items-center  bg-[#f2f1ec] ">
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
            <h1 className="text-4xl font-bold">Change Password</h1>
          </div>
          <label htmlFor="password" className="text-xl mt-10">
            Password
          </label>
          <Form.Item<FieldType>
            id="password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password className="w-96 h-12 text-xl" />
          </Form.Item>
          <label htmlFor="password" className="text-xl">
            Confirm Password
          </label>
          <Form.Item<FieldType>
            id="password"
            name="confirmPassword"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password className="w-96 h-12 text-xl" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="flex justify-center items-center  h-14 w-96 text-black bg-[#F6D218] font-bold text-lg px-20 py-5 "
            >
              Save
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default ChangePassword;
