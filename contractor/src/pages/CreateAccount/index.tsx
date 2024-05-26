import { formFields } from "./formFields";
import * as Yup from "yup";
import { Form, Input, Button, Select, Checkbox } from "antd";
const { Option } = Select;

const CreateAccount = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Values:", values);
  };

  const validatePassword = (_, value) => {
    if (value && form.getFieldValue("password") !== value) {
      return Promise.reject(
        new Error("The two passwords that you entered do not match!")
      );
    }
    return Promise.resolve();
  };

  return (
    <>
      <div className="min-h-screen bg-[#f2f1ec] w-full flex flex-col lg:flex-row justify-between">
        <div>
          <div className="space-x-2 flex justify-start items-center sm:mt-5 lg:items-center md:mt-16 md:ml-44  lg:mt-16 lg:ml-28">
            <img src="src/assets/images/miniLogo.png" alt="miniLogo" />
            <h1 className="text-lg lg:text-5xl font-semibold">
              Create Account
            </h1>
          </div>
          <div className=" space-x-20 items-center justify-center ml-36 p-4 sm:p-14 md:py-10 lg:p-0 lg:py-10">
            <Form
              form={form}
              name="register"
              onFinish={onFinish}
              scrollToFirstError
              layout="vertical"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8  ">
                {formFields.map((field) => (
                  <Form.Item
                    key={field.name}
                    name={field.name}
                    valuePropName={
                      field.type === "checkbox" ? "checked" : "value"
                    }
                    className="w-72"
                    rules={[
                      {
                        required: true,
                        message: `Please ${
                          field.type === "checkbox" ? "accept" : "enter"
                        }  ${field.label.toLowerCase()}!`,
                      },
                    ]}
                    label={field.label}
                  >
                    {field.type === "checkbox" ? (
                      <Checkbox>{field.label}</Checkbox>
                    ) : field.type === "select" ? (
                      <Select placeholder={field.placeholder}>
                        {field.options.map((option) => (
                          <Option key={option} value={option}>
                            {option}
                          </Option>
                        ))}
                      </Select>
                    ) : (
                      <Input
                        type={field.type}
                        placeholder={field.placeholder}
                      />
                    )}
                  </Form.Item>
                ))}
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="bg-[#F6D218] text-black w-full py-8 flex justify-center items-center font-bold text-xl"
                  >
                    Create Account
                  </Button>
                </Form.Item>
              </div>
            </Form>
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
