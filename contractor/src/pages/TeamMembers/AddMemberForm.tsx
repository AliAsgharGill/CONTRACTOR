import React from "react";
import { Form, message } from "antd";
import axios from "axios";
import CustomInput from "../../components/StyledCommon/CustomInput";
import CustomButton from "../../components/StyledCommon/ButtonStyled/ButtonStyled";

const AddMemberForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      await axios.post("http://localhost:3000/team", values);
      message.success("Member added successfully!");
      form.resetFields();
    } catch (error) {
      message.error("Failed to add member. Please try again.");
    }
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        name="id"
        label="ID"
        rules={[{ required: true, message: "Please input the ID!" }]}
      >
        <CustomInput bgColor="#f0f0f0" borderColor="#d9d9d9" />
      </Form.Item>
      <Form.Item
        name="fullName"
        label="Full Name"
        rules={[{ required: true, message: "Please input the full name!" }]}
      >
        <CustomInput bgColor="#f0f0f0" borderColor="#d9d9d9" />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, message: "Please input the email!" }]}
      >
        <CustomInput type="email" bgColor="#f0f0f0" borderColor="#d9d9d9" />
      </Form.Item>
      <Form.Item
        name="contactPhone"
        label="Contact Phone"
        rules={[{ required: true, message: "Please input the contact phone!" }]}
      >
        <CustomInput bgColor="#f0f0f0" borderColor="#d9d9d9" />
      </Form.Item>
      <Form.Item
        name="location"
        label="Location"
        rules={[{ required: true, message: "Please input the location!" }]}
      >
        <CustomInput bgColor="#f0f0f0" borderColor="#d9d9d9" />
      </Form.Item>
      <Form.Item
        name="role"
        label="Role"
        rules={[{ required: true, message: "Please input the role!" }]}
      >
        <CustomInput bgColor="#f0f0f0" borderColor="#d9d9d9" />
      </Form.Item>
      <Form.Item>
        <CustomButton
          type="submit"
          variant="primary"
          bgColor="#1890ff"
          textColor="white"
          hoverBgColor="#40a9ff"
        >
          Add Member
        </CustomButton>
      </Form.Item>
    </Form>
  );
};

export default AddMemberForm;
